// x and y for avatar
var avaX = 100;
var avaY = 100;
// define the key codes for each
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// x and y for circle
var circX = 40;
var circY = 55;
var circXspeed;
var circYspeed;

//create a square when the mouse is clicked
var mouseCirX;
var mouseCirY;

//rectangle
var moufy = 400;

function setup()
{
    fill(99,224,155);
    createCanvas(500, 600);
    //random speed
    rectspeed = Math.floor(Math.random() * 10);
    circXspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    circYspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}

function draw()
{
    background(120,45,78);
    stroke(0);
    fill(0);
    //top border
    rect(0,0,width,10);
    //left border
    rect(0,0,10,height);
    //bottom border
    rect(0, height-10, width, 10);
    //right upper border
    rect(width-10,0,10,height-50);

    // exit message
    textSize(16);
    text("EXIT", width-50,height-50);

    //character
    fill(23,40,123);
    circle(avaX,avaY, 50);

    //handling
    if(keyIsDown(w))
    {
        avaY -= 10;
    }

    if(keyIsDown(s))
    {
        avaY += 10;
    }

    if(keyIsDown(a))
    {
        avaX -= 10;
    }

    if(keyIsDown(d))
    {
        avaX += 10;
    }

    //potential enemy
    fill(13,145,14);
    //draw the shape
    circle(circX, circY, 10);

    //thot i already did this but the example has it so maybe it needs it to work
    circXspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    circYspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    //move the shape
    circX += circXspeed;
    circY += circYspeed;
    //oob?
    if(circX > width)
    {
      circX = 0;
    }
    if(circX < 0)
    {
      circX = width;
    }
    if(circY > height)
    {
      circY = 0;
    }
    if(circX < 0)
    {
      circY = height;
    }

    //enemy 2
    fill(242, 145, 189);
    rect(200, moufy, 100, 50);
    // mouth
    
    if(moufy >= 450)
    {
    moufy -= rectspeed;
    }

    else if(moufy >= 100)
    {
      moufy += rectspeed;
    }

    

    // check to see if win
    if(avaX > width && avaY > width-50)
    {
      fill(0);
      stroke(5);
      textSize(26);
      text("You're a champ!", width/2-50, height/2-50)
    }

    else
    {
      fill(0);
      stroke(5);
      textSize(26);
      text("Get to the end!", width/2-50, height/2-50)
    }

    //create the shape based on the mouse click
    fill(66,130,133);
    circle(mouseCirX, mouseCirY, 25);
}

    function mouseClicked()
    {
      mouseCirX = mouseX;
      mouseCirY = mouseY;
    }
  