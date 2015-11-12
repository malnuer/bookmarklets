/**
 * ----------------------------------------------------------------------------
 * Permite navegar a la dirección del HREF de un link simplemente dejando el
 * ratón encima del enlace durante 2 segundos. Esta versión incluye el
 * coloreado en rojo de todos los enlaces, al poner el ratón encima se irá
 * poniendo amarillo y si se cumple el tiempo se pondrá verde.
 * ----------------------------------------------------------------------------
 */

(function(t,a,h){

	// Obtenemos todos los enlaces de la página
	var all = document.getElementsByTagName("a");

	// Los recorremos uno a uno
	for(var i=0, j=all.length; i<j; i++){

		// Ponemos el background rojo
		all[i].style.background = "rgb(255,0,0)";

		// Asociamos el evento onMouseOver
		all[i].onmouseover = function(){
			// Ponemos el temporizador a cero
			t = 0;
			// Cogemos la referencia al enlace
			a = this;
			// Ponemos en marcha el Interval 50 veces por segundo
			h = window.setInterval(loop,20);
		};

		// Asociamos el evento OnMouseOut
		all[i].onmouseout = function(){
			// Devolvemos el color rojo al enlace
			a.style.background = "rgb(255,0,0)";
			// Cancelamos el Interval
			window.clearInterval(h);
		};

	}

	function loop(){

		// Incrementamos el contador hasta que lleguemos a 255
		if((t+=5)>255){
			// Si hemos llegado a 255, navegamos al HREF
			window.location = a.href;
			// Cancelamos el Interval
			window.clearInterval(h);
			// Ponemos el enlace verde
			a.style.background = "rgb(0,255,0)";
		}else{
			// Si no hemos llegado a 255, seguimos con los tonos amarillo
			a.style.background = "rgb(255,"+t+",0)";
		}
	}

})();


// Navegar sin hacer click:
// ----------------------------------------------------------------------------

(function(t,a,h){var all=document.getElementsByTagName("a");for(var i=0,j=all.length;i<j;i++){all[i].style.background="rgb(255,0,0)";all[i].onmouseover=function(){t=0;a=this;h=window.setInterval(loop,20);};all[i].onmouseout=function(){a.style.background="rgb(255,0,0)";window.clearInterval(h);};}function loop(){if((t+=5)>255){window.location=a.href;window.clearInterval(h);a.style.background="rgb(0,255,0)";}else{a.style.background="rgb(255,"+t+",0)";}}})();

// ----------------------------------------------------------------------------
