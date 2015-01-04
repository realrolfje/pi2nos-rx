function heatMap(jQuery) {
  var map = new google.maps.Map(document.getElementById("map"), myOptions);

  map.data.setStyle(function(feature) {
    var magnitude = feature.getProperty('signal');
    var color = colors[feature.getProperty('squelch')];
    return {
      icon: getCircle(magnitude, color)
    };
  });

  var heatmapData = [];
  for(var i in receivers.features) {
	var feature = receivers.features[i];
	var coords = feature.geometry.coordinates;
	var latLng = new google.maps.LatLng(coords[1], coords[0]);
	var weightedLoc = {
	      id: feature.id,
		  location: latLng,
		  weight: 1
		};

	heatmapData.push(weightedLoc);
  }

  var heatmap = new google.maps.visualization.HeatmapLayer({
	data: heatmapData,
	dissipating: false,
	opacity: 0.3,
	map: map
  });

  var jsonStream = new EventSource(jsonEventUrl)
  jsonStream.onmessage = function (e) {
	  var message = JSON.parse(e.data);
	  
	  for(var i in heatmapData) {
	  	var weightedLoc = heatmapData[i];
	    var receiver = message.rx[weightedLoc.id];
	    weightedLoc.weight = Math.max(1,1 * receiver.lvl);
      }
      heatmap.setData(heatmapData);
  }
}

