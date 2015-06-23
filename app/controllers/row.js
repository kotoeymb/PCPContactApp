

var todo = Alloy.Collections.todo;
function deleteTask(event) {
	var s = event.source;
	Alloy.Collections.todo.deleteRecord({
		query: {
			sql: "WHERE user_id=?",
			params: s.user_id
		}
	});
	
	alert("Users deleted");
	todo.fetch();
}