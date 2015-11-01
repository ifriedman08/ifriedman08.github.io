my_data = {};

  console.log("running pebble.js");

  simply.title('Hello Nathalie!');

  // var currPos = navigator.geolocation.getCurrentPosition();

  // console.log(JSON.stringify(currPos));
  navigator.geolocation.getCurrentPosition(function(position) {
        my_data.currPos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      }
  );

  console.log(JSON.stringify(my_data.currPos));
  simply.body(JSON.stringify(my_data.currPos));
