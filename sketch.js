function preload(){
  myImage = loadImage ('./assets/aristogatti.jpg ');
  myImage1 = loadImage('./assets/pisolo.png')
    mySongCello = loadSound('./assets/cello.mp3');
    mySongPiano = loadSound('./assets/piano.mp3');
    mySongGuitar = loadSound('./assets/guitar.mp3');
    mySongAccordion = loadSound('./assets/accordion.mp3');
}

var myPisolo = {};
var analyzer;
var c ;
var musicaPiano = 0;
var musicaGuitar = 0;
var musicaCello = 0;
var musicaAccordion = 0;
var d ;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mySongPiano.loop();
  mySongCello.loop();
  mySongGuitar.loop();
  mySongAccordion.loop();
  analyzer = new p5.Amplitude(); // per controllare il volume della canzone;
  analyzer.setInput(mySongPiano);
  background(0);
  //myPisolo = new pisolo(50,50);
}

function draw() {
  //myPisolo.display();





  var imgX = 6*myImage.width/7 ;
  var imgY = 6*myImage.height/7 ;
   image(myImage, width/2 - imgX/2, height/2-imgY/2, imgX, imgY);



// per violoncello  rect(350,280, 150, 200);
   if(musicaCello == 0 ) {
   mySongCello.stop();}
   else if(musicaCello == 1 ) {
     if(mySongCello.isPlaying() == false) {
     mySongCello.play(); }}

//rect(560, 130, 430, 370)
     if(musicaPiano == 0) {
     mySongPiano.stop();}
     else if (musicaPiano == 1){
       if( mySongPiano.isPlaying() == false)  {
       mySongPiano.play()}}


//rect(1030, 450, 120, 60);
    if(musicaGuitar == 0) {
    mySongGuitar.stop();}
    else if(musicaGuitar == 1) {
      if(mySongGuitar.isPlaying() == false) {
      mySongGuitar.play()}}


//rect(615,510,115,40)
   if(musicaAccordion == 0) {
   mySongAccordion.stop();}
   else if(musicaAccordion == 1) {
     if(mySongAccordion.isPlaying() == false) {
     mySongAccordion.play()}}



// controllo volume
stroke(200);
fill(200);
rect(79, 200, 22, 300, 45, 45, 45, 45);
var volume = map(mouseY, 200, 500, 10, 0);
if(mouseY >= 210 && mouseY <= 490 && mouseX >= 80 && mouseX <= 100) {
     noFill();
    stroke('red');
     ellipse(90, mouseY, 19);
     mySongPiano.amp(volume);
     mySongCello.amp(volume);
     mySongGuitar.amp(volume);
     mySongAccordion.amp(volume);
     c = mouseY;
} else {
  stroke('red');
  noFill();
  ellipse(90,c, 20)}
stroke(200);
fill(200);
rect(1414, 200, 22, 300, 45, 45, 45, 45);
var velocita = map(mouseY, 200, 500,2,1)
if(mouseY >= 210 && mouseY <= 490  && mouseX >= 1415 && mouseX <= 1455) {
    noFill();
     stroke('red');
     ellipse(1425, mouseY, 19);
    mySongPiano.rate(velocita);
      mySongGuitar.rate(velocita);
        mySongAccordion.rate(velocita);
          mySongCello.rate(velocita);
     d = mouseY;
} else {
   stroke('red');
  ellipse(1425, d, 20)}


// testo barra del volume
    noStroke();
    textAlign(CENTER)
    textSize(25);
    text('Volume', 90, 175)
    fill(0);
    textSize(12);
    text('10', 90, 218);
    text('7.5', 90, 283.5);
    text('5.0', 90, 352);
    text('2.5', 90, 420.5);
    text('0', 90, 489);

//testo barra della velocità
    textSize(25);
    fill(200);
    text('Speed', 1425, 175)
    fill(0);
    textSize(12);
    text('2', 1425, 218);
    text('1.5', 1425, 283.5);
    text('1.0', 1425, 352);
    text('0.5', 1425, 420.5);
    text('0', 1425, 489);

    if (frameCount< 400) {fill(0,0,0,230)
    rect(width/2-250, height/2-95, 500, 165, 25, 25, 25, 25)
    fill(200);
    textAlign(CENTER);
    textSize(25);
    text('Click on the instruments to play the music \n and click again to stop it.\n Move the mouse along the two side bars\n  to change the volume and speed ', width/2, height/2-50);}


}
  /*for (var i = 215; i < 490; i += 68.74 ) {
    textAlign('CENTER')
    fill('red')
    text(t,87, i, );
  }*/





 function touch() {
      var cambia =  ((this.x - mouseX) ** 2) + ((this.y - mouseY) ** 2) < 600;
      return cambia;
  };

function mousePressed() {if (mouseX > 560 && mouseX < 960 && mouseY > 130 && mouseY < 500 && musicaPiano == 0) {musicaPiano = 1}
else if(mouseX > 560 && mouseX < 960 && mouseY > 130 && mouseY < 500 && musicaPiano == 1) { musicaPiano = 0;}
else if (mouseX > 350 && mouseX < 500 && mouseY > 280 && mouseY < 480 && musicaCello == 0) {musicaCello = 1}
else if( mouseX > 350 && mouseX < 500 && mouseY > 280 && mouseY < 480 && musicaCello == 1) { musicaCello = 0;}
else if (mouseX > 1030 && mouseX < 1150 && mouseY > 450 && mouseY < 510 && musicaGuitar == 0) {musicaGuitar = 1}
else if(mouseX > 1030 && mouseX < 1150 && mouseY > 450 && mouseY < 510 && musicaGuitar == 1) { musicaGuitar = 0;}
else if (mouseX > 615 && mouseX < 730 && mouseY > 510 && mouseY < 550 && musicaAccordion == 0) {musicaAccordion = 1}
else if( mouseX > 615 && mouseX < 730 && mouseY > 510 && mouseY < 550 &&  musicaAccordion == 1) { musicaAccordion = 0;}}


/*function pisolo(_x, _y) {
  this.x = _x;
  this.y = _y;
  this.display = function() {
    image(myImage1, this.x, this.y, 100, 200)
}  }*/
