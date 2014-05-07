// Adapted from Getting Started with Processing


var x = [];
var penguin;
var width = 1200;
var height = 750; 

function Penguin(){
  this.x = (width/2)-70;
  this.y = height-50;
}

 
Penguin.prototype.draw = function(){
   //body 
  noStroke();
  fill(0);
  ellipse(this.x, this.y,60,60);
 
  fill(255);
  ellipse(this.x,this.y+7, 35, 35);
  ellipse(this.x-7, this.y-12, 12, 22);
  ellipse(this.x+7, this.y-12, 12, 22);

  //wings
  fill(0);
  ellipse(this.x-27, this.y+5, 15,30);
  ellipse(this.x+27,this.y+5,15,30)

  //face
  ellipse(this.x-7, this.y-13, 3, 3);
  ellipse(this.x+7, this.y-13, 3, 3);
  fill(255, 204, 102);
  triangle(this.x-7, this.y-7, this.x, this.y, this.x+6,this.y-7);

  //feet
  fill(255, 204, 102);
  ellipse(this.x-13, this.y+27, 25,10);
  ellipse(this.x+13, this.y+27, 25, 10);
} 

function setup() {

  createCanvas(1200, 750);

  for (var i=0; i<100; i++) {
    x[i] = random(0, width);
    // y.push(random(0, height)); // works the same
  }
  penguin = new Penguin();
}

function draw() {

  background(102, 204, 255);

  penguin.draw();
  // puzzle();
  igloo();
  snow();
}

function igloo(){
//igloo
  noStroke();
  if(penguin.x > 820 && penguin.x < 1070 && penguin.y > 560 && penguin.y < 670) { 
  fill(0, 153, 255);
  ellipse(950, 590, 170, 210);
  fill(204,255,255);
} else {
  fill(255);
  ellipse(950, 590, 170, 210);
  fill(204);
}
  ellipse(950, 590, 60, 100);
  fill(102, 204, 255);
  rect(870, 630, 170, 100);
}

function snow(){
  randomSeed(4);

  for (var i=0; i<x.length; i++) {

    x[i]+=(random(1, 3));

    if (x[i] > width + 5) {
      x[i] = -5;
    }
    
    fill(255);
    noStroke();
    ellipse (x[i], i*15, 8, 8);

  }
}

window.addEventListener('keydown', function(event) {
  switch (event.keyCode) {
    case 37: // Left
      penguin.x -= 10;
    break;

    case 38: // Up
      penguin.y -= 10;
    break;

    case 39: // Right
      penguin.x += 10;
    break;

    case 40: // Down
      penguin.y += 10;
    break;
  }
}, false);




function puzzle(){
  var x = 400;
  var y =100;
  //vertical lines
  stroke(0);
  strokeWeight(2);
  line(x, y, x, y+500);
  line(x+600, y+100, x+600, y+150);
  line(x+600, y+150, x+600, y+200);
  line(x+50, y+50, x+50, y+450);
  line(x-50, y-50, x-50, y+550);
  line(x+150, y, x+150, y+50);
  line(x+200, y+200, x+200, y+400);
  line(x+150, y+150, x+150, y+400);
  line(x+100, y+150, x+100, y+400);
  line(x+250, y+450, x+250, y+250);
  line(x+250, y+450, x+250, y+250);
  line(x+550, y+250, x+550, y+300);
  line(x+600, y+200, x+600, y+350);
  line(x+300, y+350, x+300, y+450);
  line(x+150, y+450, x+150, y+500);

  //horizontal lines
  line(x+300, y+400, x+450, y+400);
  line(x+300, y+450, x+450, y+450);
  line(x+250, y+300, x+550, y+300);
  line(x+300, y+350, x+600, y+350);
  line(x, y+500, x+450, y+500);
  line(x-50, y+550, x+450, y+550);
  line(x+50, y+450, x+250, y+450);
  line(x+250, y+250, x+550, y+250);
  line(x+150, y+150, x+550, y+150);
  line(x+100, y+400, x+200, y+400);
  line(x+50, y+50, x+450, y+50);
  line(x+50, y+100, x+550, y+100);
  line(x-50, y-50, x+450, y-50);
  line(x+200, y+200, x+600, y+200);
  line(x, y, x+450, y);
  line(x-50, y+100, x, y+100);
}

