
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var stone1,rubber1,hammer1,iron1,plane1;

var engine,world
function setup() {
	createCanvas(1200,600);


	engine = Engine.create();
	world = engine.world;

	plane1=new Plane(600,height,1200,20)
	iron1=new Iron(300,350)
	stone1=new Stone(700,320,100,100)
	rubber1=new Rubber(900,450,70)
	hammer1=new Hammer(10,100)
  
}


function draw() {
  background("lightblue");
  Engine.update(engine)
  plane1.display()
  iron1.display()
  hammer1.display()
  stone1.display()
  rubber1.display()
}



