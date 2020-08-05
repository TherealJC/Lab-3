//Draw a quad, rotate the shape 35 degree and give the shape a background colour of blue with no stroke
function setup() {
// set canvas size
createCanvas(800, 600);
background(151);
}
    
function draw() {
// Set the shapes colour to Blue (which = 0,126,255,102)
fill(0, 126, 255, 102);
    
//Draw/specify the quads dimensions.
quad(38, 31, 86, 20, 69, 63, 30, 76);
}

//Remove stroke (Stroke is the black line that borders the shape)
noStroke();