var todos = Alloy.Collections.todo;
todos.fetch();

$.backButton.addEventListener('click', 
    function(e) {
        
        var index = Alloy.createController('index').getView();
        
        index.open({
            transition : Ti.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT
        });
        
    }
);