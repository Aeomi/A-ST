console.log("Loaded: loader.js");

window.AST = {};





/*
AST.nodes = [
    "ast/error.js",
    "ast/animation.js",
    "ast/startup.js",
    "ast/story.js",

    "main.js"
];

AST.loadNode = function(path, callback) {
    var head = document.head;
    var node = document.createElement('script');

    node.src  = "scripts/" + path;

    head.appendChild(node);

    callback();
};


// Load Nodes
for (var i in AST.nodes) {
    var node = AST.nodes[i];

    AST.loadNode(node, function(){
        console.log("[Loader]> Set to load: " + node);
    })

};
*/
