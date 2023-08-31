function addCountryLayers(){

	function styleFunction(feature) {
		// Default values for countries not on the quiz
		var polygonStyle = {
			"color": "gray",
			"weight": 1,
			"opacity": 0,
			"fillOpacity": 0,
			"fill": true,
			"fillColor": "red"			
		}
		// Values for this quiz.  Or, if quiz is not defined, draw edges.
		switch (whichQuiz) {
			/*
			case '0':
				var polygonStyle = {
					"color": "gray",
					"weight": 1,
					"opacity": 1,
					"fillOpacity": 0,
					"fill": true,
					"fillColor": "red"	
				}
				break;
			*/
			case '1':
				if (feature.properties.quiz1==1) {
					polygonStyle.fillColor = "green";
					polygonStyle.fillOpacity = 1;
					polygonStyle.opacity = 1;
				}
				break;
			case '2':
				if (feature.properties.quiz2==1) {
					polygonStyle.fillColor = "green";
					polygonStyle.fillOpacity = 1;
					polygonStyle.opacity = 1;
				}
				break;
			case '3':
				if (feature.properties.quiz3==1) {
					polygonStyle.fillColor = "green";
					polygonStyle.fillOpacity = 1;
					polygonStyle.opacity = 1;
				}
				break;
			case '4':
				if (feature.properties.quiz4==1) {
					polygonStyle.fillColor = "green";
					polygonStyle.fillOpacity = 1;
					polygonStyle.opacity = 1;
				}
				break;
			case '5':
				if (feature.properties.quiz5==1) {
					polygonStyle.fillColor = "green";
					polygonStyle.fillOpacity = 1;
					polygonStyle.opacity = 1;
				}
				break;
			case '6':
				if (feature.properties.quiz6==1) {
					polygonStyle.fillColor = "green";
					polygonStyle.fillOpacity = 1;
					polygonStyle.opacity = 1;
				}
				break;
			case '7':
				if (feature.properties.quiz7==1) {
					polygonStyle.fillColor = "green";
					polygonStyle.fillOpacity = 1;
					polygonStyle.opacity = 1;
				}
				break;
			case '8':
				if (feature.properties.quiz8==1) {
					polygonStyle.fillColor = "green";
					polygonStyle.fillOpacity = 1;
					polygonStyle.opacity = 1;
				}
				break;
		}
		return polygonStyle;
	}
	
	

	function onEachFeature(feature, layer) {
		layer.bindPopup(feature.properties.name);
		layer.on({
			click: countryClicked,
			mouseover: highlightFeature,
			mouseout: function(e){country_layer.resetStyle(e.target);}
		});
	}

	// Use this to initiate logging events
	function countryClicked(e){
		logInteraction(e.target.feature.properties.name);
	}
	
	function highlightFeature(e){
		var layer = e.target;
			layer.setStyle({
				weight: 2,
				color: "black"
			});

			if (!L.Browser.ie && !L.Browser.opera) {
				layer.bringToFront();
			}
		}

	
	
	var country_layer;
	country_layer = L.geoJson(countries,{style: styleFunction, onEachFeature:onEachFeature}).addTo(map);
}
