// ---------------------------------------------------------------------------------------------------------------------
// TAREA: Activa/Desactiva el AutoPlay para ver publicaciones en Instagram
// SITIO: Instagram
// AUTOR: @malnuer
// ---------------------------------------------------------------------------------------------------------------------


(function(tiempo){

    // Vemos si está definido el timer
    if(window.timerAutoPlay){
        // Si SÍ está definido, lo eliminamos
        window.clearInterval(window.timerAutoPlay);
        window.timerAutoPlay = false;
    }else{
        // Si NO está definido, lo establecemos
        window.timerAutoPlay = window.setInterval(AutoPlay,tiempo);
    }

    // Pulsa el botón de siguiente imagen (si está) y si no, pulsa el de siguiente publicación (si está), y si no, nada
    function AutoPlay(){

    // Botón para pasar a la siguiente imagen dentro de una publicación
        var sigImagen = document.querySelector("DIV.coreSpriteRightChevron");
        if(sigImagen){
            // Hacemos click en el botón de siguiente imagen
            sigImagen.click();
        } else {
            // Botón para pasar a la siguiente publicación
            var sigPublicacion = document.querySelector("A.coreSpriteRightPaginationArrow");
            if(sigPublicacion) {
                // Hacemos click en el botón de siguiente publicación
                sigPublicacion.click();
                }
        }

    }

})(3000);


/* ================================================================================================================== *\

Este código pone en marcha o desactiva un autoplay automático para ver las publicaciones en Instagram.

El código está creado como una función anónima que se ejecuta al definirse.
El argumento de la función será el número de milisegundos que tardará en pasar a la siguiente imagen o publicación.
En el ejemplo son 3000 milisegundos (3 segundos).

Aunque el autoplay esté en marcha, no hará nada si no hay una publicación abierta como popup.
El código sólo se encarga de buscar los botones de siguiente imagen o siguiente publicación.

\* ================================================================================================================== */

