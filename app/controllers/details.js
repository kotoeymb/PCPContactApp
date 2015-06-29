var args = arguments[0] || {};
$.titlelabel.value = args.item || 'Default name';
$.phonelabel.value = args.date_completed || 'Default phone';
$.emaillabel.value = args.done || 'Default author';

// get file
var appImage = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory + args.ppic);
$.contactpic.image = appImage.exists() ? appImage : '/images/profile/Unknown-7';

function addItem() {

	var todo = Alloy.Collections.todo;
	Alloy.Collections.todo.updateRecord({
		query : {
			columns : ["item", "date_completed", "done"],
			values : [$.titlelabel.value, $.phonelabel.value, $.emaillabel.value],
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

$.contactpic.addEventListener("click", function() {

	var opts = {
		cancel : 2,
		options : ['Take a Photo', 'Select from Gallery', 'Cancel'],
		selectedIndex : 2,
		destructive : 0,
		title : 'Set a Profile Photo:'
	};

	var dialog = Ti.UI.createOptionDialog(opts);
	dialog.show();

	dialog.addEventListener("click", function(e) {
		switch(e.index) {

		case(0):
			Titanium.Media.showCamera({
				allowEditing : true,
				success : function(event) {
					$.contactpic.status = "new";
					$.contactpic.image = event.media;
				},

				error : function(event) {
					console.log(event);
				}
			});

		case(1):
			Titanium.Media.openPhotoGallery({
				allowEditing : true,
				success : function(event) {
					// application data direcotry
					var app_data_dir = Ti.Filesystem.applicationDataDirectory;
					// create name of the image from user_id so that the name of the image and user_id is connected
					var image_name = args.user_id + '.png';
					// get the file of the selected image from application data directory
					var fp = Ti.Filesystem.getFile(app_data_dir, image_name);
					// save the file to application data directory
					fp.write(event.media);
					
					// update the record
					Alloy.Collections.todo.updateRecord({
						query : {
							columns : ["ppic"],
							values : [image_name],
							whereKey : ["user_id"],
							whereValue : [args.user_id]
						}
					});

					$.contactpic.status = "new";
					$.contactpic.image = event.media;
				},

				error : function(event) {
					console.log(event);
				}
			});

		}
	});
});
