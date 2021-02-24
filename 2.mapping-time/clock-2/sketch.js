function pointAt(cx, cy, angle, dist){
  var theta = angle/360 * TWO_PI
  return {x:cx+cos(theta) * dist,
          y:cy+sin(theta) * dist}
}

function setup() {
  createCanvas(300, 300);
  rectMode(CENTER)
}

function draw() {
  //
  // *** MAPPING TIME TO ANGLES & COLORS *** 
  //
  var now = clock()

  // map the current second from a 0-60 value 
  // to a 0-360° angle
  var minAngle = map(now.sec, 0, 60, 0, 360)
  
  // map the fraction of the current second from 
  // a 0.0-1.0 percentage to a 0-360° angle
  var secAngle = map(now.progress.sec, 0, 1, 0, 360)
  
  // define a dark and light color for midnight and noon respectively
  var dark = color('#036')
  var noon = color('lightskyblue')
  
  // pick an appropriate color mixture for the current hour
  var hourColor
  if (now.am){
    // fade up from midnight to noon
    hourColor = lerpColor(dark, noon, now.progress.halfday)
  }else{
    // fade down from noon to midnight
    hourColor = lerpColor(noon, dark, now.progress.halfday)
  }
  
  
  //
  // *** CALCULATING LOCATIONS *** 
  //
  
  // we'll use the center of the canvas as the 
  // starting point for our location calculations
  var origin = {x:width/2, y:height/2}
  
  // calculate the position of the 'once-per-minute' 
  // shape relative to the origin 
  var minLocation = pointAt(origin.x, origin.y, minAngle, 80)
  
  // calculate the position of the 'once-per-second' 
  // shape relative to the once-per-minute point 
  // we just located
  var secLocation = pointAt(origin.x, origin.y, secAngle, 50)

  
  //
  // *** DRAWING *** 
  //
  
  // color the background based on our fade up/down logic
  background(hourColor)
  
  // draw a point at the center of the canvas 
  // so we know where the 'origin' is
  fill(255)
  circle(origin.x, origin.y, 5)

  // draw lines between the origin & the two calculated points
  stroke(255, 150)
  line(origin.x, origin.y, secLocation.x, secLocation.y)
  line(origin.x, origin.y, minLocation.x, minLocation.y)
  
  // draw a pair of shapes at those locations 
  noStroke()
  fill(0)
  circle(minLocation.x, minLocation.y, 40)
  fill(0, 120)
  rect(secLocation.x, secLocation.y, 20, 20)
}