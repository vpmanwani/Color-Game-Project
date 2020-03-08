var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var newColors = document.getElementById("newColors");
var easyBtn = document.getElementById("easy");
var hardBtn = document.getElementById("hard");
var mode = 6;



main();

function main(){

	easyBtn.addEventListener("click", function(){
		mode = 3;
		easyBtn.classList.add("selected");
		hardBtn.classList.remove("selected");

		newColorsFunc(mode);
	});

	hardBtn.addEventListener("click", function(){
		mode = 6;
		hardBtn.classList.add("selected");
		easyBtn.classList.remove("selected");
		newColorsFunc(mode);
	});

	colorDisplay.textContent = pickedColor;

	newColors.addEventListener("click", function(){
		newColorsFunc(mode);
	});
	
	for(var i=0; i<squares.length; i++){
		//add initial colors to squares
		squares[i].style.backgroundColor =  colors[i];

		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;

			//compare color to pickedColor
			if(clickedColor === pickedColor){
				console.log("correct");
				messageDisplay.textContent = "Correct!";
				messageDisplay.style.color = "black";
				newColors.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}
			else{
				console.log("incorrect");
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!";
				messageDisplay.style.color = "black";
			}
		});
	}
}

function changeColors(color){
	//loop through all squares
	//change each color to match given color
	for(var i=0; i<colors.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];

	//add num random colors to arr
	for(var i = 0; i<num; i++){
		//get random color and push into arr
		arr.push(randomColor());	
	}

	//return that array
	return arr;
}

function randomColor(){
	//pick a red from 0 to 255
	var r = Math.floor(Math.random() * 256);

	//pick a green from 0 to 255
	var g = Math.floor(Math.random() * 256);

	//pick a blue from 0 to 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}


function newColorsFunc(num){
	//generate all new colors
	colors = generateRandomColors(num);

	//pick a new random color from array
	pickedColor = pickColor();
	
	//change colorDisplay to match pickedColor
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue"; 
	newColors.textContent = newColors.textContent === "Play Again?" ? "NEW COLORS" : "NEW COLORS";
	//change colors of squares
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}

	messageDisplay.textContent = "";
}