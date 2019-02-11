function mapOil(ldocument){

  var myNode = document.getElementById("map");
  myNode.innerHTML = '';

  var election = new Datamap({
  scope: 'usa',
  element: ldocument.getElementById('map'),
  geographyConfig: {
    highlightBorderColor: '#FFFFFF',
    popupTemplate: function(geography, data) {
      return '<div style="color:black; padding:10px; font-weight:bold;", class="hoverinfo">' + geography.properties.name + ': ' +  data.Oil + ' '
    },
    highlightBorderWidth: 3,
    highlightFillColor: '#ff1d25',
  },

  fills: {
    5: '#ff1d25',
    4: '#ff1d25',
    3: '#ff1d25BB',
    2: '#ff1d2599',
    1: '#ff1d2540',
    defaultFill: '#ff1d2525'
  },
  data:data_function(0)
});
election.labels();
}

function mapCoal(ldocument){
  var myNode2 = document.getElementById("map");
  myNode2.innerHTML = '';

  var election = new Datamap({

    scope: 'usa',
    element: ldocument.getElementById('map'),
    geographyConfig: {
      highlightBorderColor: '#FFFFFF',
      popupTemplate: function(geography, data) {
        return '<div style="color:black; padding:10px; font-weight:bold;", class="hoverinfo">' + geography.properties.name + ': ' +  data.Coal + ' '
      },
      highlightBorderWidth: 3,
      highlightFillColor: '#f2d200',
    },

    fills: {
      5: '#f2d200',
      4: '#f2d200',
      3: '#f2d200BB',
      2: '#f2d20099',
      1: '#f2d20040',
      0: '#f2d20025',
      defaultFill: '#f2d20025'
    },
    data:data_function(1)
  });
  election.labels();

}

function mapWSH(ldocument){
  var myNode3 = document.getElementById("map");
  myNode3.innerHTML = '';

  var election = new Datamap({
    scope: 'usa',
    element: ldocument.getElementById('map'),
    geographyConfig: {
      highlightBorderColor: '#FFFFFF',
      popupTemplate: function(geography, data) {
        return '<div style="color:black; padding:10px; font-weight:bold;", class="hoverinfo">' + geography.properties.name + ': ' +  data.WSH + ' '
      },
      highlightBorderWidth: 3,
      highlightFillColor: '#27d888',
    },

    fills: {
      5: '#27d888',
      4: '#27d888',
      3: '#27d888BB',
      2: '#27d88899',
      1: '#27d88840',
      0: '#27d88825',
      defaultFill: '#27d88825'
    },
    data:data_function(2)
  });
  election.labels();

}

function mapNuclear(ldocument){
  var myNode4 = document.getElementById("map");
  myNode4.innerHTML = '';

  var election = new Datamap({
    scope: 'usa',
    element: ldocument.getElementById('map'),
    geographyConfig: {
      highlightBorderColor: '#FFFFFF',
      popupTemplate: function(geography, data) {
        return '<div style="color:black; padding:10px; font-weight:bold;", class="hoverinfo">' + geography.properties.name + ': ' +  data.Nuclear + ' '
      },
      highlightBorderWidth: 3,
      highlightFillColor: '#f22f9d',
    },

    fills: {
      5: '#f22f9d',
      4: '#f22f9d',
      3: '#f22f9dBB',
      2: '#f22f9d99',
      1: '#f22f9d40',
      0: '#f22f9d25',
      defaultFill: '#f22f9d25'
    },
    data:data_function(3)
  });
  election.labels();

}

function mapOther(ldocument){
  var myNode5 = document.getElementById("map");
  myNode5.innerHTML = '';

  var election = new Datamap({
    scope: 'usa',
    element: ldocument.getElementById('map'),
    geographyConfig: {
      highlightBorderColor: '#FFFFFF',
      popupTemplate: function(geography, data) {
        return '<div style="color:black; padding:10px; font-weight:bold;", class="hoverinfo">' + geography.properties.name + ': ' +  data.Other + ' '
      },
      highlightBorderWidth: 3,
      highlightFillColor: '#808080',
    },

    fills: {
      5: '#808080',
      4: '#808080',
      3: '#808080',
      2: '#808080',
      1: '#808080BB',
      0: '#80808025',
      defaultFill: '#80808025'
    },
    data:data_function(4)
  });
  election.labels();

}


function data_function(value){
   if (value == 0){
     return {
       "WA":
       {
         "fillKey": 0 ,
         "Oil": "9.38%" ,
         "Coal": "4.74%" ,
         "WSH": "76.87%" ,
         "Nuclear": "7.01%" ,
         "Other": "1.99%" ,
       },
       "DE":
       {
         "fillKey": 5 ,
         "Oil": "90.03%" ,
         "Coal": "4.79%" ,
         "WSH": "0.74%" ,
         "Nuclear": "0%" ,
         "Other": "4.45%" ,
       },
       "DC":
       {
         "fillKey": 2 ,
         "Oil": "29.47%" ,
         "Coal": "0%" ,
         "WSH": "0%" ,
         "Nuclear": "0%" ,
         "Other": "70.53%" ,
       },
       "WI":
       {
         "fillKey": 1 ,
         "Oil": "21.19%" ,
         "Coal": "55.07%" ,
         "WSH": "6.63%" ,
         "Nuclear": "14.82%" ,
         "Other": "2.28%" ,
       },
       "WV":
       {
         "fillKey": 0 ,
         "Oil": "2.24%" ,
         "Coal": "93.17%" ,
         "WSH": "4.55%" ,
         "Nuclear": "0%" ,
         "Other": "0.03%" ,
       },
       "HI":
       {
         "fillKey": 3 ,
         "Oil": "67.61%" ,
         "Coal": "14.02%" ,
         "WSH": "7.86%" ,
         "Nuclear": "0%" ,
         "Other": "10.5%" ,
       },
       "FL":
       {
         "fillKey": 3 ,
         "Oil": "68.18%" ,
         "Coal": "15.73%" ,
         "WSH": "0.46%" ,
         "Nuclear": "12.23%" ,
         "Other": "3.39%" ,
       },
       "WY":
       {
         "fillKey": 0 ,
         "Oil": "1.76%" ,
         "Coal": "85.72%" ,
         "WSH": "11.64%" ,
         "Nuclear": "0%" ,
         "Other": "0.87%" ,
       },
       "NH":
       {
         "fillKey": 1 ,
         "Oil": "21.12%" ,
         "Coal": "1.65%" ,
         "WSH": "10.46%" ,
         "Nuclear": "57.26%" ,
         "Other": "9.51%" ,
       },
       "US-Total":
       {
         "fillKey": 2 ,
         "Oil": "32.67%" ,
         "Coal": "29.89%" ,
         "WSH": "15.06%" ,
         "Nuclear": "19.95%" ,
         "Other": "2.42%" ,
       },
       "NJ":
       {
         "fillKey": 3 ,
         "Oil": "50.06%" ,
         "Coal": "1.61%" ,
         "WSH": "1.27%" ,
         "Nuclear": "44.99%" ,
         "Other": "2.08%" ,
       },
       "NM":
       {
         "fillKey": 2 ,
         "Oil": "27.3%" ,
         "Coal": "54.81%" ,
         "WSH": "17.81%" ,
         "Nuclear": "0%" ,
         "Other": "0.09%" ,
       },
       "TX":
       {
         "fillKey": 2 ,
         "Oil": "45.21%" ,
         "Coal": "29.74%" ,
         "WSH": "15.52%" ,
         "Nuclear": "8.52%" ,
         "Other": "1.02%" ,
       },
       "LA":
       {
         "fillKey": 3 ,
         "Oil": "65.03%" ,
         "Coal": "12.6%" ,
         "WSH": "0.93%" ,
         "Nuclear": "15.77%" ,
         "Other": "5.67%" ,
       },
       "NC":
       {
         "fillKey": 2 ,
         "Oil": "30.24%" ,
         "Coal": "26.82%" ,
         "WSH": "7.32%" ,
         "Nuclear": "32.98%" ,
         "Other": "2.64%" ,
       },
       "ND":
       {
         "fillKey": 0 ,
         "Oil": "1.72%" ,
         "Coal": "64.47%" ,
         "WSH": "33.59%" ,
         "Nuclear": "0%" ,
         "Other": "0.22%" ,
       },
       "NE":
       {
         "fillKey": 0 ,
         "Oil": "1.8%" ,
         "Coal": "59.8%" ,
         "WSH": "18.61%" ,
         "Nuclear": "19.52%" ,
         "Other": "0.27%" ,
       },
       "TN":
       {
         "fillKey": 1 ,
         "Oil": "13.15%" ,
         "Coal": "35.06%" ,
         "WSH": "11.16%" ,
         "Nuclear": "40.25%" ,
         "Other": "0.37%" ,
       },
       "NY":
       {
         "fillKey": 2 ,
         "Oil": "37.38%" ,
         "Coal": "0.6%" ,
         "WSH": "26.91%" ,
         "Nuclear": "32.93%" ,
         "Other": "2.18%" ,
       },
       "PA":
       {
         "fillKey": 2 ,
         "Oil": "34.11%" ,
         "Coal": "22.3%" ,
         "WSH": "3.17%" ,
         "Nuclear": "38.94%" ,
         "Other": "1.48%" ,
       },
       "CA":
       {
         "fillKey": 2 ,
         "Oil": "42.88%" ,
         "Coal": "0.14%" ,
         "WSH": "38.58%" ,
         "Nuclear": "8.68%" ,
         "Other": "9.72%" ,
       },
       "NV":
       {
         "fillKey": 3 ,
         "Oil": "69.72%" ,
         "Coal": "4.88%" ,
         "WSH": "16.55%" ,
         "Nuclear": "0%" ,
         "Other": "8.85%" ,
       },
       "VA":
       {
         "fillKey": 2 ,
         "Oil": "49.72%" ,
         "Coal": "11.86%" ,
         "WSH": "1.58%" ,
         "Nuclear": "33.79%" ,
         "Other": "3.04%" ,
       },
       "CO":
       {
         "fillKey": 1 ,
         "Oil": "23.29%" ,
         "Coal": "54.31%" ,
         "WSH": "22.59%" ,
         "Nuclear": "0%" ,
         "Other": "-0.19%" ,
       },
       "AK":
       {
         "fillKey": 3 ,
         "Oil": "63.34%" ,
         "Coal": "8.55%" ,
         "WSH": "27.48%" ,
         "Nuclear": "0%" ,
         "Other": "0.63%" ,
       },
       "AL":
       {
         "fillKey": 2 ,
         "Oil": "37.89%" ,
         "Coal": "22.46%" ,
         "WSH": "6.73%" ,
         "Nuclear": "30.47%" ,
         "Other": "2.46%" ,
       },
       "AR":
       {
         "fillKey": 2 ,
         "Oil": "28.57%" ,
         "Coal": "43.25%" ,
         "WSH": "4.89%" ,
         "Nuclear": "20.88%" ,
         "Other": "2.4%" ,
       },
       "VT":
       {
         "fillKey": 0 ,
         "Oil": "0.41%" ,
         "Coal": "0%" ,
         "WSH": "78.66%" ,
         "Nuclear": "0%" ,
         "Other": "20.91%" ,
       },
       "IL":
       {
         "fillKey": 0 ,
         "Oil": "8.21%" ,
         "Coal": "31.58%" ,
         "WSH": "6.78%" ,
         "Nuclear": "52.94%" ,
         "Other": "0.5%" ,
       },
       "GA":
       {
         "fillKey": 2 ,
         "Oil": "41.59%" ,
         "Coal": "25.49%" ,
         "WSH": "3.45%" ,
         "Nuclear": "26.45%" ,
         "Other": "3.03%" ,
       },
       "IN":
       {
         "fillKey": 1 ,
         "Oil": "18.3%" ,
         "Coal": "73.17%" ,
         "WSH": "5.73%" ,
         "Nuclear": "0%" ,
         "Other": "2.8%" ,
       },
       "IA":
       {
         "fillKey": 0 ,
         "Oil": "8.14%" ,
         "Coal": "43.79%" ,
         "WSH": "38.71%" ,
         "Nuclear": "9.0%" ,
         "Other": "0.36%" ,
       },
       "OK":
       {
         "fillKey": 2 ,
         "Oil": "41.32%" ,
         "Coal": "23.56%" ,
         "WSH": "34.81%" ,
         "Nuclear": "0%" ,
         "Other": "0.31%" ,
       },
       "AZ":
       {
         "fillKey": 2 ,
         "Oil": "28.0%" ,
         "Coal": "29.66%" ,
         "WSH": "11.66%" ,
         "Nuclear": "30.55%" ,
         "Other": "0.13%" ,
       },
       "ID":
       {
         "fillKey": 1 ,
         "Oil": "17.7%" ,
         "Coal": "0.14%" ,
         "WSH": "78.61%" ,
         "Nuclear": "0%" ,
         "Other": "3.55%" ,
       },
       "CT":
       {
         "fillKey": 2 ,
         "Oil": "46.7%" ,
         "Coal": "0.57%" ,
         "WSH": "1.12%" ,
         "Nuclear": "47.74%" ,
         "Other": "3.88%" ,
       },
       "ME":
       {
         "fillKey": 1 ,
         "Oil": "21.04%" ,
         "Coal": "0.6%" ,
         "WSH": "50.84%" ,
         "Nuclear": "0%" ,
         "Other": "27.52%" ,
       },
       "MD":
       {
         "fillKey": 1 ,
         "Oil": "20.03%" ,
         "Coal": "24.96%" ,
         "WSH": "8.19%" ,
         "Nuclear": "44.3%" ,
         "Other": "2.51%" ,
       },
       "MA":
       {
         "fillKey": 3 ,
         "Oil": "69.61%" ,
         "Coal": "3.53%" ,
         "WSH": "6.39%" ,
         "Nuclear": "15.67%" ,
         "Other": "4.8%" ,
       },
       "OH":
       {
         "fillKey": 2 ,
         "Oil": "25.13%" ,
         "Coal": "57.17%" ,
         "WSH": "1.65%" ,
         "Nuclear": "14.8%" ,
         "Other": "1.27%" ,
       },
       "UT":
       {
         "fillKey": 1 ,
         "Oil": "15.79%" ,
         "Coal": "70.54%" ,
         "WSH": "11.66%" ,
         "Nuclear": "0%" ,
         "Other": "2.01%" ,
       },
       "MO":
       {
         "fillKey": 0 ,
         "Oil": "6.22%" ,
         "Coal": "79.8%" ,
         "WSH": "3.87%" ,
         "Nuclear": "9.81%" ,
         "Other": "0.29%" ,
       },
       "MN":
       {
         "fillKey": 1 ,
         "Oil": "11.48%" ,
         "Coal": "38.78%" ,
         "WSH": "22.11%" ,
         "Nuclear": "23.67%" ,
         "Other": "3.96%" ,
       },
       "MI":
       {
         "fillKey": 1 ,
         "Oil": "24.26%" ,
         "Coal": "37.41%" ,
         "WSH": "6.17%" ,
         "Nuclear": "28.83%" ,
         "Other": "3.32%" ,
       },
       "RI":
       {
         "fillKey": 5 ,
         "Oil": "95.17%" ,
         "Coal": "0.0%" ,
         "WSH": "2.17%" ,
         "Nuclear": "0%" ,
         "Other": "2.67%" ,
       },
       "KS":
       {
         "fillKey": 0 ,
         "Oil": "4.32%" ,
         "Coal": "38.07%" ,
         "WSH": "36.58%" ,
         "Nuclear": "20.91%" ,
         "Other": "0.12%" ,
       },
       "MT":
       {
         "fillKey": 0 ,
         "Oil": "3.11%" ,
         "Coal": "49.13%" ,
         "WSH": "46.48%" ,
         "Nuclear": "0%" ,
         "Other": "1.31%" ,
       },
       "MS":
       {
         "fillKey": 5 ,
         "Oil": "77.3%" ,
         "Coal": "7.75%" ,
         "WSH": "0.14%" ,
         "Nuclear": "12.33%" ,
         "Other": "2.48%" ,
       },
       "SC":
       {
         "fillKey": 1 ,
         "Oil": "18.53%" ,
         "Coal": "19.5%" ,
         "WSH": "2.06%" ,
         "Nuclear": "58.38%" ,
         "Other": "1.51%" ,
       },
       "KY":
       {
         "fillKey": 1 ,
         "Oil": "14.86%" ,
         "Coal": "78.21%" ,
         "WSH": "6.19%" ,
         "Nuclear": "0%" ,
         "Other": "0.74%" ,
       },
       "OR":
       {
         "fillKey": 1 ,
         "Oil": "24.04%" ,
         "Coal": "2.76%" ,
         "WSH": "71.3%" ,
         "Nuclear": "0%" ,
         "Other": "1.91%" ,
       },
       "SD":
       {
         "fillKey": 0 ,
         "Oil": "6.01%" ,
         "Coal": "18.86%" ,
         "WSH": "75.13%" ,
         "Nuclear": "0%" ,
         "Other": "0.0%" ,
       },

     };
   }
   if (value == 1){
     return {
       "WA":
       {
         "fillKey": 0 ,
         "Oil": "9.38%" ,
         "Coal": "4.74%" ,
         "WSH": "76.87%" ,
         "Nuclear": "7.01%" ,
         "Other": "1.99%" ,
       },
       "DE":
       {
         "fillKey": 0 ,
         "Oil": "90.03%" ,
         "Coal": "4.79%" ,
         "WSH": "0.74%" ,
         "Nuclear": "0%" ,
         "Other": "4.45%" ,
       },
       "DC":
       {
         "fillKey": 0 ,
         "Oil": "29.47%" ,
         "Coal": "0%" ,
         "WSH": "0%" ,
         "Nuclear": "0%" ,
         "Other": "70.53%" ,
       },
       "WI":
       {
         "fillKey": 3 ,
         "Oil": "21.19%" ,
         "Coal": "55.07%" ,
         "WSH": "6.63%" ,
         "Nuclear": "14.82%" ,
         "Other": "2.28%" ,
       },
       "WV":
       {
         "fillKey": 5 ,
         "Oil": "2.24%" ,
         "Coal": "93.17%" ,
         "WSH": "4.55%" ,
         "Nuclear": "0%" ,
         "Other": "0.03%" ,
       },
       "HI":
       {
         "fillKey": 1 ,
         "Oil": "67.61%" ,
         "Coal": "14.02%" ,
         "WSH": "7.86%" ,
         "Nuclear": "0%" ,
         "Other": "10.5%" ,
       },
       "FL":
       {
         "fillKey": 1 ,
         "Oil": "68.18%" ,
         "Coal": "15.73%" ,
         "WSH": "0.46%" ,
         "Nuclear": "12.23%" ,
         "Other": "3.39%" ,
       },
       "WY":
       {
         "fillKey": 5 ,
         "Oil": "1.76%" ,
         "Coal": "85.72%" ,
         "WSH": "11.64%" ,
         "Nuclear": "0%" ,
         "Other": "0.87%" ,
       },
       "NH":
       {
         "fillKey": 0 ,
         "Oil": "21.12%" ,
         "Coal": "1.65%" ,
         "WSH": "10.46%" ,
         "Nuclear": "57.26%" ,
         "Other": "9.51%" ,
       },
       "US-Total":
       {
         "fillKey": 2 ,
         "Oil": "32.67%" ,
         "Coal": "29.89%" ,
         "WSH": "15.06%" ,
         "Nuclear": "19.95%" ,
         "Other": "2.42%" ,
       },
       "NJ":
       {
         "fillKey": 0 ,
         "Oil": "50.06%" ,
         "Coal": "1.61%" ,
         "WSH": "1.27%" ,
         "Nuclear": "44.99%" ,
         "Other": "2.08%" ,
       },
       "NM":
       {
         "fillKey": 3 ,
         "Oil": "27.3%" ,
         "Coal": "54.81%" ,
         "WSH": "17.81%" ,
         "Nuclear": "0%" ,
         "Other": "0.09%" ,
       },
       "TX":
       {
         "fillKey": 2 ,
         "Oil": "45.21%" ,
         "Coal": "29.74%" ,
         "WSH": "15.52%" ,
         "Nuclear": "8.52%" ,
         "Other": "1.02%" ,
       },
       "LA":
       {
         "fillKey": 1 ,
         "Oil": "65.03%" ,
         "Coal": "12.6%" ,
         "WSH": "0.93%" ,
         "Nuclear": "15.77%" ,
         "Other": "5.67%" ,
       },
       "NC":
       {
         "fillKey": 2 ,
         "Oil": "30.24%" ,
         "Coal": "26.82%" ,
         "WSH": "7.32%" ,
         "Nuclear": "32.98%" ,
         "Other": "2.64%" ,
       },
       "ND":
       {
         "fillKey": 3 ,
         "Oil": "1.72%" ,
         "Coal": "64.47%" ,
         "WSH": "33.59%" ,
         "Nuclear": "0%" ,
         "Other": "0.22%" ,
       },
       "NE":
       {
         "fillKey": 3 ,
         "Oil": "1.8%" ,
         "Coal": "59.8%" ,
         "WSH": "18.61%" ,
         "Nuclear": "19.52%" ,
         "Other": "0.27%" ,
       },
       "TN":
       {
         "fillKey": 2 ,
         "Oil": "13.15%" ,
         "Coal": "35.06%" ,
         "WSH": "11.16%" ,
         "Nuclear": "40.25%" ,
         "Other": "0.37%" ,
       },
       "NY":
       {
         "fillKey": 0 ,
         "Oil": "37.38%" ,
         "Coal": "0.6%" ,
         "WSH": "26.91%" ,
         "Nuclear": "32.93%" ,
         "Other": "2.18%" ,
       },
       "PA":
       {
         "fillKey": 1 ,
         "Oil": "34.11%" ,
         "Coal": "22.3%" ,
         "WSH": "3.17%" ,
         "Nuclear": "38.94%" ,
         "Other": "1.48%" ,
       },
       "CA":
       {
         "fillKey": 0 ,
         "Oil": "42.88%" ,
         "Coal": "0.14%" ,
         "WSH": "38.58%" ,
         "Nuclear": "8.68%" ,
         "Other": "9.72%" ,
       },
       "NV":
       {
         "fillKey": 0 ,
         "Oil": "69.72%" ,
         "Coal": "4.88%" ,
         "WSH": "16.55%" ,
         "Nuclear": "0%" ,
         "Other": "8.85%" ,
       },
       "VA":
       {
         "fillKey": 1 ,
         "Oil": "49.72%" ,
         "Coal": "11.86%" ,
         "WSH": "1.58%" ,
         "Nuclear": "33.79%" ,
         "Other": "3.04%" ,
       },
       "CO":
       {
         "fillKey": 3 ,
         "Oil": "23.29%" ,
         "Coal": "54.31%" ,
         "WSH": "22.59%" ,
         "Nuclear": "0%" ,
         "Other": "-0.19%" ,
       },
       "AK":
       {
         "fillKey": 0 ,
         "Oil": "63.34%" ,
         "Coal": "8.55%" ,
         "WSH": "27.48%" ,
         "Nuclear": "0%" ,
         "Other": "0.63%" ,
       },
       "AL":
       {
         "fillKey": 1 ,
         "Oil": "37.89%" ,
         "Coal": "22.46%" ,
         "WSH": "6.73%" ,
         "Nuclear": "30.47%" ,
         "Other": "2.46%" ,
       },
       "AR":
       {
         "fillKey": 2 ,
         "Oil": "28.57%" ,
         "Coal": "43.25%" ,
         "WSH": "4.89%" ,
         "Nuclear": "20.88%" ,
         "Other": "2.4%" ,
       },
       "VT":
       {
         "fillKey": 0 ,
         "Oil": "0.41%" ,
         "Coal": "0%" ,
         "WSH": "78.66%" ,
         "Nuclear": "0%" ,
         "Other": "20.91%" ,
       },
       "IL":
       {
         "fillKey": 2 ,
         "Oil": "8.21%" ,
         "Coal": "31.58%" ,
         "WSH": "6.78%" ,
         "Nuclear": "52.94%" ,
         "Other": "0.5%" ,
       },
       "GA":
       {
         "fillKey": 2 ,
         "Oil": "41.59%" ,
         "Coal": "25.49%" ,
         "WSH": "3.45%" ,
         "Nuclear": "26.45%" ,
         "Other": "3.03%" ,
       },
       "IN":
       {
         "fillKey": 3 ,
         "Oil": "18.3%" ,
         "Coal": "73.17%" ,
         "WSH": "5.73%" ,
         "Nuclear": "0%" ,
         "Other": "2.8%" ,
       },
       "IA":
       {
         "fillKey": 2 ,
         "Oil": "8.14%" ,
         "Coal": "43.79%" ,
         "WSH": "38.71%" ,
         "Nuclear": "9.0%" ,
         "Other": "0.36%" ,
       },
       "OK":
       {
         "fillKey": 1 ,
         "Oil": "41.32%" ,
         "Coal": "23.56%" ,
         "WSH": "34.81%" ,
         "Nuclear": "0%" ,
         "Other": "0.31%" ,
       },
       "AZ":
       {
         "fillKey": 2 ,
         "Oil": "28.0%" ,
         "Coal": "29.66%" ,
         "WSH": "11.66%" ,
         "Nuclear": "30.55%" ,
         "Other": "0.13%" ,
       },
       "ID":
       {
         "fillKey": 0 ,
         "Oil": "17.7%" ,
         "Coal": "0.14%" ,
         "WSH": "78.61%" ,
         "Nuclear": "0%" ,
         "Other": "3.55%" ,
       },
       "CT":
       {
         "fillKey": 0 ,
         "Oil": "46.7%" ,
         "Coal": "0.57%" ,
         "WSH": "1.12%" ,
         "Nuclear": "47.74%" ,
         "Other": "3.88%" ,
       },
       "ME":
       {
         "fillKey": 0 ,
         "Oil": "21.04%" ,
         "Coal": "0.6%" ,
         "WSH": "50.84%" ,
         "Nuclear": "0%" ,
         "Other": "27.52%" ,
       },
       "MD":
       {
         "fillKey": 1 ,
         "Oil": "20.03%" ,
         "Coal": "24.96%" ,
         "WSH": "8.19%" ,
         "Nuclear": "44.3%" ,
         "Other": "2.51%" ,
       },
       "MA":
       {
         "fillKey": 0 ,
         "Oil": "69.61%" ,
         "Coal": "3.53%" ,
         "WSH": "6.39%" ,
         "Nuclear": "15.67%" ,
         "Other": "4.8%" ,
       },
       "OH":
       {
         "fillKey": 3 ,
         "Oil": "25.13%" ,
         "Coal": "57.17%" ,
         "WSH": "1.65%" ,
         "Nuclear": "14.8%" ,
         "Other": "1.27%" ,
       },
       "UT":
       {
         "fillKey": 3 ,
         "Oil": "15.79%" ,
         "Coal": "70.54%" ,
         "WSH": "11.66%" ,
         "Nuclear": "0%" ,
         "Other": "2.01%" ,
       },
       "MO":
       {
         "fillKey": 5 ,
         "Oil": "6.22%" ,
         "Coal": "79.8%" ,
         "WSH": "3.87%" ,
         "Nuclear": "9.81%" ,
         "Other": "0.29%" ,
       },
       "MN":
       {
         "fillKey": 2 ,
         "Oil": "11.48%" ,
         "Coal": "38.78%" ,
         "WSH": "22.11%" ,
         "Nuclear": "23.67%" ,
         "Other": "3.96%" ,
       },
       "MI":
       {
         "fillKey": 2 ,
         "Oil": "24.26%" ,
         "Coal": "37.41%" ,
         "WSH": "6.17%" ,
         "Nuclear": "28.83%" ,
         "Other": "3.32%" ,
       },
       "RI":
       {
         "fillKey": 0 ,
         "Oil": "95.17%" ,
         "Coal": "0.0%" ,
         "WSH": "2.17%" ,
         "Nuclear": "0%" ,
         "Other": "2.67%" ,
       },
       "KS":
       {
         "fillKey": 2 ,
         "Oil": "4.32%" ,
         "Coal": "38.07%" ,
         "WSH": "36.58%" ,
         "Nuclear": "20.91%" ,
         "Other": "0.12%" ,
       },
       "MT":
       {
         "fillKey": 2 ,
         "Oil": "3.11%" ,
         "Coal": "49.13%" ,
         "WSH": "46.48%" ,
         "Nuclear": "0%" ,
         "Other": "1.31%" ,
       },
       "MS":
       {
         "fillKey": 0 ,
         "Oil": "77.3%" ,
         "Coal": "7.75%" ,
         "WSH": "0.14%" ,
         "Nuclear": "12.33%" ,
         "Other": "2.48%" ,
       },
       "SC":
       {
         "fillKey": 1 ,
         "Oil": "18.53%" ,
         "Coal": "19.5%" ,
         "WSH": "2.06%" ,
         "Nuclear": "58.38%" ,
         "Other": "1.51%" ,
       },
       "KY":
       {
         "fillKey": 5 ,
         "Oil": "14.86%" ,
         "Coal": "78.21%" ,
         "WSH": "6.19%" ,
         "Nuclear": "0%" ,
         "Other": "0.74%" ,
       },
       "OR":
       {
         "fillKey": 0 ,
         "Oil": "24.04%" ,
         "Coal": "2.76%" ,
         "WSH": "71.3%" ,
         "Nuclear": "0%" ,
         "Other": "1.91%" ,
       },
       "SD":
       {
         "fillKey": 1 ,
         "Oil": "6.01%" ,
         "Coal": "18.86%" ,
         "WSH": "75.13%" ,
         "Nuclear": "0%" ,
         "Other": "0.0%" ,
       },
     };
   }
   if (value == 2){
     return {
       "WA":
         {
           "fillKey": 5,
           "Oil": "9.38%",
           "Coal": "4.74%",
           "WSH": "76.87%",
           "Nuclear": "7.01%",
           "Other": "1.99%",
         },
       "DE":
         {
           "fillKey": 0,
           "Oil": "90.03%",
           "Coal": "4.79%",
           "WSH": "0.74%",
           "Nuclear": "0%",
           "Other": "4.45%",
         },
       "DC":
         {
           "fillKey": 0,
           "Oil": "29.47%",
           "Coal": "0%",
           "WSH": "0%",
           "Nuclear": "0%",
           "Other": "70.53%",
         },
       "WI":
         {
           "fillKey": 0,
           "Oil": "21.19%",
           "Coal": "55.07%",
           "WSH": "6.63%",
           "Nuclear": "14.82%",
           "Other": "2.28%",
         },
       "WV":
         {
           "fillKey": 0,
           "Oil": "2.24%",
           "Coal": "93.17%",
           "WSH": "4.55%",
           "Nuclear": "0%",
           "Other": "0.03%",
         },
       "HI":
         {
           "fillKey": 0,
           "Oil": "67.61%",
           "Coal": "14.02%",
           "WSH": "7.86%",
           "Nuclear": "0%",
           "Other": "10.5%",
         },
       "FL":
         {
           "fillKey": 0,
           "Oil": "68.18%",
           "Coal": "15.73%",
           "WSH": "0.46%",
           "Nuclear": "12.23%",
           "Other": "3.39%",
         },
       "WY":
         {
           "fillKey": 1,
           "Oil": "1.76%",
           "Coal": "85.72%",
           "WSH": "11.64%",
           "Nuclear": "0%",
           "Other": "0.87%",
         },
       "NH":
         {
           "fillKey": 1,
           "Oil": "21.12%",
           "Coal": "1.65%",
           "WSH": "10.46%",
           "Nuclear": "57.26%",
           "Other": "9.51%",
         },
       "US-Total":
         {
           "fillKey": 1,
           "Oil": "32.67%",
           "Coal": "29.89%",
           "WSH": "15.06%",
           "Nuclear": "19.95%",
           "Other": "2.42%",
         },
       "NJ":
         {
           "fillKey": 0,
           "Oil": "50.06%",
           "Coal": "1.61%",
           "WSH": "1.27%",
           "Nuclear": "44.99%",
           "Other": "2.08%",
         },
       "NM":
         {
           "fillKey": 1,
           "Oil": "27.3%",
           "Coal": "54.81%",
           "WSH": "17.81%",
           "Nuclear": "0%",
           "Other": "0.09%",
         },
       "TX":
         {
           "fillKey": 1,
           "Oil": "45.21%",
           "Coal": "29.74%",
           "WSH": "15.52%",
           "Nuclear": "8.52%",
           "Other": "1.02%",
         },
       "LA":
         {
           "fillKey": 0,
           "Oil": "65.03%",
           "Coal": "12.6%",
           "WSH": "0.93%",
           "Nuclear": "15.77%",
           "Other": "5.67%",
         },
       "NC":
         {
           "fillKey": 0,
           "Oil": "30.24%",
           "Coal": "26.82%",
           "WSH": "7.32%",
           "Nuclear": "32.98%",
           "Other": "2.64%",
         },
       "ND":
         {
           "fillKey": 2,
           "Oil": "1.72%",
           "Coal": "64.47%",
           "WSH": "33.59%",
           "Nuclear": "0%",
           "Other": "0.22%",
         },
       "NE":
         {
           "fillKey": 1,
           "Oil": "1.8%",
           "Coal": "59.8%",
           "WSH": "18.61%",
           "Nuclear": "19.52%",
           "Other": "0.27%",
         },
       "TN":
         {
           "fillKey": 1,
           "Oil": "13.15%",
           "Coal": "35.06%",
           "WSH": "11.16%",
           "Nuclear": "40.25%",
           "Other": "0.37%",
         },
       "NY":
         {
           "fillKey": 2,
           "Oil": "37.38%",
           "Coal": "0.6%",
           "WSH": "26.91%",
           "Nuclear": "32.93%",
           "Other": "2.18%",
         },
       "PA":
         {
           "fillKey": 0,
           "Oil": "34.11%",
           "Coal": "22.3%",
           "WSH": "3.17%",
           "Nuclear": "38.94%",
           "Other": "1.48%",
         },
       "CA":
         {
           "fillKey": 2,
           "Oil": "42.88%",
           "Coal": "0.14%",
           "WSH": "38.58%",
           "Nuclear": "8.68%",
           "Other": "9.72%",
         },
       "NV":
         {
           "fillKey": 1,
           "Oil": "69.72%",
           "Coal": "4.88%",
           "WSH": "16.55%",
           "Nuclear": "0%",
           "Other": "8.85%",
         },
       "VA":
         {
           "fillKey": 0,
           "Oil": "49.72%",
           "Coal": "11.86%",
           "WSH": "1.58%",
           "Nuclear": "33.79%",
           "Other": "3.04%",
         },
       "CO":
         {
           "fillKey": 1,
           "Oil": "23.29%",
           "Coal": "54.31%",
           "WSH": "22.59%",
           "Nuclear": "0%",
           "Other": "-0.19%",
         },
       "AK":
         {
           "fillKey": 2,
           "Oil": "63.34%",
           "Coal": "8.55%",
           "WSH": "27.48%",
           "Nuclear": "0%",
           "Other": "0.63%",
         },
       "AL":
         {
           "fillKey": 0,
           "Oil": "37.89%",
           "Coal": "22.46%",
           "WSH": "6.73%",
           "Nuclear": "30.47%",
           "Other": "2.46%",
         },
       "AR":
         {
           "fillKey": 0,
           "Oil": "28.57%",
           "Coal": "43.25%",
           "WSH": "4.89%",
           "Nuclear": "20.88%",
           "Other": "2.4%",
         },
       "VT":
         {
           "fillKey": 5,
           "Oil": "0.41%",
           "Coal": "0%",
           "WSH": "78.66%",
           "Nuclear": "0%",
           "Other": "20.91%",
         },
       "IL":
         {
           "fillKey": 0,
           "Oil": "8.21%",
           "Coal": "31.58%",
           "WSH": "6.78%",
           "Nuclear": "52.94%",
           "Other": "0.5%",
         },
       "GA":
         {
           "fillKey": 0,
           "Oil": "41.59%",
           "Coal": "25.49%",
           "WSH": "3.45%",
           "Nuclear": "26.45%",
           "Other": "3.03%",
         },
       "IN":
         {
           "fillKey": 0,
           "Oil": "18.3%",
           "Coal": "73.17%",
           "WSH": "5.73%",
           "Nuclear": "0%",
           "Other": "2.8%",
         },
       "IA":
         {
           "fillKey": 2,
           "Oil": "8.14%",
           "Coal": "43.79%",
           "WSH": "38.71%",
           "Nuclear": "9.0%",
           "Other": "0.36%",
         },
       "OK":
         {
           "fillKey": 2,
           "Oil": "41.32%",
           "Coal": "23.56%",
           "WSH": "34.81%",
           "Nuclear": "0%",
           "Other": "0.31%",
         },
       "AZ":
         {
           "fillKey": 1,
           "Oil": "28.0%",
           "Coal": "29.66%",
           "WSH": "11.66%",
           "Nuclear": "30.55%",
           "Other": "0.13%",
         },
       "ID":
         {
           "fillKey": 5,
           "Oil": "17.7%",
           "Coal": "0.14%",
           "WSH": "78.61%",
           "Nuclear": "0%",
           "Other": "3.55%",
         },
       "CT":
         {
           "fillKey": 0,
           "Oil": "46.7%",
           "Coal": "0.57%",
           "WSH": "1.12%",
           "Nuclear": "47.74%",
           "Other": "3.88%",
         },
       "ME":
         {
           "fillKey": 3,
           "Oil": "21.04%",
           "Coal": "0.6%",
           "WSH": "50.84%",
           "Nuclear": "0%",
           "Other": "27.52%",
         },
       "MD":
         {
           "fillKey": 0,
           "Oil": "20.03%",
           "Coal": "24.96%",
           "WSH": "8.19%",
           "Nuclear": "44.3%",
           "Other": "2.51%",
         },
       "MA":
         {
           "fillKey": 0,
           "Oil": "69.61%",
           "Coal": "3.53%",
           "WSH": "6.39%",
           "Nuclear": "15.67%",
           "Other": "4.8%",
         },
       "OH":
         {
           "fillKey": 0,
           "Oil": "25.13%",
           "Coal": "57.17%",
           "WSH": "1.65%",
           "Nuclear": "14.8%",
           "Other": "1.27%",
         },
       "UT":
         {
           "fillKey": 1,
           "Oil": "15.79%",
           "Coal": "70.54%",
           "WSH": "11.66%",
           "Nuclear": "0%",
           "Other": "2.01%",
         },
       "MO":
         {
           "fillKey": 0,
           "Oil": "6.22%",
           "Coal": "79.8%",
           "WSH": "3.87%",
           "Nuclear": "9.81%",
           "Other": "0.29%",
         },
       "MN":
         {
           "fillKey": 1,
           "Oil": "11.48%",
           "Coal": "38.78%",
           "WSH": "22.11%",
           "Nuclear": "23.67%",
           "Other": "3.96%",
         },
       "MI":
         {
           "fillKey": 0,
           "Oil": "24.26%",
           "Coal": "37.41%",
           "WSH": "6.17%",
           "Nuclear": "28.83%",
           "Other": "3.32%",
         },
       "RI":
         {
           "fillKey": 0,
           "Oil": "95.17%",
           "Coal": "0.0%",
           "WSH": "2.17%",
           "Nuclear": "0%",
           "Other": "2.67%",
         },
       "KS":
         {
           "fillKey": 2,
           "Oil": "4.32%",
           "Coal": "38.07%",
           "WSH": "36.58%",
           "Nuclear": "20.91%",
           "Other": "0.12%",
         },
       "MT":
         {
           "fillKey": 2,
           "Oil": "3.11%",
           "Coal": "49.13%",
           "WSH": "46.48%",
           "Nuclear": "0%",
           "Other": "1.31%",
         },
       "MS":
         {
           "fillKey": 0,
           "Oil": "77.3%",
           "Coal": "7.75%",
           "WSH": "0.14%",
           "Nuclear": "12.33%",
           "Other": "2.48%",
         },
       "SC":
         {
           "fillKey": 0,
           "Oil": "18.53%",
           "Coal": "19.5%",
           "WSH": "2.06%",
           "Nuclear": "58.38%",
           "Other": "1.51%",
         },
       "KY":
         {
           "fillKey": 0,
           "Oil": "14.86%",
           "Coal": "78.21%",
           "WSH": "6.19%",
           "Nuclear": "0%",
           "Other": "0.74%",
         },
       "OR":
         {
           "fillKey": 3,
           "Oil": "24.04%",
           "Coal": "2.76%",
           "WSH": "71.3%",
           "Nuclear": "0%",
           "Other": "1.91%",
         },
       "SD":
         {
           "fillKey": 5,
           "Oil": "6.01%",
           "Coal": "18.86%",
           "WSH": "75.13%",
           "Nuclear": "0%",
           "Other": "0.0%",
         },
     };
   }
   if (value == 3){
     return {
       "WA":
         {
           "fillKey": 0,
           "Oil": "9.38%",
           "Coal": "4.74%",
           "WSH": "76.87%",
           "Nuclear": "7.01%",
           "Other": "1.99%",
         },
       "DE":
         {
           "fillKey": 0,
           "Oil": "90.03%",
           "Coal": "4.79%",
           "WSH": "0.74%",
           "Nuclear": "0%",
           "Other": "4.45%",
         },
       "DC":
         {
           "fillKey": 0,
           "Oil": "29.47%",
           "Coal": "0%",
           "WSH": "0%",
           "Nuclear": "0%",
           "Other": "70.53%",
         },
       "WI":
         {
           "fillKey": 1,
           "Oil": "21.19%",
           "Coal": "55.07%",
           "WSH": "6.63%",
           "Nuclear": "14.82%",
           "Other": "2.28%",
         },
       "WV":
         {
           "fillKey": 0,
           "Oil": "2.24%",
           "Coal": "93.17%",
           "WSH": "4.55%",
           "Nuclear": "0%",
           "Other": "0.03%",
         },
       "HI":
         {
           "fillKey": 0,
           "Oil": "67.61%",
           "Coal": "14.02%",
           "WSH": "7.86%",
           "Nuclear": "0%",
           "Other": "10.5%",
         },
       "FL":
         {
           "fillKey": 1,
           "Oil": "68.18%",
           "Coal": "15.73%",
           "WSH": "0.46%",
           "Nuclear": "12.23%",
           "Other": "3.39%",
         },
       "WY":
         {
           "fillKey": 0,
           "Oil": "1.76%",
           "Coal": "85.72%",
           "WSH": "11.64%",
           "Nuclear": "0%",
           "Other": "0.87%",
         },
       "NH":
         {
           "fillKey": 3,
           "Oil": "21.12%",
           "Coal": "1.65%",
           "WSH": "10.46%",
           "Nuclear": "57.26%",
           "Other": "9.51%",
         },
       "US-Total":
         {
           "fillKey": 1,
           "Oil": "32.67%",
           "Coal": "29.89%",
           "WSH": "15.06%",
           "Nuclear": "19.95%",
           "Other": "2.42%",
         },
       "NJ":
         {
           "fillKey": 2,
           "Oil": "50.06%",
           "Coal": "1.61%",
           "WSH": "1.27%",
           "Nuclear": "44.99%",
           "Other": "2.08%",
         },
       "NM":
         {
           "fillKey": 0,
           "Oil": "27.3%",
           "Coal": "54.81%",
           "WSH": "17.81%",
           "Nuclear": "0%",
           "Other": "0.09%",
         },
       "TX":
         {
           "fillKey": 0,
           "Oil": "45.21%",
           "Coal": "29.74%",
           "WSH": "15.52%",
           "Nuclear": "8.52%",
           "Other": "1.02%",
         },
       "LA":
         {
           "fillKey": 1,
           "Oil": "65.03%",
           "Coal": "12.6%",
           "WSH": "0.93%",
           "Nuclear": "15.77%",
           "Other": "5.67%",
         },
       "NC":
         {
           "fillKey": 2,
           "Oil": "30.24%",
           "Coal": "26.82%",
           "WSH": "7.32%",
           "Nuclear": "32.98%",
           "Other": "2.64%",
         },
       "ND":
         {
           "fillKey": 0,
           "Oil": "1.72%",
           "Coal": "64.47%",
           "WSH": "33.59%",
           "Nuclear": "0%",
           "Other": "0.22%",
         },
       "NE":
         {
           "fillKey": 1,
           "Oil": "1.8%",
           "Coal": "59.8%",
           "WSH": "18.61%",
           "Nuclear": "19.52%",
           "Other": "0.27%",
         },
       "TN":
         {
           "fillKey": 2,
           "Oil": "13.15%",
           "Coal": "35.06%",
           "WSH": "11.16%",
           "Nuclear": "40.25%",
           "Other": "0.37%",
         },
       "NY":
         {
           "fillKey": 2,
           "Oil": "37.38%",
           "Coal": "0.6%",
           "WSH": "26.91%",
           "Nuclear": "32.93%",
           "Other": "2.18%",
         },
       "PA":
         {
           "fillKey": 2,
           "Oil": "34.11%",
           "Coal": "22.3%",
           "WSH": "3.17%",
           "Nuclear": "38.94%",
           "Other": "1.48%",
         },
       "CA":
         {
           "fillKey": 0,
           "Oil": "42.88%",
           "Coal": "0.14%",
           "WSH": "38.58%",
           "Nuclear": "8.68%",
           "Other": "9.72%",
         },
       "NV":
         {
           "fillKey": 0,
           "Oil": "69.72%",
           "Coal": "4.88%",
           "WSH": "16.55%",
           "Nuclear": "0%",
           "Other": "8.85%",
         },
       "VA":
         {
           "fillKey": 2,
           "Oil": "49.72%",
           "Coal": "11.86%",
           "WSH": "1.58%",
           "Nuclear": "33.79%",
           "Other": "3.04%",
         },
       "CO":
         {
           "fillKey": 0,
           "Oil": "23.29%",
           "Coal": "54.31%",
           "WSH": "22.59%",
           "Nuclear": "0%",
           "Other": "-0.19%",
         },
       "AK":
         {
           "fillKey": 0,
           "Oil": "63.34%",
           "Coal": "8.55%",
           "WSH": "27.48%",
           "Nuclear": "0%",
           "Other": "0.63%",
         },
       "AL":
         {
           "fillKey": 2,
           "Oil": "37.89%",
           "Coal": "22.46%",
           "WSH": "6.73%",
           "Nuclear": "30.47%",
           "Other": "2.46%",
         },
       "AR":
         {
           "fillKey": 1,
           "Oil": "28.57%",
           "Coal": "43.25%",
           "WSH": "4.89%",
           "Nuclear": "20.88%",
           "Other": "2.4%",
         },
       "VT":
         {
           "fillKey": 0,
           "Oil": "0.41%",
           "Coal": "0%",
           "WSH": "78.66%",
           "Nuclear": "0%",
           "Other": "20.91%",
         },
       "IL":
         {
           "fillKey": 3,
           "Oil": "8.21%",
           "Coal": "31.58%",
           "WSH": "6.78%",
           "Nuclear": "52.94%",
           "Other": "0.5%",
         },
       "GA":
         {
           "fillKey": 2,
           "Oil": "41.59%",
           "Coal": "25.49%",
           "WSH": "3.45%",
           "Nuclear": "26.45%",
           "Other": "3.03%",
         },
       "IN":
         {
           "fillKey": 0,
           "Oil": "18.3%",
           "Coal": "73.17%",
           "WSH": "5.73%",
           "Nuclear": "0%",
           "Other": "2.8%",
         },
       "IA":
         {
           "fillKey": 0,
           "Oil": "8.14%",
           "Coal": "43.79%",
           "WSH": "38.71%",
           "Nuclear": "9.0%",
           "Other": "0.36%",
         },
       "OK":
         {
           "fillKey": 0,
           "Oil": "41.32%",
           "Coal": "23.56%",
           "WSH": "34.81%",
           "Nuclear": "0%",
           "Other": "0.31%",
         },
       "AZ":
         {
           "fillKey": 2,
           "Oil": "28.0%",
           "Coal": "29.66%",
           "WSH": "11.66%",
           "Nuclear": "30.55%",
           "Other": "0.13%",
         },
       "ID":
         {
           "fillKey": 0,
           "Oil": "17.7%",
           "Coal": "0.14%",
           "WSH": "78.61%",
           "Nuclear": "0%",
           "Other": "3.55%",
         },
       "CT":
         {
           "fillKey": 2,
           "Oil": "46.7%",
           "Coal": "0.57%",
           "WSH": "1.12%",
           "Nuclear": "47.74%",
           "Other": "3.88%",
         },
       "ME":
         {
           "fillKey": 0,
           "Oil": "21.04%",
           "Coal": "0.6%",
           "WSH": "50.84%",
           "Nuclear": "0%",
           "Other": "27.52%",
         },
       "MD":
         {
           "fillKey": 2,
           "Oil": "20.03%",
           "Coal": "24.96%",
           "WSH": "8.19%",
           "Nuclear": "44.3%",
           "Other": "2.51%",
         },
       "MA":
         {
           "fillKey": 1,
           "Oil": "69.61%",
           "Coal": "3.53%",
           "WSH": "6.39%",
           "Nuclear": "15.67%",
           "Other": "4.8%",
         },
       "OH":
         {
           "fillKey": 1,
           "Oil": "25.13%",
           "Coal": "57.17%",
           "WSH": "1.65%",
           "Nuclear": "14.8%",
           "Other": "1.27%",
         },
       "UT":
         {
           "fillKey": 0,
           "Oil": "15.79%",
           "Coal": "70.54%",
           "WSH": "11.66%",
           "Nuclear": "0%",
           "Other": "2.01%",
         },
       "MO":
         {
           "fillKey": 0,
           "Oil": "6.22%",
           "Coal": "79.8%",
           "WSH": "3.87%",
           "Nuclear": "9.81%",
           "Other": "0.29%",
         },
       "MN":
         {
           "fillKey": 1,
           "Oil": "11.48%",
           "Coal": "38.78%",
           "WSH": "22.11%",
           "Nuclear": "23.67%",
           "Other": "3.96%",
         },
       "MI":
         {
           "fillKey": 2,
           "Oil": "24.26%",
           "Coal": "37.41%",
           "WSH": "6.17%",
           "Nuclear": "28.83%",
           "Other": "3.32%",
         },
       "RI":
         {
           "fillKey": 0,
           "Oil": "95.17%",
           "Coal": "0.0%",
           "WSH": "2.17%",
           "Nuclear": "0%",
           "Other": "2.67%",
         },
       "KS":
         {
           "fillKey": 1,
           "Oil": "4.32%",
           "Coal": "38.07%",
           "WSH": "36.58%",
           "Nuclear": "20.91%",
           "Other": "0.12%",
         },
       "MT":
         {
           "fillKey": 0,
           "Oil": "3.11%",
           "Coal": "49.13%",
           "WSH": "46.48%",
           "Nuclear": "0%",
           "Other": "1.31%",
         },
       "MS":
         {
           "fillKey": 1,
           "Oil": "77.3%",
           "Coal": "7.75%",
           "WSH": "0.14%",
           "Nuclear": "12.33%",
           "Other": "2.48%",
         },
       "SC":
         {
           "fillKey": 3,
           "Oil": "18.53%",
           "Coal": "19.5%",
           "WSH": "2.06%",
           "Nuclear": "58.38%",
           "Other": "1.51%",
         },
       "KY":
         {
           "fillKey": 0,
           "Oil": "14.86%",
           "Coal": "78.21%",
           "WSH": "6.19%",
           "Nuclear": "0%",
           "Other": "0.74%",
         },
       "OR":
         {
           "fillKey": 0,
           "Oil": "24.04%",
           "Coal": "2.76%",
           "WSH": "71.3%",
           "Nuclear": "0%",
           "Other": "1.91%",
         },
       "SD":
         {
           "fillKey": 0,
           "Oil": "6.01%",
           "Coal": "18.86%",
           "WSH": "75.13%",
           "Nuclear": "0%",
           "Other": "0.0%",
         },
     };
   }
   if (value == 4){
     return {
       "WA":
         {
           "fillKey": 0,
           "Oil": "9.38%",
           "Coal": "4.74%",
           "WSH": "76.87%",
           "Nuclear": "7.01%",
           "Other": "1.99%",
         },
       "DE":
         {
           "fillKey": 0,
           "Oil": "90.03%",
           "Coal": "4.79%",
           "WSH": "0.74%",
           "Nuclear": "0%",
           "Other": "4.45%",
         },
       "DC":
         {
           "fillKey": 3,
           "Oil": "29.47%",
           "Coal": "0%",
           "WSH": "0%",
           "Nuclear": "0%",
           "Other": "70.53%",
         },
       "WI":
         {
           "fillKey": 0,
           "Oil": "21.19%",
           "Coal": "55.07%",
           "WSH": "6.63%",
           "Nuclear": "14.82%",
           "Other": "2.28%",
         },
       "WV":
         {
           "fillKey": 0,
           "Oil": "2.24%",
           "Coal": "93.17%",
           "WSH": "4.55%",
           "Nuclear": "0%",
           "Other": "0.03%",
         },
       "HI":
         {
           "fillKey": 1,
           "Oil": "67.61%",
           "Coal": "14.02%",
           "WSH": "7.86%",
           "Nuclear": "0%",
           "Other": "10.5%",
         },
       "FL":
         {
           "fillKey": 0,
           "Oil": "68.18%",
           "Coal": "15.73%",
           "WSH": "0.46%",
           "Nuclear": "12.23%",
           "Other": "3.39%",
         },
       "WY":
         {
           "fillKey": 0,
           "Oil": "1.76%",
           "Coal": "85.72%",
           "WSH": "11.64%",
           "Nuclear": "0%",
           "Other": "0.87%",
         },
       "NH":
         {
           "fillKey": 0,
           "Oil": "21.12%",
           "Coal": "1.65%",
           "WSH": "10.46%",
           "Nuclear": "57.26%",
           "Other": "9.51%",
         },
       "US-Total":
         {
           "fillKey": 0,
           "Oil": "32.67%",
           "Coal": "29.89%",
           "WSH": "15.06%",
           "Nuclear": "19.95%",
           "Other": "2.42%",
         },
       "NJ":
         {
           "fillKey": 0,
           "Oil": "50.06%",
           "Coal": "1.61%",
           "WSH": "1.27%",
           "Nuclear": "44.99%",
           "Other": "2.08%",
         },
       "NM":
         {
           "fillKey": 0,
           "Oil": "27.3%",
           "Coal": "54.81%",
           "WSH": "17.81%",
           "Nuclear": "0%",
           "Other": "0.09%",
         },
       "TX":
         {
           "fillKey": 0,
           "Oil": "45.21%",
           "Coal": "29.74%",
           "WSH": "15.52%",
           "Nuclear": "8.52%",
           "Other": "1.02%",
         },
       "LA":
         {
           "fillKey": 0,
           "Oil": "65.03%",
           "Coal": "12.6%",
           "WSH": "0.93%",
           "Nuclear": "15.77%",
           "Other": "5.67%",
         },
       "NC":
         {
           "fillKey": 0,
           "Oil": "30.24%",
           "Coal": "26.82%",
           "WSH": "7.32%",
           "Nuclear": "32.98%",
           "Other": "2.64%",
         },
       "ND":
         {
           "fillKey": 0,
           "Oil": "1.72%",
           "Coal": "64.47%",
           "WSH": "33.59%",
           "Nuclear": "0%",
           "Other": "0.22%",
         },
       "NE":
         {
           "fillKey": 0,
           "Oil": "1.8%",
           "Coal": "59.8%",
           "WSH": "18.61%",
           "Nuclear": "19.52%",
           "Other": "0.27%",
         },
       "TN":
         {
           "fillKey": 0,
           "Oil": "13.15%",
           "Coal": "35.06%",
           "WSH": "11.16%",
           "Nuclear": "40.25%",
           "Other": "0.37%",
         },
       "NY":
         {
           "fillKey": 0,
           "Oil": "37.38%",
           "Coal": "0.6%",
           "WSH": "26.91%",
           "Nuclear": "32.93%",
           "Other": "2.18%",
         },
       "PA":
         {
           "fillKey": 0,
           "Oil": "34.11%",
           "Coal": "22.3%",
           "WSH": "3.17%",
           "Nuclear": "38.94%",
           "Other": "1.48%",
         },
       "CA":
         {
           "fillKey": 0,
           "Oil": "42.88%",
           "Coal": "0.14%",
           "WSH": "38.58%",
           "Nuclear": "8.68%",
           "Other": "9.72%",
         },
       "NV":
         {
           "fillKey": 0,
           "Oil": "69.72%",
           "Coal": "4.88%",
           "WSH": "16.55%",
           "Nuclear": "0%",
           "Other": "8.85%",
         },
       "VA":
         {
           "fillKey": 0,
           "Oil": "49.72%",
           "Coal": "11.86%",
           "WSH": "1.58%",
           "Nuclear": "33.79%",
           "Other": "3.04%",
         },
       "CO":
         {
           "fillKey": 0,
           "Oil": "23.29%",
           "Coal": "54.31%",
           "WSH": "22.59%",
           "Nuclear": "0%",
           "Other": "-0.19%",
         },
       "AK":
         {
           "fillKey": 0,
           "Oil": "63.34%",
           "Coal": "8.55%",
           "WSH": "27.48%",
           "Nuclear": "0%",
           "Other": "0.63%",
         },
       "AL":
         {
           "fillKey": 0,
           "Oil": "37.89%",
           "Coal": "22.46%",
           "WSH": "6.73%",
           "Nuclear": "30.47%",
           "Other": "2.46%",
         },
       "AR":
         {
           "fillKey": 0,
           "Oil": "28.57%",
           "Coal": "43.25%",
           "WSH": "4.89%",
           "Nuclear": "20.88%",
           "Other": "2.4%",
         },
       "VT":
         {
           "fillKey": 1,
           "Oil": "0.41%",
           "Coal": "0%",
           "WSH": "78.66%",
           "Nuclear": "0%",
           "Other": "20.91%",
         },
       "IL":
         {
           "fillKey": 0,
           "Oil": "8.21%",
           "Coal": "31.58%",
           "WSH": "6.78%",
           "Nuclear": "52.94%",
           "Other": "0.5%",
         },
       "GA":
         {
           "fillKey": 0,
           "Oil": "41.59%",
           "Coal": "25.49%",
           "WSH": "3.45%",
           "Nuclear": "26.45%",
           "Other": "3.03%",
         },
       "IN":
         {
           "fillKey": 0,
           "Oil": "18.3%",
           "Coal": "73.17%",
           "WSH": "5.73%",
           "Nuclear": "0%",
           "Other": "2.8%",
         },
       "IA":
         {
           "fillKey": 0,
           "Oil": "8.14%",
           "Coal": "43.79%",
           "WSH": "38.71%",
           "Nuclear": "9.0%",
           "Other": "0.36%",
         },
       "OK":
         {
           "fillKey": 0,
           "Oil": "41.32%",
           "Coal": "23.56%",
           "WSH": "34.81%",
           "Nuclear": "0%",
           "Other": "0.31%",
         },
       "AZ":
         {
           "fillKey": 0,
           "Oil": "28.0%",
           "Coal": "29.66%",
           "WSH": "11.66%",
           "Nuclear": "30.55%",
           "Other": "0.13%",
         },
       "ID":
         {
           "fillKey": 0,
           "Oil": "17.7%",
           "Coal": "0.14%",
           "WSH": "78.61%",
           "Nuclear": "0%",
           "Other": "3.55%",
         },
       "CT":
         {
           "fillKey": 0,
           "Oil": "46.7%",
           "Coal": "0.57%",
           "WSH": "1.12%",
           "Nuclear": "47.74%",
           "Other": "3.88%",
         },
       "ME":
         {
           "fillKey": 2,
           "Oil": "21.04%",
           "Coal": "0.6%",
           "WSH": "50.84%",
           "Nuclear": "0%",
           "Other": "27.52%",
         },
       "MD":
         {
           "fillKey": 0,
           "Oil": "20.03%",
           "Coal": "24.96%",
           "WSH": "8.19%",
           "Nuclear": "44.3%",
           "Other": "2.51%",
         },
       "MA":
         {
           "fillKey": 0,
           "Oil": "69.61%",
           "Coal": "3.53%",
           "WSH": "6.39%",
           "Nuclear": "15.67%",
           "Other": "4.8%",
         },
       "OH":
         {
           "fillKey": 0,
           "Oil": "25.13%",
           "Coal": "57.17%",
           "WSH": "1.65%",
           "Nuclear": "14.8%",
           "Other": "1.27%",
         },
       "UT":
         {
           "fillKey": 0,
           "Oil": "15.79%",
           "Coal": "70.54%",
           "WSH": "11.66%",
           "Nuclear": "0%",
           "Other": "2.01%",
         },
       "MO":
         {
           "fillKey": 0,
           "Oil": "6.22%",
           "Coal": "79.8%",
           "WSH": "3.87%",
           "Nuclear": "9.81%",
           "Other": "0.29%",
         },
       "MN":
         {
           "fillKey": 0,
           "Oil": "11.48%",
           "Coal": "38.78%",
           "WSH": "22.11%",
           "Nuclear": "23.67%",
           "Other": "3.96%",
         },
       "MI":
         {
           "fillKey": 0,
           "Oil": "24.26%",
           "Coal": "37.41%",
           "WSH": "6.17%",
           "Nuclear": "28.83%",
           "Other": "3.32%",
         },
       "RI":
         {
           "fillKey": 0,
           "Oil": "95.17%",
           "Coal": "0.0%",
           "WSH": "2.17%",
           "Nuclear": "0%",
           "Other": "2.67%",
         },
       "KS":
         {
           "fillKey": 0,
           "Oil": "4.32%",
           "Coal": "38.07%",
           "WSH": "36.58%",
           "Nuclear": "20.91%",
           "Other": "0.12%",
         },
       "MT":
         {
           "fillKey": 0,
           "Oil": "3.11%",
           "Coal": "49.13%",
           "WSH": "46.48%",
           "Nuclear": "0%",
           "Other": "1.31%",
         },
       "MS":
         {
           "fillKey": 0,
           "Oil": "77.3%",
           "Coal": "7.75%",
           "WSH": "0.14%",
           "Nuclear": "12.33%",
           "Other": "2.48%",
         },
       "SC":
         {
           "fillKey": 0,
           "Oil": "18.53%",
           "Coal": "19.5%",
           "WSH": "2.06%",
           "Nuclear": "58.38%",
           "Other": "1.51%",
         },
       "KY":
         {
           "fillKey": 0,
           "Oil": "14.86%",
           "Coal": "78.21%",
           "WSH": "6.19%",
           "Nuclear": "0%",
           "Other": "0.74%",
         },
       "OR":
         {
           "fillKey": 0,
           "Oil": "24.04%",
           "Coal": "2.76%",
           "WSH": "71.3%",
           "Nuclear": "0%",
           "Other": "1.91%",
         },
       "SD":
         {
           "fillKey": 0,
           "Oil": "6.01%",
           "Coal": "18.86%",
           "WSH": "75.13%",
           "Nuclear": "0%",
           "Other": "0.0%",
         },
     };

   }
 }

