var circle = {
	x: 200,
	y: 200,
	xspeed: 5,
	yspeed: -3
};

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(220);
	put();
	move();
	config();

}

function put () {
	fill('red')
	ellipse (circle.x, circle.y, 20, 20)
}


function move(){
	circle.x = circle.x + circle.xspeed;
	circle.y = circle.y + circle.yspeed;
}

function config () {
	if (circle.x  > width -10 || circle.x   < 10) {
		circle.xspeed = circle.xspeed * -1;
	}
	
	if (circle.y > height -10 || circle.y   < 10) {
		circle.yspeed = circle.yspeed * -1;
	}
}
