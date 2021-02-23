
function setup() {
  createCanvas(700, 700)
  // print the time to the console once at the beginning of the run. try opening up the
  //print('starting time:', clock())
  // var discrete = false
}

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  
  background('white')

//OUTLINES
  strokeWeight(2.5)
  stroke(0)
  ellipseMode(RADIUS)
  //OUTER RING, HOUR
  noFill()
  ellipse(350, 350, 340, 340);
  noFill()
  ellipse(350, 350, 315, 315);
  //MIDDLE RING, MINUTE
  noFill()
  ellipse(350, 350, 240, 240);
  noFill()
  // fill(255)
  ellipse(350, 350, 215, 215);
  //INNER RING, SECOND
  noFill()
  ellipse(350, 350, 130,130);
  noFill()
  ellipse(350, 350, 105,105);

//---------------------------------
  var maxRadius = 360
  var now = clock()
  var discrete = false

  if (discrete){
    var hourRadius = map(now.hour, 1,12, 0,maxRadius) // from hours (1-12) to pixels (0–maxWidth)
    var minsRadius = map(now.min,  0,60, 0,maxRadius)  // from mins (0–60) to pixels (0–maxWidth)
    var secsRadius = map(now.sec,  0,60, 0,maxRadius) 
  }else{
  hourRadius = maxRadius * now.progress.day
  minsRadius = maxRadius * now.progress.hour
  secsRadius = maxRadius * now.progress.min
  }

  strokeWeight(25)
  angleMode(DEGREES)
  // arc(350, 350, 118, 118, startRadius, 0) // (x, y, w, h, start, stop)
  // arc(350, 350, 228, 228, startRadius, 45) // (x, y, w, h, start, stop)
  // arc(350, 350, 328, 328, startRadius, 100) // (x, y, w, h, start, stop)
  arc(350, 350, 118, 118, -90, secsRadius) // (x, y, w, h, start, stop)//sec
  arc(350, 350, 228, 228, -90, minsRadius) // (x, y, w, h, start, stop)//mind
  arc(350, 350, 328, 328, -90, hourRadius) // (x, y, w, h, start, stop)//hour

  // draw the time string to the canvas
  //text(now.text.date, 30, 50)
  //text(now.text.time, 30, 100)
  //-----------------------



}