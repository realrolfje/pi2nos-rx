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

"Rx_Hilversum,Rx_Utrecht,Rx_Amsterdam,Rx_Zierikzee,Rx_Apeldoorn,Dailyminutes"

var receivers = {
	  "type": "FeatureCollection",
	  "features": [
		{
		  "id":"Rx_Hilversum",
		  "type": "Feature",
		  "geometry": {
			"type": "Point",
			"coordinates": [5.164326284803233,52.24249959861779]
		  },
		  "properties": {
			"signal": "10",
			"squelch" : "closed"
		  }
		},
		{
		  "id":"Rx_Utrecht",
		  "type": "Feature",
		  "geometry": {
			"type": "Point",
			"coordinates": [5.053434032571373, 52.00992614369851]
		  },
		  "properties": {
			"signal": "10",
			"squelch" : "closed"
		  }
		},
        {
		  "id":"Rx_Zierikzee",
		  "type": "Feature",
		  "geometry": {
			"type": "Point",
			"coordinates": [3.931893379717417,51.64707776608346]
		  },
		  "properties": {
			"signal": "10",
			"squelch" : "closed"
		  }
		},
        {
		  "id":"Rx_Amsterdam",
		  "type": "Feature",
		  "geometry": {
			"type": "Point",
			"coordinates": [4.78980338760532,52.36033042450219]
		  },
		  "properties": {
			"signal": "10",
			"squelch" : "closed"
		  }
		},
        {
		  "type": "Feature",
		  "id":"Rx_Apeldoorn",
		  "geometry": {
			"type": "Point",
			"coordinates": [5.90613085257128,52.22481977473116]
		  },
		  "properties": {
			"signal": "10",
			"squelch" : "closed"
		  }
		}
		/*  Fake repeater used for John's "Daily Minutes" transmissions
		,{
		  "type": "Feature",
		  "geometry": {
			"type": "Point",
			"coordinates": [5.247611, 52.564620]
		  },
		  "id":"Dailyminutes",
		  "properties": {
			"signal": "10",
			"squelch" : "closed"
		  }
		} */
	  ]
	}
	
