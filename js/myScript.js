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



function requestJSONcode(){

	//Use XMLHttpRequest objects to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing
    var xmlhttp = new XMLHttpRequest();

    //An EventHandler that is called whenever the readyState attribute changes
	xmlhttp.onreadystatechange = function(){
			    
	    if (this.readyState == XMLHttpRequest.DONE && this.status == 200){
				        
	    	//Parse the data with JSON.parse(), and the data becomes a JavaScript object
	        var JSONcode = JSON.parse(this.responseText);

		    var displayHTML = escapeHtml(window.atob(JSONcode.content));
				       		    
			document.getElementById("demo2").innerHTML = displayHTML;
	    }
	};

	//Initializes a request. This method is to be used from JavaScript code
	var linkINDEX = "https://api.github.com/repos/RicardoPetronilho98/RicardoPetronilho98.github.io/git/blobs/7140c88d17200e69bfdf510ea5c3294bc972e1fe";
	var linkTREE = "https://api.github.com/repos/RicardoPetronilho98/RicardoPetronilho98.github.io/git/trees/7bdffe9b7d388c56c6ea14c90e26e8363f602115";
	
	xmlhttp.open("GET", linkINDEX, true);		
	//Sends the request. If the request is asynchronous (which is the default), this method returns as soon as the request is sent - basicamente envia o pedido de recolha de dados
	xmlhttp.send();
}