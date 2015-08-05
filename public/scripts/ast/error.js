console.log("Loaded: error.js");

AST.error = {};

AST.error.fatal = function(message) {
    document.clear();

    var title = document.createElement('h1');
    var info  = document.createElement('h4');

    title.className = "fatalError";
    title.textContent = "Fatal error occured!";

    info.className = "fatalError";
    info.textContent = message;


    window.onload = function() {
        document.body.innerHTML = '';
        document.body.appendChild(title);
        document.body.appendChild(info);
    }
};
