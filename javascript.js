var search = document.querySelector('#search');
var kruis = document.querySelector('#terug');
var filter = document.querySelector('div button');
var nav = document.querySelector('nav');
var dropdown = document.querySelector('fieldset');

search.addEventListener("click", function(){
	nav.classList.add("search");
	});
kruis.addEventListener("click", function(){
	nav.classList.remove("search");
	});
filter.addEventListener("click", function(){
	dropdown.classList.toggle("filter");
	});

var download = document.querySelector('article header button');
download.addEventListener("click", function(){
	download.classList.toggle("downloaded");
	});