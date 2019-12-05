//XR.+ embed script / May 2018 / June 2019

function gestureChange(event) {
	event = event.originalEvent || event;
	if (event.scale !== 1) {
		event.preventDefault();
		document.body.style.transform = 'scale(1)';
	}
}

function resizeFrame(i)
{
	i.width = window.innerWidth;
	i.height = window.innerHeight;
}

function embedScene()
{
	if(location.protocol!='https:')
	{
		console.log("an SSL certificate (https://github.com/billyxdude12/billyxdude12.github.io.git) is required to embed scenes");
		return;
	}

	if (typeof scene == 'undefined')
	{
		console.log("no scene set");
		return;
	}

	if (scene == 'ugh')
	{
		console.log("replace 'ugh' by your scene 3 characters id");
		return;
	}

	//prevent safari pinch to zoom
	document.body.addEventListener("gesturechange", gestureChange, false);
	document.body.addEventListener("touchmove", gestureChange, false);

	//create iframe
	var iframe = document.createElement('iframe');
	iframe.setAttribute("allow", "camera; accelerometer; gyroscope; magnetometer");
	iframe.src = 'https://xr.plus/' + scene;
	iframe.style.border = "none";
	document.body.appendChild(iframe);

	//resize event
	window.onresize = function(event){resizeFrame(iframe);};
	resizeFrame(iframe);

}

embedScene();