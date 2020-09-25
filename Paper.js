class Paper {
	constructor(x, y, height) {
		var options = {
			isStatic: false,
			restitution: 0.3,
			friction: 0.5,
			density: 1.2
		};
		this.image=loadImage("Paper.jpeg");

		this.Bodies = Matter.Bodies.circle(x, y, radius, options, Maxsides);


	}
}
