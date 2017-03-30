/**
 * Created by Shinelon on 2017/3/24.
 */
var num=[];
var box = document.getElementsByClassName('box');
var item;
while(num.length<3){
	item=random(); //随机数
	if(num.indexOf(item)<0){//判断是否已存在数组中
		num.push(item)
	}
}
console.log(num);
function random() {
	return  Math.floor(Math.random()*9)
}
function start() {
	//开始随机变换颜色
	//noinspection JSDuplicatedDeclaration
	for (var i = 0; i < box.length; i++) {
		//初始化所有小格子的颜色
		box[i].style.backgroundColor = "orange";
	}
	var color = new Array(3);
	function randomRgbColor() { //随机生成RGB颜色
		var r = Math.floor(Math.random() * 256); //随机生成256以内r值
		var g = Math.floor(Math.random() * 256); //随机生成256以内g值
		var b = Math.floor(Math.random() * 256); //随机生成256以内b值
		return "rgb("+r+","+g+","+b+")"; //返回rgb(r,g,b)格式颜色
	}
	for(var i=0;i<3;i++){
		color[i]=randomRgbColor();
	}
	if(color[i]=="rgb(225,140,0)")
	{  randomRgbColor();
	}
	while(color.length<3){
		b=randomRgbColor();//随机颜色值
		if(color.indexOf(b)<0){//判断是否已存在数组中
			color.push(b)
		}
	}
	console.log(randomRgbColor);
	random();//执行函数，获取随机数
	//将随机获取的颜色赋值给随机格子
	box[random()].style.backgroundColor = color[0];
	box[random()].style.backgroundColor = color[1];
	box[random()].style.backgroundColor = color[2];
	run();
}
var a;
function run() {
	clearInterval(a);//清除定时器效果
	a = setInterval(
		//每1300ms执行一次start函数
		function () {
			start();
		}, 1300
	)
}
function end() {
	//重置所有格子的颜色
	clearInterval(a);
	for (var n = 9; n <9; n++) {
		box[n].style.backgroundColor = "darkorange";
	}
}