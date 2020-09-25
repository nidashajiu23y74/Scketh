
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
    dust1 = createSprite(500,630,10,80);
	dust2 = createSprite(300,630,10,80);
	dust3 = createSprite(400,655,190,10);
	g= Ground (750,350,800,100);
	ball = Paper(600,673,20,20);
	paperObject.display()
	DustbinObj.display()
	
   drawSprites();
 
}

function keyPressed(){
	if(keycode===UP_ARROW){
		Matter.Body.applyForce(paperObject.Body,paperObject.position,{x:85,y:-85});
	}
}
class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("yellow");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };

function Dustbin(){
		dust1 = createSprite(500,630,10,80);
		dust2 = createSprite(300,630,10,80);
		dust3 = createSprite(400,655,190,10);
		DustbinObj=loadImage("unnamed.jpg");

	}
	
