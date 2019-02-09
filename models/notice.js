var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var noticeSchema = new Schema
({
	category : String,
	author : String,
	timestamp : String,
	imagelink : String
});

module.exports = mongoose.model('notice', noticeSchema);