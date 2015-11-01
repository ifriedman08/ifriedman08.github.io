// simply.title('Travel time:');


var locationOptions = {
  enableHighAccuracy: true,
  maximumAge: 10000,
  timeout: 10000
};


// function locationSuccess(pos) {
//   console.log('Location Success');
//   ajax({
//     'url': 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=' + pos.coords.latitude + ',' + pos.coords.longitude + '&destinations=San+Jose',
//     'type': 'json'
//   },
//   function (response) {
//     console.log('traff obj loaded');
//     simply.body('Work:' + response.rows[0].elements[0].duration.text);
//   });
// }
//
//
// function locationError(err) {
//   console.log('Location Error');
//   console.log('location error (' + err.code + '): ' + err.message);
// }
//
// navigator.geolocation.getCurrentPosition(locationSuccess, locationError, locationOptions);

simply.text([
  {
    title: 'A1', subtitle: 'B1', body: 'C1'
  },
  {
    title: 'A2', subtitle: 'B2', body: 'C2'
  }

])
