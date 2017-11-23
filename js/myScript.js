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