/**
 * ----------------------------------------------------------------------------
 * Permite navegar a la dirección del HREF de un link simplemente dejando el
 * ratón encima del enlace durante 2 segundos.
 * ----------------------------------------------------------------------------
 */

(function(h){

	// Obtenemos todos los enlaces de la página
	var all = document.getElementsByTagName("a");

	// Los recorremos uno a uno
	for(var i=0, j=all.length; i<j; i++){

		// Asociamos el evento onMouseOver
		all[i].onmouseover = function(){
			// Referencia al enlace sobre el que está el ratón
			var a = this;
			// Cuando pasen 2 segundos navegamos a su HREF
			h = window.setTimeout(function(){ window.location = a.href; },2000);
		};

		// Asociamos el evento onMouseOut
		all[i].onmouseout = function(){
			// Si salimos del enlace cancelamos el Timeout
			window.clearTimeout(h);
		};

	}

})();


// Navegar sin hacer click:
// ----------------------------------------------------------------------------

(function(h){var all=document.getElementsByTagName("a");for(var i=0,j=all.length;i<j;i++){all[i].onmouseover=function(){var a=this;h=window.setTimeout(function(){window.location=a.href},2000);};all[i].onmouseout=function(){window.clearTimeout(h);};}})();

// ----------------------------------------------------------------------------
