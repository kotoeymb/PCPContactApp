var todos = Alloy.Collections.todo;

if ($model) {
	id = $model.id;
	if ($model.get('done') == 1) {
		$.fav.image = '/images/contactimages/fav.jpg';
	} else {
		$.fav.image = '/images/contactimages/favo.png';
	}
}

function toggleFav(e) {
	var s = e.source;
	alert("Do u want to add?");
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

var todo = Alloy.Collections.todo;
function deleteTask(event) {
	var s = event.source;
	Alloy.Collections.todo.deleteRecord({
		query : {
			sql : "WHERE user_id=?",
			params : s.user_id
		}
	});

	alert("Do u want to delete?");
	todo.fetch();
}