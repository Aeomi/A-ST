console.log("Loaded: animation.js");

AST.anim = {
    instances : {}
};


/* TODO: instances static, make anim a class and use:
    AST.anim.prototype.method_name = function(first_argument) {
        // body...
    };
*/


AST.anim.registerAnim = function(id, anim) {
    AST.anim.instances[id] = anim;
    return anim;
};

AST.anim.debugAnim = function(id) {

    console.log("[AST/Anim/debugAnim]> " + id);

    for (var k in AST.anim.instances[id]) {
        console.log("\t" + k + ": " + AST.anim.instances[id][k]);
    }

    console.log("\n");
};

//************************************//



// Animated gradient background-image of an element
AST.anim.animateGradient = function(elm, startingAngle, frameRate, backgroundColor, foregroundColor) {

    var anim = {
        ang : startingAngle,
        fps : 1000 / frameRate
    };

    anim.func = function() {
        anim.ang = (anim.ang + 0.1) % 360;

        $(elm).css(
            {'background-image' : "linear-gradient("+ anim.ang +"deg, "+ backgroundColor +", "+ foregroundColor +")"}
        );

        // rgb(25,45,200)
        // rgb(225,50,220)

    };

    // Run animation function then register function according to its framerate
    anim.func();
    anim.timerNum = setInterval(anim.func, anim.fps);   // TODO: Make AST.timer and use that instead

    // Register animation object to the instances list
    AST.anim.registerAnim('headerImage', anim);
};
