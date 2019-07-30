var balls=[];
var coolDown=0;
function setup() {
	createCanvas(320,240);
	background(0);
	for(var i=0;i<1;i++){
		balls.push(new Ball(width/2,height/2,60));		
	}
	noStroke();		
}


function draw() {
	console.log(coolDown);
	background(0,20);
	if (coolDown>0){
		coolDown-=1;
	}
	for(var i=0;i<balls.length;i++){	
		balls[i].update();
		balls[i].render();
	}
	
}

function mouseClicked(){
	for(var i=0;i<balls.length;i++){
		var d=dist(mouseX,mouseY,balls[i].pos.x,balls[i].pos.y);
		if ((d<=balls[i].size*0.5)&&(coolDown<=0)){
			explode(i);
			coolDown=60;
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







