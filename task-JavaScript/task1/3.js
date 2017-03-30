/**
 * Created by Shinelon on 2017/3/28.
 */
function setbgc(){
    var co = document.getElementById("box");
    // alert(co.style.background);
    // co.style.backgroundColor="black";
    // alert(co.style.backgroundColor)


    var styles = window.getComputedStyle(co,null);
    console.log(styles.color);
    console.log(getStyle('box').backgroundColor);

    function getStyle(ele) {
        var style = null;
        var co = document.getElementById("box");
        if(window.getComputedStyle) {

            style = window.getComputedStyle(co, null);
        }else{
            style = co.currentStyle;
        }

        return style;
    }
}
//师兄帮改的，好好研究。