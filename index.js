const patternArray = [];
var levelint = 1;
var isGameStart = false;
var inc = 0;
var delayInMillis = 500;
var gameOverDelay = 200;

for(var i=0; i<document.querySelectorAll(".btn").length; i++){
	document.querySelectorAll(".btn")[i].addEventListener("click", function(){
		makeSound(this.id);
		if((this.id)  === patternArray[inc]){
			inc++;
			if(inc == patternArray.length){
				setTimeout(function() {
					
					inc = 0;
					levelint++;
					document.querySelector("h1").innerHTML = "Level " + levelint;
					var randomInt = getRandomInt();
					showPattern(randomInt);
					
					
				}, delayInMillis);
			}
		}
		else{
			inc = 0;
			var audio = new Audio('sounds/wrong.mp3');
			audio.play();
			document.querySelector(".main").classList.toggle("red-bg");
			setTimeout(function() {
				document.querySelector(".main").classList.toggle("red-bg");
			}, gameOverDelay);
			
			
			patternArray.length = 0
			levelint = 1;
			isGameStart = false;
			document.querySelector("h1").innerHTML = "Game Over, Press Any Key to Restart";	
		}
	});
}


addEventListener("keydown", function(event){

	if(isGameStart != true){
		isGameStart = true;
		document.querySelector("h1").innerHTML = "Level " + levelint;
		var randomInt = getRandomInt();
		
		console.log(randomInt);
		showPattern(randomInt);
	}
	
});


function makeSound(color){
	
	switch(color){
		case "green":
			var audio = new Audio('sounds/green.mp3');
			audio.play();
			$('.green').fadeTo(100, 0.3, function() { $(this).fadeTo(500, 1.0); });
			break;
		case "red":
			var audio = new Audio('sounds/red.mp3');
			$('.red').fadeTo(100, 0.3, function() { $(this).fadeTo(500, 1.0); });
			audio.play();
			break;
		case "yellow":
			var audio = new Audio('sounds/yellow.mp3');
			$('.yellow').fadeTo(100, 0.3, function() { $(this).fadeTo(500, 1.0); });
			audio.play();
			break;
		case "blue":
			var audio = new Audio('sounds/blue.mp3');
			$('.blue').fadeTo(100, 0.3, function() { $(this).fadeTo(500, 1.0); });
			audio.play();
			break;
	}
}

function showPattern(randomInt){
		switch(randomInt){
			case 1:
				var audio = new Audio('sounds/green.mp3');
				audio.play();
				$(".green").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
				patternArray.push("green");
				break;
			case 2:
				var audio = new Audio('sounds/red.mp3');
				audio.play();
				$(".red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
				patternArray.push("red");
				break;
			case 3:
				var audio = new Audio('sounds/yellow.mp3');
				audio.play();
				$(".yellow").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
				patternArray.push("yellow");
				break;
			case 4:
				var audio = new Audio('sounds/blue.mp3');
				audio.play();
				$(".blue").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
				patternArray.push("blue");
				break;
		}	
	}
	
function getRandomInt(){
	var max = 5;
	var min = 1;
	return Math.floor(Math.random() * (max - min) + min);
}
