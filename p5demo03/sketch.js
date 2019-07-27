
var balls=[];
function setup() {
	createCanvas(400,600);
	background(0);
	for(var i=0;i<20;i++){		//批量创建 //是个对象//又变成变量了，同时也是对象
		var ball={
				posX:width/2,	//从角落到中心
				posY:height/2,
				speedX:random(-2,2),		//随机速度  -2到2
				speedY:random(-2,2),
				color:color(random(255),random(255),random(255))		
			}	//随机的东西在循环是出现不同
				//在全局变量声明color会出现问题，这里没事
				//对象里面加属性，属性值
		balls.push(ball);	//把ball对象放到数组balls里面
	}		//push要放里面才传10个
	
	noStroke();		//取消描边
}
function draw() {
	background(0,20);//疑问？
	for(var i=0;i<balls.length;i++){	
			//批量绘制		
			//运行多少次就写小于多少 .LENGTH
		fill(balls[i].color);				
			//每个ball  balls{i}.color对应每一个ball
		ellipse(balls[i].posX,balls[i].posY,30,30);
		balls[i].posX+=balls[i].speedX;
		balls[i].posY+=balls[i].speedY;
			//数组【i】而不是变量【i】
			//判断是否碰撞边缘
		if(balls[i].posX<=15||balls[i].posX>=(width-15)){
			balls[i].speedX*=-1;
			balls[i].color=color(random(255),random(255),random(255));
		}
		if(balls[i].posY<=15||balls[i].posY>=(height-15)){
			balls[i].speedY*=-1;
			balls[i].color=color(random(255),random(255),random(255));
		}	//原来四个边都要判断，现在用||逻辑运算符合并起来
	}	//if不放进for里面就读取不到i变量
}