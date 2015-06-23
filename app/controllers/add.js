function addItem() {
	var todos = Alloy.Collections.todo;
	var task = Alloy.Collections.todo.insertRecord({
		query : {
			columns : ["user_id", "item", "date_completed", "done"],
			value : [Alloy.Collections.todo.guid(), $.itemField.value, $.doneField.value, $.emailField.value]
		}
	});

	// Create a new model for the todo collection
	/*  var task = Alloy.createModel('todo', {
	item        : $.itemField.value,
	date_completed : $.doneField.value
	});
	*/
	// add new model to the global collection
	todos.add(task);

	// save the model to persistent storage
	// task.save();

	// reload the tasks
	todos.fetch();

	closeWindow();
}

/*
 function focusTextField() {
 $.itemField.focus();
 // $.doneField.focus();
 }
 */
/*
 function closeKeyboard(e) {
 e.source.blur();
 }
 */

function closeWindow() {
	$.addWin.close();
}