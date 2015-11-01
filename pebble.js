var locationOptions = {
  enableHighAccuracy: true,
  maximumAge: 10000,
  timeout: 10000
};

function locationSuccess(pos) {
  console.log('Location Success');
  console.log('lat= ' + pos.coords.latitude + ' lon= ' + pos.coords.longitude);
}

function locationError(err) {
  console.log('Location Error');
  console.log('location error (' + err.code + '): ' + err.message);
}

Pebble.addEventListener('ready',
  function(e) {
    // Request current position
    navigator.geolocation.getCurrentPosition(locationSuccess, locationError, locationOptions);
  }
);
