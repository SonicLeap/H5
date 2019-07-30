//聚集
var balls=[];
function setup() {
	createCanvas(400,600);			//改了画布
	background(0);
	for(var i=0;i<10;i++){
		balls.push(new Ball(width/2,height/2,30));		
	}
	noStroke();		
}
function draw() {
	background(0,20);
	for(var i=0;i<balls.length;i++){	
		balls[i].update();
		balls[i].render();
	}
}
function mouseClicked(){
	for (var i=0;i<balls.length;i++){
		if((balls[i].pos.x>=balls[i].size/2)&&(balls[i].pos.x<=width-balls[i].size/2)&&(balls[i].pos.y>=balls[i].size/2)&&(balls[i].pos.y<=height-balls[i].size/2)){balls[i].moveTo(mouseX,mouseY);}		//加了debug
	}
	
}
function Ball(posX,posY,ballsize){	
	this.pos=createVector(posX,posY);	
	this.size=ballsize;		
	this.vel=p5.Vector.random2D();	
	this.vel.setMag(random(3,5));
	this.color=color(random(255),random(255),random(255));
	this.bounceOnEdge=function(force){
		var untiVel=this.vel.copy();		
		untiVel.rotate(PI);				
		var angle=force.angleBetween(untiVel);
		var len=Math.cos(angle)*this.vel.mag()*2
		force.setMag(len);	
		this.vel.add(force);
	}
	this.update=function(){
		if (this.pos.x <= this.size/2){
			this.bounceOnEdge(createVector(1,0));
			this.color=color(random(255),random(255),random(255));
		}
		if (this.pos.x >= width-this.size/2){   		
			this.bounceOnEdge(createVector(-1,0));				
			this.color=color(random(255),random(255),random(255));
		}
		if (this.pos.y <= this.size/2){
			this.bounceOnEdge(createVector(0,1));
			this.color=color(random(255),random(255),random(255));
		}
		if (this.pos.y >= height-this.size/2){
			this.bounceOnEdge(createVector(0,-1));
			this.color=color(random(255),random(255),random(255));
		}
		this.pos.add(this.vel)
	}
	this.render=function(){
		fill(this.color)
		ellipse(this.pos.x,this.pos.y,this.size)	
	}
	this.moveTo=function(targetX,targetY){
		var target = createVector(targetX,targetY);
		var force = target.sub(this.pos);			//会改变targer的值
//		var s = 0.3;
//		force.mult(s);				大小系数
		this.vel.add(force);
		this.vel.setMag(random(3,5));
	}
}