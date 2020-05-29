function processForm(){
	var small_treat = document.getElementById('smallTreat').value;
	
	var medium_treat = document.getElementById('mediumTreat').value;
	
	var large_treat = document.getElementById('largeTreat').value;
	
	var total = ((1*small_treat)+(2*medium_treat)+(3*large_treat));
	
	if(total>=10){
		document.getElementById("result").innerHTML="happy";
	}else{
		document.getElementById("result").innerHTML="sad";
	}
}