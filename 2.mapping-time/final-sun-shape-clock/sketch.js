// function pointAt(cx, cy, angle, dist){
//   var theta = angle/360 * TWO_PI
//   return {x:cx+cos(theta) * dist,
//           y:cy+sin(theta) * dist}
// }

function setup() {
  // set the width & height of the sketch
  createCanvas(700, 700)
  background(255)
  rectMode(CENTER)
  print('starting time:', clock())

}

function draw() {
  var now = clock()
  var dark = color('#001670')
  var noon = color('#F2F2F2')
  var hourColor
  if (now.am){
    // fade up from midnight to noon
    hourColor = lerpColor(dark, noon, now.progress.halfday)
  }else{
    // fade down from noon to midnight
    hourColor = lerpColor(noon, dark, now.progress.halfday)
  }
  var clockday = color('#3A1E00')
  var clocknight = color('white')
  var clockColor
  if (now.am){
    // fade up from midnight to noon
    clockColor = lerpColor(clocknight,clockday, now.progress.halfday)
  }else{
    // fade down from noon to midnight
    clockColor = lerpColor(clockday,clocknight, now.progress.halfday)
  }

  //--------Season color
  var seasonwarm = color('orange')
  var seasoncold = color('#00F9FF')
  var seasonColor
  if ( 0 < now.season < 3){
    seasonColor = lerpColor(seasonwarm,seasoncold, now.progress.year)
  }else{
    // fade down from noon to midnight
    seasonColor = lerpColor(seasoncold,seasonwarm, now.progress.year)
  }

  background(hourColor) 

  // var monthAngle = map(now.month, 0, 12, 0, 360)
  
  angleMode(DEGREES)
  var maxRadius = 360
  // hourRadius = maxRadius * now.progress.day*2 -90
  // minsRadius = maxRadius * now.progress.hour -90
  // secsRadius = maxRadius * now.progress.min-90
  yearRadius = maxRadius * now.progress.year-90
  monthRadius = maxRadius * now.progress.month-90

  strokeWeight(1)
  stroke(clockColor)
  noFill()
  circle(350, 350, 400);
  // fill('orange')
  fill(seasonColor)
  arc(350, 350, 400, 400, -90, yearRadius)
  // arc(350, 350, 400, 400, -90, monthRadius)
  
  noFill()
  strokeWeight (20)
  arc(350, 350, 550, 550, -90, monthRadius)


  strokeWeight(1)
  noFill()
  // circle (100, 350, 80)
  // circle (600, 350, 80)
  // circle (350, 100, 80)
  // circle (350, 600, 80)

  circle ()
  // var origin = {x:width/2, y:height/2}
  // var monthLocation = pointAt(origin.x, origin.y, monthAngle, 50)

  // circle(monthLocation.x, mothLocation.y, 40)



//-------hour sec min section
  noFill()
  stroke(clockColor)
  circle (450,350,70)
  circle (350,350,70)
  rect(250, 350, 70, 70)
//------------
  noStroke()
  fill (clockColor)
  _.times (now.sec, i => { 
    var scale = 5
    var d = map(scale*i, 0, width/2, 0, 80)
    circle (450, 350, d)
  })

  
  _.times (now.min, i => { 
    var scale = 5
    var d = map(scale*i, 0, width/2, 0, 80)
    circle (350, 350, d)
  })
 
  _.times (now.hour, i => { 
    var scale = 5
    var s = map(scale*i, 0, width/2, 0, 440)
    rect(250, 350, s, s)
  })

//--------reference time
  // textFont("Anonymous Pro") // ← check index.html to see how it was loaded from google-fonts
  // textSize(20) // make it big
  // fill(100, 50, 50)
  // noStroke()

  // // draw the time string to the canvas
  // text(now.text.date, 30, 50)
  // text(now.text.time, 30, 70)
  // text(now.text.season, 30, 90)

  
}