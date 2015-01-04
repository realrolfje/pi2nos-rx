function circleMap(jQuery) {
  var map = new google.maps.Map(document.getElementById("map"), myOptions);

  map.data.setStyle(function(feature) {
    var magnitude = feature.getProperty('signal');
    var color = colors[feature.getProperty('squelch')];
    return {
      icon: getCircle(magnitude, color)
    };
  });

  var jsonStream = new EventSource(jsonEventUrl)
  jsonStream.onmessage = function (e) {
	  var message = JSON.parse(e.data);
	  
	  for(var i in receivers.features) {
	    var feature = receivers.features[i];
	    var receiver = message.rx[feature.id];
	    feature.properties.signal = receiver.lvl;
	    feature.properties.squelch = receiver.sql;
      }

	  map.data.addGeoJson(receivers);
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