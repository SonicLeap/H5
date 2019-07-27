//
var posX;
var posY;
var speedX;
var speedY;
var c;

function setup() {
	createCanvas(320,240);
	background(0);
	posX=15;
	posY=15;
	speedX=2;
	speedY=2;
	c=color(random(255),random(255),random(255));
	noStroke();
}
function draw() {
	background(0,20);
	fill(c);
	ellipse(posX,posY,30,30);
	posX+=speedX;
	posY+=speedY;
	
	if(posX<=15||posX>=(width-15)){
		speedX*=-1;
		c=color(random(255),random(255),random(255));
	}
	if(posY<=15||posY>=(height-15)){
		speedY*=-1;
		c=color(random(255),random(255),random(255));
	}
}