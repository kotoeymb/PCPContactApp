var args = arguments[0] || {};
// console.log("title:" + args.title + ", author: " + args.author);
$.titleLabel.text = args.item ||'Default Name';
//$.phonelabel.text = args.done || 'Default phone';
//$.authorLabel.text = args.author || 'Default author';

$.buttonbar.addEventListener('click', 
    function(e) {
        
        var edit = Alloy.createController('edit').getView();
        
        edit.open({
            transition : Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
        });
});