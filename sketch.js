
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1;


function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	ground= new Ground();
	//Create the Bodies Here.
	dustbin1 = new Box(700,470,200,20);
	dustbin2 = new Box(590,380,20,200);
	dustbin3 = new Box(810,380,20,200);

	paper = new Paper(200,400,30)

	Engine.run(engine);
  
}


function draw() {
  background(0);
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
  drawSprites();
 

}

function keyPressed(){

	if (keyCode == UP_ARROW) {
		Body.applyForce(paper.body,paper.body.position,{x:150,y:-160})
	}
}



