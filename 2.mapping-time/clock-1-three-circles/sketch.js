
//Clock 1
function setup() {
  createCanvas(700, 700)
  // print the time to the console once at the beginning of the run. try opening up the
  print('starting time:', clock())
  // var discrete = false
}

function draw() {  
  var now = clock()
  var dark = color('#001670')
  var noon = color('white')
  var hourColor
  if (now.am){
    // fade up from midnight to noon
    hourColor = lerpColor(dark, noon, now.progress.halfday)
  }else{
    // fade down from noon to midnight
    hourColor = lerpColor(noon, dark, now.progress.halfday)
  }
  var clockday = color('black')
  var clocknight = color('white')
  var clockColor
  if (now.am){
    // fade up from midnight to noon
    clockColor = lerpColor(clocknight,clockday, now.progress.halfday)
  }else{
    // fade down from noon to midnight
    clockColor = lerpColor(clockday,clocknight, now.progress.halfday)
  }

  background(hourColor)

//OUTLINES
  strokeWeight(2.5)
  stroke(clockColor)
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
  // var discrete = false

  // if (discrete){
  //   var hourRadius = map(now.hour, 1,12, 0,maxRadius) // from hours (1-12) to pixels (0–maxWidth)
  //   var minsRadius = map(now.min,  0,60, 0,maxRadius)  // from mins (0–60) to pixels (0–maxWidth)
  //   var secsRadius = map(now.sec,  0,60, 0,maxRadius) 
  // }else{
  hourRadius = maxRadius * now.progress.day*2 -90
  minsRadius = maxRadius * now.progress.hour -90
  secsRadius = maxRadius * now.progress.min-90
  // }

  // var hourRadius = map(now.hour, 1,12, 0,maxRadius) // from hours (1-12) to pixels (0–maxWidth)
  // var minsRadius = map(now.min,  0,60, 0,maxRadius)  // from mins (0–60) to pixels (0–maxWidth)
  // var secsRadius = map(now.sec,  0,60, 0,maxRadius)

  //hours/hour

  strokeWeight(25)
  
  angleMode(DEGREES)
  //if statement here to change color, AM/PM
  arc(350, 350, 118, 118, -90, secsRadius) // (x, y, w, h, start, stop)//sec
  arc(350, 350, 228, 228, -90, minsRadius) // (x, y, w, h, start, stop)//mind
  arc(350, 350, 328, 328, -90, hourRadius) // (x, y, w, h, start, stop)//hour

  textFont("Anonymous Pro") // ← check index.html to see how it was loaded from google-fonts
  textSize(20) // make it big
  fill(100, 50, 50)
  noStroke()

  // draw the time string to the canvas
  text(now.text.date, 30, 50)
  text(now.text.time, 30, 70)
}