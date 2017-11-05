var images
var imgNumber
var num = 1;
var bit = "assets/bit" + "00" + num + ".jpg"; 
var img3

function preload()
{

}

function setup() 
{
  createCanvas(window.innerWidth, window.innerHeight);
  imgNumber = random([0,1,]); 
 
  
}


function draw() 
{
  loadImage(bit, function(img) {
    image(img, 0, 0);
  });
  
  if (keyIsDown(UP_ARROW)) {
    keyPressed();
  }
  if (keyIsDown(DOWN_ARROW)) 
    keyPressed();
}



function keyPressed() {
  if (keyCode === UP_ARROW) { 
      if(num > 98) {
        num = 1; 
      } else {
        num ++
      }
  
  } else if (keyCode === DOWN_ARROW) {
      if (num < 2) {
        num = 99;
      } else { 
      num --
      }
      }
  
  if (0 < num && num < 9){
 bit = "assets/bit" + "00" + num + ".jpg";
  }
  
  if (9 < num && num < 99) {
    bit = "assets/bit" + "0" + num + ".jpg";
  }
  
  
  console.log(bit);
  console.log(num);
}


function windowResized() 
{
  resizeCanvas(windowWidth, windowHeight);
}