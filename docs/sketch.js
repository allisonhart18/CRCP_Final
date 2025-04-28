let frame, numAcross, size1, rez3, len, lines, lines2, z;

function setup() {
  createCanvas(windowWidth, windowHeight);
  setupLines();
}

function setupLines() {
  background(150);
  strokeWeight(0.6);
  frame = 0;
  numAcross = 40;
  size1 = (width - frame * 2) / numAcross;
  rez3 = 0.003;
  len = size1 * 0.45;  // Increased line length
  stroke(0, 250);
  lines = [];
  lines2 = [];
  for (let x = frame; x < width - frame + 1; x += size1) {
    for (let y = frame; y < height - frame + 1; y += size1) {
      lines.push(x, y);
    }
  }
  z = 1000;
}

function draw() {
  background(150, 15); // semi-transparent background
  for (let j = 0; j < lines.length; j += 2) {
    let oldX = lines[j];
    let oldY = lines[j + 1];
    let n3 = noise(oldX * rez3, oldY * rez3, z * rez3) + 0.033;
    let ang = map(n3, 0.3, 0.7, 0, PI * 2);
    
    let newX = cos(ang) * len + oldX;
    let newY = sin(ang) * len + oldY;
    line(oldX, oldY, newX, newY);
    if ((newX > width || newX < 0) && (newY > height || newY < 0)) {
      newX = random(width);
      newY = random(height);
    }
    lines2.push(newX, newY);
  }
  lines = lines2;
  lines2 = [];
  z += 4;
}

function keyPressed() {
  if (key === ' ') {  // if space bar is pressed
    setupLines();     // restart the lines
  }
}
