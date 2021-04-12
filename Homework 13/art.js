//arrays
var myXs = [];
var myYs = [];
var myDiameters = [];
var myxspeeds = [];
var myyspeeds = [];


//fillstuff
var fill1 = 50
var fill2 = 166
var fill3 = 35
// x and y for avatar
var avaX = 100;
var avaY = 100;
// define the key codes for each
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// x and y for circle
var circX = 50
var circY = 40
var circXspeed;
var circYspeed;

//create a square when the mouse is clicked
var mouseCirX;
var mouseCirY;

//rectangle
var moufy = 400;

function setup()
{
    createCanvas(500, 600);
    var x = 40;
    var y = 55;
    var diameter = 25;
    for(var i = 0; i < 10; i++)
    {
      myXs[i] = x;
      myYs[i] = y;
      myDiameters[i] = diameter;
      x += 50;
      y += 50;
      diameter += 25;
    }

    for(var c = 0; c < 10; c++)
    {
      myxspeeds[c] = Math.floor(Math.random() * 10);
      myyspeeds[c] = Math.floor(Math.random() * 10);
    }
    //random speed
    rectspeed = Math.floor(Math.random() * 10);
    circXspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    circYspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    obstaclexspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    obstacleyspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
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

    fill(126, 33, 23);

    for(var i = 0; i < myXs.length; i++)
        {
          fill(fill1, fill2, fill3);
            circle(myXs[i],myYs[i],myDiameters[i]);
          fill1 += 5
          fill2 -= 5
          fill3 += 10
        }
 // circle 1
        if(myXs[0] <= 500)
        {
          myXs[0] += myxspeeds[0]
        }

        else if(myXs[0] >= 500)
        {
          myXs[0] = 0
        }

        if(myYs[0] <= 600)
        {
          myYs[0] += myyspeeds[0]
        }

        else if(myYs[0] >= 600)
        {
          myYs[0] = 0
        }
 // circle 2
 fill(226, 43, 23);
        if(myXs[1] <= 500)
        {
          myXs[1] += myxspeeds[1]
        }

        else if(myXs[1] >= 500)
        {
          myXs[1] = 0
        }

        if(myYs[1] <= 600)
        {
          myYs[1] += myyspeeds[1]
        }

        else if(myYs[1] >= 600)
        {
          myYs[1] = 0
        }

    // circle 3
    fill(222, 54, 13);
    if(myXs[0] <= 500)
        {
          myXs[2] += myxspeeds[2]
        }

        else if(myXs[2] >= 500)
        {
          myXs[2] = 0
        }

        if(myYs[2] <= 600)
        {
          myYs[2] += myyspeeds[2]
        }

        else if(myYs[2] >= 600)
        {
          myYs[2] = 0
        }

        //circle 4
        if(myXs[3] <= 500)
        {
          myXs[3] += myxspeeds[3]
        }

        else if(myXs[3] >= 500)
        {
          myXs[3] = 0
        }

        if(myYs[3] <= 600)
        {
          myYs[3] += myyspeeds[3]
        }

        else if(myYs[3] >= 600)
        {
          myYs[3] = 0
        }

      //circle 5
      fill(66, 23, 23);
      if(myXs[4] <= 500)
        {
          myXs[4] += myxspeeds[4]
        }

        else if(myXs[4] >= 500)
        {
          myXs[4] = 0
        }

        if(myYs[4] <= 600)
        {
          myYs[4] += myyspeeds[4]
        }

        else if(myYs[4] >= 600)
        {
          myYs[4] = 0
        }

        //circle 6

        if(myXs[5] <= 500)
        {
          myXs[5] += myxspeeds[5]
        }

        else if(myXs[5] >= 500)
        {
          myXs[5] = 0
        }

        if(myYs[5] <= 600)
        {
          myYs[5] += myyspeeds[5]
        }

        else if(myYs[5] >= 600)
        {
          myYs[5] = 0
        }
//circle 7
fill(12, 111, 22);
if(myXs[6] <= 500)
        {
          myXs[6] += myxspeeds[6]
        }

        else if(myXs[6] >= 500)
        {
          myXs[6] = 0
        }

        if(myYs[6] <= 600)
        {
          myYs[6] += myyspeeds[6]
        }

        else if(myYs[6] >= 600)
        {
          myYs[6] = 0
        }

        //circle 8

        fill(16, 16, 23);
        if(myXs[7] <= 500)
        {
          myXs[7] += myxspeeds[7]
        }

        else if(myXs[7] >= 500)
        {
          myXs[7] = 0
        }

        if(myYs[7] <= 600)
        {
          myYs[7] += myyspeeds[7]
        }

        else if(myYs[7] >= 600)
        {
          myYs[7] = 0
        }

        //circle 9
        fill(100, 100, 2);
        if(myXs[8] <= 500)
        {
          myXs[8] += myxspeeds[8]
        }

        else if(myXs[8] >= 500)
        {
          myXs[8] = 0
        }

        if(myYs[8] <= 600)
        {
          myYs[8] += myyspeeds[8]
        }

        else if(myYs[0] >= 600)
        {
          myYs[8] = 0
        }

        //circle 10
        fill(100, 13, 33);
        if(myXs[9] <= 500)
        {
          myXs[9] += myxspeeds[9]
        }

        else if(myXs[9] >= 500)
        {
          myXs[9] = 0
        }

        if(myYs[9] <= 600)
        {
          myYs[9] += myyspeeds[9]
        }

        else if(myYs[9] >= 600)
        {
          myYs[9] = 0
        }

    makecharacter();

    makeEnemy1();
    makeEnemy2();

    movetheshape();
    
    controlCircle();

    didyouwin();

    //create the shape based on the mouse click
    fill(66,130,133);
    circle(mouseCirX, mouseCirY, 25);
}

function mousePressed()
    {
      mouseCirX = mouseX;
      mouseCirY = mouseY;
    }
   
  function controlCircle()
    {
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

 //handling
 if(keyIsDown(w))
 {
     avaY -= 10;
 }

 else if (keyIsDown(s))
 {
     avaY += 10;
 }

 if (keyIsDown(a))
 {
     avaX -= 10;
 }

 else if(keyIsDown(d))
 {
     avaX += 10;
 }
    }

    function makeEnemy1()
    {
//potential enemy
fill(13,145,14);
//draw the shape
circle(circX, circY, 10);
    }

    function makeEnemy2()
    {
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

    }

    function didyouwin()
    {

      // exit message
    textSize(16);
    text("EXIT", width-50,height-50);

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
  }

    function movetheshape()

    {
    //thot i already did this but the example has it so maybe it needs it to work
    circXspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    circYspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    //move the shape
    circX += circXspeed;
    circY += circYspeed;
    }

   function makecharacter()

    {
      //character
    fill(23,40,123);
    circle(avaX,avaY, 50);
    }




  