var args = arguments[0] || {};
function toback() {
	$.menu.close();
}

// open the "add item" window
function favList(e) {
	var sec = $.listview.sections[e.sectionIndex];
	var mnu = sec.getItemAt(e.itemIndex);
	
	if(mnu.properties.title == "Favourites") {
		Alloy.createController("favourite", {}).getView().open();
	}
	//Alloy.createController("favourite", {}).getView().open();

}