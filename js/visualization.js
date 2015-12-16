google.load('visualization', '1', {packages: ['geomap']});

   $(function() {
       // when document loads, grab the json
     $.getJSON('http://api.census.gov/data/2010/sf1?key=8f256976ce53a25c5b283fa02daeae5fa80fd034&get=P0010001,NAME&for=state:*', function(data) {
       // once grabbed, we run this callback

       // setup the new map and its variables
       var map = new google.visualization.DataTable();
         map.addRows(data.length);  // length gives us the number of results in our returned data
         map.addColumn('string', 'State');
           map.addColumn('number', 'Population');

       // now we need to build the map data, loop over each result
       $.each(data, function(i,v) {
         // set the values for both the name and the population
         map.setValue(i, 0, v.Population);
         map.setValue(i, 1, v.State);
       });
       // finally, create the map!
       var geomap = new google.visualization.GeoMap(
             document.getElementById('visualization'));
            geomap.draw(map, null);

     });
  });
