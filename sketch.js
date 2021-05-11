var bullet,wall;
var speed, weightx;
var restart;
var thickness;

function setup() {
  createCanvas(1400,400);
  speed=random(223,321);
  weightx=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(100, 200, 30, 15);
  wall=createSprite(1300,200,thickness,height/2);
}
function draw() {
  background(0,0,0);  
 
  bullet.velocityX=speed;
  bullet.weight=weightx;

  if(collided(bullet,wall))
  {
    var damage=0.5*weightx*speed*speed/(thickness*thickness*thickness);
bullet.velocityX=0;
bullet.x=WallLeftEdge-bullet.width/2;
    if(damage<10){
      wall.shapeColor="green";
    }

    if(damage>10){
      wall.shapeColor="red";
    }
  }
  drawSprites();
}

function collided(bullet,wall){
  BulletRightEdge=bullet.x+bullet.width/2;
  WallLeftEdge=wall.x-wall.width/2;

  if(BulletRightEdge>=WallLeftEdge){
  return true;
  }
  return false;
}