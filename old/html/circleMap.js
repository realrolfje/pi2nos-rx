function circleMap(jQuery) {
  var map = new google.maps.Map(document.getElementById("map"), myOptions);

  map.data.setStyle(function(feature) {
    var magnitude = feature.getProperty('signal');
    var color = colors[feature.getProperty('squelch')];
    return {
      icon: getCircle(magnitude, color)
    };
  });
  
  map.data.addGeoJson(receivers);

  for(var i in receivers.features) {
	var feature = receivers.features[i];
	var coords = feature.geometry.coordinates;
	var latLng = new google.maps.LatLng(coords[1], coords[0]);

    draw_circle = new google.maps.Circle({
        center: latLng,
        radius: 1000,
        strokeColor: 'black',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "black",
        fillOpacity: 0.35,
        map: map
    });
  }

  var jsonStream = new EventSource(jsonEventUrl)
  jsonStream.onmessage = function (e) {
	  var message = JSON.parse(e.data);
	  
	  map.data.forEach(function(feature){
	    var featureid = feature.getId();
	    var receiver = message.rx[featureid];
	    feature.setProperty("signal", receiver.lvl);
	    feature.setProperty("squelch", receiver.sql);
	  });
	  
//	  map.data.addGeoJson(receivers);
  }
}

function getCircle(magnitude, color) {
  var circle = {
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: color,
    fillOpacity: .3,
    scale: Math.max(10, 1 * magnitude),
    strokeColor: 'black',
    strokeWeight: .5
  };
  return circle;
}