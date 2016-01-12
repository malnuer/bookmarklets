/**
 * ----------------------------------------------------------------------------
 * Agrega datos CSS a la página
 * ----------------------------------------------------------------------------
 * css - String con todo el CSS que queremos cargar 
 * ----------------------------------------------------------------------------
 */


(function(css){

	// Creamos un elemento STYLE
    var style = document.createElement("style");

    // Rellenamos el contenido del elemento
    style.innerHTML = css;

    // Lo pegamos al BODY
    document.body.appendChild(style);
    
})("body {background:red;} h1 {color:blue;}");

