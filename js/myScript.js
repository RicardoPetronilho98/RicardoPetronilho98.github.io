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
		
var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function(){
    
    if (this.readyState == 4 && this.status == 200) {
        
        var JSONcode = JSON.parse(this.responseText);
        document.getElementById("demo").innerHTML = JSONcode[0].name;
    }
};

xmlhttp.open("GET", "https://api.github.com/users/RicardoPetronilho98/repos", true);
xmlhttp.send();
	



