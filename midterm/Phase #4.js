function setup() {
  createCanvas(400, 400);
  noStroke();
  background('#3DBCC0');

  let columns = 5;
  let rows = 5;
  let cellW = 80;
  let cellH = 80;

  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * cellW;
      let y = j * cellH + 10; 
      let s = cellW / 190;

      burger(x, y, s);
    }
  }
}

function burger(x, y, s) {
  push();
  translate(x, y);
  scale(s);
  fill('#E4B684');
  ellipse(94, -5, 188, 70); 
  fill('#5A3711');
  rect(0, 0, 188, 30, 10); 
  fill('#FFD604');
  rect(0, 0, 188, 4); 
  fill('#21C513');
  rect(0, 2, 188, 6);
  fill('#E4B684');
  rect(0, 30, 188, 30);
  pop();
}
