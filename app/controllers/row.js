var todos = Alloy.Collections.todo;

if ($model) {
	id = $model.id;
	if ($model.get('done') == 1) {
		$.fav.image = '/images/y_fav.png';
	} else {
		$.fav.image = '/images/n_fav.png';
	}
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

function deleteTask(event) {
	var s = event.source;
	Alloy.Collections.todo.deleteRecord({
		query : {
			sql : "WHERE user_id=?",
			params : s.user_id
		}
	});

	alert("Do u want to delete?");
	todos.fetch();
}

function deleteRecord(e) {
	var opts = {
		cancel : 1,
		options : ['Are you sure?', 'Cancel'],
		selectedIndex : 1,
		destructive : 0,
		title : 'Delete'
	};

	var dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();
	
	dialog.addEventListener('click', function(i) {
		switch(i.index) {
			case (0):
				deleteTask(e);
		}
	});
}