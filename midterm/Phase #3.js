function setup() {
  createCanvas(500, 500);
  noStroke();
}

function burger(x, y) {
  fill('#E4B684');
  ellipse(x+94, y-5, 188, 70); // Top Bun
  fill('#5A3711')
  rect(x, y, 188, 30, 10); // Patty
  fill('#FFD604');
  rect(x, y, 188, 4); // Cheese
  fill('#21C513');
  rect(x, y+2, 188, 6); // Lettuce
  fill('#E4B684')
  rect(x, y+30, 188, 30,); // Bottom Bun
}

function draw() {
background('#3DBCC0');
  burger(265, 44);
  burger(20, 50);
  burger(265, 374);
  burger(120, 180);
}