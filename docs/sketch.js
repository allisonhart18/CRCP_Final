let noiseScale = .01;
//most info from watching daniel shiffman videos on youtube :)

function setup() {
  createCanvas(windowWidth*.75, windowHeight*.75);
  background(150);
  strokeWeight(.4); //maybe bigger??
  frame = 0;
  numVar = 40;
  rez3 = .002;
  len = size1 *.3;
  stroke(0, 200);
  size1(width - frame *2) / numVar;
  lines = [];
  lines2 = [];
    for(x = frame; x < width - frame; x += size1){
      for( y = frame; y < height - frame; y += size1){
        x+= width * random(-.001, .001);
        y += width * random(-.001, .001);
        pastX = x;
        oldY = y;
        for (i = 0; i < 20; i++) {

          n = noise(pastX * rez3, oldY *rez3) + .033;
          ang = map(n, 0.3, .7, 0, PI *2);

          newX = cos(ang) * len + pastX;
          newY = sin(ang) * len + pastY;
          line(pastX, pastY, newX, newY);
          pastX = newX;
          pastY = newY;

        }

      }
    }
 //z = 800;

function getColor(col1){

  h = int(table.get(palette, col1 * 3));
  s = int(table.get(palette, col1 * 3 +1));
  b = int(table.get(palette, col1 * + 2));
}
}
