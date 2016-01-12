/**
 * ----------------------------------------------------------------------------
 * Añade un archivo Javascript a la página que esté cargada, para poder usarse
 * desde la consola. En el ejemplo se usa jQuery pero puede cargarse cualquier
 * otra librería. Aquí hay algunos CDN para cargar librerías:
 * - https://cdnjs.com/libraries
 * - https://developers.google.com/speed/libraries/
 * - http://www.asp.net/ajax/cdn
 * ----------------------------------------------------------------------------
 * url - URL del archivo que queremos cargar
 * ----------------------------------------------------------------------------
 */


(function(url){

	// Creamos un elemento de tipo SCRIPT
	var s = document.createElement("script");

	// Le asignamos el source de algún CDN
	s.src = url;

	// Añadimos el elemento al BODY
	document.body.appendChild(s);

})("//code.jquery.com/jquery-1.11.2.min.js");

