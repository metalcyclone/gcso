var wall,thickness;
var bullet,speed,weight;
thickness = random(22,83);
function setup() {
  createCanvas(1600,400);
  wall = createSprite(1200, 200, weight, height/2);
wall.shapeColour = (80,80,80);
speed = random(22,36);
weight = random(30,52);
bullet = createSprite(200,170,110,50);
bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
if(hasCollided(bullet,wall))
{
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

}


if (damage > 10)
{
wall.shapeColour = colour(255,0,0);

}


if(damage < 10)
{
  wall.shapeColour = colour(0,255,0);
} 

function hasCollided(Lbullet,Lwall)
{
bulletRightEdge = lbullet.x + lbullet.width; 
wallLeftEdge = lwall.x;
if(bulletRightEdge >= wallLeftEdge)
{
return  true
}
return false
}








