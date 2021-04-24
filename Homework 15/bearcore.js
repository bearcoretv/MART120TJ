//class
class bearshapes {
    constructor(xco,yco,size){
    this.xco = xco;
    this.yco = yco;
    this.size = size;
  }
  
  drawcircle()
  {
    circle(this.xco, this.yco, this.size)
  }
  }

  var face = new bearshapes(250,300,200)
  var lear = new bearshapes(175,225,100)
  var rear = new bearshapes(325,225,100)
  var lpink = new bearshapes(175,225,70)
  var rpink = new bearshapes(325,225,70)
  var leye = new bearshapes(215, 250, 30)
  var reye = new bearshapes(285,250, 30)


  function setup() {
    createCanvas(500, 600);
  }

  function draw() {
    background(42, 69, 169);
    stroke(0);
    fill(0);
    //top border
    rect(0, 0, width, 10);
    //left border
    rect(0, 0, 10, height);
    //bottom border
    rect(0, height - 10, width, 10);
    //right upper border
    rect(width - 10, 0, 10, height - 10);

    fill(210,105,30);
  lear.drawcircle();
  rear.drawcircle();

    fill(255,192,203);
    lpink.drawcircle();
    rpink.drawcircle();

    fill(210,105,30);
  face.drawcircle();

  fill(0,0,0)
  leye.drawcircle();

  reye.drawcircle();

  fill(255,192,203)
  triangle(230, 300, 250, 320, 270, 300)

  fill(0,0,0)
  line(250,320,230,350)
  line(250,320,270,350)
 
  }