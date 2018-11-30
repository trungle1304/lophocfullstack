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



