var iss_img,spacecraft1_img ,spacecraft2_img,spacecraft3_img,spacecraft4_img;
var hasDocked = false;
var bg;
var spacecraft;


function preload(){
  bg = loadImage("Docking-undocking/spacebg.jpg");
  iss_img = loadImage("Docking-undocking/iss.png");
spacecraft1_img = loadImage("Docking-undocking/spacecraft1.png");
spacecraft2_img = loadImage("Docking-undocking/spacecraft2.png");
spacecraft3_img = loadImage("Docking-undocking/spacecraft3.png");
spacecraft4_img = loadImage("Docking-undocking/spacecraft4.png");
}

function setup() {
  createCanvas(600,350);

  spacecraft = createSprite(285,240);
  spacecraft.addImage(spacecraft1_img);
 spacecraft.scale=0.15;

  iss = createSprite(300,130);
 iss.addImage("iss",iss_img);
 iss.scale=0.5;
  
}

function draw() {
  background(bg);  

  if(!hasDocked){
    spacecraft.addImage(spacecraft1_img)
    spacecraft.x=spacecraft.x+random(-1,-1)
   
    if(keyDown("UP_ARROW")){
      spacecraft.y=spacecraft.y-2;
      }

    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(spacecraft4_img);
  spacecraft.x=spacecraft.x-1;

    }
    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(spacecraft3_img);
      spacecraft.x=spacecraft.x+1;
    }
    if(keyDown("DOWN_arrow")){
      spacecraft.addImage(spacecraft2_img);
    }
    
  }
  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
     hasDocked = true; 
     textSize(25);
      fill("white") 
      text("Docking Successful!", 200, 300);
     }
  drawSprites();
}