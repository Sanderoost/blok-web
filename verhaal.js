  //verhaal
  $current = 0;
  var titel = document.getElementsByTagName("h1")[0];
  var next = document.querySelector('#next');
  var text = document.getElementsByTagName("p");
  next.addEventListener("click", function(){
    $current++;
    switch($current){
      case 1:
        titel.style.visibility="hidden";
        text[$current - 1].style.visibility="visible";
    break;
    case 2:
        text[$current - 2].style.visibility="hidden";
        text[$current - 1].style.visibility="visible";
      break;
    case 3:
        text[$current - 2].style.visibility="hidden";
        text[$current - 1].style.visibility="visible";
      break;
      case 4:
        text[$current - 2].style.visibility="hidden";
        next.style.visibility="hidden";
        document.getElementsByTagName("h1")[1].style.visibility="visible";
      break;
    }
  });