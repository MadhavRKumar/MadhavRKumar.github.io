var count = 0;
var head;

function setup() {
  createCanvas(600, 600);
  createFace();
}

function createFace() {
  background('#e4e4e4');
  var base = min(width, height);
  var size = random(base/4, base);
  head = new Head(size, size);
  head.show();
}

function draw() {
}


function keyPressed() { 

  if (key == ' ' ) {
    createFace();
  }
}