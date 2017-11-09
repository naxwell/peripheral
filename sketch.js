/*
 *         _  __ 
 *        (_)/ _|
 *    __ _ _| |_ 
 *   / _` | |  _|
 *  | (_| | | | 
 *   \__. |_|_|             _
 *    __/ | |              | |    
 *   |___/| | ___ __   ___ | |__  
 *        | |/ / '_ \ / _ \| '_ \ 
 *        |   <| | | | (_) | |_) |
 *        |_|\_\_| |_|\___/|_.__/ 
 *            by N Maxwell Lander
 *
 *  Made for Creation & Computation - Digital Futures, OCAD University
 *
 *  It's inportant to note the potentiometer input has been mapped to give a value between 1 and 10 on the Feather
 */


var images
var imgNumber
var num = 1;
var bit = "assets/bit" + "00" + num + ".jpg"; 
var img3
var serial;          // variable to hold an instance of the serialport library
//var portName = '/dev/ttyACM0';  // Ubuntu serial port
var portName = '/dev/cu.usbmodem1411';  // macbook serial port
var inData; // for incoming serial data
var frame
var frame2

function setup() 
{
  serial = new p5.SerialPort();       // make a new instance of the serialport library
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen);        // callback for the port opening
  serial.on('data', serialEvent);     // callback for when new data arrives
  serial.on('error', serialError);    // callback for errors
  serial.on('close', portClose);      // callback for the port closing
 
  serial.list();                      // list the serial ports
  serial.open(portName);              // open a serial port
  createCanvas(window.innerWidth, window.innerHeight);
  imgNumber = random([0,1,]); 
  
}


function draw() 
{
  loadImage(bit, function(img) {   //loads image into the canvas based on the current status of "bit" (defined by potentiometer input below)
    image(img, 0, 0, windowWidth, windowHeight); //stretches image to fullscreen
  });
  
  if (inData != 5){
    gifIt();
  }
  console.log(frameRate());
  
}

// Moves the images back and forth based on Potentiometer input
function gifIt() {
  if (inData > 5 && inData < 7){         //advances the file forward if the potentiometer is in a "forward" position
    if(num > 98) {         //when it reaches the final image, rolls over to first image 
        num = 1; 
      } else {
        num ++;
      }
  
  } else if (inData < 5 && inData > 3) {  //cycles backwards through images if the potentiometer is in a "backwards" position
      if (num < 2) {        // when the first image is reached, rolls over to the last image
        num = 99;
      } else { 
      num --;
      }
  } else if (inData < 3){
      if(num < 2) {          //when it reaches the final image, rolls over to first image
       num = 99;
      } else { 
        num --;
        } 
  }else if (inData > 7){
      if(num > 98) {         //when it reaches the final image, rolls over to first image 
        num = 1; 
      } else {
        num ++;
        }
   // frameRate(frame2);
      }
  
  
  if (0 < num && num < 9){                  //sets filename for files ending between 1 and 9
 bit = "assets/bit" + "00" + num + ".jpg";
  }
  
  if (9 < num && num < 99) {                //sets filename for  files ending between 10 and 99
    bit = "assets/bit" + "0" + num + ".jpg";
  }
}


function serialEvent() {
  inData = Number(serial.read());
  //console.log (inData);
  frame = Math.abs(map(inData,0,10,-5,5));
  frameRate(frame*10);
}

function serverConnected() {
  console.log('connected to server.');
}
 
function portOpen() {
  console.log('the serial port opened.')
}
 
 
function serialError(err) {
  console.log('Something went wrong with the serial port. ' + err);
}
 
function portClose() {
  console.log('The serial port closed.');
}

function windowResized() 
{
  resizeCanvas(windowWidth, windowHeight);
}