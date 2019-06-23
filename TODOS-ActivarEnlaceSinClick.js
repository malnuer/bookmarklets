// ---------------------------------------------------------------------------------------------------------------------
// TAREA: Permite activar un enlace sin hacer click en él
// SITIO: Todos
// AUTOR: @malnuer
// ---------------------------------------------------------------------------------------------------------------------


(function(sto){

	// Referencia al SetTimeout
	var sto = null;
	
	// Referencia al enlace en el que hemos puesto el ratón
	var enlace = null;
	
	// Obtenemos todos los enlaces de la página
	var enlaces = document.getElementsByTagName("a");

	// Los recorremos uno a uno para asociarles el evento onmouseover
	for(var i=0, ii=enlaces.length; i<ii; i++){
		
		// Le ponemos el fondo amarillo a todos
		enlaces[i].style.background = "yellow";

		// Asociamos el evento onMouseOver
		enlaces[i].onmouseover = function(){
			// Referencia al enlace sobre el que está el ratón
			enlace = this;
			// Le ponemos el fondo rojo
			enlace.style.background = "red";
			// Cuando pasen 2 segundos navegamos a su HREF
			sto = window.setTimeout(function(){ enlace.style.background = "green"; window.location = enlace.href; },2000);
		};

		// Asociamos el evento onMouseOut
		enlaces[i].onmouseout = function(){
			// Si salimos del enlace cancelamos el Timeout
			window.clearTimeout(sto);
			// Le ponemos el fondo amarillo otra vez
			enlace.style.background = "yellow";
		};

	}

})();



/* ================================================================================================================== *\

Este código asocia nuevos eventos onmouseover y onmouseout a todos los enlaces de la web, de manera que si se
coloca el ratón sobre un enlace durante dos segundos, se activará sin necesidad de hacer click.

El código está creado como una función anónima que se ejecuta al definirse.

Este código es útil en las típicas páginas que al hacer click en los enlaces te abren ventanas de publicidad.

\* ================================================================================================================== */
