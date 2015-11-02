simply.title('Travel time:');

load_count = 0;

simply.body('Loading...')

var locationOptions = {
  enableHighAccuracy: true,
  maximumAge: 10000,
  timeout: 10000
};

final_body = '';

function locationSuccess(pos) {
  console.log('Location Success');
  ajax({
    'url': 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=' + pos.coords.latitude + ',' + pos.coords.longitude + '&destinations=37.412517,-121.937146',
    'type': 'json'
  },

  function (response) {
    load_count += 1;
    work_str = 'Work: ' + response.rows[0].elements[0].duration.text;
    final_body += work_str + '\n';
    simply.body(final_body);
    if (load_count == 3) {
      simply.vibe();
    };
  });

  ajax({
    'url': 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=' + pos.coords.latitude + ',' + pos.coords.longitude + '&destinations=37.852157,-122.288795',
    'type': 'json'
  },

  function (response) {
    load_count += 1;
    berk_str = 'Berkeley: ' + response.rows[0].elements[0].duration.text;
    final_body += berk_str + '\n';
    simply.body(final_body);
    if (load_count == 3) {
      simply.vibe();
    };
  });

  ajax({
    'url': 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=' + pos.coords.latitude + ',' + pos.coords.longitude + '&destinations=37.8132267,-122.2480338',
    'type': 'json'
  },

  function (response) {
    load_count += 1;
    oak_str = 'Oakland: ' + response.rows[0].elements[0].duration.text;
    final_body += oak_str + '\n';
    simply.body(final_body);
    if (load_count == 3) {
      simply.vibe();
    };
  });

}


function locationError(err) {
  console.log('Location Error');
  console.log('location error (' + err.code + '): ' + err.message);
}

navigator.geolocation.getCurrentPosition(locationSuccess, locationError, locationOptions);
