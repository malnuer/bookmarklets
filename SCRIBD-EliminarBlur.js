// ---------------------------------------------------------------------------------------------------------------------
// TAREA: Eliminar efecto blur de la página de Scribd
// SITIO: scribd.com
// AUTOR: @malnuer
// ---------------------------------------------------------------------------------------------------------------------


window.setInterval(function(){

	// Poner de color negro todos los textos de la hoja
	[...document.querySelectorAll("[style]")].filter(function(e){
		return RegExp(/color: transparent/).test(e.getAttribute("style"))
	}).forEach(function(e){
		e.setAttribute("style",e.getAttribute("style").replace("color: transparent",""));
	});
  
	// Quitar cartelitos que avisan de que es un preview
	[...document.querySelectorAll(".promo")].forEach(function(e){
		e.parentNode.removeChild(e);
	});

},3000);

/* ================================================================================================================== *\

Para que no puedas ver el texto completo sin pagar, Scribd hace un efecto de blur después de cierto número de hojas.

Este efecto consiste en poner el texto transparente y por otro lado hacer una sombra difusa negra de dicho texto.
Para eliminar esto, basta con poner todo el texto negro.
Scribd pone el texto transparente con el atributo STYLE, así que lo que hacemos es coger todos los elementos
que tengan atributo STYLE, filtramos los que tengan "color: transparent" y a esos, les quitamos el "color: transparent"

Por otro lado, quitamos los carteles que avisan de que se trata de una preview.

NOTA: Scribd carga el contenido a medida que se hace scroll, por lo que tendríamos que repetir este código a menudo.
Se puede poner un setInterval de 3 segundos (por ejemplo), o ejecutar el código cada vez que se cargue contenido nuevo.

Por último, Scribd cambia algunos caracteres por otros raros, pero también cambia la fuente para que parezca que no
ha pasado nada. Sin embargo, si copias y pegas en otro sitio, verás que el texto no es el que esperabas.
El siguiente código sirve para permitir seleccionar y copiar texto, pero por esto que comento no es muy útil.

	// Permitimos seleccionar textos
	[...document.querySelectorAll(".auto__doc_page_webpack_doc_page_blur_promo")].forEach(function(e){
		e.parentNode.removeChild(e);
	});
	[...document.querySelectorAll(".outer_page")].forEach(function(e){
		e.setAttribute("style",(e.getAttribute("style")||"").replace(";user-select:auto","")+";user-select:auto");
	});

\* ================================================================================================================== */

