var pc;
var npc,npc1;
var ground;
var pcWalking

function preload(){
pcWalking = loadImage("pcWalk.png");
npc = loadImage("NPC.png");
}

function setup() {
  createCanvas(500,500);
  pc = createSprite(250, 250, 50, 50);
  pc.addImage("pcWalking",pcWalking);
  npc1 = createSprite(300,300,50,50);
  npc1.addImage("npc",npc);
}



function draw() {
  background(255,255,255);  
 
 

  if(keyDown(LEFT_ARROW)){
    changePosition(-1,0);
}
else if(keyDown(RIGHT_ARROW)){
    changePosition(1,0);
}
else if(keyDown(UP_ARROW)){
    changePosition(0,-1);
}
  
  
  drawSprites();
}
function changePosition(x,y){
  pc.x = pc.x + x;
  pc.y = pc.y + y;
}
