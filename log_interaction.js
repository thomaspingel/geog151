function promptName() {

	var namePrompt = "Welcome to the Geography 202 Map Quiz Study Aid.\n\nThis tool is free to use, and is not required.  We request that you provide your name, as it helps us improve the tool.  However, you may hit Cancel to remain anonymous.\n\nPlease enter your name.\n";
	
	if (localStorage["userName"]==undefined) {
		var person = prompt(namePrompt, "");
		if (person==null || person==""){
			person="Anonymous";
		}
		localStorage.setItem("userName",person)
	}
}

function assignUniqueId() {
	if (localStorage["uniqueQuizId"]==undefined) {
		var thisId = (Math.floor(Math.pow(10,15) * Math.random())).toString();
		localStorage.setItem("uniqueQuizId",thisId);
	}
}

function logInteraction(countryID) {
	var date = new Date();
	var logstring = localStorage["uniqueQuizId"] + "," + localStorage["userName"] + "," + date.getTime() + "," + whichQuiz + "," + countryID;
	// document.getElementById("textspot").innerHTML = logstring

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("POST","report.php",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send("data=" + logstring);	
}