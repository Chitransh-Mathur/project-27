
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObj1,bobObj2,bobObj3,bobObj4,bobObj5;
var rope1,rope2,rope3,rope4,rope5;
var roof;
var engine,world;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobObj1=new Bob(250,300);
bobObj2=new Bob(300,300);
bobObj3=new Bob(2350,300);
bobObj4=new BobObj(400,300);
bobObj5=new BobObj(450,300);
rope1=new Rope(bobObj1.body,roof.body,-100,0);
rope2=new Rope(bobObj1Obj2.body,roof.body,-50,0);
rope3=new Rope(bobObj3.body,roof.body,0,0);
rope4=new Rope(bobObj4.body,roof.body,+50,0);
rope5=new Rope(bobObj5.body,roof.body,+100,0);
roof=new Roof(350,100,300,30);

	Engine.run(engine);
  
}

function draw() {
rectMode(CENTER);
background(0);
bobObj1.display();
bobObj2.display();
bobObj3.display();
bobObj4.display();
bobObj5.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
roof.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===space){
		Matter.Body.applyForce(bobObj1.body,bobObj1.body.positon,{x:-730,y:0});
	}
}


