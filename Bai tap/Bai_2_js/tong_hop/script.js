var changeDiv = document.getElementById('change');
var w = changeDiv.offsetWidth;
var h = changeDiv.offsetHeight;

var intervalID = null;

var varName = function(){
	w -= 2/100*w;
	h -= 2/100*h;
	if(w>0 || h>0){
		changeDiv.style.width = w + 'px';
		changeDiv.style.height = h + 'px';
	}
	else {
		clearInterval(intervalID);
	}
};

function changSize(){
	intervalID = setInterval(varName, 1);
}

// bai 2

var changeDiv2 = document.getElementById('change1');
var numberDiv = document.getElementById('number');
var number = 0;
var intervalId1  = null;

var varName1 = function(){
	if(number<=800){
		changeDiv2.style.width = number + 'px';
		numberDiv.innerHTML = number/8 + '%';
		number +=1/100*800;
	}
	else {
		clearInterval(intervalId1);
	}

};

setInterval(varName1,20);

// bai 3
var bgColor = document.getElementById('bg-color');
var sliderRed = document.getElementById('cl-red');
var sliderGreen = document.getElementById('cl-green');
var sliderBlue = document.getElementById('cl-blue');
var outputRed = sliderRed.value;
var outputGreen = sliderGreen.value;
var outputBlue = sliderBlue.value;

sliderRed.oninput = function() {
  outputRed = this.value;
  bgColor.style.backgroundColor = 'rgb('+ outputRed+','+outputGreen+','+outputBlue+')';
}

sliderGreen.oninput = function() {
  outputGreen= this.value;
  bgColor.style.backgroundColor = 'rgb('+ outputRed+','+outputGreen+','+outputBlue+')';
}

sliderBlue.oninput = function() {
  outputBlue= this.value;
  bgColor.style.backgroundColor = 'rgb('+ outputRed+','+outputGreen+','+outputBlue+')';
}

// bai 4
var move = document.getElementById('move-div');
var sliderMove = document.getElementById('slider-ipt');
var sliderValue = sliderMove.value;
var containerDiv = document.getElementById('container2');
var widthContainer = containerDiv.clientWidth - move.offsetWidth;

sliderMove.oninput = function(){
	sliderValue = this.value;
	move.style.marginLeft = sliderValue*widthContainer/100+'px';
};

