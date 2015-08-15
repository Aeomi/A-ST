console.log("Loaded: main.js");

$(function() {

	AST.startup.checkIE();
	AST.startup.checkJQuery();


	//AST.anim.animateGradient("#page-header", 120, 30, 'rgb(89, 103, 217)', 'rgb(235, 126, 231)');

	AST.story.generateStoryObjects();


});
