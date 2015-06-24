//var args = arguments[0] || {};
function toback() {
	$.menu.close();
}

// open the "add item" window
/*
function favList(e) {
	var sec = $.listview.sections[e.sectionIndex];
	var mnu = sec.getItemAt(e.itemIndex);
	
	if(mnu.properties.title == "Favourites") {
		Alloy.createController("favourite", {}).getView().open();
	}
	//Alloy.createController("favourite", {}).getView().open();

}*/

$.BackButton.addEventListener('click', 
    function(e) {
        
        var index = Alloy.createController('index').getView();
        
        index.open({
            transition : Ti.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT
        });
        
    }
);