//creating sprite
var pic;
var rb, rbImage;
var gb, gbImage;
var bb, bbImage;
var pb, pbImage;
var bow, bowImage;
var arrow, arrowImage;
var redB;
var arrowGroup;
var blueB;
var greenB;
var pinkB;



function preload() {
  //loading image
  pic = loadImage("background0.png");
  rbImage = loadImage("red_balloon0.png");
  gbImage = loadImage("green_balloon0.png");
  bbImage = loadImage("blue_balloon0.png");
  pbImage = loadImage("pink_balloon0.png");
  bowImage = loadImage("bow0.png");
  arrowImage = loadImage("arrow0.png");
}

function setup() {
  //creating the canvas and adding the images
  createCanvas(600, 600);
  backround = createSprite(0, 0, 600, 2000);
  backround.addImage(pic);
  backround.scale = 2.7;
  bow = createSprite(470, 2500, 20, 40);
  bow.addImage(bowImage);
  score = 0;
  redB= new Group();
  arrowGroup = new Group();
  blueB= new Group();
  greenB= new Group();
  pinkB= new Group();
  
}

function draw() {
  //adding the code
  redBalloon.lifetime = -9;
  backround.velocityX = -3;
  if (backround.x < 0) {
    backround.x = backround.width / 2;
  }

  bow.y = mouseY;
  //assigning bow,s y position to mouse,sy Position

// release arrow when space key is pressed
  if (mousePressedOver(bow)||keyDown("space")) {
    createArrow();
    
  }

  var select_balloon = Math.round(random(1, 4));
  console.log = select_balloon;
  if (World.frameCount % 80 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
 if (arrowGroup.isTouching(redB)){
   redB.destroyEach();
   arrowGroup.destroyEach();
   score = score+1
 }
  
   if (arrowGroup.isTouching(blueB)){
   blueB.destroyEach();
   arrowGroup.destroyEach();
   score = score+2
 }
  
   if (arrowGroup.isTouching(greenB)){
   greenB.destroyEach();
   arrowGroup.destroyEach();
   score = score+3
 }
  
   if (arrowGroup.isTouching(pinkB)){
   pinkB.destroyEach();
   arrowGroup.destroyEach();
   score = score+4
 }
  
  drawSprites();
  text("Score: " + score, 500, 50);
}

function redBalloon() {
  var red = createSprite(0, Math.round(random(20, 370)), 10, 10);
  red.addImage(rbImage);
  red.velocityX = 3;
  red.scale = 0.1;
  red.lifetime = 180;
  redB.add(red)
}

function blueBalloon() {
  var blue = createSprite(0, Math.round(random(20, 370)), 10, 10);
  blue.addImage(bbImage);
  blue.velocityX = 3;
  blue.scale = 0.1;
  blue.lifetime = 180;
  blueB.add(blue)
}

function greenBalloon() {
  var green = createSprite(0, Math.round(random(20, 370)), 10, 10);
  green.addImage(gbImage);
  green.velocityX = 3;
  green.scale = 0.1;
  green.lifetime = 180;
  greenB.add(green)
}

function pinkBalloon() {
  var pink = createSprite(0, Math.round(random(20, 370)), 10, 10);
  pink.addImage(pbImage);
  pink.velocityX = 3;
  pink.scale = 1;
  pink.lifetime = 180;
  pinkB.add(pink)
}
// Creating arrows for bow
function createArrow() {
  arrow = createSprite(360, 100, 5, 5);
  arrow.addImage(arrowImage);
  arrow.scale = 0.3;
  arrow.velocityX = -6;
  arrow.lifetime = 60;
  arrow.y=bow.y
  arrowGroup.add(arrow)
  
 
}
