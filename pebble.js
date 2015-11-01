simply.title('Simply:');

var traff_to_work_obj= require('https://maps.googleapis.com/maps/api/distancematrix/json?origins=' + pos.coords.latitude + ',' + pos.coords.longitude + '&destinations=San+Jose');

var locationOptions = {
  enableHighAccuracy: true,
  maximumAge: 10000,
  timeout: 10000
};


function locationSuccess(pos) {
  console.log('Location Success');
  simply.body('lat= ' + pos.coords.latitude + ' lon= ' + pos.coords.longitude);
  console.log(JSON.stringify(traff_to_work_obj));
}


function locationError(err) {
  console.log('Location Error');
  console.log('location error (' + err.code + '): ' + err.message);
}

navigator.geolocation.getCurrentPosition(locationSuccess, locationError, locationOptions);


// AIzaSyDIjSpZjvx8LFJdvVNnO5GxVHQh5Zh-sZ4
