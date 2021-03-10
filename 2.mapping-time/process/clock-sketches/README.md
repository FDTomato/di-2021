## Process

Description of the contents of this folder and the logic of your data → retinal variables mapping.

// Sketch 1  (file name v1-115am, v1-115pm, v1-745pm)
	Hour: Outer ring  |  Minute: Middle ring  | Second: Inner ring
	AM: White background    PM: Black background

	For hour, when the bar moves 30 degress clockwise means 1 hour pass.
	For minute, moving 6 dregrees clockwise means 1 minute pass. 
	For second, moving 6 degrees means 1 second pass. 
	When the time is 0, no filling in the graph. 

//Sketch 2 (file name v2-115am, v2-115pm, v2-745pm)

	Hour: ellipses
	Minute: Square
	Seconnd: triangle
	AM: Black outlined shapes, as time passes, filled up with black.
	PM: Black filled shapes, as time passes, filled up with pink. 


//Sketch 3 (file name v3-115am, v3-115pm, v3-745pm)
	Hour: the upper shape. 0 = ellipse without filling. 1 = half-filled ellipse, 2 = filled ellipse. Starting from 3, it will be a star that has different points, based on the hour. For example, hour 3 has 3 points, hour 10 has 10 points. 

	Minute: Lower triangular shape. Rotates accross time. EX: at 15 mintes, it rotates 90 degress clock wise

	Second: the background. Will fill up over time. 

	AM: yellow background  |   PM: blue blackground
