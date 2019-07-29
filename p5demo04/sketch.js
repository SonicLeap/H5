
var balls=[];
function setup() {
	createCanvas(400,600);
	background(0);
	for(var i=0;i<20;i++){
		balls.push(new Ball(width/2,height/2,30));		
	}
	noStroke();		
}


function draw() {
	background(0,20);//疑问？
	for(var i=0;i<balls.length;i++){	
		balls[i].update();
		balls[i].render();
	}
}

function mouseClicked(){
	for (var i=0;i<balls.length;i++){
		var d=dist(balls[i].pos.x,balls[i].pos.y,mouseX,mouseY);
		if (d<=balls[i].size*0.5){
			explode(i);		//传递编号
			backgroucd(255);
			
		}
	}
	
}
function touchStarted(){
	for (var i=0;i<balls.length;i++){
		var d=dist(balls[i].pos.x,balls[i].pos.y,mouseX,mouseY);
		if (d<=balls[i].size*0.5){
			explode(i);		//传递编号
			backgroucd(255);
			
		}
	}
	
}

function explode(choseBallIndex){
	var posX=balls[choseBallIndex].pos.x;
	var posY=balls[choseBallIndex].pos.y;
	var size=balls[choseBallIndex].size*0.5;
	balls.splice(choseBallIndex,1);			//消失小球的编号，1个
	for(var i=0;i<10;i++){
		balls.push(new Ball(posX,posY,size));
	}
}


function Ball(posX,posY,ballsize){	
	this.pos=createVector(posX,posY);		//创建向量作为pos属性的值
	this.vel=p5.Vector.random2D();	
	//创建vel属性给它 方向随机 单位长度的向量 
	this.vel.setMag(random(2,4));	//设置向量的长度
	this.size=ballsize;
	this.color=color(random(255),random(255),random(255));
	this.update=function(){
		this.pos.add(this.vel)	//速度修正了位置 会造成反弹
		if (this.pos.y<=this.size/2){
			this.bounceOnEdge(createVector(0,1));
			this.color=color(random(255),random(255),random(255));
		}
		if (this.pos.y>=height-this.size/2){
			this.bounceOnEdge(createVector(0,-1));
			this.color=color(random(255),random(255),random(255));
		}
		if (this.pos.x<=this.size/2){
			this.bounceOnEdge(createVector(1,0));
			this.color=color(random(255),random(255),random(255));
		}
		if (this.pos.x>=width-this.size/2){   		
			this.bounceOnEdge(createVector(-1,0));				
			this.color=color(random(255),random(255),random(255));
		}
	}
	this.render=function(){
		fill(this.color)
		ellipse(this.pos.x,this.pos.y,this.size)	
	}
	this.bounceOnEdge=function(force){
		var untiVel=this.vel.copy();		
		untiVel.rotate(PI);				
		var angle=force.angleBetween(untiVel);
		var len=Math.cos(angle)*this.vel.mag()*2
		force.setMag(len);		
		this.vel.add(force);	
	}
}
