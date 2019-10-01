// ---------------------------------------------------------------------------------------------------------------------
// TAREA: Activa/Desactiva el Capturador de imágenes en Instagram
// SITIO: Instagram
// AUTOR: @malnuer
// ---------------------------------------------------------------------------------------------------------------------


(function(tiempo){

    // Inicializamos la lista de archivos que queremos descargar
    window.archivos = window.archivos || {};

    // Vemos si está definido el timer
    if(window.timerCapturador){
        // Si SÍ está definido, lo eliminamos
        window.clearInterval(window.timerCapturador);
        window.timerCapturador = false;
        // Mostramos la lista de lo que hemos capturado
        Resultados();
    }else{
        // Si NO está definido, lo establecemos
        window.timerCapturador = window.setInterval(Capturador,tiempo);
    }

    // Esta función busca las posibles imágenes, captura su URL y le invierte los colores para indicar que la ha pillado
    function Capturador(){

        // Buscamos un Div junto a un Header, ambos dentro de un Article
        var ArticleDiv = document.querySelector("article > header + div");
        if(ArticleDiv){

            // Cogemos las imágenes que haya dentro
            var imgs = ArticleDiv.querySelectorAll("img");
            for(let i=0, j=imgs.length;i<j;i++){

                // Comprobamos si ya está en la lista, si no está lo guardamos
                if(!window.archivos[imgs[i].src]) window.archivos[imgs[i].src]="<img src='" + imgs[i].src + "' height='200px'>";

                // Invertimos los colores de la imagen para saber que ya la hemos cogido
                imgs[i].style.filter = "invert(1)";

            }
        }
	    
    };

    // Elimina la página de Instagram y muestra los resultados capturados
    function Resultados(){
        document.head.innerHTML=""
        document.body.style.overflow ="visible"
        document.body.innerHTML = Object.values(window.archivos).join("");
    }

})(500);

/* ================================================================================================================== *\

Este código pone en marcha o desactiva el capturador automático de imágenes en Instagram.

El código está creado como una función anónima que se ejecuta al definirse.
El argumento de la función será cada cuántos milisegundos se mirará si hay alguna imagen que capturar en la pantalla.
En el ejemplo son 500 milisegundos (medio segundos).

Aunque el capturador esté en marcha, no capturará nada si no hay una publicación abierta como popup.
Si se vuelve a ejecutar este código, se detendrá el capturador y se mostrarán los resultados.
Una vez que se tienen estos resultados en la página, se puede dar a "Guardar como" (página web completa) y
se obtendrán todos los archivos de imágen en la carpeta de archivos que se guardará junto a la página.

\* ================================================================================================================== */
