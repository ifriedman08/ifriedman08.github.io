console.log('running pebble.js');

simply.title('Hello Nathalie!');
simply.body('I like you.');

// var currPos = navigator.geolocation.getCurrentPosition();

// console.log(JSON.stringify(currPos));
navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
    console.log(JSON.stringify(pos));
    }
);
