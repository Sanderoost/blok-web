var search = document.querySelector('#search');
var kruis = document.querySelector('#terug');
var filter = document.querySelector('div button');
var nav = document.querySelector('header');
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
var notify = document.querySelector('.profiel');
var download = document.querySelector('article header button');
download.addEventListener("click", function(){
	download.classList.toggle("downloaded");
	notify.classList.toggle("notify");
	});

  const header_height = nav.offsetHeight
  window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;
    if (scrollpos >= header_height) { 
    	nav.classList.add("scrolled");
    }
    else { 
    	nav.classList.remove("scrolled");
     }
  })