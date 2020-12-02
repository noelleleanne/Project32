
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, stand1,stand2,stand3;
var block1,block2,block3,block4,block5,block6;
var block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var blocks7,blocks8,blocks9,blocks10,blocks11,blocks12,blocks13,blocks14,blocks15,blocks16,  blocks17, blocks18;
var blocks19, blocks20, blocks21,blocks22, blocks23;
var score = 0;

function preload()
{
	polygonImg = loadImage("polygon.png");
}

function setup() {
	createCanvas(1200, 500);

	engine = Engine.create();
	world = engine.world;

	polygon = Bodies.circle(50,200,20);
	World.add(world,polygon);

	slingShot = new Slingshot(this.polygon,{x:100,y:200});

	//Create the Bodies Here.
	ground = new Stand(width/2,height,1200,40);
	stand1 = new Stand(725,300,300,10);
	stand2 = new Stand(400,400,150,10);
	stand3 = new Stand(1050,200,200,10);

	block1 = new Block(383,395,35,45);
	block2 = new Block(401,395,35,45);
	block3 = new Block(419,395,35,45);
	block4 = new Block(383,372,35,45);
	block5 = new Block(401,372,35,45);
	block6 = new Block(383,349,35,45);

	block7 = new Block(1027,195,35,45);
	block8 = new Block(1045,195,35,45);
	block9 = new Block(1063,195,35,45);
	block10 = new Block(1081,195,35,45);
	block11 = new Block(1027,172,35,45);
	block12 = new Block(1045,172,35,45);
	block13 = new Block(1063,172,35,45);
	block14 = new Block(1027,149,35,45);
	block15 = new Block(1045,149,35,45);
	block16 = new Block(1027,126,35,45);

	blocks7 = new Block(682,295,35,45);
	blocks8 = new Block(700,295,35,45);
	blocks9 = new Block(718,295,35,45);
	blocks10 = new Block(736,295,35,45);
	blocks11 = new Block(754,295,35,45);
	blocks12 = new Block(772,295,35,45);
	blocks13 = new Block(790,295,35,45);
	blocks14 = new Block(700,272,35,45);
	blocks15 = new Block(718,272,35,45);
	blocks16 = new Block(736,272,35,45);
	blocks17 = new Block(754,272,35,45);
	blocks18 = new Block(777,272,35,45);
	blocks19 = new Block(718,249,35,45);
	blocks20 = new Block(736,249,35,45);
	blocks21 = new Block(756,249,35,45);
	blocks22 = new Block(736,226,35,45);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  textSize(20);
  text("SCORE : "+score,750,40);
  
  ground.display();
  stand1.display();
  stand2.display();
  stand3.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();

  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  blocks7.display();
  blocks8.display();
  blocks9.display();
  blocks10.display();
  blocks11.display();
  blocks12.display();
  blocks13.display();
  blocks14.display();
  blocks15.display();
  blocks16.display();
  blocks17.display();
  blocks18.display();
  blocks19.display();
  blocks20.display();
  blocks21.display();
  blocks22.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();

  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();

  blocks7.score();
  blocks8.score();
  blocks9.score();
  blocks10.score();
  blocks11.score();
  blocks12.score();
  blocks13.score();
  blocks14.score();
  blocks15.score();
  blocks16.score();
  blocks17.score();
  blocks18.score();
  blocks19.score();
  blocks20.score();
  blocks21.score();
  blocks22.score();

  slingShot.display();

  imageMode(CENTER);
  image(polygonImg,polygon.position.x, polygon.position.y, 40,40);

  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingShot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(this.polygon);
    }
}


