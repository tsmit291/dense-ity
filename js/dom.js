$(document).ready(function(){

  function init(){
    var mapOptions = {
      center: new google.maps.LatLng(39.000, -73.965),
      mapTypeId: google.maps.MapTypeId.SATELLITE,
      zoom: 2
    };
    var venueMap;
    venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
  }
  function loadScript(){
    var script = document.createElement('script');
    script.src='http://maps.googleapis.com/maps/api/js?callback=init';
    document.body.appendChild(script);
  };
  window.onload = loadScript();
})
