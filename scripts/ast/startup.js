AST.startup = {};

// Make sure JQuery is working
AST.startup.checkJQuery = function() {
    window.jQuery || AST.error.fatal("JQuery failed to download!");
};


// Only allow non-internet explorer
AST.startup.checkIE = function() {
    var userAgent = navigator.userAgent;
    if (userAgent.indexOf("MSIE ") > -1 || userAgent.indexOf("Trident/") > -1) {
        AST.error.fatal("Internet Explorer is deprecated; please use a better browser");
    }
};
