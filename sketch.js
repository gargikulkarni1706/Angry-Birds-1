const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700, 320, 70, 70);
    box2 = new Box(900, 320, 70, 70);
    box3 = new Box(700, 220, 70, 70);
    box4 = new Box(900, 220, 70, 70);
    box5 = new Box(800, 120, 70, 70);
    ground = new Ground(600, 390, 1200, 20);
    piggy = new Pig(800, 320);
    piggy2 = new Pig(800, 220);
    birds = new Bird(100, 255);
    logs = new Log(800, 220, 270, PI /2);
    logs2 = new Log(800, 120, 270, PI/2);
    logs3 = new Log(730, 20, 200, PI/7);
    logs4 = new Log(870, 20, 200, -PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    piggy.display();
    piggy2.display();
    birds.display();
    logs.display();
    logs2.display();
    logs3.display();
    logs4.display();
}