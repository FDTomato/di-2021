const NUM_CIRCLES = 12;
let spacing = 45;

function setup() {
  createCanvas(600, 300);
  rectMode(CENTER)
  angleMode(DEGREES)
}

function draw() {
  background ('white')
  var now = clock()
 
  // 12 hour
  // HOUR outlined circle frame
var outlineColor
var outday = color ('white')
var outnight = color('black')
if (now.am){
  // fade up from midnight to noon
  outlineColor = color (outday)
}else{
  // fade down from noon to midnight
  outlineColor = color (outnight)
}
  fill(outlineColor)
  strokeWeight (2)
  stroke (0)
  for (let i = 0; i < NUM_CIRCLES; i+=1) {
    circle(50+i*spacing, 100, 40);
  }
  
  var clockday = color('black')
  var clocknight = color('#ff9494')
  var clockColor
  if (now.am){
    // fade up from midnight to noon
    clockColor = color(clockday)
  }else{
    // fade down from noon to midnight
    clockColor = color(clocknight)
  }
 
 //HOUR filling
  fill (clockColor)
  _.times (now.hour, i => { 
    circle(50+i*spacing,100, 40)
  })


// MINUTE 
  fill(outlineColor)
  circle(400,200,50,50)

  var maxRadius = 360
  hourRadius = maxRadius * now.progress.day*2 -90
  minsRadius = maxRadius * now.progress.hour -90
  secsRadius = maxRadius * now.progress.min-90
  
  fill (clockColor)
  arc(400, 200, 50, 50, -90, minsRadius) // (x, y, w, h, start, stop)//

   //--------
  textFont("Anonymous Pro") // ← check index.html to see how it was loaded from google-fonts
  textSize(20) // make it big
  fill(100, 50, 50)
  noStroke()
  text(now.text.date, 30, 50)
  text(now.text.time, 30, 70)

  //SECOND 
  //  var v1 = createVector (250,200);
  fill(outlineColor)
  strokeWeight (2)
  stroke (0)
  circle(250,200, 50)

  noStroke()
  fill (clockColor)
  translate (250,200)
  circle(400,200,50,50)
  rotate (secsRadius)
  //  triangle (230, 220, 250, 180, 270, 220)
  arc(0,0,60,60, 0, 20)

   
 
 

}