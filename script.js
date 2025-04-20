require([
  'Canvas-Flowmap-Layer/CanvasFlowmapLayer',
  'esri/graphic',
  'esri/map',
  'dojo/on',
  'dojo/domReady!'
], function(
  CanvasFlowmapLayer,
  Graphic,
  Map,
  on
) {
  var map = new Map('map', {
    basemap: 'gray-vector',
    center: [66.9, 34.5],
    zoom: 5
  });

  map.on('load', function() {
    var oneToManyLayer = new CanvasFlowmapLayer({
      id: 'oneToManyLayer',
      visible: true,
      originAndDestinationFieldIds: {
        originUniqueIdField: 's_city_id',
        originGeometry: {
          x: 's_lon',
          y: 's_lat',
          spatialReference: { wkid: 4326 }
        },
        destinationUniqueIdField: 'e_city_id',
        destinationGeometry: {
          x: 'e_lon',
          y: 'e_lat',
          spatialReference: { wkid: 4326 }
        }
      },
      pathDisplayMode: 'all',
      wrapAroundCanvas: true,
      animationStarted: true,
      pathProperties: {
        type: 'classBreaks',
        field: 'e_vol',
        classBreakInfos: [
          {
            classMinValue: 1,
            classMaxValue: 5000,
            symbol: {
              strokeStyle: 'rgba(255, 202, 85, 0.8)',
              lineWidth: 1,
              lineCap: 'round'
            }
          },
          {
            classMinValue: 5001,
            classMaxValue: 25000,
            symbol: {
              strokeStyle: 'rgba(255, 141, 87, 0.8)',
              lineWidth: 3,
              lineCap: 'round'
            }
          },
          {
            classMinValue: 25001,
            classMaxValue: 592169,
            symbol: {
              strokeStyle: 'rgba(210, 38, 48, 0.8)',
              lineWidth: 5,
              lineCap: 'round'
            }
          }
        ]
      }
    });

    map.addLayer(oneToManyLayer);
    createGraphicsFromCsv('csv-data/inflow_v1.csv', oneToManyLayer);

    function createGraphicsFromCsv(csvFilePath, canvasLayer) {
      Papa.parse(csvFilePath, {
        download: true,
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: function(results) {
          var csvGraphics = results.data.map(function(datum) {
            return new Graphic({
              geometry: {
                x: datum.s_lon,
                y: datum.s_lat,
                spatialReference: { wkid: 4326 }
              },
              attributes: datum
            });
          });
          canvasLayer.addGraphics(csvGraphics);

          // Populate city selector
          let uniqueCities = [...new Set(results.data.map(d => d.s_city))].sort();
          let citySelector = document.getElementById('sCitySelect');

          uniqueCities.forEach(city => {
            let option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelector.appendChild(option);
          });

          citySelector.addEventListener('change', function(evt) {
            let selectedCity = evt.target.value;
            if (!selectedCity) {
              canvasLayer.setPathDisplayMode('all');
              return;
            }
            let matchingGraphics = canvasLayer.graphics.filter(
              g => g.attributes.s_city === selectedCity
            );
            canvasLayer.selectGraphicsForPathDisplay(matchingGraphics, 'SELECTION_NEW');
          });
        }
      });
    }
  });
});
