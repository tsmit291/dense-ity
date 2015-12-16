google.load('visualization', '1', {packages: ['geomap']});

   $(function() {
       // when document loads, grab the json
     $.getJSON('/1.0/population/countries/2012-12-24/', function(data) {
       // once grabbed, we run this callback

       // setup the new map and its variables
       var map = new google.visualization.DataTable();
         map.addRows(data.length);  // length gives us the number of results in our returned data
           map.addColumn('number', 'Population');
           map.addColumn('string', 'countries');

       // now we need to build the map data, loop over each result
       $.each(data, function(i,v) {
         // set the values for both the name and the population
         map.setValue(i, 0, v.Population);
         map.setValue(i, 1, v.countries);
       });
       // finally, create the map!
       var geomap = new google.visualization.GeoMap(
             document.getElementById('visualization'));
            geomap.draw(map, null);

     });
  });
