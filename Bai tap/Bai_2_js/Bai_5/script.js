var circle = document.getElementById('circleDiv');
var w = 300;

var ok = circle.offsetWidth;

if(ok==300){
	setInterval(function(){
	w--;
	circle.style.width = w + 'px';
	circle.style.height = w + 'px';
}, 10);
}

	setInterval(function(){
	w++;
	if(w <= 300){
		circle.style.width = w + 'px';
		circle.style.height = w + 'px';
	}

}, 10);










