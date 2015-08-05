console.log("Loaded: main.js");

$(function() {

    // Make sure AST exists when these are run (Figure something out)
    // USE NODE.JS FS

    AST.startup.checkIE();
    AST.startup.checkJQuery();


    AST.anim.animateGradient("#page-header", 120, 30);



});
