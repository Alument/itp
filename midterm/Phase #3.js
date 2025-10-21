
function setup() {
  createCanvas(500, 500);
  noStroke();
}

function burger(x, y, s) {
push();
  scale(s);
  translate(x, y);
  fill('#E4B684');
  ellipse(x+94, y-5, 188, 70); 
  fill('#5A3711')
  rect(x, y, 188, 30, 10); 
  fill('#FFD604');
  rect(x, y, 188, 4); 
  fill('#21C513');
  rect(x, y+2, 188, 6); 
  fill('#E4B684')
  rect(x, y+30, 188, 30,);
pop();
}

function draw() {
background('#3DBCC0');
  burger(265, 44, .5);
  burger(20, 100, .7);
  burger(265, 374, .6);
  burger(120, 180, 1);
}