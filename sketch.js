
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball

function preload()
{
	
}

function setup() {
	createCanvas(1200, 900);

var ball_options={
	isStatic: false,
	restitution: 0.3,
	friction: 0,
	density:1.2
}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(100,100,30,ball_options)
	World.add(world,ball)
ground = new Ground(600,850,1200,10)

leftSide = new Ground(790,800,20,120)
rightSide = new Ground(1100,800,20,120)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,30,30)
  drawSprites();
  ground.display()
  leftSide.display()
  rightSide.display()
 
}



function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:55,y:-85})
	}
}