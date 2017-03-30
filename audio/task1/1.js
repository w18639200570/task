/**
 * Created by Shinelon on 2017/3/26.
 */
var co = document.getElementsByTagName("div");
// 随机颜色
function colors(){
    return '#'+Math.floor(Math.random()*0xffffff).toString(16);
}

function setbgc(){
    // 设置随机数字
    var r = (Math.random()*9);
    // 设置随机数字变为整数
    var num = Math.floor(r);
    var number = ["0","1","2","3","4","5","6","7","8","9"]
    for (var i=0;i<3;i++){
        co.number = i;
    }
    // 给随机格子随机颜色
    co[i].style.backgroundColor=colors();
    co[i].style.backgroundColor=colors();
    co[i].style.backgroundColor=colors();
    // 处理数字相同问题
    if (num=num1||num2) {
        num++;
    }
    if (num1=num||num2){
        num1++;
    }
    if (num2=num||num1){
        num2++;
    }
    // if(num||num1||num2=9){
    //
    // }
}
function int(){
    var int = setInterval("st()", 1400);
}
function start(){
    int();
}
function st(){
    end();
    setbgc();
}

function end(){
    for(var i=0;i < co.length;i++){
        co[i].style.backgroundColor="orange";
    }
    clearInterval(int());
}