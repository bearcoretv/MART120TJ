// need to create variables that we can change in the draw
var leyex = 200;
var movementL = 1;
var movementR = 1;
var movementRY = 1;
var reyex = 300;
var moufy = 300;
var reyey = 175;
var titlesize = 32
var subsize = 16
var sizevar = 2


function setup()
{
    createCanvas(500, 600);
    moufspeed = Math.floor(Math.random() * 10);
}

function draw()
{
    background(6, 105, 33);
    fill(133, 105, 64);
    ellipse(250, 250, 200, 250);
    // head

    triangle(235, 250, 250, 235, 265, 250);
    // nose

    fill(255, 255, 255);
    // replace the numbers with variables created above
    circle(leyex, 175, 50);
    //circle(200, 175, 50);
    // update the variables to make the circle move
    // l whites
    if(leyex >= 225 || leyex <= 175)
    {
        movementL *= -1;
    }
    leyex += movementL;

    fill(255, 255, 255);
    circle(reyex, reyey, 50);
    // r whites

    if(reyex >= 325 || reyex <= 275)
    {
        movementR *= -1;
    }
    reyex += movementR;

    if(reyey <= 150 || reyey >= 200)
    {
        movementRY *= -1;
    }
    reyey += movementRY;

    fill(61, 38, 4);
    circle(leyex, 175, 25);
    // l iris

    fill(61, 38, 4);
    circle(reyex, reyey, 25);
    // r iris

    fill(0, 0, 0);
    line(200, 145, 225, 150);
    // l eyebrow

    fill(0, 0, 0);
    line(275, 150, 300, 145);
    // r eyebrow

    fill(242, 145, 189);
    rect(200, moufy, 100, 50);
    // mouth
    if(moufy >= 325 || moufy <= 275)
    {
        moufspeed *= -1;
    }
    moufy += moufspeed;

    fill(0, 0, 0);
    rect(225, 70, 50, 60);
    // hair

    point(leyex,175);
    // l pupil

    point(reyex,reyey);
    // r pupil

    textSize(titlesize);
    text('Simulacrum', 170, 420);
    textSize(subsize);
    text('By Teddy J.', 220, 440);

    
        titlesize += sizevar;
        subsize += sizevar;
    
        if(titlesize >= 42)
        {
        sizevar *= -1
        }

        if(titlesize <= 30)
        {
        sizevar *= -1
        }
    //consolelog("isthisworking");

    
    
}