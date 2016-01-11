/**
 * ----------------------------------------------------------------------------
 * Al ejecutarse una vez, se activa un scroll automático hacia abajo, si se
 * vuelve a pulsar se detiene.
 * ----------------------------------------------------------------------------
 */

(function(v){

    if(window.autoScroll){
        window.clearInterval(window.autoScroll);
        window.autoScroll = false;
    }else{
        window.autoScroll = window.setInterval(
            function(){ window.scroll(0,window.scrollY+v); },
            33
        );
    }

})(5);


// Scroll automático:
// ----------------------------------------------------------------------------

(function(v){if(window.autoScroll){window.clearInterval(window.autoScroll);window.autoScroll=false;}else{window.autoScroll=window.setInterval(function(){window.scroll(0,window.scrollY+v);},33);}})(5);

// ----------------------------------------------------------------------------
