const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2;
var ground
var slingshot

function setup(){
    var canvas = createCanvas(1400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(900,350,50,100);
    box2 = new Box(1040, 350, 50, 100);
    box3 = new Box(970, 300, 200, 50);
    box4 = new Box(900,190,50,100);
    box5 = new Box(1040, 190, 50, 100);
    box6 = new Box(970, 140, 200, 50 );
    box7 = new Box(750, 350, 50, 100);
    box8 = new Box(800, 300, 150, 50);
    box9 = new Box(790, 300, 50, 100);

    box10 = new Box(500, 200, 200, 20,);

    box11 = new Box(500, 300, 40, 100);
    box12 = new Box(410, 170, 30, 80);
    box13 = new Box(590, 170, 30, 80);
    box14 = new Box(500, 170, 30, 80);
    box15 = new Box(500, 160, 300, 20);    

    ground= new Ground(650,400,1500, 20);

    boxcon= new Box(200, 200, 50, 50);

    slingshot = new SlingShot(boxcon.body, {x:200, y:200});


}

function draw(){
    background(0);
    Engine.update(engine);  
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box10.display();

    box11.display();
    box12.display();
    box13.display();
    box14. display();
    box15.display();

    boxcon.display();
    
    slingshot.display();

    ground.display();

    function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}
   
}