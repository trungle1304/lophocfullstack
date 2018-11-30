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

