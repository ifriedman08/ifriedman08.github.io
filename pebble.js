simply.title('Travel time:');


var locationOptions = {
  enableHighAccuracy: true,
  maximumAge: 10000,
  timeout: 10000
};


function locationSuccess(pos) {
  console.log('Location Success');
  ajax({
    'url': 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=' + pos.coords.latitude + ',' + pos.coords.longitude + '&destinations=37.412517,-121.937146',
    'type': 'json'
  },
  function (response) {
    console.log('work loc obj loaded');
    work_str = 'Work:' + response.rows[0].elements[0].duration.text;
  });

  ajax({
    'url': 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=' + pos.coords.latitude + ',' + pos.coords.longitude + '&destinations=37.852157,-122.288795',
    'type': 'json'
  },
  function (response) {
    console.log('berk loc obj loaded');
    berk_str = 'Berkeley:' + response.rows[0].elements[0].duration.text;
  });

  ajax({
    'url': 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=' + pos.coords.latitude + ',' + pos.coords.longitude + '&destinations=37.8132267,-122.2480338',
    'type': 'json'
  },
  function (response) {
    console.log('Oakland obj loaded');
    oak_str = 'Oakland:' + response.rows[0].elements[0].duration.text;
  });

  simply.body('Work: ' + work_str + '\n'
            + 'Berkeley: ' + berk_str + '\n'
            + 'Oakland: ' + oak_str)
}


function locationError(err) {
  console.log('Location Error');
  console.log('location error (' + err.code + '): ' + err.message);
}

navigator.geolocation.getCurrentPosition(locationSuccess, locationError, locationOptions);
