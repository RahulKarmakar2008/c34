const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var ground,ball,rope;
var b1,b2,b3,b4,b5;









function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
    world = engine.world;
ground=new Ground (600,580,1200,20);
ball=new Ball(250,200,80);
rope=new Rope(ball.body,{x:250,y:50});
b1=new Box (400,400,80,100);
b2=new Box (400,300,80,100);
b3=new Box (400,200,80,100);
b4=new Box (400,100,80,100);
b5=new Box (400,0,80,100);
}

function draw() {
  background("lightgreen"); 
  Engine.update(engine);
  ground.display();
  ball.display();
  rope.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();

}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}