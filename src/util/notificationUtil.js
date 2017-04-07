function publishNoti(type, message) {
	Messenger().post({
  	id: message,
  	showCloseButton: true,
  	type: type,
  	singleton: false,
  	hideAfter: 6,
  	message: message,
  });
}

module.exports = {
	publishNoti,
};