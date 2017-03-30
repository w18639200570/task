/**
 * Created by Shinelon on 2017/3/24.
 */
function showPic(whichPic){
    var placeholder = document.getElementById("placeholder");
    var source = whichPic.getAttribute("href");
    placeholder.setAttribute("src", source);
    var text = whichPic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
    // alert (description.firstChild.nodeValue);
}

function popup(winURL) {
	window.open(winURL,"popup","width=320,height=480");
}

/*
function countBodyChildren() {
	var body_element = document.getElementsByTagName("body")[0];
	alert (body_element.nodeType);
}window.onload = countBodyChildren;
*/
