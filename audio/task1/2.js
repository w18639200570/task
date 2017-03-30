/**
 * Created by Shinelon on 2017/3/28.
 */
// 获取div
var co = document.getElementsByTagName("div");
// 随机颜色
// 弃用的第一种方法
function colors(){
//     return '#'+Math.floor(Math.random()*0xffffff).toString(16);
// }
// 第二种方法
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+','+g+','+b+")";
//     测试第三种方法，竟然经常只出现一个颜色
//         return '#'+Math.floor(Math.random()*256).toString(10);
}
// 设置颜色主要内容
function setbgc(){
    // 设置三个随机数字
    var num = parseInt(Math.random()*8);
    var numo = parseInt(Math.random()*8);
    var numt = parseInt(Math.random()*8);

// 防止变成橙色
    if (colors()=="#ffa500"){
        colors();
    }
    // 处理数字相同问题
    if (num===numo||num===numt) {num++;}
    if (numo===num||numo===numt){numo++;}
    if (numt===num||numt===numo){numt++;}
    if(num >= 8){num--;}
    if(numo >= 8){num--;}
    if(numt >= 8){num--;}
    // 另一种处理数字问题
    // function random() {
    //     return  Math.floor(Math.random()*9)
    // }
    // 给随机格子随机颜色
    co[num].style.backgroundColor=colors();
    co[numo].style.backgroundColor=colors();
    co[numt].style.backgroundColor=colors();
    // 写出数据查找报错用
    // console.log(co[num].style.backgroundColor);
    // console.log(co[numo].style.backgroundColor);
    // console.log(co[numt].style.backgroundColor);
    // console.log(co[num]);
    // console.log(co[numo]);
    // console.log(co[numt]);
    // console.log(colors());
    console.log(num);
    console.log(numo);
    console.log(numt);
}
// 设置循环定时器
var int;
function start(){
        int = window.setInterval(function(){
            end();
            setbgc();
        },1000);
    star.disabled=true;
    }
    //设置单次定时器(失败）
//     int = window.setTimeout(function(){
//         end();
//         setbgc();
//     }, 1000);
//     window.setTimeout(function(){
//         end();
//         setbgc();
//     },1000)
// }
// 复位用
function end(){
    for(var i=0;i < co.length;i++){
    co[i].style.backgroundColor="orange";
    }
    // 新方法(失败，只能选中一个，上边方法可以选中每一个 )
    // var i=co.length-1;
    // co[i].style.backgroundColor="orange";
}
// 本来是要用来清除定时器，但是好像在按键上设置clearInterval先实现了，暂时不需要了
// function en(){
//     clearInterval(int);
//     for(var i=0;i < co.length;i++){
//         co[i].style.backgroundColor="orange";}
// }}
// 修改定时器会多次生效问题
var star = document.getElementById("star");
function over(){
    star.disabled=false;
}