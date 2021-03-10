function setup() {
  // set the width & height of the sketch
  createCanvas(700, 700)
  

}

function draw() {
  background(255)

  var now = clock()
  var seasonwarm = color('orange')
  var seasoncold = color('skyblue')
  var seasonColor
  if ( 0 < now.season < 3){
    seasonColor = lerpColor(seasonwarm,seasoncold, now.progress.year)
  }else{
    // fade down from noon to midnight
    seasonColor = lerpColor(seasoncold,seasonwarm, now.progress.year)
  }

  noStroke()
  fill(seasonColor)
  circle(350,350,350)

  angleMode(DEGREES)
  var maxRadius = 360

  fill(0)
  arc(350,350,200,200, 0, )
  arc(350, 350, 200, 200, -90, yearRadius)
  
  
}