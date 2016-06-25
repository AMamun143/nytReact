var express = require('express');
var request = require('request');
var router = express.Router();
var savedArticles = require('../models/dbSchema');

router.get('/', function(req, res, next) {
	res.render('index');
});

router.get('/getData', function(req, res, next) {
	savedArticles.find({}).then(function(articles){
			res.send(articles)
		})
})

router.post('/addData/:title/:date/:url*', function(req, res, next) {
	console.log('heereee')
	savedArticles.create({
		headline: req.params.title,
		published: req.params.date,
		url: req.params.url
	}, function(err) {
		res.end();
	})
})

router.post('/deleteData/:id', function(req, res, next){
	savedArticles.remove({_id: req.params.id}, function(err) {
		if (err) {
			console.log(err)
		}
		res.end();
	})
})
module.exports = router;