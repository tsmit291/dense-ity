// $(document).ready(function(){
//
//   // google.charts.load('current', {packages: ['geochart']});
//   // google.charts.setOnLoadCallback(drawRegionsMap);
//
//   var arrayPop = [];
//
//   function drawRegionsMap(arr){
//     for (var i = 0; i < arr.length; i++) {
//       arrayPop.push(arr[i]);
//       console.log("this shit works");
//     }
//   };
//   drawRegionsMap(allCountries);
//
//   function drawVisualization(){
//     var data = google.visualization.arrayToDataTable(arrayPop);
//
//     var opts = {
//       region: 'IN',
//       displayMode: 'provinces',
//     };
//
//     var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
//     chart.draw(arrayPop, opts);
//     console.log("this shit works 2");
//   };
//   drawVisualization();
//
//
// })
//
//

  //
  // countryData = {};
  // chart.draw(data,all);
  // data.addColumn ('string', Country);
  // data.addColumn ('number', Population);
//
// for (var i = 0; i < country_list.length; i++) {
//   var x = country_list[i];
//   var apiSite ='http://api.dataweave.in/v1/un_population_stats/findByCountryAndVariant/?api_key=b20a79e582ee4953ceccf41ac28aa08d&country='+x+'&variant=All&year=2012&page=1&per_page=10';
//
//   $.ajax({
//     type:'GET',
//     url: apiSite,
//     dataType: "json",
//     success: searchPopulation
//   });
//
//   }
// // console.log(apiSite);
// var countryPopulation = [];
//
// function searchPopulation(data){
//     countryPopulation.push(data["data"][0]["Variable"]);
//   }
// country_list.map(function(val, i){
//   return[val, countryPopulation[i]]
// });
//





// empty array for countries names // map to turn each element in array into an array.

       //
      //  ['Country', 'Popularity'],
      //  ['Germany', 200],
      //  ['United States', 300],
      //  ['Brazil', 400],
      //  ['Canada', 500],
      //  ['France', 600],
      //  ['RU', 700]
    //  ]);
//
// }




// function searchByCountry(country) {
//   for (x in country) {
// 'http://api.dataweave.in/v1/un_population_stats/findByCountryAndVariant/?api_key=b20a79e582ee4953ceccf41ac28aa08d&country='+x+'&variant=All&year=2012&page=1&per_page=10'
// put population on map at country
// }
// }
