function setup() {
  // set the width & height of the sketch
  createCanvas(400, 800)
}

function draw() {
  background('white')
  noStroke()

  var now = clock()
  var spacing = 30

  // translate(100,0)
  // draw as many circles as the current `now.hours` value
  // using _.times. The first circle's y position should be at 100
  // and each circle below it should be `spacing` pixels below it
  fill(0)
  // circle(100, 100, 20)
  // translate(100,100)
  // // circle(100, 100+spacing, 20)
  // _.times (now.hours, i => { // equals to = for (var i=0; i<6; i++){
  // circle(0, i*spacing, radius)
  // })
  _.times (now.hours, i => { 
    circle(100, 100+i*spacing,20)
  })
  

  // draw as many circles as the current now.min value
  // by creating a list from 0 .. `now.min` using _.range
  // and then stepping through that list using _.each or .forEach
  // circle(200, 100, 20)

  fill(100)
  var list = _.range(0,now.min)
  print(list)
  list.forEach( i=>{circle(200,100+i*spacing,20)
  })


  // draw as many circles as the current `now.sec` value
  // using `for (;;){...}` syntax
  // circle(300, 100, 20)
  fill(200)
  for (var i = 0; i<now.sec; i+=1){ //for (let i = 0; i<now.sec; i+=1){
    circle(300, 100+i*spacing*0.75, 20)
  }
  
  
  // Phase 2:
  // Once you've successfully drawn vertical stacks of dots, modify
  // your loops to draw concentric circles whose diameters are 
  // multiples of the `spacing` variable. Switch from using fill()  
  // colors to stroke() colors so we can see all the nested circles

}