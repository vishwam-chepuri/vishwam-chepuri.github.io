/* animating the header slide */
var myIndex = 0;
carousel();

function carousel()
{
	var i;
	var x = document.getElementsByClassName("mySlides");
	for(i=0; i<x.length; i++)
	{
		x[i].style.display = "none";
	}
	myIndex++;
	if(myIndex > x.length)
	{
		myIndex = 1;
	}
	x[myIndex - 1].style.display = "block";
	setTimeout(carousel, 2500);
}

/* function for audio image */
function playclip()
{
	if(navigator.appName == "Microsoft internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) ||
	(navigator.appVersion.indexOf("MSIE 8")!=-1))
	{
		if(document.all)
		{
			document.all.sound.src="Standup.mp3";
		}
	}
	else 
	{
		var audio = document.getElementsByTagName("audio")[0];
		audio.play();
	}
}

/* function for progress bar */
function move()
{
	var elem = document.getElementById("myBar");
	var width = 1;
	var id = setInterval(frame, 10);
	function frame()
	{
		if(width >=100)
		{
			clearInterval(id);
		}
		else
		{
			width++;
			elem.style.width = width + '%';
		}
	}
}