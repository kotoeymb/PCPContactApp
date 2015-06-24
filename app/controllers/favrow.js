/*var todos = Alloy.Collections.todo;

if ($model) {
	id = $model.id;
	if ($model.get('done') == 1) {
		$.fav.image = '/images/fav.png';
	} else {
		$.fav.image = '/images/fav_no.png';
	}
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
*/