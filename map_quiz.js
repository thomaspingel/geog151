window.onload = init;

var map;
var layerControl;

function logDataUsePermission() {
	var date = new Date();
	var logstring = localStorage["uniqueQuizId"] + "," + localStorage["userName"] + "," + date.getTime() + "," + "permissionToUseDataLogs," + localStorage["permissionToUseDataLogs"];
	// document.getElementById("textspot").innerHTML = logstring

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("POST","report.php",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send("data=" + logstring);	
}

function logQuizUsePermission() {
	var date = new Date();
	var logstring = localStorage["uniqueQuizId"] + "," + localStorage["userName"] + "," + date.getTime() + "," + "allowQuizGradeUse," + localStorage["allowQuizGradeUse"];
	// document.getElementById("textspot").innerHTML = logstring

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("POST","report.php",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send("data=" + logstring);	
}

function promptAllowDataUse() {
	var permissionToUseDataLogsPrompt = "This web map is provided as a free study aid for map quizzes in World Regional Geography.  Your use of the system is voluntary, and is not required as part of the course.\n\nWe would like permission to use the logs generated as part of normal interaction with the map to help us understand how students are using the system.  These logs will help to drive further improvements to the map, and help scientists understand how mental maps of the world are constructed.  There are no anticipated risks with using the system other than those associated with normal computer use.\n\nYour participation is voluntary and may be withdrawn at any time without penalty.  If you have any additional questions concerning this study, you may contact Dr. Pingel at tpingel@niu.edu. For more information regarding your rights as a research participant, you may contact the Office of Research Compliance at Northern Illinois University at (815) 753-8588.\n\nIf you agree to allow your anonymized data to be used for research purposes, please hit OK or Agree.  If you do not wish your data to be used as part of the study, hit Cancel.";

	if (localStorage["userName"]==null || localStorage["userName"]==""){
		localStorage.setItem("userName","Anonymous");
	}
	
	if (localStorage["permissionToUseDataLogs"]==undefined) {
		var permissionToUseDataLogs = confirm(permissionToUseDataLogsPrompt);
		localStorage.setItem("permissionToUseDataLogs",permissionToUseDataLogs)
		logDataUsePermission()
	}
}

function allowQuizGradeUse(){
	if (localStorage["allowQuizGradeUse"]==undefined) {
		var allowQuizGradeUsePrompt = "As part of our study, we also would like to measure the impact of this tool on your performance in the course as measured by quiz and exam grades.\n\nIf you are interested in providing this additional information, please provide your full name (first and last) at the prompt below.  If you do not wish to provide this information, hit Cancel, and your data will remain unlinked to your performance.\n\nPlease enter your name (first and last)."
		
		var person = prompt(allowQuizGradeUsePrompt,"")

		if (person==null || person==""){
			localStorage.setItem("allowQuizGradeUse",false)
			localStorage.setItem("userName","Anonymous");
		}
		else {
			localStorage.setItem("allowQuizGradeUse",true)
			localStorage.setItem("userName",person);
		}
		logQuizUsePermission()
	}
}


function init(){
		assignUniqueId();
		// promptName();
		// promptAllowDataUse();
		//allowQuizGradeUse();
		

		map = L.map('map',{center: [0, 0], 
						   zoom: 2,
						   layers: Esri_WorldStreetMap});

		// See baselayers.js for control of the available baselayers.
	    layerControl = L.control.layers(baseLayers).addTo(map);
		
		L.control.scale('lowerleft').addTo(map);
		
		// Event handling
		map.on('overlayadd',function(e){
			if (e.name=="Locate Me") {
				map.panTo(geolocationOverlay.getLatLng());
			}
		});		
		
		addCountryLayers();
	
}

