//

var pic;
function preload(){
	pic =loadImage("images/huaji.png")
}
function setup() {
	createCanvas(360,640);
	
}
var posX=0;//位置
var posY=0;
var speedX=5;//速度
var speedY=5;
function draw() {
	background(0);//背景颜色
	posX=posX+speedX;//新位置
	image(pic,posX,200,80,80);
	if(posX==width-80||posX==0){
		speedX*=-1;
	}
}
