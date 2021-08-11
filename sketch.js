const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var stone = [];



function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);


  bridge = new bridge(200, 250, 150, 160);
  base = new Base(180, 280, 50,50);

  Matter.Composite.add(bridge.Body, jointPoint);
  jointLink = new Link(bridge, jointPoint);
   
  for(var i = 0; i <= 8; i++) {
    var x = random(width / 2 - 200, width / 2 + 300);
    var y = random(-10, 140);
    var stone = new Stone(x, y, 80, 80);
    stones.push(stone);
  }

}

function draw() {
  background(51);
  Engine.update(engine);

  bridge.show()
  base.show()
  stone.show()

}
