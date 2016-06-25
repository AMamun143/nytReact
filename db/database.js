var savedArticles = require('../models/dbSchema');

 obj = {
	getit: function() {
		savedArticles.find({}).then(function(articles){
			console.log(articles)
		})
	}
}

module.exports = obj;