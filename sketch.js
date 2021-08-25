
function setup() {
  createCanvas(400,400);
  background(30);
}

function draw() 
{
 // background(30)
  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("Red");
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    background("bLUE");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("YELLOW");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }

}




