
function setup() {
  // set the width & height of the sketch
  createCanvas(700, 700,)
  print('starting time:', clock())
  noStroke()
  rectMode(CENTER)
  angleMode(DEGREES)

}

function draw() {
  var now = clock()
  var dark = color('#5ab7c1')
  var noon = color('#eabb5e')
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
  
  noFill()
  stroke(0)
  strokeWeight(1)
  circle (350,180,220)
  rect(350, 500, 220, 220)
  
//-----------
 
  noStroke()
  fill (0)
  _.times (now.min, i => { 
    var scale = 10
    var d = map(scale*i, 0, width/2, 20, 140)
    circle (350, 180, d)
  })
 
  fill (0)
  _.times (now.sec, i => { 
    var scale = 10
    var s = map(scale*i, 0, width/2, 20, 140)
    rect(350, 500, s, s)
  })

//---------- For reference
  textFont("Anonymous Pro") 
  textSize(20)
  fill(100, 50, 50)

  text(now.text.date, 30, 30)
  text(now.text.time, 30, 50)

//-------- 

  
}