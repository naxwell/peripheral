var images
var imgNumber
var num = 1;
var bit = "assets/bit" + "00" + num + ".jpg"; 
var img3
var serial;          // variable to hold an instance of the serialport library
var portName = '/dev/ttyACM0';  // fill in your serial port name here
var inData;                             // for incoming serial data


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
  //text("sensor value: " + inData, 30, 30);
  loadImage(bit, function(img) {
    image(img, 0, 0);
  });
  if (inData != 5){
    gifIt();
  }
}
  // initial movement through images via arrow press
  /*if (keyIsDown(UP_ARROW)) {
    keyPressed();
  }
  if (keyIsDown(DOWN_ARROW)) 
    keyPressed();
}*/

function gifIt() {
  if (inData > 5){
    if(num > 98) {
        num = 1; 
      } else {
        num ++
      }
  
  } else if (inData < 5) {
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
}

/*function keyPressed() {
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
}*/

function serialEvent() {
  inData = Number(serial.read());
  //console.log (inData);
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