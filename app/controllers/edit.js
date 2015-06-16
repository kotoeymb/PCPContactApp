
var args = arguments[0] || {};
// console.log("title:" + args.title + ", author: " + args.author);
$.titleLabel.text = args.item  ||'Default name';
$.phonelabel.text = args.date_completed || 'Default phone';