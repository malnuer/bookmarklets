// ---------------------------------------------------------------------------------------------------------------------
// TAREA: Incluye nuevas reglas CSS en una página web
// SITIO: Todos
// AUTOR: @malnuer
// ---------------------------------------------------------------------------------------------------------------------


(function(css){

	// Creamos un elemento STYLE
    var style = document.createElement("style");

    // Rellenamos el contenido del elemento
    style.innerHTML = css;

    // Lo pegamos al BODY
    document.body.appendChild(style);
    
})("body {background:red;} h1 {color:blue;}");



/* ================================================================================================================== *\

Este código crea una nueva etiqueta STYLE que se agregará al final del BODY.

El código está creado como una función anónima que se ejecuta al definirse.
El argumento de la función será el contenido de la etiqueta STYLE, asegúrate de cambiarlo por lo que tú quieras.
En el ejemplo, se pondrá el fondo de color rojo y el título principal en azul.

\* ================================================================================================================== */
