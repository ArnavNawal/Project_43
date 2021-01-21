


function setup() {
  
  createCanvas(1500,1500);
  angleMode(DEGREES);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");
  hr = hour()
  min = minute()
  sec = second()  
  console.log(hr+" "+min+ " "+sec);
  drawSprites();
  translate(750,750);
  rotate(-90)
  strokeWeight(7)
  //line(200,780,200,100)
  //line(750,750,100,200)
  
  
  
  scAngle = map(sec,0,60,0,360);
  mnAngle = map(min,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);
  push()
  rotate(scAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,150,0)
  pop()
  
  push()
  rotate(mnAngle)
  stroke(0,255,0)
  strokeWeight(7)
  line(0,0,100,0)
  pop()
 
  push()
  rotate(hrAngle)
  stroke(0,0,255);
  strokeWeight(7)
  line(0,0,50,0)
  pop()
  point(0,0)
  strokeWeight(10)
  noFill()
  stroke(0,0,255)
  arc(0,0,240,240,0,hrAngle)
  stroke(255,0,0)
  arc(0,0,300,300,0,scAngle)
  stroke(0,255,0)
  arc(0,0,280,280,0,mnAngle)
}