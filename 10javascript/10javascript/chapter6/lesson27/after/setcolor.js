//window.addEventListener('load', 
window.onload = 
	function(event){
		setBoxColor();
	}
;//, false);
//色設定
function setBoxColor(){
	var query = window.location.search;
	var sp1 = query.substr(1).split('&');
	for(var i=0; i<sp1.length; i++){
		var sp2 = sp1[i].split('=');
		if(sp2[0]=='col'){
			color = sp2[1];
			break;
		}
	}
	var divs = document.getElementsByTagName('div');
	for(var i=0; i<divs.length; i++){
		if(divs[i].className == 'odd'){
			divs[i].style.background = color;
		}
	}
}
