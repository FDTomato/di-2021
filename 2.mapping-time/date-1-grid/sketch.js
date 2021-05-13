function setup() {
  createCanvas(700, 700);
  rectMode(CENTER)
  ellipseMode(CORNER);

}

function drawShape(x, y){
  var isLeft = x < width/2 // will be 'true' if x is less than 350
  if (isLeft){
    fill(0)
  }else{
    fill(255)
  }

  var isUpper = y < height/2 // will be 'false' if y is greater than 200
  if (isUpper){
    circle(x, y, 25)
  }else{
    rect(x, y, 25, 25)
  }
}

var horiz = 50
var vert = 50



function draw() {

  var now = clock()

  
  background(0);
 //--------------
  noStroke()
  fill('skyblue')
  rect(200,200,250,250)
  fill('#676767')
  rect(500,200,250,250)
  rect(200,500,250,250)
  rect(500,500,250,250)

  //-------------
  stroke(0)
  line(width/2, 0, width/2, height)
  line(0, height/2, width, height/2)
  noStroke()

  // draw the upper row of shapes
  // drawShape(horiz, vert)
  // drawShape(horiz+50, vert)
  // drawShape(horiz+100, vert)

  // draw the middle row of shapes
  drawShape(horiz, vert+50)
  drawShape(horiz+50, vert+50)
  drawShape(horiz+100, vert+50)

  // draw the lower row of shapes
  // drawShape(horiz, vert+100)
  // drawShape(horiz+50, vert+100)
  // drawShape(horiz+100, vert+100)


  
  if (now.season = 1){
    // fade up from midnight to noon
    springColor = Color("pink")
  }



    
//------------

    
}