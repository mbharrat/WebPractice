//script for events
/*
var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

//add listener
numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

function add(){
	var one = parseFloat(numOne.value) || 0;
	var two = parseFloat(numTwo.value) || 0;
	//console.log(one,two);
	var sum = one+two;
	addSum.innerHTML = "your sum is: "+sum;
}

*/
/*-----------------------------------------------
	JavaScript Events:
	-click
	-mouseenter
	-mouseleave
	-mousedown
	-mouseup
	-mousemove
	-keydown
	-keyup
	-blur
	-focus

	mouse events and keyboard events!!!!!
*/
var g1 = document.getElementById("g1");
var g2 = document.getElementById("g2");
var g3 = document.getElementById("g3");


// g1.addEventListener("click",function(){
// 	if(goat1.className === "hide") {
// 		goat1.className = "";
// 	}else{
// 		goat1.className = "hide";
// 	}
// });
// g2.addEventListener("click",function(){
// 	if(goat2.className === "hide") {
// 		goat2.className = "";
// 	}else{
// 		goat2.className = "hide";
// 	}
// });
// g3.addEventListener("click",function(){
// 	if(goat3.className === "hide") {
// 		goat3.className = "";
// 	}else{
// 		goat3.className = "hide";
// 	}
// });
g1.addEventListener("click",picLink);
g2.addEventListener("click",picLink);
g3.addEventListener("click",picLink);

function picLink(){
	var allImages = document.querySelectorAll("img");

	for(var i =0;i<allImages.length;i++){
		allImages[i].className = "hide";
	}
	var picId = this.attributes["data-img"].value;
	var pic = document.getElementById(picId)
	if(pic.className === "hide") {
 		pic.className = "";
 	}else{
 		pic.className = "hide";
 	}
}