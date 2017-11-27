function displayMessage(){

	if (imageWelcomeIndice >= imageWelcome.length) imageWelcomeIndice = 0;

	Materialize.toast(imageWelcome[imageWelcomeIndice], 2000, 'rounded');
	imageWelcomeIndice++;
}


var imageWelcome = ["Welcome!",
					"Hey there!", 
   					"What's up?", 
					"Do I know you?",
					"Stop it!"];


var imageWelcomeIndice = 0;


function escapeHtml(text) {

	var map = {
    
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#039;'
	};


	return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}



function getParameterByName(name) {
    
    var url = window.location.href;
    
    name = name.replace(/[\[\]]/g, "\\$&");
    
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    
    if (!results) return null;
    
    if (!results[2]) return '';
    
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


function getDateAndTime(str){

	var res = "";

	res += str.charAt(8) + str.charAt(9) + "-" + str.charAt(5) + str.charAt(6) + "-"  + str.charAt(0) + str.charAt(1) + str.charAt(2) + str.charAt(3);
    res += " at " + str.charAt(11) + str.charAt(12) + ":" + str.charAt(14) + str.charAt(15) + ":" + str.charAt(17) + str.charAt(18);

	return res; 
}





