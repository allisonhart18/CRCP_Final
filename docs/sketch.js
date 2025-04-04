function setup() {
  createCanvas(windowWidth*0.75,windowHeight*0.75);
  background(150);
  strokeWeight(0.6);
  //noiseSeed(1000);
  frame = 0;
  numAcross = 40;
  size1 = (width - frame * 2) / numAcross;
  rez3 = 0.003;
  len = size1 * 0.3;
  stroke(0, 200);
  lines = [];
  lines2 = [];
  for (x = frame; x < width - frame + 1; x += size1) {
    for (y = frame; y < height - frame + 1; y += size1) {
      lines.push(x, y);
    }
  }
  z = 1000;
}

function draw() {
  background(150); // add alpha???
  for (j = 0; j < lines.length; j += 2) {
    oldX = lines[j];
    oldY = lines[j + 1];
    n3 = noise(oldX * rez3, oldY * rez3,z*rez3) + 0.033;
    ang = map(n3, 0.3, 0.7, 0, PI * 2);
    //ang = n3*PI*2; // no mapping - flows left
    newX = cos(ang) * len + oldX;
    newY = sin(ang) * len + oldY;
    line(oldX, oldY, newX, newY);
    if ((newX > width || newX < 0) && (newY > height || newY < 0)) {
      newX = random(width);
      newY = random(height);
    }
    lines2.push(newX, newY);
  }
  lines = lines2;
  lines2 = [];
  z+=2;
  for (q = 0; q < 10000; q++) {} // can substitute 1e5 for 10000
}