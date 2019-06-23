// ---------------------------------------------------------------------------------------------------------------------
// TAREA: Elimina los anuncios que se mezclan con las respuestas en Quora
// SITIO: quora.com
// AUTOR: @malnuer
// ---------------------------------------------------------------------------------------------------------------------

document.querySelectorAll("span[style='display: none;']")
.forEach(function(e){
    e.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
});



/* ================================================================================================================== *\
Este código elimina ciertos elementos de la página.

Lo que hace es buscar ciertos elementos de tipo SPAN que tienen un "display: none" y que se usan para separar
las letras de la palabra "Sponsored by" y "Ad by". Seguramente sirva para dificultar la detección de estas capas
a los bloqueadores de publicidad. Pero precisamente es lo que uso para encontrarlas.

Una vez encontrados estos elementos SPAN con el "display: none" tenemos que ocultar al quinto padre, es decir,
al padre, del padre, del padre, del padre, del padre.

\* ================================================================================================================== */
