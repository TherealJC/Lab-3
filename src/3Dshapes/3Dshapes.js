//Draw two 3D shapes, 1st shape is a cylinder and the 2nd is a ellipsoid.
function setup() {
    createCanvas(1200, 600, WEBGL);
}
  
function draw() {
    background(255,80,255)
    translate(-300, 0, 0); //Set shapes location on the page
    push(); //push the rotation frames
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    cylinder(50, 180);  //Radius, Height (parameter values set here)
    pop(); //end rotation/ repeats

    //Ellipsoid
      translate(600, 0, 0);
  push();
  rotateZ(frameCount * 0.01); //frame rate rotation value set here
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  ellipsoid(80, 80, 80, 16, 16) //x, y, z radius of the ellipsoid, detailX and Y decide the amount of segments (parameter values set here)
  pop();
}
