var move = document.getElementById('move-div');
var sliderMove = document.getElementById('slider-ipt');
var sliderValue = sliderMove.value;
var containerDiv = document.getElementById('container');
var widthContainer = containerDiv.clientWidth - move.offsetWidth;

sliderMove.oninput = function(){
	sliderValue = this.value;
	move.style.marginLeft = sliderValue*widthContainer/100+'px';
};