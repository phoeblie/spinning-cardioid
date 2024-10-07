// Hover mouse to increase lines in cardioid

let r;
let factor = 0;

function setup() {
  createCanvas(640, 640);
  r = width/2-16

}

function getVector (index, total) {
  const angle = map(index % total, 0, total, 0, TWO_PI)
  const v = p5.Vector.fromAngle(angle + PI);
  v.mult(r)
  return v;
}

function draw() {
  background(0);
  const total = int(map(mouseX, 20, width, 50, 300)); 
  //factor = map(mouseY, 0, height, 0, 10); 
  //const total = 200;
  //(map(mouseX, 0, width, 0, 200));
  factor += 0.02;
  
  translate(width/2, height/2);
  stroke(102,153,204);
  fill (0);
  ellipse (0,0,r*3);
  
  
  for (let i = 0 ; i < total ; i++){
    const a = getVector(i, total);
    const b = getVector(i * factor, total);
   

    stroke(102,153,204);
    line (a.x, a.y, b.x, b.y);
}

}