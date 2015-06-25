function addItem() {
	var todos = Alloy.Collections.todo;
	var task = Alloy.Collections.todo.insertRecord({
		query : {
			columns : ["user_id", "item", "date_completed", "done"],
			value : [Alloy.Collections.todo.guid(), $.itemField.value, $.doneField.value, $.emailField.value]
		}
	});

	todos.add(task);

	todos.fetch();

	closeWindow();
}

function closeWindow() {
	$.addWin.close();
}