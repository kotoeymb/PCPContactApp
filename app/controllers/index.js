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

function addToDoItem() {
	var add = Alloy.createController("add", {}).getView();
	$.navGroupWin.openWindow(add);
}

function show(event) {
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

function tomenu() {
	var menu = Alloy.createController("menu", {}).getView();
	$.navGroupWin.openWindow(menu);
}

