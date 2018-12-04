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
    zoom: 9
  });

  var contentString = '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h6 id="firstHeading" class="firstHeading">Kalda talu puhkekeskus</h6>' +
    '' +
    '' +
    '</p>' +
    '<p><a href="https://www.google.com/maps/place/Kalda+talu+puhkekeskus/@57.8299925,26.2770218,17z/data=!3m1!4b1!4m5!3m4!1s0x46eba788d90f8965:0x93c88706d399e30c!8m2!3d57.8299897!4d26.2792105?hl=en-US"  target="_blank">' +
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
    title: 'Kalda talu puhkekeskus'
  });

  marker.addListener('click', function () {
    infowindow.open(map, marker);
  });
}