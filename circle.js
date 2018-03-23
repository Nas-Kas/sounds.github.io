	
	function onKeyDown(event) {
	var maxPoint = new Point(view.size.width, view.size.height);
	var randomPoint = Point.random();

	var point = maxPoint * randomPoint;


		new Path.Circle(point, 10).fillColor = "orange";
		console.log(maxPoint);
	}

	var animate = new Path.Circle(new Point(300,300), 50);
	animate.fillColor = "red";

	function onFrame(event){
		animate.fillColor.hue += 1;
		animate.scale(.9);
	}