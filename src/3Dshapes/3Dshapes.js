//Draw two 3D shapes, 1st shape is a cylinder and the 2nd is a ellipsoid.
function setup() {
    createCanvas(400, 400, WEBGL);
  }
  
  function draw() {
    background(205, 105, 94);
    rotateX(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    cylinder(20, 50);
  }
