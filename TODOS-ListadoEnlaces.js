// ---------------------------------------------------------------------------------------------------------------------
// TAREA: Muestra la lista de todos los enlaces en una ventana Popup 
// SITIO: Todos
// AUTOR: @malnuer
// ---------------------------------------------------------------------------------------------------------------------

// Creamos una ventana popup
var ventana = window.open("", null, "height=200,width=400,top=0,left=0,status=no,toolbar=no,menubar=no,location=no,scrollbars,resizable");

// Comenzamos a escribir en la ventana popup
ventana.document.writeln("<html><body><ul>");

// Lista de enlaces
[...document.querySelectorAll("A")].forEach(function(enlace){
  ventana.document.writeln("<li><a href='" + enlace.href + "'>" + (enlace.innerText!=""?enlace.innerText:"[Sin texto]") + "</a></li>");
});

// Cerramos la escritura de la ventana popup
ventana.document.writeln("</ul></body></html>");

/* ================================================================================================================== *\
En los casos en los que el enlace esté asociado a una imagen, icono o algún otro elemento que no sea texto, aparecerá
un cartel indicando que es un enlace [Sin texto].
\* ================================================================================================================== */
