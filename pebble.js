this.pebble = {};

console.log('running pebble.js');

simply.title('Hello Nathalie!');

// var currPos = navigator.geolocation.getCurrentPosition();

// console.log(JSON.stringify(currPos));
navigator.geolocation.getCurrentPosition(function(position) {
      pebble.currPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
    }
);

simply.body(JSON.stringify(pebble.currPos));
