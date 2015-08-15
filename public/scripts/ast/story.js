console.log("Loaded: story.js");

AST.story = {
	stories   : []
};

// Story Class
//	Object private fields should be utilised in tandom with its elm field to render a fully working story
AST.story.Story = function(path, title, icon, audio) {
	var obj = {
		_title : title,
		_icon  : icon,
		_audio : audio
	};

	obj.elm = document.createElement('div');
	obj.elm.id     	  = "story/" + path;		// Element id for CSS
	obj.elm.className = "story";				// Element class for CSS
	document.getElementById('stories-container').appendChild(obj.elm);

	// Append data to base element (div)
	obj.elm.appendChild(obj._title);
	obj.elm.appendChild(obj._icon);


	obj.elm.appendChild(obj._audio);
	new AST.story.Controller(obj._audio);

	console.log("[AST/Story]> Story generated: " + path);

	return obj;
};


// Controls Class
AST.story.Controller = function(audioElm) {

	// Container
	var container = document.createElement('div');
	container.className = "story-audio-controller";


	// Play Button
	var playButton = document.createElement('button');
	playButton.innerHTML = "x";

	playButton.onclick = function() {
		if (audioElm.paused) {
			audioElm.play();
			// Set icon to pause

		} else {
			audioElm.pause();
			// Set icon to play

		}
	};


	// Volume Slider
	var volumeSlider = document.createElement('input');
	volumeSlider.setAttribute("type", "range");
	volumeSlider.step   = 0.01;
	volumeSlider.min 	= 0;
	volumeSlider.max 	= 1;
	volumeSlider.value 	= 1;

	volumeSlider.oninput = function() { audioElm.volume = volumeSlider.value };
	volumeSlider.onchange = function() { audioElm.volume = volumeSlider.value };



	// Register elements
	container.appendChild(playButton);
	container.appendChild(volumeSlider);

	audioElm.parentElement.appendChild(container);
};



AST.story.retrieveStoryPaths = function() {		// Append .done( function(x) { ... } ); on call to preserve async
	return $.ajax({
		url  	: '/api/receiveStoryPaths/',
		type 	: 'GET'
	});
};



AST.story.generateStoryData = function(path) {
	var storyPath = "data/stories/" + path + "/";
	var obj = {};


	// TODO: Turn info.txt JSON to array and get title from there

	// Title --------
	obj.title = document.createTextNode("TEST TITLE");

	obj.title.id 	    = path + "-title";
	obj.title.className	= "story-title";



	// Icon --------
	obj.icon  	  = document.createElement('img');
	obj.icon.src  = storyPath + "icon.png";

	obj.icon.id		= path + "-icon";
	obj.icon.className = "story-icon";



	// Audio --------
	obj.audio = document.createElement('audio');

	obj.audio.src 	    = storyPath + "audio.mp3";
	obj.audio.autoplay  = false;
	obj.audio.preload   = 'none';

	obj.audio.id 	    = path + "-audio";
	obj.audio.className = "story-audio";



	return obj;
};



AST.story.generateStoryObjects = function() {

	AST.story.retrieveStoryPaths().done(function(paths) {
		for (var i = 0; i < paths.length; i++) {

			var path = paths[i];
			var data = AST.story.generateStoryData(path);

			AST.story.stories[i] = new AST.story.Story(path, data.title, data.icon, data.audio);
		}

	});

};
