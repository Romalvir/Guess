//Select the heading using DOM
const heading = document.getElementById("colourValue")
var buttons = document.getElementsByClassName("colourButton")


setButtonColor(buttons[0], 0, 0, 255);





//function needs to take a button
//take three vlaues for RGB
//use those values to make color
//append the RGB to the background of the button

function setButtonColor (button,red,green,blue){
button.setAttribute('style',
                        'background-color: rgb('+ red +','+ green +','+ blue +');'
                       );

  }
