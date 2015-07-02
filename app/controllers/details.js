var args = arguments[0] || {};
$.titlelabel.value = args.item || 'Default name';
$.phonelabel.value = args.phone || 'Default phone';
$.emaillabel.value = args.email || 'Default email';

// to track image was changed or not, default is false 0
$.hidden.value = 0;

// get file
var appResoDir = Ti.Filesystem.applicationDataDirectory;
// get image name
var appImageFile = args.user_id + '.png';
// get image file in resource folder
var appImage = Ti.Filesystem.getFile(appResoDir + appImageFile);
// if file exists, push the url to contactpic image
$.contactpic.image = appImage.exists() ? appImage : 'images/Unknown-7.png';

function updateItem() {
	var todo = Alloy.Collections.todo;

	if ($.hidden.value == 1) {
		// get the file of the selected image from application data directory
		var fp = Ti.Filesystem.getFile(appResoDir, appImageFile);
		// save the file to application data directory
		fp.write($.contactpic.image);
	}

	Alloy.Collections.todo.updateRecord({
		query : {
			columns : ["item", "phone", "email"],
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
					$.hidden.value = 1;
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
