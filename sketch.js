const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var fruit;

var pino1



function preload(){
  backgroundImg = loadImage("background.png");
 fruit=loadImage("bola.png");
 
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  
 

  //Desafio1:
  ball = Bodies.circle(100,350,20);
  World.add(world,ball);
//Desafio2
  slingShot = new Slingshot(ball,{x:100,y:360});

  pino1 = new Pino(850,350)
  pino2 = new Pino(700,350)

}
function draw() {
  background(backgroundImg); 
 
  //Engine.update(engine);
  //mostrar as posicoes x e y na tela
  fill("white")
 text(mouseX + ',' + mouseY, 10, 15);
  
  //ground.display();
 


  imageMode(CENTER)
  image(fruit ,ball.position.x,ball.position.y,40,40);

  pino1.display()
  pino2.display()
 

  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(ball,{ x: mouseX, y: mouseY });
}
function mouseReleased(){
  slingShot.fly();

}
