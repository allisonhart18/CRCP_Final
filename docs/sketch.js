let frame, numAcross, size1, rez3, len, lines, lines2, z;
let currentStrokeColor;
let fadingColors = false; // flag to start/stop fading
let hueValue = 0; // for smooth color shifting

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 255); // Use HSB color mode for smooth hue cycling
  setupLines();
}

function setupLines() {
  background(0);
  strokeWeight(0.6);
  frame = 0;
  numAcross = 40;
  size1 = (width - frame * 2) / numAcross;
  rez3 = 0.003;
  len = size1 * 0.45;
  currentStrokeColor = color(0, 100, 100, 250); // start with bright color
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
  background(0, 15);
  
  if (fadingColors) {
    hueValue = (hueValue + 0.5) % 360; // slowly shift hue
    currentStrokeColor = color(hueValue, 100, 100, 250);
  }
  
  stroke(currentStrokeColor);
  
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
  if (key === ' ') {
    setupLines();
    fadingColors = false; // Reset fading when restarting
  }
  if (key === '1') {
    fadingColors = true; // Start continuous fading
  }
}
