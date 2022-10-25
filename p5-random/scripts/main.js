
let faceColor;
let x;
let y;

function setup() {
  createCanvas(400, 400);
  faceSize = 100
  x = random (150,500);
  y=random (150,210);
  faceColor = color(random (255));
}

function draw() {
  background('yellow');
  fill ('green');
  ellipse (212,206,x,y);
  strokeWeight(5);
  stroke(faceColor);
  
  fill ('magenta');
  ellipse (212,250, 100, 73);
  
  fill ('blue');
  ellipse (150,150,30,30);
  ellipse (278,150,30,30);
 
}