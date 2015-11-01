simply.title('Simply:');

var locationOptions = {
  enableHighAccuracy: true,
  maximumAge: 10000,
  timeout: 10000
};


function locationSuccess(pos) {
  console.log('Location Success');
  simply.body('lat= ' + pos.coords.latitude + ' lon= ' + pos.coords.longitude);

  response = ajax({
    'url': 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=' + pos.coords.latitude + ',' + pos.coords.longitude + '&destinations=San+Jose',
    'type': 'json'
  },
    function() {
      console.log(response);
    }
);


  // var imported = document.createElement('script');
  // imported.src = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=' + pos.coords.latitude + ',' + pos.coords.longitude + '&destinations=San+Jose';
  // document.head.appendChild(imported);
  // console.log(imported.rows.distance.text());

  // load('https://maps.googleapis.com/maps/api/distancematrix/json?origins=' + pos.coords.latitude + ',' + pos.coords.longitude + '&destinations=San+Jose',
  //       function(xhr) {
  //         var response = JSON.parse(xhr.responseText);
  //         console.log(response.rows.distance.text);
  //       }
  //     );
    }


function locationError(err) {
  console.log('Location Error');
  console.log('location error (' + err.code + '): ' + err.message);
}

navigator.geolocation.getCurrentPosition(locationSuccess, locationError, locationOptions);


// AIzaSyDIjSpZjvx8LFJdvVNnO5GxVHQh5Zh-sZ4
