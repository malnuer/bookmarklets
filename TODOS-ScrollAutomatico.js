// ---------------------------------------------------------------------------------------------------------------------
// TAREA: Activa/Desactiva el Scroll automático
// SITIO: Todos
// AUTOR: @malnuer
// ---------------------------------------------------------------------------------------------------------------------


(function(vel){

    if(window.autoScroll){
        window.clearInterval(window.autoScroll);
        window.autoScroll = false;
    }else{
        window.autoScroll = window.setInterval(
            function(){ window.scroll(0,window.scrollY+vel); },
            33
        );
    }

})(5);



/* ================================================================================================================== *\

Este código pone en marcha o desactiva un scroll automático hacia abajo.

El código está creado como una función anónima que se ejecuta al definirse.
El argumento de la función será el número de píxeles que se bajará cada 33 milisegundos. En el ejemplo son 5 píxeles.
He elegido 33 milisegundos porque es el resultado de 1000/30 = 33. Es lo que serían 30 ejecuciones por segundo.
Es como si tuviésemos un framerate de 30 fps. Así el scroll queda suave, pero se pueden probar otros valores.

\* ================================================================================================================== */

