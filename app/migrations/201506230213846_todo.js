var preload_data = [
	{user_id: '3DA12CE6-3150D2AE', item: 'Gabriel Westin', date_completed:'+95 9 2150 4616', done:0},
	{user_id: '4DA12CE6-3150D2AE', item: 'John Ache', date_completed:'+95 9 2150 4616', done:0},
	{user_id: '5DA12CE6-3150D2AE', item: 'Michael Black', date_completed:'+95 9 2150 4616', done:1}
];
migration.up = function(db) {
	db.createTable({
		"columns": {
		"item":"text",
			"done":"integer",
			"date_completed" :"text",
			"user_id" :"text",
		}
	});
	for(var i = 0; i < preload_data.length; i++) {
		db.insertRow(preload_data[i]);
	}
};

migration.down = function(db) {
	db.dropTable();
};