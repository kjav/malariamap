function initMap() {
  var selected_feature;

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('malaria_map'), {
    center: {lat: 7.818614, lng: -0.054245},
    zoom: 10
  });

  map.data.loadGeoJson('assets/malaria.json');

  map.data.setStyle(function(feature) {
    var color = 'gray';
    if (feature.getProperty('isColourful')) {
     color = 'red';
    }
    return /** @type {google.maps.Data.StyleOptions} */({
      fillColor: color,
      strokeColor: color,
      strokeWeight: 2
    });
  });

  map.data.addListener('click', function(event) {
    if (selected_feature) selected_feature.setProperty('isColourful', false);
    console.log(event.feature.getProperty('deaths'));
    event.feature.setProperty('isColourful', true);
    selected_feature = event.feature;
  });
}

initMap();
