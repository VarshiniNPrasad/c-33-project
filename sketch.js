const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const World = Matter.World;
const Constraint = Matter.Constraint;

var bg, kidImg, dogImg1, snow1Img, snow2Img;
var kid, dog;
var snow = [];
var maxSnow = 10;
var snowSpr, snowBody;

function preload() {
  bg = loadImage("snow1.jpg");

  kidImg = loadImage("girl.png");
  dogImg1 = loadImage("dog1.gif");

  snow1Img = loadImage("snow4.webp");
  snow2Img = loadImage("snow5.webp");
}

function setup() {
  createCanvas(1200, 650);

  engine = Engine.create();
  world = engine.world;

  dog = createSprite(750, 550, 50, 50);
  dog.addImage("k", dogImg1);
  dog.scale = 0.1;

  kid = createSprite(600, 430, 50, 50);
  kid.addImage("j", kidImg);
  kid.scale = 0.7;

  if (frameCount % 180 === 0) {
    for (var i = 0; i < maxSnow; i++) {
      snow.push((snowBody = new Snow(random(0, 1200), random(-50, 600))));
    }
  }

  Engine.run(engine);
}

function draw() {
  background(bg);
  Engine.update(engine);

  //Kid and Dog movement
if(keyDown(LEFT_ARROW)){
  kid.x-=7;
  dog.x-=7;
}

if(keyDown(RIGHT_ARROW)){
  kid.x+=7;
  dog.x+=7;
}


  

  for (var i = 0; i < maxSnow; i++) {
    snow[i].display();
    snow[i].repeat();
  }

  drawSprites();
}
