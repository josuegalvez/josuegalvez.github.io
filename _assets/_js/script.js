    var ypos,image;
	function parallex() {
		image = document.getElementById('mainimage');
		ypos = window.pageYOffset;
		image.style.top = ypos * .90+ 'px';
	}
	window.addEventListener('scroll', parallex),false;
