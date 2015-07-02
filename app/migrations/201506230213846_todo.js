var preload_data = [
	{user_id: '3DA12CE6-3150D2AE', item: 'Gabriel Westin', phone:'+95 9 2150 4616', email:'gw@mail.com', done:0},
	{user_id: '4DA12CE6-3150D2AE', item: 'John Ache', phone:'+95 9 2150 4616', email:'ja@mail.com', done:0},
	{user_id: '5DA12CE6-3150D2AE', item: 'Michael Black', phone:'+95 9 2150 4616', email:'mb@mail.com', done:0},
	{user_id: '9DA12CE6-3150D2AE', item: 'Janny Sinn', phone:'+95 9 2150 4616', email:'js@gmail.com', done:0},
	{user_id: '6DA12CE6-3150D2AE', item: 'Modal Brick', phone:'+95 9 2150 4616', email:'mb@yahoo.com', done:1},
	{user_id: '7DA12CE6-3150D2AE', item: 'Sick Santher', phone:'+95 9 2150 4616', email:'ss@hotmail.com', done:1},
	{user_id: '8DA12CE6-3150D2AE', item: 'Black Panther', phone:'+95 9 2150 4616', email:'bp@blackmail.com', done:1}
];
migration.up = function(db) {
	db.createTable({
		"columns": {
			"item":"text",
			"done":"integer",
			"phone" :"text",
			"user_id" :"text",
			"email" : "text",
			"ppic" : "text"
		}
	});
	for(var i = 0; i < preload_data.length; i++) {
		db.insertRow(preload_data[i]);
	}
};

migration.down = function(db) {
	db.dropTable();
};