var todos = Alloy.Collections.todo;

function addToDoItem() {
	var add = Alloy.createController("add", {}).getView();
	$.navGroupWin.openWindow(add);
}

function toFav() {
	var toFav = Alloy.createController("favourite", {}).getView();
	$.navGroupWin.openWindow(toFav);
}

function toggleFav(e) {
	var s = e.source;
	Alloy.Collections.todo.updateRecord({
		query : {
			columns : ["done"],
			values : [s.done == 1 ? 0 : 1],
			whereKey : ["user_id"],
			whereValue : [s.user_id]
		}
	});
	todos.fetch();
}

function show(event) {
	var selectedBook = event.source;
	var args = {
		user_id : selectedBook.user_id,
		item : selectedBook.text,
		phone : selectedBook.phone,
		done : selectedBook.done,
		email : selectedBook.email
	};
	var bookview = Alloy.createController("details", args).getView();
	$.navGroupWin.openWindow(bookview);
}

if (OS_IOS) {
	$.navGroupWin.open();
}
if (OS_ANDROID) {
	$.index.open();
}

todos.fetch();

