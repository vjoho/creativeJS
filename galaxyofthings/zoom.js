//
// GALAXY OF THINGS :: 2014
//

function setup() {
    var canvas = createCanvas(1280,5200);    
    canvas.position(0,30);
    canvas.class("galaxy");

    htmlTitleText("Galaxy of Things",25,35);
    htmlSubtitle("Zooming into the galaxy, scroll controlled by scale",30,125);

    htmlScrollText("Milky Way 232, 435, 203, 412, 073, 480, 000, 000, 000, 000, 000, 000 square feet",30,385);
    htmlScrollText("Sun 9, 000, 000, 000, 000, 000, 000, 000, 000 square feet",30,2000);
    htmlScrollText("Earth 5, 500, 000, 000, 000, 000 square feet",30,2500);
    htmlScrollText("Grand Canyon 53, 000, 000, 000 square feet",30,2900);
    htmlScrollText("One World Trade Center Tower 1,776 feet high",30,3300);
    htmlScrollText("Blue Whale 80 feet long",30,3600);
    htmlScrollText("Human 6 feet tall",30,3800);
    htmlScrollText("Basketball 2.5 feet circumference",30,4200);
    htmlScrollText("Ant 0.0393701 feet long",30,4500);
    htmlScrollText("Blood Cell 0.00002624671 feet long",30,4820);
}

function draw() {
    rectMode(CENTER);
    background(82,237,199);
    incomingGalaxy()
    // milky way
    incomingObject(255,94,58,365,10+(window.pageYOffset*9));
    incomingObject3(255,255,255,365,10+(window.pageYOffset*2));
    // sun
    if (window.pageYOffset > 1300){
        incomingSun(255,204,0,2000,(window.pageYOffset-1300)*3);
    }
    // earth
    if (window.pageYOffset > 1800){
        incomingEarth(0,51,102,2500,(window.pageYOffset-1800)*3);
    } 
    // grand canyon
    if (window.pageYOffset > 2200){
        incomingCannon(91,78,55,2900,(window.pageYOffset-2200)*3);
    }
    // WTC tower
    if (window.pageYOffset > 2700){
        incomingWTC(50,50,50,3400,(window.pageYOffset-2700)*3);
    }   
    // blue whale
    if (window.pageYOffset > 2900){
        blueWhale(4,65,90,3600,(window.pageYOffset-2900)*3);
    }   
    // human
    if (window.pageYOffset > 3300){
        human(226,220,188,4100,(window.pageYOffset-3300)*3);
    }  
    // basketball
    if (window.pageYOffset > 3400){
        basketball(255,94,58,4300,(window.pageYOffset-3400)*3);
    }   
    // ant
    if (window.pageYOffset > 4000){
        ant(0,0,0,5050,(window.pageYOffset-4000)*3);
    }   
    // blood cell
    if (window.pageYOffset > 4000){
        bloodCell(153,0,0,4800,20,20);
    }
    lineRefresh();
}

window.onscroll = function (event) {
  println(window.pageYOffset);
  pageY = window.pageXOffset;
}

function incomingObject(r,g,b,h,grow){
    fill(r,g,b);
    noStroke();
    ellipse((width/2)-30,h,grow,grow);
}

function incomingObject2(r,g,b,h,grow){
    fill(r,g,b);
    noStroke();
    rect((width/2)-30,h,grow,grow);
}

function incomingObject3(r,g,b,h,grow){
    stroke(r,g,b);
    strokeWeight(2);
    ellipse((width/2)-30,h,grow,grow);
}

function lineRefresh() {
    stroke(255);
    strokeWeight(0.5);
    line(30,145,width,145);
}

function htmlTitleText(string,tx,ty){
    var text = createHTML(string);
    text.position(tx,ty);
}

function htmlSubtitle(string,tx,ty){
    var text = createHTML(string);
    text.position(tx,ty);
    text.id("subtext");
}

function htmlScrollText(string,tx,ty){
    var text = createHTML(string);
    text.position(tx,ty);
    text.id("scrolltext");
}

function bloodCell(r,g,b,h,grow){
    fill(r,g,b);
    // strokeWeight(2);
    noStroke();
    ellipse((width/2)-30,h,grow,grow);
}

function ant(r,g,b,h,grow){
    fill(r,g,b);
    noStroke();

for(var i= -150; i<200; i+=150){
     rect((width/2),h-(grow+i),grow/2,grow/40);  
     ellipse((width/2),h-(grow+i),grow/4,grow/2);  
    }

}

function basketball(r,g,b,h,grow){
    fill(r,g,b);
    noStroke();
    ellipse((width/2),h,grow,grow);
     
    for(var i = 0; i< 200; i += 200){ 
    fill(0); 
    rect((width/2),(h+i),grow,grow/30);
    }
}

function human(r,g,b,h,grow){
    fill(r,g,b);

    rect((width/2),h-(grow),grow/2,grow/2);  
    rect((width/2),h-(grow*.5),grow/5,grow/1.5);  
    ellipse((width/2),h-(grow/.68),grow/3,grow/3);  

}

function blueWhale(r,g,b,h,grow){
    fill(r,g,b);
    ellipse((width/2),h,grow,grow/3);

    ellipse((width/2-(grow/2)),h+(grow*.01),grow/4,grow/10);
    ellipse((width/2-(grow/2)),h-(grow*.07),grow/10,grow/4);

    ellipse((width/2),h+(grow*.18),grow/12,grow/4);

}

function incomingWTC(r,g,b,h,grow){
    fill(r,g,b);
    noStroke();

    rect((width/2),h-(grow-100),grow/10,grow);  
    rect((width/2),h,grow+300,grow+100);

}

function incomingCannon(r,g,b,h,grow){
    fill(r,g,b);
    stroke(51,43,30);
     
     for(var i = 0; i< 1000; i += 200){ 
    // triangle(30+(grow+i), height/2+75, 58+(grow+i), height/2+20, 86+(grow+i), height/2+75);
    ellipse((width/5)+i,h+(h/10),grow/3,grow);
     }
}

function incomingEarth(r,g,b,h,grow){
    fill(r,g,b);
    noStroke();
    ellipse((width/2),h,grow,grow);
     
    for(var i = 0; i< 200; i += 200){ 
    fill(0,102,0); 
    rect((width/2),(h+i),grow,grow/30);
    }
}

function incomingSun(r,g,b,h,grow){
    fill(r,g,b);
    noStroke();
    ellipse((width/2),h,grow,grow);

    for(var i = 0; i< 1500; i += 150){ 
    strokeWeight(5);
    stroke(255,145,0); 
    noFill();
    ellipse((width/2),h,grow-i,grow-i);

}
        
 }

 function incomingGalaxy(){
    noFill();
    stroke(255);
    strokeWeight(2);
    ellipse((width/2)-30,365,50,50);
    ellipse((width/2)-30,365,90,90);
    ellipse((width/2)-30,365,100,100);
    fill(255);
    ellipse(585,365,10,10);
    ellipse(642,327,10,10);

 }