/**
 * Created by Shinelon on 2017/3/28.
 */
function randomNum() {
    // 随机生成1~9内的三个数字，以便随机选取格子
    num1 = Math.floor(Math.random() * 9);
    num2 = Math.floor(Math.random() * 9);
    num3 = Math.floor(Math.random() * 9);
    // 去除重复的随机数，保证每次三个不同的格子变色
    if (num1 == num2 || num1 == num3 || num2 == num3) {
        randomNum();
    }
    console.log(num1,num2,num3);
}
var int = window.setInterval(function(){
    randomNum()
},100);
function stop(){
    clearInterval(int);
}
// var a = document.getElementsByTagName("button")[0];