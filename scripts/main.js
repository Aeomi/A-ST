
// Perform startup checks
AST.startup.checkIE();
AST.startup.checkJQuery();

window.bgiDeg = 120;

setInterval(function(){
    bgiDeg = (bgiDeg+0.5)%360;
    $('#page-header').css( {'background-image' : "linear-gradient("+bgiDeg+"deg, rgb(25,45,200), rgb(225,50,220))"} );
}, 50);
