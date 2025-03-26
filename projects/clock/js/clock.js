/////////////////////////////////////////////////////////////////////////////
//


const deg = 6;/*
var hr = document.querySelector('.hr');
var mn = document.querySelector('.mn');
var sc = document.querySelector('.sc'); */

window.onload = function (){
	clock();
	var t = setInterval(clock,1000);
}

function clock() {
	
	var hr = document.getElementById("hr");
	var mn = document.getElementById("mn");
	var sc = document.getElementById("sc");
		
	var day = new Date();
	let hh  = day.getHours()*30;
	let mmr  = day.getMinutes()*deg;
	let ssr  = day.getSeconds()*deg;
	let hhr = (hh)+(mmr/12);
	
	console.log("Hour: "+day.getHours()+" Minute: "+ day.getMinutes() + " Second: "+ day.getSeconds());
	console.log("hh "+hhr+" mm: "+mmr+" ss: "+ssr);
	
	hr.style.transform = 'rotateZ('+hhr+'deg)';
	mn.style.transform = 'rotateZ('+mmr+'deg)';
	sc.style.transform = 'rotateZ('+ssr+'deg)';
}

