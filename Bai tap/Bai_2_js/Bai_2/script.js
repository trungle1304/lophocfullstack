var changeDiv = document.getElementById('change');
var numberDiv = document.getElementById('number');
var number = 0;
var intervalId  = null;

var varName = function(){
	if(number<=800){
		changeDiv.style.width = number + 'px';
		numberDiv.innerHTML = number/8 + '%';
		number +=1/100*800;
	}
	else {
		clearInterval(intervalId);
	}

};

setInterval(varName,20);