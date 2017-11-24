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