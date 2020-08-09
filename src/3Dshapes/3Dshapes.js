//Draw two 3D shapes, 1st shape is a cylinder and the 2nd is a ellipsoid.
function setup() {
    createCanvas(1200, 600, WEBGL);
}
  
function draw() {
    background(255,80,255)
    translate(-300, 0, 0);
    push();
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    cylinder(70, 70);
    pop();

    //Ellipsoid
      translate(600, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  sphere(70);
  pop();
  ellipsoid(30, 40, 40, 8)
}
