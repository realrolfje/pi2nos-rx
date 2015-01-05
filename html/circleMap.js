function circleMap(jQuery) {
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  for(var i in receivers.features) {
	var feature = receivers.features[i];
	var coords = feature.geometry.coordinates;
	var latLng = new google.maps.LatLng(coords[1], coords[0]);

    var center_circle = new google.maps.Circle({
        center: latLng,
        radius: 10,
        strokeColor: 'black',
        strokeOpacity: 1,
        strokeWeight: 2,
        fillColor: "black",
        fillOpacity: 0.35,
        map: map
    });

    var max_signal_circle = new google.maps.Circle({
        center: latLng,
        radius: getRadius(100),
        strokeColor: 'black',
        strokeOpacity: 0.5,
        strokeWeight: 1,
        fillColor: "white",
        fillOpacity: 0.3,
        map: map
    });

    var signal_circle = new google.maps.Circle({
        center: latLng,
        radius: 10000,
        strokeColor: 'black',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: "black",
        fillOpacity: 0.35,
        map: map
    });

    feature.signalcircle = signal_circle;
  }

  var jsonStream = new EventSource(jsonEventUrl)
  jsonStream.onmessage = function (e) {
	  var message = JSON.parse(e.data);

      for(var i in receivers.features) {
      	var feature = receivers.features[i];
	    var featureid = feature.id;
	    var receiver = message.rx[featureid];
	    feature.signalcircle.setOptions(
          {
                radius: getRadius(receiver.lvl),
                fillColor: colors[receiver.sql],
          });
      }
  }
}

function getRadius(level) {
    return 300 + (140 * level);
}
