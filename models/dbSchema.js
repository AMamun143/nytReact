var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dbSchema = new Schema({
	headline: {
		type: String,
		trim: true,
		required: 'headline is Required'
	},
	published: {
		type: String,
		trim: true,
		required: 'published date is Required'
	},
	url: {
		type: String,
		trim: true,
		required: 'url is Required'
	}
})

var NYT = mongoose.model('articles', dbSchema);
module.exports = NYT;