var todos = Alloy.Collections.todo;

/****** PHOTO GALLERY EVENTS START *******/
var dialog = Titanium.UI.createOptionDialog({
	options : ['Take Photo or Video', 'Choose Existing', 'Cancel'],
	cancel : 2
});

function showCam() {
	Titanium.Media.showCamera({
		success : function(event) {
			// called when media returned from the camera
			if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
				var imageView = Ti.UI.createImageView({
					width : win.width,
					height : win.height,
					image : event.media
				});
				win.add(imageView);
			} else {
				alert("got the wrong type back =" + event.mediaType);
			}
		},
		cancel : function() {
			// called when user cancels taking a picture
		},
		error : function(error) {
			// called when there's an error
			var a = Titanium.UI.createAlertDialog({
				title : 'Camera'
			});
			if (error.code == Titanium.Media.NO_CAMERA) {
				a.setMessage('Please run this test on device');
			} else {
				a.setMessage('Unexpected error: ' + error.code);
			}
			a.show();
		},
		saveToPhotoGallery : false,
		// allowEditing and mediaTypes are iOS-only settings
		allowEditing : true,
		mediaTypes : [Ti.Media.MEDIA_TYPE_VIDEO, Ti.Media.MEDIA_TYPE_PHOTO]
	});
}

function showGal() {
	Titanium.Media.openPhotoGallery({
		success : function(event) {
			// called when media returned from the camera
			if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
				$.contactpic.image = event.media;
			} else {
				alert("got the wrong type back =" + event.mediaType);
			}
		},
		cancel : function() {
			// called when user cancels taking a picture
		},
		error : function(error) {
			// called when there's an error
			var a = Titanium.UI.createAlertDialog({
				title : 'Camera'
			});
			if (error.code == Titanium.Media.NO_CAMERA) {
				a.setMessage('Please run this test on device');
			} else {
				a.setMessage('Unexpected error: ' + error.code);
			}
			a.show();
		},
		saveToPhotoGallery : false,
		// allowEditing and mediaTypes are iOS-only settings
		allowEditing : true,
		mediaTypes : [Ti.Media.MEDIA_TYPE_VIDEO, Ti.Media.MEDIA_TYPE_PHOTO]
	});
}

dialog.addEventListener('click', function(e) {
	if (e.index == 0) {
		showCam();
	} else if (e.index == 1) {
		showGal();
	}
});

/****** PHOTO GALLERY EVENTS END *******/

function addItem() {
	var task = Alloy.Collections.todo.insertRecord({
		query : {
			columns : ["user_id", "item", "date_completed", "done"],
			value : [Alloy.Collections.todo.guid(), $.itemField.value, $.doneField.value, $.emailField.value]
		}
	});
	todos.fetch();
	closeWindow();
}

function closeWindow() {
	$.addWin.close();
}

function chooseLibrary() {
	dialog.show();
}
