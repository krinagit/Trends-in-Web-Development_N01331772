

function processForm(){
const userInput = document.getElementById('userInput').value;
     
	const happy = ":-)" ;
	const sad = ":-(" ;
		
	// split
	const happyTimes = userInput.split(happy).length - 1;
	const sadTimes = userInput.split(sad).length - 1;

	if(happyTimes===0&&sadTimes===0){
		document.getElementById("feeling").innerHTML="none";
	}else if(happyTimes===sadTimes){
		document.getElementById("feeling").innerHTML="unsure";
	}else if(happyTimes>sadTimes){
		document.getElementById("feeling").innerHTML="happy";
	}else if(happyTimes<sadTimes){
		document.getElementById("feeling").innerHTML="sad";
	}
}
