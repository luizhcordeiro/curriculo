const aside = document.getElementById("left");
const topAside = aside.offsetTop;

window.onscroll = function(){
   if( window.pageYOffset >= topAside) {
		aside.classList.add("fixed");
	}else{
   		aside.classList.remove("fixed");
   }
}

function mouseOver(x) {
    var efeito = document.getElementsByClassName(x);
    
    for (let index = 0; index < efeito.length; index++) {
          efeito[index].style.color = "blue";
      }
}

function mouseOut(x) {
    var efeito = document.getElementsByClassName(x);

    for (let index = 0; index < efeito.length; index++) {
          efeito[index].style.color = "#0d0d0f";
      }
}