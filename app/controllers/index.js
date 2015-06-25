var todos = Alloy.Collections.todo;
todos.fetch();

if (OS_IOS) {
	$.navGroupWin.open();
}
if (OS_ANDROID) {
	$.index.open();
}
//$.todoWin.open();

todos.fetch();

// open the "add item" window
function addToDoItem() {
	var add = Alloy.createController("add", {}).getView();
	$.navGroupWin.openWindow(add);
}

// Show task list based on selected status type
// Open bookdetails Window
function show(event) {// to show bookdetails lists
	var selectedBook = event.source;
	var args = {
		user_id : selectedBook.user_id,
		item : selectedBook.text,
		date_completed : selectedBook.ph,
		done : selectedBook.email
	};
	var bookview = Alloy.createController("details", args).getView();
	$.navGroupWin.openWindow(bookview);
}

if (OS_IOS) {
	$.navGroupWin.open();

}
if (OS_ANDROID) {
	bookview.open();
}

function toFav() {
	var toFav = Alloy.createController("favourite", {}).getView();
	$.navGroupWin.openWindow(toFav);
}