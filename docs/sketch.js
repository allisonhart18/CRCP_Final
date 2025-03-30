let noiseScale = .02;

function setup() {
  createCanvas(500, 500);
  noLoop(); // only draw once for rn
}

function draw() {
  background(150);

  loadPixels();
  for (let y = 0; y < height; y++){
    for (let x = 0; x < width; x++){
      let noiseValue = noise(x * noiseScale, y * noiseScale);
      let colorValue =  map(noiseValue, 0, 1, 0, 255);
      let index = (x + y *width) *4;
      pixels[index] = colorValue; // red?
      pixels [ index + 1] = colorValue; // green?
      pixels [ index + 2] = colorValue; // blue?
      pixels[ index + 3] = 255; //Alpha???
    }
  }
  updatePixels();
}
