var bg, bgImg;
var bisao, bisaoImg;
var red, redImg, redGroup;
var edges;



function preload(){
bgImg = loadImage("sprite_0.png");
bisaoImg = loadImage("Bisao0.png");
redImg = loadImage("vermelho0.png");

}

function setup() {
  createCanvas(600,600);

  bisao = createSprite(200,515);
  bisao.addImage(bisaoImg);
  bisao.scale=0.3;
  bisao.velocityX=4;

  redGroup= new Group();

}

function draw() {
 background(bgImg);

 edges = createEdgeSprites();
 
 bisao.bounceOff(edges);

 if(redGroup.isTouching(bisao)){
    bisao.destroy();
    redGroup.setVelocityXEach(0);
 }
 
 red1();
    
 drawSprites();
}

function red1(){
   
  if(frameCount%90===0){
  red = createSprite(500,500);
  red.addImage(redImg);
  red.scale=0.2;
  red.y=random(300,550);
  red.velocityX=-2;
  redGroup.add(red);
}
}