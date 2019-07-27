//

var pic;
function preload(){
	pic =loadImage("images/huaji.png")
}
function setup() {
	createCanvas(720,1280);
	
}
var posX=0;//位置
var posY=0;
var speedX=5;//速度
var speedY=5;
function draw() {
	background(30);//背景颜色
	posX=posX+speedX;//新位置
	image(pic,posX,height/2-40,80,80);
	if(posX==width-80||posX==0){
		speedX*=-1;
	}
}
