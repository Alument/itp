function setup() {
  createCanvas(400, 400);
  noStroke();
  background('#3DBCC0');

  let columns = 5;
  let rows = 5;
  let cellW = 80;
  let cellH = 80;

  // Nested loop to place burgers in a grid
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * cellW;
      let y = j * cellH;
      let s = cellW / 190;
      burger(x, y + 10, s); // did the "+10" because the burgers were a bit out of frame
    }
  }
}

// Burger drawing function
function burger(x, y, s) {
  fill('#E4B684');
  ellipse(x + 94 * s, y - 5 * s, 188 * s, 70 * s); // Top Bun
  fill('#5A3711');
  rect(x, y, 188 * s, 30 * s, 10 * s); // Patty
  fill('#FFD604');
  rect(x, y, 188 * s, 4 * s); // Cheese
  fill('#21C513');
  rect(x, y + 2 * s, 188 * s, 6 * s); // Lettuce
  fill('#E4B684');
  rect(x, y + 30 * s, 188 * s, 30 * s); // Bottom Bun
}