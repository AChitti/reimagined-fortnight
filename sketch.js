
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, ground, binLeft, binBottom, binRight;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball=new Ball(100,350,40)
	binBottom=new Trashcan(1000,height-22,200,20);
	binLeft=new Trashcan(900,height-70,20,100);
	binRight=new Trashcan(1100,height-70,20,100);
	ground=new Ground(600,height,1200,20);

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  ground.display();
  binBottom.display();
  binLeft.display();
  binRight.display();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode==UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:85,y:-85})
	}
}


