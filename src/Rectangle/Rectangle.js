function rectangle() {               //Create Function
createCanvas(800, 600);          //Set canvas size
}
function draw() {                //function that can be used to draw shapes with certain commands
stroke(255, 0, 0);               //Set stroke properties (255,0,0 is red)
strokeWeight(6);                 //Set stoke wight to 6

// Draw a rectangle with rounded corners, each having a radius of 20.
rect(50, 50, 55, 55, 20);       //the first 4 inputs determine where of the canvas the corners of the rectangle are.
//and the last input (20) decides the radius of the corners.
}