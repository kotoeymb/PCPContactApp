var todos = Alloy.Collections.todo;
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
		done : selectedBook.email,
		ppic : selectedBook.ppic
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

if (OS_IOS) {
	$.navGroupWin.open();
}
if (OS_ANDROID) {
	$.index.open();
}

