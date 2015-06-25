var todos = Alloy.Collections.todo;

var INDEXES = {
	'NotFav': 0,
	'YesFav': 1,
};
var whereIndex = INDEXES['YesFav'];

function whereFunction(collection) {
	return !whereIndex ?
		collection.models :
		collection.where({ done: whereIndex });
}

function toggleFav(e) {
	var s = e.source;
	Alloy.Collections.todo.updateRecord({
		query : {
			columns : ["done"],
			values : [s.done == 1? 0 : 1],
			whereKey : ["user_id"],
			whereValue : [s.user_id]
		}
	});
	todos.fetch();
}

todos && todos.fetch();

