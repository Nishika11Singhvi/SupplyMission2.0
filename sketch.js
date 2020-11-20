var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var red1;
var red2;
var red3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() 
{
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,70,50);
	groundSprite.shapeColor= "green";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	var pos = packageBody.position;

	ground = Bodies.rectangle(width/2, 635, width, 50 , {isStatic:true} );
	World.add(world, ground);

	red1 = new redPanels(310,570,20,100,);
	World.add(world,red1);
	red2 = new redPanels(490,570,20,100);
	World.add(world,red2);
	red3 = new redPanels(400,620,200,20);
	World.add(world,red3);

	Engine.run(engine);
}

function draw() 
{
  rectMode(CENTER);
  background("skyblue");

  Engine.update(engine);

  packageSprite.x = packageBody.position.x 
  packageSprite.y = packageBody.position.y 

  textSize(20);
  fill("black");
  textFont("bembo");
  text("Press Down Arrow To Recieve Parcel",50,50)

  red1.display();
  red2.display();
  red3.display();  

  drawSprites();
}

function keyPressed() 
{
	if (keyCode === DOWN_ARROW) 
 	{
		Matter.Body.setStatic(packageBody,false);
		var hide = createSprite(150,50,500,50);
		hide.shapeColor = "skyblue";
	}
}
