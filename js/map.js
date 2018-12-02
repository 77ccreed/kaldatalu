/*
 * Google map
 */

var map;

//  Function to initialize the map
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 57.83022,
      lng: 26.27867
    },
    zoom: 8
  });

  var contentString = '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h6 id="firstHeading" class="firstHeading">Valga Rockiklubi MTÜ</h6>' +
    '' +
    '' +
    '</p>' +
    '<p><a href="https://www.google.com/maps/place/Valga+Rockiklubi+MT%C3%9C/@57.775373,26.035553,18z/data=!4m5!3m4!1s0x0:0xd23eacb70359dd5f!8m2!3d57.774996!4d26.0347024?hl=en-US"  target="_blank">' +
    'Vaata Google Mapsist</a> ' +
    '</p>' +
    '</div>' +
    '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  const klubi = {
    lat: 57.83022,
    lng: 26.27867
  }
  var marker = new google.maps.Marker({
    position: klubi,
    map: map,
    title: 'Valga Rockiklubi'
  });

  marker.addListener('click', function () {
    infowindow.open(map, marker);
  });
}