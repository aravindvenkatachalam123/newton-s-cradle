
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var ground;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground(400,100,500,10);
	bobObject1=new bob (200,300,70);
	bobObject2=new bob (165,300,70);
	bobObject3=new bob (130,300,70);
	bobObject4=new bob (235,300,70);
	bobObject5=new bob (270,300,70);
	rope1=new Chain (bobObject1.body,groundObject.body,-bobDiameter*2,0);
	rope2=new Chain (bobObject1.body,groundObject.body,-bobDiameter*2,0);
	rope3=new Chain (bobObject1.body,groundObject.body,-bobDiameter*2,0);
	rope4=new Chain (bobObject1.body,groundObject.body,-bobDiameter*2,0);
	rope5=new Chain (bobObject1.body,groundObject.body,-bobDiameter*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
    drawSprites();
 
}



