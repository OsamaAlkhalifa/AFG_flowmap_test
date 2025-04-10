require([
  "esri/Map",
  "esri/views/MapView"
], function(Map, MapView) {

  const map = new Map({
    basemap: "gray-vector"
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,
    center: [66, 33],
    zoom: 6
  });

  // 👇 Paste fullFlowData below this line
  const fullFlowData = [
    { borderPoint: "Abu Nasr Farahi", originLatitude: 32.165039, originLongitude: 60.873467, province: "Laghman", destinationLatitude: 34.640812, destinationLongitude: 70.190078, magnitude: 6 },
    { borderPoint: "Abu Nasr Farahi", originLatitude: 32.165039, originLongitude: 60.873467, province: "Baghlan", destinationLatitude: 35.493251, destinationLongitude: 68.532772, magnitude: 6 },
    { borderPoint: "Abu Nasr Farahi", originLatitude: 32.165039, originLongitude: 60.873467, province: "Ghazni", destinationLatitude: 33.086709, destinationLongitude: 67.767134, magnitude: 7 },
    { borderPoint: "Abu Nasr Farahi", originLatitude: 32.165039, originLongitude: 60.873467, province: "Helmand", destinationLatitude: 30.459468, destinationLongitude: 63.985773, magnitude: 6 },
    { borderPoint: "Abu Nasr Farahi", originLatitude: 32.165039, originLongitude: 60.873467, province: "Herat", destinationLatitude: 33.583128, destinationLongitude: 62.015471, magnitude: 26 },
    { borderPoint: "Abu Nasr Farahi", originLatitude: 32.165039, originLongitude: 60.873467, province: "Farah", destinationLatitude: 32.385918, destinationLongitude: 61.814847, magnitude: 4756 },
    { borderPoint: "Abu Nasr Farahi", originLatitude: 32.165039, originLongitude: 60.873467, province: "Nimroz", destinationLatitude: 30.175326, destinationLongitude: 62.059899, magnitude: 6 },
    { borderPoint: "Angor ada", originLatitude: 32.519404, originLongitude: 69.272673, province: "Kabul", destinationLatitude: 34.498247, destinationLongitude: 69.589362, magnitude: 2 },
    { borderPoint: "Angor ada", originLatitude: 32.519404, originLongitude: 69.272673, province: "Wardak", destinationLatitude: 33.990654, destinationLongitude: 68.504375, magnitude: 2 },
    { borderPoint: "Angor ada", originLatitude: 32.519404, originLongitude: 69.272673, province: "Logar", destinationLatitude: 33.812225, destinationLongitude: 68.970646, magnitude: 2 },
    { borderPoint: "Angor ada", originLatitude: 32.519404, originLongitude: 69.272673, province: "Ghazni", destinationLatitude: 33.086709, destinationLongitude: 67.767134, magnitude: 14 },
    { borderPoint: "Angor ada", originLatitude: 32.519404, originLongitude: 69.272673, province: "Paktika", destinationLatitude: 32.169088, destinationLongitude: 68.751118, magnitude: 557 },
    { borderPoint: "Angor ada", originLatitude: 32.519404, originLongitude: 69.272673, province: "Paktya", destinationLatitude: 33.785489, destinationLongitude: 69.480059, magnitude: 16 },
    { borderPoint: "Angor ada", originLatitude: 32.519404, originLongitude: 69.272673, province: "Khost", destinationLatitude: 33.366603, destinationLongitude: 70.120995, magnitude: 12 },
    { borderPoint: "Angor ada", originLatitude: 32.519404, originLongitude: 69.272673, province: "Badakhshan", destinationLatitude: 36.960125, destinationLongitude: 70.810303, magnitude: 2 },
    { borderPoint: "Angor ada", originLatitude: 32.519404, originLongitude: 69.272673, province: "Balkh", destinationLatitude: 36.266376, destinationLongitude: 66.864417, magnitude: 4 },
    { borderPoint: "Bahramcha", originLatitude: 29.42026, originLongitude: 64.015136, province: "Kabul", destinationLatitude: 34.498247, destinationLongitude: 69.589362, magnitude: 104 },
    { borderPoint: "Bahramcha", originLatitude: 29.42026, originLongitude: 64.015136, province: "Wardak", destinationLatitude: 33.990654, destinationLongitude: 68.504375, magnitude: 206 },
    { borderPoint: "Bahramcha", originLatitude: 29.42026, originLongitude: 64.015136, province: "Nangarhar", destinationLatitude: 34.261704, destinationLongitude: 70.840961, magnitude: 26 },
    { borderPoint: "Bahramcha", originLatitude: 29.42026, originLongitude: 64.015136, province: "Ghazni", destinationLatitude: 33.086709, destinationLongitude: 67.767134, magnitude: 180 },
    { borderPoint: "Bahramcha", originLatitude: 29.42026, originLongitude: 64.015136, province: "Khost", destinationLatitude: 33.366603, destinationLongitude: 70.120995, magnitude: 26 },
    { borderPoint: "Bahramcha", originLatitude: 29.42026, originLongitude: 64.015136, province: "Balkh", destinationLatitude: 36.266376, destinationLongitude: 66.864417, magnitude: 26 },
    { borderPoint: "Bahramcha", originLatitude: 29.42026, originLongitude: 64.015136, province: "Uruzgan", destinationLatitude: 33.132149, destinationLongitude: 66.578813, magnitude: 52 },
    { borderPoint: "Bahramcha", originLatitude: 29.42026, originLongitude: 64.015136, province: "Zabul", destinationLatitude: 31.892012, destinationLongitude: 67.572755, magnitude: 78 },
    { borderPoint: "Bahramcha", originLatitude: 29.42026, originLongitude: 64.015136, province: "Kandahar", destinationLatitude: 30.561242, destinationLongitude: 65.667892, magnitude: 437 },
    { borderPoint: "Bahramcha", originLatitude: 29.42026, originLongitude: 64.015136, province: "Helmand", destinationLatitude: 30.459468, destinationLongitude: 63.985773, magnitude: 3198 },
    { borderPoint: "Bahramcha", originLatitude: 29.42026, originLongitude: 64.015136, province: "Herat", destinationLatitude: 33.583128, destinationLongitude: 62.015471, magnitude: 26 },
    { borderPoint: "Bahramcha", originLatitude: 29.42026, originLongitude: 64.015136, province: "Farah", destinationLatitude: 32.385918, destinationLongitude: 61.814847, magnitude: 26 },
    { borderPoint: "Bahramcha", originLatitude: 29.42026, originLongitude: 64.015136, province: "Nimroz", destinationLatitude: 30.175326, destinationLongitude: 62.059899, magnitude: 26 },
    { borderPoint: "Ghulam Khan", originLatitude: 33.150936, originLongitude: 70.029985, province: "Kabul", destinationLatitude: 34.498247, destinationLongitude: 69.589362, magnitude: 108 },
    { borderPoint: "Ghulam Khan", originLatitude: 33.150936, originLongitude: 70.029985, province: "Wardak", destinationLatitude: 33.990654, destinationLongitude: 68.504375, magnitude: 148 },
    { borderPoint: "Ghulam Khan", originLatitude: 33.150936, originLongitude: 70.029985, province: "Logar", destinationLatitude: 33.812225, destinationLongitude: 68.970646, magnitude: 646 },
    { borderPoint: "Ghulam Khan", originLatitude: 33.150936, originLongitude: 70.029985, province: "Bamyan", destinationLatitude: 34.586525, destinationLongitude: 66.965771, magnitude: 10 },
    { borderPoint: "Ghulam Khan", originLatitude: 33.150936, originLongitude: 70.029985, province: "Ghazni", destinationLatitude: 33.086709, destinationLongitude: 67.767134, magnitude: 1920 },
    { borderPoint: "Ghulam Khan", originLatitude: 33.150936, originLongitude: 70.029985, province: "Paktika", destinationLatitude: 32.169088, destinationLongitude: 68.751118, magnitude: 19914 },
    { borderPoint: "Ghulam Khan", originLatitude: 33.150936, originLongitude: 70.029985, province: "Paktya", destinationLatitude: 33.785489, destinationLongitude: 69.480059, magnitude: 2283 },
    { borderPoint: "Ghulam Khan", originLatitude: 33.150936, originLongitude: 70.029985, province: "Khost", destinationLatitude: 33.366603, destinationLongitude: 70.120995, magnitude: 24668 },
    { borderPoint: "Ghulam Khan", originLatitude: 33.150936, originLongitude: 70.029985, province: "Kunar", destinationLatitude: 35.14243, destinationLongitude: 71.400403, magnitude: 19 },
    { borderPoint: "Ghulam Khan", originLatitude: 33.150936, originLongitude: 70.029985, province: "Kunduz", destinationLatitude: 36.585567, destinationLongitude: 68.751391, magnitude: 10 },
    { borderPoint: "Ghulam Khan", originLatitude: 33.150936, originLongitude: 70.029985, province: "Ghor", destinationLatitude: 33.877773, destinationLongitude: 64.839648, magnitude: 10 },
    { borderPoint: "Ghulam Khan", originLatitude: 33.150936, originLongitude: 70.029985, province: "Kandahar", destinationLatitude: 30.561242, destinationLongitude: 65.667892, magnitude: 10 },
    { borderPoint: "Ghulam Khan", originLatitude: 33.150936, originLongitude: 70.029985, province: "Helmand", destinationLatitude: 30.459468, destinationLongitude: 63.985773, magnitude: 10 },
    { borderPoint: "Islam Qala - Taybad", originLatitude: 34.70799, originLongitude: 61.00488, province: "Kabul", destinationLatitude: 34.498247, destinationLongitude: 69.589362, magnitude: 63924 },
    { borderPoint: "Islam Qala - Taybad", originLatitude: 34.70799, originLongitude: 61.00488, province: "Kapisa", destinationLatitude: 35.029641, destinationLongitude: 69.579117, magnitude: 12084 },
    { borderPoint: "Islam Qala - Taybad", originLatitude: 34.70799, originLongitude: 61.00488, province: "Parwan", destinationLatitude: 34.858063, destinationLongitude: 68.540249, magnitude: 16482 },
    { borderPoint: "Islam Qala - Taybad", originLatitude: 34.70799, originLongitude: 61.00488, province: "Wardak", destinationLatitude: 33.990654, destinationLongitude: 68.504375, magnitude: 4982 },
    { borderPoint: "Islam Qala - Taybad", originLatitude: 34.70799, originLongitude: 61.00488, province: "Logar", destinationLatitude: 33.812225, destinationLongitude: 68.970646, magnitude: 2550 },
    { borderPoint: "Islam Qala - Taybad", originLatitude: 34.70799, originLongitude: 61.00488, province: "Nangarhar", destinationLatitude: 34.261704, destinationLongitude: 70.840961, magnitude: 6830 },
    { borderPoint: "Islam Qala - Taybad", originLatitude: 34.70799, originLongitude: 61.00488, province: "Laghman", destinationLatitude: 34.640812, destinationLongitude: 70.190078, magnitude: 2238 },
    { borderPoint: "Islam Qala - Taybad", originLatitude: 34.70799, originLongitude: 61.00488, province: "Panjsher", destinationLatitude: 35.64688, destinationLongitude: 70.062755, magnitude: 2900 },
    { borderPoint: "Islam Qala - Taybad", originLatitude: 34.70799, originLongitude: 61.00488, province: "Baghlan", destinationLatitude: 35.493251, destinationLongitude: 68.532772, magnitude: 26834 },
    { borderPoint: "Islam Qala - Taybad", originLatitude: 34.70799, originLongitude: 61.00488, province: "Bamyan", destinationLatitude: 34.586525, destinationLongitude: 66.965771, magnitude: 9224 },
    { borderPoint: "Islam Qala - Taybad", originLatitude: 34.70799, originLongitude: 61.00488, province: "Ghazni", destinationLatitude: 33.086709, destinationLongitude: 67.767134, magnitude: 12570 },
    { borderPoint: "Islam Qala - Taybad", originLatitude: 34.70799, originLongitude: 61.00488, province: "Paktika", destinationLatitude: 32.169088, destinationLongitude: 68.751118, magnitude: 312 },
    { borderPoint: "Islam Qala - Taybad", originLatitude: 34.70799, originLongitude: 61.00488, province: "Paktya", destinationLatitude: 33.785489, destinationLongitude: 69.480059, magnitude: 1246 },
    { borderPoint: "Islam Qala - Taybad", originLatitude: 34.70799, originLongitude: 61.00488, province: "Khost", destinationLatitude: 33.366603, destinationLongitude: 70.120995, magnitude: 448 },
    { borderPoint: "Islam Qala - Taybad", originLatitude: 34.70799, originLongitude: 61.00488, province: "Kunar", destinationLatitude: 35.14243, destinationLongitude: 71.400403, magnitude: 1226 },
    { borderPoint: "Islam Qala - Taybad", originLatitude: 34.70799, originLongitude: 61.00488, province: "Nuristan", destinationLatitude: 35.570893, destinationLongitude: 71.197724, magnitude: 176 },
    { borderPoint: "Islam Qala - Taybad", originLatitude: 34.70799, originLongitude: 61.00488, province: "Badakhshan", destinationLatitude: 36.960125, destinationLongitude: 70.810303, magnitude: 17454 },
    { borderPoint: "Islam Qala - Taybad", originLatitude: 34.70799, originLongitude: 61.00488, province: "Takhar", destinationLatitude: 37.088414, destinationLongitude: 69.718364, magnitude: 20782 },
    { borderPoint: "Islam Qala - Taybad", originLatitude: 34.70799, originLongitude: 61.00488, province: "Kunduz", destinationLatitude: 36.585567, destinationLongitude: 68.751391, magnitude: 23370 },
    { borderPoint: "Islam Qala - Taybad", originLatitude: 34.70799, originLongitude: 61.00488, province: "Samangan", destinationLatitude: 35.699701, destinationLongitude: 67.701666, magnitude: 4904 },
    { borderPoint: "Islam Qala - Taybad", originLatitude: 34.70799, originLongitude: 61.00488, province: "Balkh", destinationLatitude: 36.266376, destinationLongitude: 66.864417, magnitude: 36602 },
    { borderPoint: "Islam Qala - Taybad", originLatitude: 34.70799, originLongitude: 61.00488, province: "Sar-e-Pul", destinationLatitude: 35.989303, destinationLongitude: 66.121856, magnitude: 18740 },
    { borderPoint: "Islam Qala - Taybad", originLatitude: 34.70799, originLongitude: 61.00488, province: "Ghor", destinationLatitude: 33.877773, destinationLongitude: 64.839648, magnitude: 15820 },
    { borderPoint: "Islam Qala - Taybad", originLatitude: 34.70799, originLongitude: 61.00488, province: "Daykundi", destinationLatitude: 34.043118, destinationLongitude: 66.140083, magnitude: 13116 },
    { borderPoint: "Islam Qala - Taybad", originLatitude: 34.70799, originLongitude: 61.00488, province: "Uruzgan", destinationLatitude: 33.132149, destinationLongitude: 66.578813, magnitude: 1538 },
    { borderPoint: "Islam Qala - Taybad", originLatitude: 34.70799, originLongitude: 61.00488, province: "Zabul", destinationLatitude: 31.892012, destinationLongitude: 67.572755, magnitude: 928 },
    { borderPoint: "Islam Qala - Taybad", originLatitude: 34.70799, originLongitude: 61.00488, province: "Kandahar", destinationLatitude: 30.561242, destinationLongitude: 65.667892, magnitude: 1966 },
    { borderPoint: "Islam Qala - Taybad", originLatitude: 34.70799, originLongitude: 61.00488, province: "Jawzjan", destinationLatitude: 36.727944, destinationLongitude: 65.908307, magnitude: 9632 },
    { borderPoint: "Islam Qala - Taybad", originLatitude: 34.70799, originLongitude: 61.00488, province: "Faryab", destinationLatitude: 35.641452, destinationLongitude: 64.848759, magnitude: 33606 },
    { borderPoint: "Islam Qala - Taybad", originLatitude: 34.70799, originLongitude: 61.00488, province: "Helmand", destinationLatitude: 30.459468, destinationLongitude: 63.985773, magnitude: 1868 },
    { borderPoint: "Islam Qala - Taybad", originLatitude: 34.70799, originLongitude: 61.00488, province: "Badghis", destinationLatitude: 35.516666, destinationLongitude: 63.61264, magnitude: 19148 },
    { borderPoint: "Islam Qala - Taybad", originLatitude: 34.70799, originLongitude: 61.00488, province: "Herat", destinationLatitude: 33.583128, destinationLongitude: 62.015471, magnitude: 129306 },
    { borderPoint: "Islam Qala - Taybad", originLatitude: 34.70799, originLongitude: 61.00488, province: "Farah", destinationLatitude: 32.385918, destinationLongitude: 61.814847, magnitude: 2510 },
    { borderPoint: "Islam Qala - Taybad", originLatitude: 34.70799, originLongitude: 61.00488, province: "Nimroz", destinationLatitude: 30.175326, destinationLongitude: 62.059899, magnitude: 1654 },
    { borderPoint: "Pathan", originLatitude: 33.834275, originLongitude: 69.943411, province: "Logar", destinationLatitude: 33.812225, destinationLongitude: 68.970646, magnitude: 8 },
    { borderPoint: "Pathan", originLatitude: 33.834275, originLongitude: 69.943411, province: "Ghazni", destinationLatitude: 33.086709, destinationLongitude: 67.767134, magnitude: 6 },
    { borderPoint: "Pathan", originLatitude: 33.834275, originLongitude: 69.943411, province: "Paktika", destinationLatitude: 32.169088, destinationLongitude: 68.751118, magnitude: 2 },
    { borderPoint: "Pathan", originLatitude: 33.834275, originLongitude: 69.943411, province: "Paktya", destinationLatitude: 33.785489, destinationLongitude: 69.480059, magnitude: 48 },
    { borderPoint: "Pathan", originLatitude: 33.834275, originLongitude: 69.943411, province: "Khost", destinationLatitude: 33.366603, destinationLongitude: 70.120995, magnitude: 48 },
    { borderPoint: "Spin Boldak –  Chaman", originLatitude: 30.955879, originLongitude: 66.437425, province: "Kabul", destinationLatitude: 34.498247, destinationLongitude: 69.589362, magnitude: 4608 },
    { borderPoint: "Spin Boldak –  Chaman", originLatitude: 30.955879, originLongitude: 66.437425, province: "Kapisa", destinationLatitude: 35.029641, destinationLongitude: 69.579117, magnitude: 156 },
    { borderPoint: "Spin Boldak –  Chaman", originLatitude: 30.955879, originLongitude: 66.437425, province: "Parwan", destinationLatitude: 34.858063, destinationLongitude: 68.540249, magnitude: 350 },
    { borderPoint: "Spin Boldak –  Chaman", originLatitude: 30.955879, originLongitude: 66.437425, province: "Wardak", destinationLatitude: 33.990654, destinationLongitude: 68.504375, magnitude: 1516 },
    { borderPoint: "Spin Boldak –  Chaman", originLatitude: 30.955879, originLongitude: 66.437425, province: "Logar", destinationLatitude: 33.812225, destinationLongitude: 68.970646, magnitude: 516 },
    { borderPoint: "Spin Boldak –  Chaman", originLatitude: 30.955879, originLongitude: 66.437425, province: "Nangarhar", destinationLatitude: 34.261704, destinationLongitude: 70.840961, magnitude: 380 },
    { borderPoint: "Spin Boldak –  Chaman", originLatitude: 30.955879, originLongitude: 66.437425, province: "Laghman", destinationLatitude: 34.640812, destinationLongitude: 70.190078, magnitude: 156 },
    { borderPoint: "Spin Boldak –  Chaman", originLatitude: 30.955879, originLongitude: 66.437425, province: "Baghlan", destinationLatitude: 35.493251, destinationLongitude: 68.532772, magnitude: 1604 },
    { borderPoint: "Spin Boldak –  Chaman", originLatitude: 30.955879, originLongitude: 66.437425, province: "Bamyan", destinationLatitude: 34.586525, destinationLongitude: 66.965771, magnitude: 156 },
    { borderPoint: "Spin Boldak –  Chaman", originLatitude: 30.955879, originLongitude: 66.437425, province: "Ghazni", destinationLatitude: 33.086709, destinationLongitude: 67.767134, magnitude: 11686 },
    { borderPoint: "Spin Boldak –  Chaman", originLatitude: 30.955879, originLongitude: 66.437425, province: "Paktika", destinationLatitude: 32.169088, destinationLongitude: 68.751118, magnitude: 2692 },
    { borderPoint: "Spin Boldak –  Chaman", originLatitude: 30.955879, originLongitude: 66.437425, province: "Paktya", destinationLatitude: 33.785489, destinationLongitude: 69.480059, magnitude: 680 },
    { borderPoint: "Spin Boldak –  Chaman", originLatitude: 30.955879, originLongitude: 66.437425, province: "Khost", destinationLatitude: 33.366603, destinationLongitude: 70.120995, magnitude: 330 },
    { borderPoint: "Spin Boldak –  Chaman", originLatitude: 30.955879, originLongitude: 66.437425, province: "Kunar", destinationLatitude: 35.14243, destinationLongitude: 71.400403, magnitude: 106 },
    { borderPoint: "Spin Boldak –  Chaman", originLatitude: 30.955879, originLongitude: 66.437425, province: "Badakhshan", destinationLatitude: 36.960125, destinationLongitude: 70.810303, magnitude: 156 },
    { borderPoint: "Spin Boldak –  Chaman", originLatitude: 30.955879, originLongitude: 66.437425, province: "Takhar", destinationLatitude: 37.088414, destinationLongitude: 69.718364, magnitude: 763 },
    { borderPoint: "Spin Boldak –  Chaman", originLatitude: 30.955879, originLongitude: 66.437425, province: "Kunduz", destinationLatitude: 36.585567, destinationLongitude: 68.751391, magnitude: 4278 },
    { borderPoint: "Spin Boldak –  Chaman", originLatitude: 30.955879, originLongitude: 66.437425, province: "Samangan", destinationLatitude: 35.699701, destinationLongitude: 67.701666, magnitude: 350 },
    { borderPoint: "Spin Boldak –  Chaman", originLatitude: 30.955879, originLongitude: 66.437425, province: "Balkh", destinationLatitude: 36.266376, destinationLongitude: 66.864417, magnitude: 816 },
    { borderPoint: "Spin Boldak –  Chaman", originLatitude: 30.955879, originLongitude: 66.437425, province: "Sar-e-Pul", destinationLatitude: 35.989303, destinationLongitude: 66.121856, magnitude: 1448 },
    { borderPoint: "Spin Boldak –  Chaman", originLatitude: 30.955879, originLongitude: 66.437425, province: "Ghor", destinationLatitude: 33.877773, destinationLongitude: 64.839648, magnitude: 272 },
    { borderPoint: "Spin Boldak –  Chaman", originLatitude: 30.955879, originLongitude: 66.437425, province: "Daykundi", destinationLatitude: 34.043118, destinationLongitude: 66.140083, magnitude: 806 },
    { borderPoint: "Spin Boldak –  Chaman", originLatitude: 30.955879, originLongitude: 66.437425, province: "Uruzgan", destinationLatitude: 33.132149, destinationLongitude: 66.578813, magnitude: 7942 },
    { borderPoint: "Spin Boldak –  Chaman", originLatitude: 30.955879, originLongitude: 66.437425, province: "Zabul", destinationLatitude: 31.892012, destinationLongitude: 67.572755, magnitude: 7116 },
    { borderPoint: "Spin Boldak –  Chaman", originLatitude: 30.955879, originLongitude: 66.437425, province: "Kandahar", destinationLatitude: 30.561242, destinationLongitude: 65.667892, magnitude: 30778 },
    { borderPoint: "Spin Boldak –  Chaman", originLatitude: 30.955879, originLongitude: 66.437425, province: "Jawzjan", destinationLatitude: 36.727944, destinationLongitude: 65.908307, magnitude: 1420 },
    { borderPoint: "Spin Boldak –  Chaman", originLatitude: 30.955879, originLongitude: 66.437425, province: "Faryab", destinationLatitude: 35.641452, destinationLongitude: 64.848759, magnitude: 602 },
    { borderPoint: "Spin Boldak –  Chaman", originLatitude: 30.955879, originLongitude: 66.437425, province: "Helmand", destinationLatitude: 30.459468, destinationLongitude: 63.985773, magnitude: 8788 },
    { borderPoint: "Spin Boldak –  Chaman", originLatitude: 30.955879, originLongitude: 66.437425, province: "Badghis", destinationLatitude: 35.516666, destinationLongitude: 63.61264, magnitude: 398 },
    { borderPoint: "Spin Boldak –  Chaman", originLatitude: 30.955879, originLongitude: 66.437425, province: "Herat", destinationLatitude: 33.583128, destinationLongitude: 62.015471, magnitude: 6114 },
    { borderPoint: "Spin Boldak –  Chaman", originLatitude: 30.955879, originLongitude: 66.437425, province: "Farah", destinationLatitude: 32.385918, destinationLongitude: 61.814847, magnitude: 2470 },
    { borderPoint: "Spin Boldak –  Chaman", originLatitude: 30.955879, originLongitude: 66.437425, province: "Nimroz", destinationLatitude: 30.175326, destinationLongitude: 62.059899, magnitude: 836 },
    { borderPoint: "Torkham – Bab-i-Pakistan", originLatitude: 34.122641, originLongitude: 71.093202, province: "Kabul", destinationLatitude: 34.498247, destinationLongitude: 69.589362, magnitude: 97882 },
    { borderPoint: "Torkham – Bab-i-Pakistan", originLatitude: 34.122641, originLongitude: 71.093202, province: "Kapisa", destinationLatitude: 35.029641, destinationLongitude: 69.579117, magnitude: 4666 },
    { borderPoint: "Torkham – Bab-i-Pakistan", originLatitude: 34.122641, originLongitude: 71.093202, province: "Parwan", destinationLatitude: 34.858063, destinationLongitude: 68.540249, magnitude: 5068 },
    { borderPoint: "Torkham – Bab-i-Pakistan", originLatitude: 34.122641, originLongitude: 71.093202, province: "Wardak", destinationLatitude: 33.990654, destinationLongitude: 68.504375, magnitude: 3156 },
    { borderPoint: "Torkham – Bab-i-Pakistan", originLatitude: 34.122641, originLongitude: 71.093202, province: "Logar", destinationLatitude: 33.812225, destinationLongitude: 68.970646, magnitude: 9892 },
    { borderPoint: "Torkham – Bab-i-Pakistan", originLatitude: 34.122641, originLongitude: 71.093202, province: "Nangarhar", destinationLatitude: 34.261704, destinationLongitude: 70.840961, magnitude: 132730 },
    { borderPoint: "Torkham – Bab-i-Pakistan", originLatitude: 34.122641, originLongitude: 71.093202, province: "Laghman", destinationLatitude: 34.640812, destinationLongitude: 70.190078, magnitude: 17976 },
    { borderPoint: "Torkham – Bab-i-Pakistan", originLatitude: 34.122641, originLongitude: 71.093202, province: "Panjsher", destinationLatitude: 35.64688, destinationLongitude: 70.062755, magnitude: 1894 },
    { borderPoint: "Torkham – Bab-i-Pakistan", originLatitude: 34.122641, originLongitude: 71.093202, province: "Baghlan", destinationLatitude: 35.493251, destinationLongitude: 68.532772, magnitude: 8822 },
    { borderPoint: "Torkham – Bab-i-Pakistan", originLatitude: 34.122641, originLongitude: 71.093202, province: "Bamyan", destinationLatitude: 34.586525, destinationLongitude: 66.965771, magnitude: 1648 },
    { borderPoint: "Torkham – Bab-i-Pakistan", originLatitude: 34.122641, originLongitude: 71.093202, province: "Ghazni", destinationLatitude: 33.086709, destinationLongitude: 67.767134, magnitude: 4086 },
    { borderPoint: "Torkham – Bab-i-Pakistan", originLatitude: 34.122641, originLongitude: 71.093202, province: "Paktika", destinationLatitude: 32.169088, destinationLongitude: 68.751118, magnitude: 4700 },
    { borderPoint: "Torkham – Bab-i-Pakistan", originLatitude: 34.122641, originLongitude: 71.093202, province: "Paktya", destinationLatitude: 33.785489, destinationLongitude: 69.480059, magnitude: 8384 },
    { borderPoint: "Torkham – Bab-i-Pakistan", originLatitude: 34.122641, originLongitude: 71.093202, province: "Khost", destinationLatitude: 33.366603, destinationLongitude: 70.120995, magnitude: 5928 },
    { borderPoint: "Torkham – Bab-i-Pakistan", originLatitude: 34.122641, originLongitude: 71.093202, province: "Kunar", destinationLatitude: 35.14243, destinationLongitude: 71.400403, magnitude: 19766 },
    { borderPoint: "Torkham – Bab-i-Pakistan", originLatitude: 34.122641, originLongitude: 71.093202, province: "Nuristan", destinationLatitude: 35.570893, destinationLongitude: 71.197724, magnitude: 474 },
    { borderPoint: "Torkham – Bab-i-Pakistan", originLatitude: 34.122641, originLongitude: 71.093202, province: "Badakhshan", destinationLatitude: 36.960125, destinationLongitude: 70.810303, magnitude: 1052 },
    { borderPoint: "Torkham – Bab-i-Pakistan", originLatitude: 34.122641, originLongitude: 71.093202, province: "Takhar", destinationLatitude: 37.088414, destinationLongitude: 69.718364, magnitude: 1806 },
    { borderPoint: "Torkham – Bab-i-Pakistan", originLatitude: 34.122641, originLongitude: 71.093202, province: "Kunduz", destinationLatitude: 36.585567, destinationLongitude: 68.751391, magnitude: 11820 },
    { borderPoint: "Torkham – Bab-i-Pakistan", originLatitude: 34.122641, originLongitude: 71.093202, province: "Samangan", destinationLatitude: 35.699701, destinationLongitude: 67.701666, magnitude: 1350 },
    { borderPoint: "Torkham – Bab-i-Pakistan", originLatitude: 34.122641, originLongitude: 71.093202, province: "Balkh", destinationLatitude: 36.266376, destinationLongitude: 66.864417, magnitude: 7858 },
    { borderPoint: "Torkham – Bab-i-Pakistan", originLatitude: 34.122641, originLongitude: 71.093202, province: "Sar-e-Pul", destinationLatitude: 35.989303, destinationLongitude: 66.121856, magnitude: 176 },
    { borderPoint: "Torkham – Bab-i-Pakistan", originLatitude: 34.122641, originLongitude: 71.093202, province: "Ghor", destinationLatitude: 33.877773, destinationLongitude: 64.839648, magnitude: 176 },
    { borderPoint: "Torkham – Bab-i-Pakistan", originLatitude: 34.122641, originLongitude: 71.093202, province: "Daykundi", destinationLatitude: 34.043118, destinationLongitude: 66.140083, magnitude: 350 },
    { borderPoint: "Torkham – Bab-i-Pakistan", originLatitude: 34.122641, originLongitude: 71.093202, province: "Uruzgan", destinationLatitude: 33.132149, destinationLongitude: 66.578813, magnitude: 70 },
    { borderPoint: "Torkham – Bab-i-Pakistan", originLatitude: 34.122641, originLongitude: 71.093202, province: "Zabul", destinationLatitude: 31.892012, destinationLongitude: 67.572755, magnitude: 106 },
    { borderPoint: "Torkham – Bab-i-Pakistan", originLatitude: 34.122641, originLongitude: 71.093202, province: "Kandahar", destinationLatitude: 30.561242, destinationLongitude: 65.667892, magnitude: 1350 },
    { borderPoint: "Torkham – Bab-i-Pakistan", originLatitude: 34.122641, originLongitude: 71.093202, province: "Jawzjan", destinationLatitude: 36.727944, destinationLongitude: 65.908307, magnitude: 1614 },
    { borderPoint: "Torkham – Bab-i-Pakistan", originLatitude: 34.122641, originLongitude: 71.093202, province: "Faryab", destinationLatitude: 35.641452, destinationLongitude: 64.848759, magnitude: 562 },
    { borderPoint: "Torkham – Bab-i-Pakistan", originLatitude: 34.122641, originLongitude: 71.093202, province: "Helmand", destinationLatitude: 30.459468, destinationLongitude: 63.985773, magnitude: 176 },
    { borderPoint: "Torkham – Bab-i-Pakistan", originLatitude: 34.122641, originLongitude: 71.093202, province: "Badghis", destinationLatitude: 35.516666, destinationLongitude: 63.61264, magnitude: 88 },
    { borderPoint: "Torkham – Bab-i-Pakistan", originLatitude: 34.122641, originLongitude: 71.093202, province: "Herat", destinationLatitude: 33.583128, destinationLongitude: 62.015471, magnitude: 5122 },
    { borderPoint: "Torkham – Bab-i-Pakistan", originLatitude: 34.122641, originLongitude: 71.093202, province: "Farah", destinationLatitude: 32.385918, destinationLongitude: 61.814847, magnitude: 246 },
    { borderPoint: "Torkham – Bab-i-Pakistan", originLatitude: 34.122641, originLongitude: 71.093202, province: "Nimroz", destinationLatitude: 30.175326, destinationLongitude: 62.059899, magnitude: 122 },
    { borderPoint: "Zaranj – Milak", originLatitude: 30.96555, originLongitude: 61.823383, province: "Kabul", destinationLatitude: 34.498247, destinationLongitude: 69.589362, magnitude: 20948 },
    { borderPoint: "Zaranj – Milak", originLatitude: 30.96555, originLongitude: 61.823383, province: "Kapisa", destinationLatitude: 35.029641, destinationLongitude: 69.579117, magnitude: 10134 },
    { borderPoint: "Zaranj – Milak", originLatitude: 30.96555, originLongitude: 61.823383, province: "Parwan", destinationLatitude: 34.858063, destinationLongitude: 68.540249, magnitude: 9036 },
    { borderPoint: "Zaranj – Milak", originLatitude: 30.96555, originLongitude: 61.823383, province: "Wardak", destinationLatitude: 33.990654, destinationLongitude: 68.504375, magnitude: 2660 },
    { borderPoint: "Zaranj – Milak", originLatitude: 30.96555, originLongitude: 61.823383, province: "Logar", destinationLatitude: 33.812225, destinationLongitude: 68.970646, magnitude: 2314 },
    { borderPoint: "Zaranj – Milak", originLatitude: 30.96555, originLongitude: 61.823383, province: "Nangarhar", destinationLatitude: 34.261704, destinationLongitude: 70.840961, magnitude: 4916 },
    { borderPoint: "Zaranj – Milak", originLatitude: 30.96555, originLongitude: 61.823383, province: "Laghman", destinationLatitude: 34.640812, destinationLongitude: 70.190078, magnitude: 6042 },
    { borderPoint: "Zaranj – Milak", originLatitude: 30.96555, originLongitude: 61.823383, province: "Panjsher", destinationLatitude: 35.64688, destinationLongitude: 70.062755, magnitude: 896 },
    { borderPoint: "Zaranj – Milak", originLatitude: 30.96555, originLongitude: 61.823383, province: "Baghlan", destinationLatitude: 35.493251, destinationLongitude: 68.532772, magnitude: 17898 },
    { borderPoint: "Zaranj – Milak", originLatitude: 30.96555, originLongitude: 61.823383, province: "Bamyan", destinationLatitude: 34.586525, destinationLongitude: 66.965771, magnitude: 1864 },
    { borderPoint: "Zaranj – Milak", originLatitude: 30.96555, originLongitude: 61.823383, province: "Ghazni", destinationLatitude: 33.086709, destinationLongitude: 67.767134, magnitude: 7850 },
    { borderPoint: "Zaranj – Milak", originLatitude: 30.96555, originLongitude: 61.823383, province: "Paktika", destinationLatitude: 32.169088, destinationLongitude: 68.751118, magnitude: 1416 },
    { borderPoint: "Zaranj – Milak", originLatitude: 30.96555, originLongitude: 61.823383, province: "Paktya", destinationLatitude: 33.785489, destinationLongitude: 69.480059, magnitude: 636 },
    { borderPoint: "Zaranj – Milak", originLatitude: 30.96555, originLongitude: 61.823383, province: "Khost", destinationLatitude: 33.366603, destinationLongitude: 70.120995, magnitude: 506 },
    { borderPoint: "Zaranj – Milak", originLatitude: 30.96555, originLongitude: 61.823383, province: "Kunar", destinationLatitude: 35.14243, destinationLongitude: 71.400403, magnitude: 534 },
    { borderPoint: "Zaranj – Milak", originLatitude: 30.96555, originLongitude: 61.823383, province: "Nuristan", destinationLatitude: 35.570893, destinationLongitude: 71.197724, magnitude: 86 },
    { borderPoint: "Zaranj – Milak", originLatitude: 30.96555, originLongitude: 61.823383, province: "Badakhshan", destinationLatitude: 36.960125, destinationLongitude: 70.810303, magnitude: 10236 },
    { borderPoint: "Zaranj – Milak", originLatitude: 30.96555, originLongitude: 61.823383, province: "Takhar", destinationLatitude: 37.088414, destinationLongitude: 69.718364, magnitude: 34204 },
    { borderPoint: "Zaranj – Milak", originLatitude: 30.96555, originLongitude: 61.823383, province: "Kunduz", destinationLatitude: 36.585567, destinationLongitude: 68.751391, magnitude: 28306 },
    { borderPoint: "Zaranj – Milak", originLatitude: 30.96555, originLongitude: 61.823383, province: "Samangan", destinationLatitude: 35.699701, destinationLongitude: 67.701666, magnitude: 3426 },
    { borderPoint: "Zaranj – Milak", originLatitude: 30.96555, originLongitude: 61.823383, province: "Balkh", destinationLatitude: 36.266376, destinationLongitude: 66.864417, magnitude: 18258 },
    { borderPoint: "Zaranj – Milak", originLatitude: 30.96555, originLongitude: 61.823383, province: "Sar-e-Pul", destinationLatitude: 35.989303, destinationLongitude: 66.121856, magnitude: 7576 },
    { borderPoint: "Zaranj – Milak", originLatitude: 30.96555, originLongitude: 61.823383, province: "Ghor", destinationLatitude: 33.877773, destinationLongitude: 64.839648, magnitude: 6866 },
    { borderPoint: "Zaranj – Milak", originLatitude: 30.96555, originLongitude: 61.823383, province: "Daykundi", destinationLatitude: 34.043118, destinationLongitude: 66.140083, magnitude: 3354 },
    { borderPoint: "Zaranj – Milak", originLatitude: 30.96555, originLongitude: 61.823383, province: "Uruzgan", destinationLatitude: 33.132149, destinationLongitude: 66.578813, magnitude: 258 },
    { borderPoint: "Zaranj – Milak", originLatitude: 30.96555, originLongitude: 61.823383, province: "Zabul", destinationLatitude: 31.892012, destinationLongitude: 67.572755, magnitude: 1792 },
    { borderPoint: "Zaranj – Milak", originLatitude: 30.96555, originLongitude: 61.823383, province: "Kandahar", destinationLatitude: 30.561242, destinationLongitude: 65.667892, magnitude: 2168 },
    { borderPoint: "Zaranj – Milak", originLatitude: 30.96555, originLongitude: 61.823383, province: "Jawzjan", destinationLatitude: 36.727944, destinationLongitude: 65.908307, magnitude: 3888 },
    { borderPoint: "Zaranj – Milak", originLatitude: 30.96555, originLongitude: 61.823383, province: "Faryab", destinationLatitude: 35.641452, destinationLongitude: 64.848759, magnitude: 8848 },
    { borderPoint: "Zaranj – Milak", originLatitude: 30.96555, originLongitude: 61.823383, province: "Helmand", destinationLatitude: 30.459468, destinationLongitude: 63.985773, magnitude: 9556 },
    { borderPoint: "Zaranj – Milak", originLatitude: 30.96555, originLongitude: 61.823383, province: "Badghis", destinationLatitude: 35.516666, destinationLongitude: 63.61264, magnitude: 8458 },
    { borderPoint: "Zaranj – Milak", originLatitude: 30.96555, originLongitude: 61.823383, province: "Herat", destinationLatitude: 33.583128, destinationLongitude: 62.015471, magnitude: 18086 },
    { borderPoint: "Zaranj – Milak", originLatitude: 30.96555, originLongitude: 61.823383, province: "Farah", destinationLatitude: 32.385918, destinationLongitude: 61.814847, magnitude: 29232 },
    { borderPoint: "Zaranj – Milak", originLatitude: 30.96555, originLongitude: 61.823383, province: "Nimroz", destinationLatitude: 30.175326, destinationLongitude: 62.059899, magnitude: 27916 },
  ];

  let flowLayer;

  function updateLayerFromFilter() {
    const checkedPoints = Array.from(document.querySelectorAll("#filterPanel input[type=checkbox]:checked")).map(cb => cb.value);
    const filtered = fullFlowData.filter(f => checkedPoints.includes(f.borderPoint));

    if (flowLayer) {
      view.map.remove(flowLayer);
    }

    flowLayer = new CanvasFlowmapLayer({
        view: view,
        locations: filtered,
        originAndDestinationFieldIds: {
          originUniqueIdField: "borderPoint",
          originGeometry: {
            x: "originLongitude",
            y: "originLatitude",
            spatialReference: {
              wkid: 4326
            }
          },
          destinationUniqueIdField: "province",
          destinationGeometry: {
            x: "destinationLongitude",
            y: "destinationLatitude",
            spatialReference: {
              wkid: 4326
            }
          }
        },
        pathDisplayMode: "all",
        animatePoints: true,
        showArrowHead: true
      });
      

    view.map.add(flowLayer);
  }

  // Auto-create checkboxes from unique border points
  const uniquePoints = [...new Set(fullFlowData.map(f => f.borderPoint))];
  const panel = document.getElementById("filterPanel");
  uniquePoints.forEach(point => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="checkbox" value="${point}" checked> ${point}<br/>`;
    panel.appendChild(label);
  });

  panel.addEventListener("change", updateLayerFromFilter);
  view.when(updateLayerFromFilter);
});
