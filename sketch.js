let capture;

function setup() { 
  createCanvas(windowWidth,windowHeight);
  capture = createCapture(VIDEO);
  capture.size(160,120);
  textAlign(CENTER);
  text('Draw pixels and Press key 1 to stop the pixels',width/10,height/20);
    capture.loadPixels();
  capture.hide();
  

}

function draw() {
     for (let i=0 ; i<10 ;i++){
       noStroke();
       fill(255,40);
    rect(random(width,0), random(0,height), width,random(20,-20));
  }
  //image(capture, 0, 0, width, height)
  capture.loadPixels();
  noStroke();
  //strokeWeight(random(0,1));
  for (let y=0; y<capture.height; y=y+2) {
    for (let x=0; x<capture.width; x=x+2) {
      let idx = x + y * capture.width;
      let r = capture.pixels[idx*4];
      let g = capture.pixels[idx*4 + 1];
      let b = capture.pixels[idx*4 + 2];
      let gr = (r + g + b)/3.0; 
      if(mouseX<x*5+5*4 && mouseX>x*5 && mouseY<y*5+5*4 && mouseY>y*5){
        
      }
       if(getItem(x+":"+y)==true){
    
         fill(r,g,b,120); 
         rect(x*5,y*5,random(-50,50),20);
      }          
  }
}
}

function mouseDragged(){
  fill(0,random(20,255));
  textSize(random(0,10));
  textAlign(CENTER, CENTER);
  text('OVERLAPPING PIXELS !',random(0,width),random(0,height));
    capture.loadPixels();
  
  
  //clear();
  //noStroke();
  for (let y=0; y<capture.height; y=y+2) {
    for (let x=0; x<capture.width; x=x+2) {
      let idx = x + y * capture.width;
      let r = capture.pixels[idx*4];
      let g = capture.pixels[idx*4 + 1];
      let b = capture.pixels[idx*4 + 2];
      let gr = (r + g + b)/3.0; 
      if(mouseX<x*5+5*4 && mouseX>x*5 && mouseY<y*5+5*4 && mouseY>y*5){  
       storeItem(x+":"+y,true)
   
      }   
      }
    }


}

function keyTyped() {
  if (key === '1') {
    clearStorage();
}
}
        