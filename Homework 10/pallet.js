var leyex = 200;

var movement = 5;

function setup()
{
    createCanvas(500, 600);
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
    circle(200, 175, 50);
    // l whites

    fill(255, 255, 255);
    circle(300, 175, 50);
    // r whites

    fill(61, 38, 4);
    circle(leyex, 175, 25);
    // l iris

    fill(61, 38, 4);
    circle(300, 175, 25);
    // r iris

    fill(0, 0, 0);
    line(200, 145, 225, 150);
    // l eyebrow

    fill(0, 0, 0);
    line(275, 150, 300, 145);
    // r eyebrow

    fill(242, 145, 189);
    rect(200, 300, 100, 50);
    // hair

    fill(0, 0, 0);
    rect(225, 70, 50, 60);
    // mouth

    point(200,175);
    // r pupil

    point(300,175);
    // l pupil

    textSize(32);
    text('Simulacrum', 170, 420);
    textSize(16);
    text('By Teddy J.', 220, 440);

    consolelog("isthisworking");

    if(leyex >= 250 || x <= 150)
    {
        movement *= -1;
    }

    

    leyex += movement;
    
}