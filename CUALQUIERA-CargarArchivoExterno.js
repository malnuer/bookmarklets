// ---------------------------------------------------------------------------------------------------------------------
// TAREA: Carga un nuevo archivo externo JS o CSS en la página web
// SITIO: Cualquiera
// AUTOR: @malnuer
// ---------------------------------------------------------------------------------------------------------------------


(function(url){

	// Vemos si se trata de un CSS
	if(url.substring(url.length-4).toUpperCase()==".CSS"){
		
		// Creamos un elemento de tipo SCRIPT, le asignamos la URL y lo añadimos al BODY
		var l = document.createElement("link");
		l.setAttribute("rel","stylesheet");
		l.href = url;
		document.body.appendChild(l);
	}
	
	// Vemos si se trata de un JS
	if(url.substring(url.length-3).toUpperCase()==".JS"){
		
		// Creamos un elemento de tipo SCRIPT, le asignamos la URL y lo añadimos al BODY
		var s = document.createElement("script");
		s.src = url;
		document.body.appendChild(s);
	}

})("https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js");



/* ================================================================================================================== *\

Este código crea una nueva etiqueta SCRIPT que se agregará al final del BODY cuyo SRC se indicará como argumento.

El código está creado como una función anónima que se ejecuta al definirse.
El argumento de la función será la URL del archivo Javascript o CSS deseado, cámbialo por el que tú quieras.
En el ejemplo, se carga la versión 3.4.1 de jQuery minificada obtenida del CDN de Google.

Aquí hay algunos CDN para cargar librerías:
https://developers.google.com/speed/libraries/
https://cdnjs.com/libraries
http://www.asp.net/ajax/cdn

\* ================================================================================================================== */

