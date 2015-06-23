var args = arguments[0] || {};
// console.log("title:" + args.title + ", author: " + args.author);
$.useridlabel.value = args.user_id || 'Default userid';
$.titlelabel.value = args.item || 'Default name';
$.phonelabel.value = args.date_completed || 'Default phone';
//$.authorLabel.text = args.author || 'Default author';

function addItem() {
	//alert($.phonelabel.value);
	var todo=Alloy.Collections.todo;
	 Alloy.Collections.todo.updateRecord({
		 query : {
			columns : ["item", "date_completed"],
			values : [$.titlelabel.value,$.phonelabel.value],
			 whereKey : ["user_id"],
			 whereValue : [args.user_id]
		 }
	 });
	 todo.fetch();
	closeWindow();
	
}

function closeWindow() {
	$.detailWin.close();
}