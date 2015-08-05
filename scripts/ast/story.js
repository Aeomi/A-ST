
AST.stories = {};

AST.stories.Story = {};
AST.stories.Story = function(title, icon, audio) {
    var obj = {
        _title : title,
        _icon  : icon,
        _audio : audio
    };

    obj.elm = document.createElement('div');
    obj.elm.id        = "story/" + title;
    obj.elm.className = "story";

    return obj;
}
