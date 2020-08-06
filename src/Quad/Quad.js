//Draw a quad, rotate the shape 35 degree and give the shape a background colour of blue with no stroke

function setup() {               //Create Function
    createCanvas(800, 600);          // set canvas size
    background(255);                 //set background colour (255=White)
    }
    function draw() {
    fill(0, 126, 255, 102);          // Set the shapes colour to Blue (which = 0,126,255,102)
    noStroke();                      //Remove stroke (Stroke is the black line that borders the shape)
    
    //Draw initial quad shape
    quad(38, 31, 86, 20, 69, 63, 30, 76); //takes 4 corner values, and 4 values for the degree of the axis, eg x1, x2
    
    //Rotate the grid
    translate(width / 2, height / 2); //sets the starting point on the canvas
    rotate(PI / -0.610865); //The radian value for 34.999986352 degrees
    quad(38, 31, 86, 20, 69, 63, 30, 76); //the quad from earlier but rotated
    }