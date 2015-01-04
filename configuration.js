var jsonEventUrl = 'http://pi2nos.ampr.org:1535/json';

var colors = {
  closed: "gray",
  open: "yellow",
  active: "red"
}

var myOptions = {
  center: new google.maps.LatLng(52.2368, 5.1729),
  zoom: 8,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  mapTypeControl: false
}

var receivers = {
	  "type": "FeatureCollection",
	  "features": [
		{
		  "type": "Feature",
		  "geometry": {
			"type": "Point",
			"coordinates": [5.1729, 52.2368]
		  },
		  "id":"Rx_Hilversum",
		  "properties": {
			"signal": "10",
			"squelch" : "closed"
		  }
		},
		{
		  "type": "Feature",
		  "geometry": {
			"type": "Point",
			"coordinates": [5.022297, 52.100284]
		  },
		  "id":"Rx_Utrecht",
		  "properties": {
			"signal": "10",
			"squelch" : "closed"
		  }
		},
        {
		  "type": "Feature",
		  "geometry": {
			"type": "Point",
			"coordinates": [3.924334, 51.653101]
		  },
		  "id":"Rx_Zierikzee",
		  "properties": {
			"signal": "10",
			"squelch" : "closed"
		  }
		},
        {
		  "type": "Feature",
		  "geometry": {
			"type": "Point",
			"coordinates": [4.929472, 52.408901]
		  },
		  "id":"Rx_Amsterdam",
		  "properties": {
			"signal": "10",
			"squelch" : "closed"
		  }
		},
        {
		  "type": "Feature",
		  "geometry": {
			"type": "Point",
			"coordinates": [6.022805, 52.239973]
		  },
		  "id":"Rx_Apeldoorn",
		  "properties": {
			"signal": "10",
			"squelch" : "closed"
		  }
		}
	  ]
	}
	
