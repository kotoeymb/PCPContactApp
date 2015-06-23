var todos = Alloy.Collections.todo;
 todos.fetch();
var INDEXES = {
	'All': 0,
	'Active': 1,
	'Done': 2
};
var whereIndex = INDEXES['All'];


$.todoWin.open();


 todos.fetch();

// open the "add item" window
function addToDoItem() {
Alloy.createController("add",{}).getView().open();
	
}

// Show task list based on selected status type
function showTasks(e) {
	if (typeof e.index !== 'undefined' && e.index !== null) {
		whereIndex = e.index; // TabbedBar
	} else {
		whereIndex = INDEXES[e.source.title]; // Android menu
	}
	todos.fetch();
}

// Open bookdetails Window
function show(event) {// to show bookdetails lists
	var selectedBook = event.source;
	var args = {
     	user_id: selectedBook.user_id,
      item : selectedBook.text,
	  date_completed: selectedBook.ph
	};
	var bookview = Alloy.createController("details", args).getView();
			$.navGroupWin.openWindow(bookview);
}
			
		
    if (OS_IOS) {
        $.navGroupWin.open();
        	
    }
    if (OS_ANDROID) {
        bookview.open();
    }


function tomenu() {
Alloy.createController("menu",{}).getView().open();
	
}


