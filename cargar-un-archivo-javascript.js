/**
 * ----------------------------------------------------------------------------
 * Añade un archivo Javascript a la página que esté cargada, para poder usarse
 * desde la consola. En el ejemplo se usa jQuery pero puede cargarse cualquier
 * otra librería. Algunos CDN para cargar librerías:
 * - https://cdnjs.com/libraries
 * - https://developers.google.com/speed/libraries/
 * - http://www.asp.net/ajax/cdn
 * ----------------------------------------------------------------------------
 */

(function(){

	// Creamos un elemento de tipo SCRIPT
	var s = document.createElement("script");
	// Le asignamos el source de algún CDN
	s.src = "//code.jquery.com/jquery-1.11.2.min.js";
	// Añadimos el elemento al BODY
	document.body.appendChild(s);

})();


// Cargar un archivo Javascript:
// ----------------------------------------------------------------------------

(function(){var s=document.createElement("script");s.src="//code.jquery.com/jquery-1.11.2.min.js";document.body.appendChild(s);})();

// ----------------------------------------------------------------------------
