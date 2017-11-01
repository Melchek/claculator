(function() {

angular.module('app').factory('mapService', mapService);

function mapService () {

    var map;

    var infoWindow;

    function init() {
        var uluru = {lat: 31.783333, lng: 35.216667};
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 7,
          center: uluru
        });

          
    }

    function addMarker(lat, lng) {
        // var marker = new google.maps.Marker({
        //     position: {lat : lat, lng: lng},
        //     map: map
        // });
        // marker.addListener('click', onMarkerClick);
        
  var infowindow = new google.maps.InfoWindow({
    content: document.getElementById('kolelInfoWindow')
  });

  var marker = new google.maps.Marker({
    position: {lat : lat, lng: lng},
    map: map,
    title: 'kolel',
    animation: google.maps.Animation.DROP
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
    }

    function onMarkerClick(evt) {
        console.log('clicked')
        
        // infowindow = new google.maps.InfoWindow({
        //     content: '<h2>כולל</h2>'
        // });
        // // infoWindownew = google.maps.InfoWindow({
        // //     content: '<h2>כולל</h2>'
        // // });
        // // infoWindow.setContent('<h2>כולל</h2>');
        // infoWindow.open(map, marker);
    }

    return {
        init: init,
        addMarker: addMarker
    }
}


})();