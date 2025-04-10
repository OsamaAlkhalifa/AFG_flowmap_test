const locations = [
  {
    "id": "id0",
    "name": "Abu Nasr Farahi",
    "lat": 32.165039,
    "lon": 60.873467
  },
  {
    "id": "id1",
    "name": "Laghman",
    "lat": 34.640812,
    "lon": 70.190078
  },
  {
    "id": "id2",
    "name": "Baghlan",
    "lat": 35.493251,
    "lon": 68.532772
  },
  {
    "id": "id3",
    "name": "Ghazni",
    "lat": 33.086709,
    "lon": 67.767134
  },
  {
    "id": "id4",
    "name": "Helmand",
    "lat": 30.459468,
    "lon": 63.985773
  },
  {
    "id": "id5",
    "name": "Herat",
    "lat": 33.583128,
    "lon": 62.015471
  },
  {
    "id": "id6",
    "name": "Farah",
    "lat": 32.385918,
    "lon": 61.814847
  },
  {
    "id": "id7",
    "name": "Nimroz",
    "lat": 30.175326,
    "lon": 62.059899
  },
  {
    "id": "id8",
    "name": "Angor ada",
    "lat": 32.519404,
    "lon": 69.272673
  },
  {
    "id": "id9",
    "name": "Kabul",
    "lat": 34.498247,
    "lon": 69.589362
  },
  {
    "id": "id10",
    "name": "Wardak",
    "lat": 33.990654,
    "lon": 68.504375
  },
  {
    "id": "id11",
    "name": "Logar",
    "lat": 33.812225,
    "lon": 68.970646
  },
  {
    "id": "id12",
    "name": "Paktika",
    "lat": 32.169088,
    "lon": 68.751118
  },
  {
    "id": "id13",
    "name": "Paktya",
    "lat": 33.785489,
    "lon": 69.480059
  },
  {
    "id": "id14",
    "name": "Khost",
    "lat": 33.366603,
    "lon": 70.120995
  },
  {
    "id": "id15",
    "name": "Badakhshan",
    "lat": 36.960125,
    "lon": 70.810303
  },
  {
    "id": "id16",
    "name": "Balkh",
    "lat": 36.266376,
    "lon": 66.864417
  },
  {
    "id": "id17",
    "name": "Bahramcha",
    "lat": 29.42026,
    "lon": 64.015136
  },
  {
    "id": "id18",
    "name": "Nangarhar",
    "lat": 34.261704,
    "lon": 70.840961
  },
  {
    "id": "id19",
    "name": "Uruzgan",
    "lat": 33.132149,
    "lon": 66.578813
  },
  {
    "id": "id20",
    "name": "Zabul",
    "lat": 31.892012,
    "lon": 67.572755
  },
  {
    "id": "id21",
    "name": "Kandahar",
    "lat": 30.561242,
    "lon": 65.667892
  },
  {
    "id": "id22",
    "name": "Ghulam Khan",
    "lat": 33.150936,
    "lon": 70.029985
  },
  {
    "id": "id23",
    "name": "Bamyan",
    "lat": 34.586525,
    "lon": 66.965771
  },
  {
    "id": "id24",
    "name": "Kunar",
    "lat": 35.14243,
    "lon": 71.400403
  },
  {
    "id": "id25",
    "name": "Kunduz",
    "lat": 36.585567,
    "lon": 68.751391
  },
  {
    "id": "id26",
    "name": "Ghor",
    "lat": 33.877773,
    "lon": 64.839648
  },
  {
    "id": "id27",
    "name": "Islam Qala - Taybad",
    "lat": 34.70799,
    "lon": 61.00488
  },
  {
    "id": "id28",
    "name": "Kapisa",
    "lat": 35.029641,
    "lon": 69.579117
  },
  {
    "id": "id29",
    "name": "Parwan",
    "lat": 34.858063,
    "lon": 68.540249
  },
  {
    "id": "id30",
    "name": "Panjsher",
    "lat": 35.64688,
    "lon": 70.062755
  },
  {
    "id": "id31",
    "name": "Nuristan",
    "lat": 35.570893,
    "lon": 71.197724
  },
  {
    "id": "id32",
    "name": "Takhar",
    "lat": 37.088414,
    "lon": 69.718364
  },
  {
    "id": "id33",
    "name": "Samangan",
    "lat": 35.699701,
    "lon": 67.701666
  },
  {
    "id": "id34",
    "name": "Sar-e-Pul",
    "lat": 35.989303,
    "lon": 66.121856
  },
  {
    "id": "id35",
    "name": "Daykundi",
    "lat": 34.043118,
    "lon": 66.140083
  },
  {
    "id": "id36",
    "name": "Jawzjan",
    "lat": 36.727944,
    "lon": 65.908307
  },
  {
    "id": "id37",
    "name": "Faryab",
    "lat": 35.641452,
    "lon": 64.848759
  },
  {
    "id": "id38",
    "name": "Badghis",
    "lat": 35.516666,
    "lon": 63.61264
  },
  {
    "id": "id39",
    "name": "Pathan",
    "lat": 33.834275,
    "lon": 69.943411
  },
  {
    "id": "id40",
    "name": "Spin Boldak \u2013  Chaman",
    "lat": 30.955879,
    "lon": 66.437425
  },
  {
    "id": "id41",
    "name": "Torkham \u2013 Bab-i-Pakistan",
    "lat": 34.122641,
    "lon": 71.093202
  },
  {
    "id": "id42",
    "name": "Zaranj \u2013 Milak",
    "lat": 30.96555,
    "lon": 61.823383
  }
];

const flows = [
  {
    "origin": "id0",
    "dest": "id1",
    "count": 6,
    "borderPoint": "Abu Nasr Farahi"
  },
  {
    "origin": "id0",
    "dest": "id2",
    "count": 6,
    "borderPoint": "Abu Nasr Farahi"
  },
  {
    "origin": "id0",
    "dest": "id3",
    "count": 7,
    "borderPoint": "Abu Nasr Farahi"
  },
  {
    "origin": "id0",
    "dest": "id4",
    "count": 6,
    "borderPoint": "Abu Nasr Farahi"
  },
  {
    "origin": "id0",
    "dest": "id5",
    "count": 26,
    "borderPoint": "Abu Nasr Farahi"
  },
  {
    "origin": "id0",
    "dest": "id6",
    "count": 4756,
    "borderPoint": "Abu Nasr Farahi"
  },
  {
    "origin": "id0",
    "dest": "id7",
    "count": 6,
    "borderPoint": "Abu Nasr Farahi"
  },
  {
    "origin": "id8",
    "dest": "id9",
    "count": 2,
    "borderPoint": "Angor ada"
  },
  {
    "origin": "id8",
    "dest": "id10",
    "count": 2,
    "borderPoint": "Angor ada"
  },
  {
    "origin": "id8",
    "dest": "id11",
    "count": 2,
    "borderPoint": "Angor ada"
  },
  {
    "origin": "id8",
    "dest": "id3",
    "count": 14,
    "borderPoint": "Angor ada"
  },
  {
    "origin": "id8",
    "dest": "id12",
    "count": 557,
    "borderPoint": "Angor ada"
  },
  {
    "origin": "id8",
    "dest": "id13",
    "count": 16,
    "borderPoint": "Angor ada"
  },
  {
    "origin": "id8",
    "dest": "id14",
    "count": 12,
    "borderPoint": "Angor ada"
  },
  {
    "origin": "id8",
    "dest": "id15",
    "count": 2,
    "borderPoint": "Angor ada"
  },
  {
    "origin": "id8",
    "dest": "id16",
    "count": 4,
    "borderPoint": "Angor ada"
  },
  {
    "origin": "id17",
    "dest": "id9",
    "count": 104,
    "borderPoint": "Bahramcha"
  },
  {
    "origin": "id17",
    "dest": "id10",
    "count": 206,
    "borderPoint": "Bahramcha"
  },
  {
    "origin": "id17",
    "dest": "id18",
    "count": 26,
    "borderPoint": "Bahramcha"
  },
  {
    "origin": "id17",
    "dest": "id3",
    "count": 180,
    "borderPoint": "Bahramcha"
  },
  {
    "origin": "id17",
    "dest": "id14",
    "count": 26,
    "borderPoint": "Bahramcha"
  },
  {
    "origin": "id17",
    "dest": "id16",
    "count": 26,
    "borderPoint": "Bahramcha"
  },
  {
    "origin": "id17",
    "dest": "id19",
    "count": 52,
    "borderPoint": "Bahramcha"
  },
  {
    "origin": "id17",
    "dest": "id20",
    "count": 78,
    "borderPoint": "Bahramcha"
  },
  {
    "origin": "id17",
    "dest": "id21",
    "count": 437,
    "borderPoint": "Bahramcha"
  },
  {
    "origin": "id17",
    "dest": "id4",
    "count": 3198,
    "borderPoint": "Bahramcha"
  },
  {
    "origin": "id17",
    "dest": "id5",
    "count": 26,
    "borderPoint": "Bahramcha"
  },
  {
    "origin": "id17",
    "dest": "id6",
    "count": 26,
    "borderPoint": "Bahramcha"
  },
  {
    "origin": "id17",
    "dest": "id7",
    "count": 26,
    "borderPoint": "Bahramcha"
  },
  {
    "origin": "id22",
    "dest": "id9",
    "count": 108,
    "borderPoint": "Ghulam Khan"
  },
  {
    "origin": "id22",
    "dest": "id10",
    "count": 148,
    "borderPoint": "Ghulam Khan"
  },
  {
    "origin": "id22",
    "dest": "id11",
    "count": 646,
    "borderPoint": "Ghulam Khan"
  },
  {
    "origin": "id22",
    "dest": "id23",
    "count": 10,
    "borderPoint": "Ghulam Khan"
  },
  {
    "origin": "id22",
    "dest": "id3",
    "count": 1920,
    "borderPoint": "Ghulam Khan"
  },
  {
    "origin": "id22",
    "dest": "id12",
    "count": 19914,
    "borderPoint": "Ghulam Khan"
  },
  {
    "origin": "id22",
    "dest": "id13",
    "count": 2283,
    "borderPoint": "Ghulam Khan"
  },
  {
    "origin": "id22",
    "dest": "id14",
    "count": 24668,
    "borderPoint": "Ghulam Khan"
  },
  {
    "origin": "id22",
    "dest": "id24",
    "count": 19,
    "borderPoint": "Ghulam Khan"
  },
  {
    "origin": "id22",
    "dest": "id25",
    "count": 10,
    "borderPoint": "Ghulam Khan"
  },
  {
    "origin": "id22",
    "dest": "id26",
    "count": 10,
    "borderPoint": "Ghulam Khan"
  },
  {
    "origin": "id22",
    "dest": "id21",
    "count": 10,
    "borderPoint": "Ghulam Khan"
  },
  {
    "origin": "id22",
    "dest": "id4",
    "count": 10,
    "borderPoint": "Ghulam Khan"
  },
  {
    "origin": "id27",
    "dest": "id9",
    "count": 63924,
    "borderPoint": "Islam Qala - Taybad"
  },
  {
    "origin": "id27",
    "dest": "id28",
    "count": 12084,
    "borderPoint": "Islam Qala - Taybad"
  },
  {
    "origin": "id27",
    "dest": "id29",
    "count": 16482,
    "borderPoint": "Islam Qala - Taybad"
  },
  {
    "origin": "id27",
    "dest": "id10",
    "count": 4982,
    "borderPoint": "Islam Qala - Taybad"
  },
  {
    "origin": "id27",
    "dest": "id11",
    "count": 2550,
    "borderPoint": "Islam Qala - Taybad"
  },
  {
    "origin": "id27",
    "dest": "id18",
    "count": 6830,
    "borderPoint": "Islam Qala - Taybad"
  },
  {
    "origin": "id27",
    "dest": "id1",
    "count": 2238,
    "borderPoint": "Islam Qala - Taybad"
  },
  {
    "origin": "id27",
    "dest": "id30",
    "count": 2900,
    "borderPoint": "Islam Qala - Taybad"
  },
  {
    "origin": "id27",
    "dest": "id2",
    "count": 26834,
    "borderPoint": "Islam Qala - Taybad"
  },
  {
    "origin": "id27",
    "dest": "id23",
    "count": 9224,
    "borderPoint": "Islam Qala - Taybad"
  },
  {
    "origin": "id27",
    "dest": "id3",
    "count": 12570,
    "borderPoint": "Islam Qala - Taybad"
  },
  {
    "origin": "id27",
    "dest": "id12",
    "count": 312,
    "borderPoint": "Islam Qala - Taybad"
  },
  {
    "origin": "id27",
    "dest": "id13",
    "count": 1246,
    "borderPoint": "Islam Qala - Taybad"
  },
  {
    "origin": "id27",
    "dest": "id14",
    "count": 448,
    "borderPoint": "Islam Qala - Taybad"
  },
  {
    "origin": "id27",
    "dest": "id24",
    "count": 1226,
    "borderPoint": "Islam Qala - Taybad"
  },
  {
    "origin": "id27",
    "dest": "id31",
    "count": 176,
    "borderPoint": "Islam Qala - Taybad"
  },
  {
    "origin": "id27",
    "dest": "id15",
    "count": 17454,
    "borderPoint": "Islam Qala - Taybad"
  },
  {
    "origin": "id27",
    "dest": "id32",
    "count": 20782,
    "borderPoint": "Islam Qala - Taybad"
  },
  {
    "origin": "id27",
    "dest": "id25",
    "count": 23370,
    "borderPoint": "Islam Qala - Taybad"
  },
  {
    "origin": "id27",
    "dest": "id33",
    "count": 4904,
    "borderPoint": "Islam Qala - Taybad"
  },
  {
    "origin": "id27",
    "dest": "id16",
    "count": 36602,
    "borderPoint": "Islam Qala - Taybad"
  },
  {
    "origin": "id27",
    "dest": "id34",
    "count": 18740,
    "borderPoint": "Islam Qala - Taybad"
  },
  {
    "origin": "id27",
    "dest": "id26",
    "count": 15820,
    "borderPoint": "Islam Qala - Taybad"
  },
  {
    "origin": "id27",
    "dest": "id35",
    "count": 13116,
    "borderPoint": "Islam Qala - Taybad"
  },
  {
    "origin": "id27",
    "dest": "id19",
    "count": 1538,
    "borderPoint": "Islam Qala - Taybad"
  },
  {
    "origin": "id27",
    "dest": "id20",
    "count": 928,
    "borderPoint": "Islam Qala - Taybad"
  },
  {
    "origin": "id27",
    "dest": "id21",
    "count": 1966,
    "borderPoint": "Islam Qala - Taybad"
  },
  {
    "origin": "id27",
    "dest": "id36",
    "count": 9632,
    "borderPoint": "Islam Qala - Taybad"
  },
  {
    "origin": "id27",
    "dest": "id37",
    "count": 33606,
    "borderPoint": "Islam Qala - Taybad"
  },
  {
    "origin": "id27",
    "dest": "id4",
    "count": 1868,
    "borderPoint": "Islam Qala - Taybad"
  },
  {
    "origin": "id27",
    "dest": "id38",
    "count": 19148,
    "borderPoint": "Islam Qala - Taybad"
  },
  {
    "origin": "id27",
    "dest": "id5",
    "count": 129306,
    "borderPoint": "Islam Qala - Taybad"
  },
  {
    "origin": "id27",
    "dest": "id6",
    "count": 2510,
    "borderPoint": "Islam Qala - Taybad"
  },
  {
    "origin": "id27",
    "dest": "id7",
    "count": 1654,
    "borderPoint": "Islam Qala - Taybad"
  },
  {
    "origin": "id39",
    "dest": "id11",
    "count": 8,
    "borderPoint": "Pathan"
  },
  {
    "origin": "id39",
    "dest": "id3",
    "count": 6,
    "borderPoint": "Pathan"
  },
  {
    "origin": "id39",
    "dest": "id12",
    "count": 2,
    "borderPoint": "Pathan"
  },
  {
    "origin": "id39",
    "dest": "id13",
    "count": 48,
    "borderPoint": "Pathan"
  },
  {
    "origin": "id39",
    "dest": "id14",
    "count": 48,
    "borderPoint": "Pathan"
  },
  {
    "origin": "id40",
    "dest": "id9",
    "count": 4608,
    "borderPoint": "Spin Boldak \u2013  Chaman"
  },
  {
    "origin": "id40",
    "dest": "id28",
    "count": 156,
    "borderPoint": "Spin Boldak \u2013  Chaman"
  },
  {
    "origin": "id40",
    "dest": "id29",
    "count": 350,
    "borderPoint": "Spin Boldak \u2013  Chaman"
  },
  {
    "origin": "id40",
    "dest": "id10",
    "count": 1516,
    "borderPoint": "Spin Boldak \u2013  Chaman"
  },
  {
    "origin": "id40",
    "dest": "id11",
    "count": 516,
    "borderPoint": "Spin Boldak \u2013  Chaman"
  },
  {
    "origin": "id40",
    "dest": "id18",
    "count": 380,
    "borderPoint": "Spin Boldak \u2013  Chaman"
  },
  {
    "origin": "id40",
    "dest": "id1",
    "count": 156,
    "borderPoint": "Spin Boldak \u2013  Chaman"
  },
  {
    "origin": "id40",
    "dest": "id2",
    "count": 1604,
    "borderPoint": "Spin Boldak \u2013  Chaman"
  },
  {
    "origin": "id40",
    "dest": "id23",
    "count": 156,
    "borderPoint": "Spin Boldak \u2013  Chaman"
  },
  {
    "origin": "id40",
    "dest": "id3",
    "count": 11686,
    "borderPoint": "Spin Boldak \u2013  Chaman"
  },
  {
    "origin": "id40",
    "dest": "id12",
    "count": 2692,
    "borderPoint": "Spin Boldak \u2013  Chaman"
  },
  {
    "origin": "id40",
    "dest": "id13",
    "count": 680,
    "borderPoint": "Spin Boldak \u2013  Chaman"
  },
  {
    "origin": "id40",
    "dest": "id14",
    "count": 330,
    "borderPoint": "Spin Boldak \u2013  Chaman"
  },
  {
    "origin": "id40",
    "dest": "id24",
    "count": 106,
    "borderPoint": "Spin Boldak \u2013  Chaman"
  },
  {
    "origin": "id40",
    "dest": "id15",
    "count": 156,
    "borderPoint": "Spin Boldak \u2013  Chaman"
  },
  {
    "origin": "id40",
    "dest": "id32",
    "count": 763,
    "borderPoint": "Spin Boldak \u2013  Chaman"
  },
  {
    "origin": "id40",
    "dest": "id25",
    "count": 4278,
    "borderPoint": "Spin Boldak \u2013  Chaman"
  },
  {
    "origin": "id40",
    "dest": "id33",
    "count": 350,
    "borderPoint": "Spin Boldak \u2013  Chaman"
  },
  {
    "origin": "id40",
    "dest": "id16",
    "count": 816,
    "borderPoint": "Spin Boldak \u2013  Chaman"
  },
  {
    "origin": "id40",
    "dest": "id34",
    "count": 1448,
    "borderPoint": "Spin Boldak \u2013  Chaman"
  },
  {
    "origin": "id40",
    "dest": "id26",
    "count": 272,
    "borderPoint": "Spin Boldak \u2013  Chaman"
  },
  {
    "origin": "id40",
    "dest": "id35",
    "count": 806,
    "borderPoint": "Spin Boldak \u2013  Chaman"
  },
  {
    "origin": "id40",
    "dest": "id19",
    "count": 7942,
    "borderPoint": "Spin Boldak \u2013  Chaman"
  },
  {
    "origin": "id40",
    "dest": "id20",
    "count": 7116,
    "borderPoint": "Spin Boldak \u2013  Chaman"
  },
  {
    "origin": "id40",
    "dest": "id21",
    "count": 30778,
    "borderPoint": "Spin Boldak \u2013  Chaman"
  },
  {
    "origin": "id40",
    "dest": "id36",
    "count": 1420,
    "borderPoint": "Spin Boldak \u2013  Chaman"
  },
  {
    "origin": "id40",
    "dest": "id37",
    "count": 602,
    "borderPoint": "Spin Boldak \u2013  Chaman"
  },
  {
    "origin": "id40",
    "dest": "id4",
    "count": 8788,
    "borderPoint": "Spin Boldak \u2013  Chaman"
  },
  {
    "origin": "id40",
    "dest": "id38",
    "count": 398,
    "borderPoint": "Spin Boldak \u2013  Chaman"
  },
  {
    "origin": "id40",
    "dest": "id5",
    "count": 6114,
    "borderPoint": "Spin Boldak \u2013  Chaman"
  },
  {
    "origin": "id40",
    "dest": "id6",
    "count": 2470,
    "borderPoint": "Spin Boldak \u2013  Chaman"
  },
  {
    "origin": "id40",
    "dest": "id7",
    "count": 836,
    "borderPoint": "Spin Boldak \u2013  Chaman"
  },
  {
    "origin": "id41",
    "dest": "id9",
    "count": 97882,
    "borderPoint": "Torkham \u2013 Bab-i-Pakistan"
  },
  {
    "origin": "id41",
    "dest": "id28",
    "count": 4666,
    "borderPoint": "Torkham \u2013 Bab-i-Pakistan"
  },
  {
    "origin": "id41",
    "dest": "id29",
    "count": 5068,
    "borderPoint": "Torkham \u2013 Bab-i-Pakistan"
  },
  {
    "origin": "id41",
    "dest": "id10",
    "count": 3156,
    "borderPoint": "Torkham \u2013 Bab-i-Pakistan"
  },
  {
    "origin": "id41",
    "dest": "id11",
    "count": 9892,
    "borderPoint": "Torkham \u2013 Bab-i-Pakistan"
  },
  {
    "origin": "id41",
    "dest": "id18",
    "count": 132730,
    "borderPoint": "Torkham \u2013 Bab-i-Pakistan"
  },
  {
    "origin": "id41",
    "dest": "id1",
    "count": 17976,
    "borderPoint": "Torkham \u2013 Bab-i-Pakistan"
  },
  {
    "origin": "id41",
    "dest": "id30",
    "count": 1894,
    "borderPoint": "Torkham \u2013 Bab-i-Pakistan"
  },
  {
    "origin": "id41",
    "dest": "id2",
    "count": 8822,
    "borderPoint": "Torkham \u2013 Bab-i-Pakistan"
  },
  {
    "origin": "id41",
    "dest": "id23",
    "count": 1648,
    "borderPoint": "Torkham \u2013 Bab-i-Pakistan"
  },
  {
    "origin": "id41",
    "dest": "id3",
    "count": 4086,
    "borderPoint": "Torkham \u2013 Bab-i-Pakistan"
  },
  {
    "origin": "id41",
    "dest": "id12",
    "count": 4700,
    "borderPoint": "Torkham \u2013 Bab-i-Pakistan"
  },
  {
    "origin": "id41",
    "dest": "id13",
    "count": 8384,
    "borderPoint": "Torkham \u2013 Bab-i-Pakistan"
  },
  {
    "origin": "id41",
    "dest": "id14",
    "count": 5928,
    "borderPoint": "Torkham \u2013 Bab-i-Pakistan"
  },
  {
    "origin": "id41",
    "dest": "id24",
    "count": 19766,
    "borderPoint": "Torkham \u2013 Bab-i-Pakistan"
  },
  {
    "origin": "id41",
    "dest": "id31",
    "count": 474,
    "borderPoint": "Torkham \u2013 Bab-i-Pakistan"
  },
  {
    "origin": "id41",
    "dest": "id15",
    "count": 1052,
    "borderPoint": "Torkham \u2013 Bab-i-Pakistan"
  },
  {
    "origin": "id41",
    "dest": "id32",
    "count": 1806,
    "borderPoint": "Torkham \u2013 Bab-i-Pakistan"
  },
  {
    "origin": "id41",
    "dest": "id25",
    "count": 11820,
    "borderPoint": "Torkham \u2013 Bab-i-Pakistan"
  },
  {
    "origin": "id41",
    "dest": "id33",
    "count": 1350,
    "borderPoint": "Torkham \u2013 Bab-i-Pakistan"
  },
  {
    "origin": "id41",
    "dest": "id16",
    "count": 7858,
    "borderPoint": "Torkham \u2013 Bab-i-Pakistan"
  },
  {
    "origin": "id41",
    "dest": "id34",
    "count": 176,
    "borderPoint": "Torkham \u2013 Bab-i-Pakistan"
  },
  {
    "origin": "id41",
    "dest": "id26",
    "count": 176,
    "borderPoint": "Torkham \u2013 Bab-i-Pakistan"
  },
  {
    "origin": "id41",
    "dest": "id35",
    "count": 350,
    "borderPoint": "Torkham \u2013 Bab-i-Pakistan"
  },
  {
    "origin": "id41",
    "dest": "id19",
    "count": 70,
    "borderPoint": "Torkham \u2013 Bab-i-Pakistan"
  },
  {
    "origin": "id41",
    "dest": "id20",
    "count": 106,
    "borderPoint": "Torkham \u2013 Bab-i-Pakistan"
  },
  {
    "origin": "id41",
    "dest": "id21",
    "count": 1350,
    "borderPoint": "Torkham \u2013 Bab-i-Pakistan"
  },
  {
    "origin": "id41",
    "dest": "id36",
    "count": 1614,
    "borderPoint": "Torkham \u2013 Bab-i-Pakistan"
  },
  {
    "origin": "id41",
    "dest": "id37",
    "count": 562,
    "borderPoint": "Torkham \u2013 Bab-i-Pakistan"
  },
  {
    "origin": "id41",
    "dest": "id4",
    "count": 176,
    "borderPoint": "Torkham \u2013 Bab-i-Pakistan"
  },
  {
    "origin": "id41",
    "dest": "id38",
    "count": 88,
    "borderPoint": "Torkham \u2013 Bab-i-Pakistan"
  },
  {
    "origin": "id41",
    "dest": "id5",
    "count": 5122,
    "borderPoint": "Torkham \u2013 Bab-i-Pakistan"
  },
  {
    "origin": "id41",
    "dest": "id6",
    "count": 246,
    "borderPoint": "Torkham \u2013 Bab-i-Pakistan"
  },
  {
    "origin": "id41",
    "dest": "id7",
    "count": 122,
    "borderPoint": "Torkham \u2013 Bab-i-Pakistan"
  },
  {
    "origin": "id42",
    "dest": "id9",
    "count": 20948,
    "borderPoint": "Zaranj \u2013 Milak"
  },
  {
    "origin": "id42",
    "dest": "id28",
    "count": 10134,
    "borderPoint": "Zaranj \u2013 Milak"
  },
  {
    "origin": "id42",
    "dest": "id29",
    "count": 9036,
    "borderPoint": "Zaranj \u2013 Milak"
  },
  {
    "origin": "id42",
    "dest": "id10",
    "count": 2660,
    "borderPoint": "Zaranj \u2013 Milak"
  },
  {
    "origin": "id42",
    "dest": "id11",
    "count": 2314,
    "borderPoint": "Zaranj \u2013 Milak"
  },
  {
    "origin": "id42",
    "dest": "id18",
    "count": 4916,
    "borderPoint": "Zaranj \u2013 Milak"
  },
  {
    "origin": "id42",
    "dest": "id1",
    "count": 6042,
    "borderPoint": "Zaranj \u2013 Milak"
  },
  {
    "origin": "id42",
    "dest": "id30",
    "count": 896,
    "borderPoint": "Zaranj \u2013 Milak"
  },
  {
    "origin": "id42",
    "dest": "id2",
    "count": 17898,
    "borderPoint": "Zaranj \u2013 Milak"
  },
  {
    "origin": "id42",
    "dest": "id23",
    "count": 1864,
    "borderPoint": "Zaranj \u2013 Milak"
  },
  {
    "origin": "id42",
    "dest": "id3",
    "count": 7850,
    "borderPoint": "Zaranj \u2013 Milak"
  },
  {
    "origin": "id42",
    "dest": "id12",
    "count": 1416,
    "borderPoint": "Zaranj \u2013 Milak"
  },
  {
    "origin": "id42",
    "dest": "id13",
    "count": 636,
    "borderPoint": "Zaranj \u2013 Milak"
  },
  {
    "origin": "id42",
    "dest": "id14",
    "count": 506,
    "borderPoint": "Zaranj \u2013 Milak"
  },
  {
    "origin": "id42",
    "dest": "id24",
    "count": 534,
    "borderPoint": "Zaranj \u2013 Milak"
  },
  {
    "origin": "id42",
    "dest": "id31",
    "count": 86,
    "borderPoint": "Zaranj \u2013 Milak"
  },
  {
    "origin": "id42",
    "dest": "id15",
    "count": 10236,
    "borderPoint": "Zaranj \u2013 Milak"
  },
  {
    "origin": "id42",
    "dest": "id32",
    "count": 34204,
    "borderPoint": "Zaranj \u2013 Milak"
  },
  {
    "origin": "id42",
    "dest": "id25",
    "count": 28306,
    "borderPoint": "Zaranj \u2013 Milak"
  },
  {
    "origin": "id42",
    "dest": "id33",
    "count": 3426,
    "borderPoint": "Zaranj \u2013 Milak"
  },
  {
    "origin": "id42",
    "dest": "id16",
    "count": 18258,
    "borderPoint": "Zaranj \u2013 Milak"
  },
  {
    "origin": "id42",
    "dest": "id34",
    "count": 7576,
    "borderPoint": "Zaranj \u2013 Milak"
  },
  {
    "origin": "id42",
    "dest": "id26",
    "count": 6866,
    "borderPoint": "Zaranj \u2013 Milak"
  },
  {
    "origin": "id42",
    "dest": "id35",
    "count": 3354,
    "borderPoint": "Zaranj \u2013 Milak"
  },
  {
    "origin": "id42",
    "dest": "id19",
    "count": 258,
    "borderPoint": "Zaranj \u2013 Milak"
  },
  {
    "origin": "id42",
    "dest": "id20",
    "count": 1792,
    "borderPoint": "Zaranj \u2013 Milak"
  },
  {
    "origin": "id42",
    "dest": "id21",
    "count": 2168,
    "borderPoint": "Zaranj \u2013 Milak"
  },
  {
    "origin": "id42",
    "dest": "id36",
    "count": 3888,
    "borderPoint": "Zaranj \u2013 Milak"
  },
  {
    "origin": "id42",
    "dest": "id37",
    "count": 8848,
    "borderPoint": "Zaranj \u2013 Milak"
  },
  {
    "origin": "id42",
    "dest": "id4",
    "count": 9556,
    "borderPoint": "Zaranj \u2013 Milak"
  },
  {
    "origin": "id42",
    "dest": "id38",
    "count": 8458,
    "borderPoint": "Zaranj \u2013 Milak"
  },
  {
    "origin": "id42",
    "dest": "id5",
    "count": 18086,
    "borderPoint": "Zaranj \u2013 Milak"
  },
  {
    "origin": "id42",
    "dest": "id6",
    "count": 29232,
    "borderPoint": "Zaranj \u2013 Milak"
  },
  {
    "origin": "id42",
    "dest": "id7",
    "count": 27916,
    "borderPoint": "Zaranj \u2013 Milak"
  }
];

const borderPoints = [
  "Abu Nasr Farahi",
  "Angor ada",
  "Bahramcha",
  "Ghulam Khan",
  "Islam Qala - Taybad",
  "Pathan",
  "Spin Boldak \u2013  Chaman",
  "Torkham \u2013 Bab-i-Pakistan",
  "Zaranj \u2013 Milak"
];