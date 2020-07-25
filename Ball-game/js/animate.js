
var canvas = null;
var context = null;
var ball_radius = 15;
var ball_x =0;
var ball_y =0;
var x_vel = 1;
var y_vel = 1;
var tar_x = 0;
var tar_y = 0;
var tar_size = 3*ball_radius;
//var interval = null;

window.onload = function(){
	doSetup();
	doDraw();
	interval = window.setInterval(doDraw,1);
	document.getElementById('start').onclick =function(){ interval = window.setInterval(doDraw,1);};
	document.getElementById('stop').onclick = function(){ window.clearInterval(interval);}; 
	//document.getElementById('slider').onchange = setSlide();
	
}


function doSetup(){
	canvas = document.getElementById('myCanvas');
	context = canvas.getContext('2d');
	canvas.width = 900;
	canvas.height = 500;
	tar_x = canvas.width/2;
	tar_y = canvas.height/2;
	
}

function doDraw(){
	context.fillStyle = 'lightblue';
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	moveBall();
	
	//context.strokeStyle = 'blue';
	//context.fillStyle = 'blue';
	if(eclipse()){
		
		//canvas.style.backgroundColor='white';
		context.fillStyle = 'white';
		context.fillRect(0, 0, canvas.width, canvas.height);
		context.strokeStyle = 'yellow';
		context.fillStyle = 'yellow';
	}
	else{
		context.strokeStyle = 'blue';
		context.fillStyle = 'blue';
	}
	
	context.fillRect(tar_x-tar_size/2, tar_y-tar_size/2, tar_size, tar_size);
	
	paintBall();
	
}

function paintBall(){
	context.beginPath();
	context.arc(ball_x+ball_radius, ball_y+ball_radius, ball_radius, 0, 360, false);
	context.fillStyle = 'red';
	context.fill();
	context.closePath();
}

function moveBall(){
	
	var rslide = document.getElementById('slider');
	var speed = document.getElementById('speed');
	//var dict = document.getElementById('dict');
	rslide.onchange = function(){
		x_vel = this.value;
		y_vel = this.value;
		speed.innerHTML = this.value;
		//dict.innerHTML = slider.value;
	}
	
	ball_x = ball_x + x_vel;
	ball_y = ball_y + y_vel;
	
	var max_x = canvas.width - 2*ball_radius;
	var max_y = canvas.height - 2*ball_radius;
	
	if(ball_x > max_x){
		ball_x = max_x - (ball_x - max_x);
		x_vel = -x_vel;
	}
	else if(ball_x < 0){
		ball_x = -ball_x;
		x_vel = Math.abs(x_vel - 0);
	}
	if(ball_y > max_y){
		ball_y = max_y - (ball_y - max_y);
		y_vel = -y_vel;
	}
	else if(ball_y < 0){
		ball_y = -ball_y;
		y_vel = Math.abs(y_vel - 0);
	}
	
}

function eclipse(){
	var x_diff = Math.abs( tar_x -( ball_x + ball_radius));
	var y_diff = Math.abs( tar_y -( ball_y + ball_radius));
	
	if(x_diff <= ball_radius*2 && y_diff <= ball_radius*2){
		return true;
	}
	else{
		return false;
	}
}