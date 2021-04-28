const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var block8,shooter,Ground1;
var bagImg
function setup() {
createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;

  base1=new Ground(390,300,250,10);

  block1=new Block(300,275,30,40);
  block2=new Block(330,275,30,40);
  block3=new Block(360,275,30,40);
  block4=new Block(390,275,30,40);
  block5=new Block(420,275,30,40);
  block6=new Block(450,275,30,40);
  block7=new Block(480,275,30,40);

  block8=new Block1(330,235,30,40);
  block9=new Block1(360,235,30,40);
  block10=new Block1(390,235,30,40);
  block11=new Block1(420,235,30,40);
  block12=new Block1(450,235,30,40);

  block13=new Block2(360,195,30,40);
  block14=new Block2(390,195,30,40);
  block15=new Block2(420,195,30,40);

  block16=new Block3(390,155,30,40);

  base2=new Ground(750,260,200,10);

  block1n=new Block(690,235,30,40);
  block2n=new Block(720,235,30,40);
  block3n=new Block(750,235,30,40);
  block4n=new Block(780,235,30,40);
  block5n=new Block(810,235,30,40);

  block6n=new Block2(720,195,30,40);
  block7n=new Block2(750,195,30,40);
  block8n=new Block2(780,195,30,40);

  block9n=new Block1(750,155,30,40);
  
  shooter=new Polygon(120,200,21);

  Launcher1 = new Launcher(shooter.body,{x:120, y:200});

  Ground1=new Ground(500,395,1000,20);
}
function preload(){
  getTime();
}
function draw() {
  if(bagImg)
  background(bagImg);
 else{
   background(56,44,44)
 } 
  


  Engine.update(engine);
  drawSprites();

  text("Press Space to get a second chance to Play!!",730,370)

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  shooter.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  block13.display();
  block14.display();
  block15.display();

  block16.display();

  block1n.display();
  block2n.display();
  block3n.display();
  block4n.display();
  block5n.display();

  block6n.display();
  block7n.display();
  block8n.display();

  block9n.display();

  base1.display();
  base2.display();

  Launcher1.display();
  
  Ground1.display();
}
function keyPressed(){
  if(keyCode === 32){
   Launcher1.attach(shooter.body)
  }
}
function mouseDragged(){
  Matter.Body.setPosition(shooter.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  Launcher1.fly();
}
async function getTime(){
  var apirequest = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
   var timejson = await apirequest.json();
   var time = timejson.datetime
   var hour = time.slice(11,13);
   

   if(hour >= 06 && hour <= 18){
     bg = "Day bg.jpg"
   } else{
     bg = "Night bg.jpg"
   }
   bagImg=loadImage(bg);
}