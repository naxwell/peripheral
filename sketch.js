var images
var imgNumber
var num = 1;
var bit = "assets/bit" + "00" + num + ".jpg"; 
var img3

function preload()
{
  // load images
 // img1 = loadImage("assets/bit000.jpg");
  //img2 = loadImage("assets/bit095.jpg");
}

function setup() 
{
  createCanvas(window.innerWidth, window.innerHeight);
  //images = [img1, img2]; 
  imgNumber = random([0,1,]); 
  //img3 = loadImage(bit);
  //num = 1;  
  
}


function draw() 
{
  loadImage(bit, function(img) {
    image(img, 0, 0);
  });
  
  //image(img3, 0, 0); 
  //image(images[imgNumber],0,0)
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