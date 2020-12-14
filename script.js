//Select the heading using DOM
const heading = document.getElementById("colourValue")
const buttons = document.getElementsByClassName("colourButton")
//number that describes the position of an item in the array
const answerButton = Math.round(Math.random() * (buttons.length - 1));
 
//Assigning random value to the variable
var red = makeColourValue();
var green = makeColourValue();
var blue = makeColourValue();

//function needs to take a button
//take three vlaues for RGB
//use those values to make color
//append the RGB to the background of the button

function setButtonColor (button,red,green,blue){
button.setAttribute('style','background-color: rgb('+ red +','+ green +','+ blue +');');
  }

//random colors function
function makeColourValue(){
    return Math.round(Math.random()*255);
}



function startGame() {

//button the player clicks and displays a message in response
var answerMessage = document.getElementById('answer');

//we need all 6 buttons to change color at once

for (i = 0; i < buttons.length; i++){
	var red = makeColourValue();
  	var green = makeColourValue();
  	var blue = makeColourValue();

  	setButtonColor(buttons[i], red, green, blue);


//if statement for interpolation
if (i === answerButton) {
    heading.innerHTML = `(${red}, ${green}, ${blue})`;
  }

buttons[i].addEventListener('click', function(){
        if (this === buttons[answerButton]) {
            answerMessage.innerHTML = "Correct!";
        } else {
            answerMessage.innerHTML = "Wrong answer! Guess again!";
        }
    });

}


}
startGame();

document.getElementById('reset').addEventListener('click', startGame);

