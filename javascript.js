// variablen defineren 
var search = document.querySelector('#search');
var kruis = document.querySelector('#terug');
var filter = document.querySelector('aside button');
var nav = document.querySelector('header');
var dropdown = document.querySelector('fieldset');
var notify = document.querySelector('.profiel');
var download = document.querySelector('article header button');

// navigatie balk rood laten worden
search.addEventListener("click", function(){
	nav.classList.toggle("search");
	});
// kruisje indrukken om de navigatiebalk weer wit te maken
kruis.addEventListener("click", function(){
	nav.classList.remove("search");
	});
// Dropdown class toevoegen om deze uit te klappen
filter.addEventListener("click", function(){
	dropdown.classList.toggle("filter");
	});
//Download knop groter maken en notificatie geven
download.addEventListener("click", function(){
	download.classList.toggle("downloaded");
  setTimeout(function(){  
    notify.classList.toggle("notify");
  }, 2400);

	});
//Header hoogte uitreken
  const header_height = nav.offsetHeight
  window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;
    // als de scroll positie even hoog is als de navbar dan veranderd deze naar de witte navbar op groot scherm
    if (scrollpos >= header_height) { 
    	nav.classList.add("scrolled");
    }
    else { 
    	nav.classList.remove("scrolled");
     }
  })


