//namespacing
const World = Matter.World; //create world
const Engine = Matter.Engine; //physic engine
const Bodies = Matter.Bodies; //creates objects

var engine, world;
var ground;
var ball;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world; 
   
  //JSON javascript object notation
  var ground_options={
    'isStatic':true
  }
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  var ball_options={
    'restitution': 0.8
  }
  ball = Bodies.circle(50,50,20,ball_options);
  World.add(world,ball);
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER); 
  rect(ground.position.x,ground.position.y,400,20);
  //rect - rectangle as well as square 
  // ellipse - circle as well as ellipse/oval
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}
