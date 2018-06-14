var radius = 10;
var xSize = 600;
var ySize = 200;
var xSpeed1 = 2;
var ySpeed1 = 3;
var xBall1 = 21;
var yBall1 = 21;
var xSpeed2 = 5;
var ySpeed2 = 3;
var xBall2 = 50;
var yBall2 = 50;
var xSpeed3 = 1;
var ySpeed3 = 3;
var xBall3 = 70;
var yBall3 = 10;

function setup(){
  createCanvas(xSize, ySize);
}

function draw(){
  background(0);
  if (xBall1 > width - radius || xBall1 < radius){
      xSpeed1 = -xSpeed1;
  }
  if (yBall1 > height - radius || yBall1 < radius){
      ySpeed1 = -ySpeed1;
  }
  xBall1 += xSpeed1;
  yBall1 += ySpeed1;
   r=random(255)
  g=random(255)
  b=random(255)
  fill(r,g,b)

  ellipse(xBall1, yBall1, 2*radius, 2*radius);
  
  if (xBall2 > width - radius || xBall2 < radius){
      xSpeed2 = -xSpeed2;
  }
  if (yBall2 > height - radius || yBall2 < radius){
      ySpeed2 = -ySpeed2;
  }
  xBall2 += xSpeed2;
  yBall2 += ySpeed2;
     r=random(255)
  g=random(255)
  b=random(255)
  fill(r,g,b)
  ellipse(xBall2, yBall2, 2*radius, 2*radius);
  
  if (xBall3 > width - radius || xBall3 < radius){
      xSpeed3 = -xSpeed3;
  }
  if (yBall3 > height - radius || yBall3 < radius){
      ySpeed3 = -ySpeed3;
  }
