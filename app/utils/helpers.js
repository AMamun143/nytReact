/*Axios is a convenient NPM package for performing HTTP requests*/
var axios = require('axios');
var moment = require('moment');
// var mongoose = require('mongoose');

function buildURL(body){
	var today = moment().format('YYYYMMDD')
	if (!body.s) {
		body.s = '20000101'
	} else {
		body.s = moment(body.s).format('YYYYMMDD');
	}
	if (!body.e) {
		body.e = moment().format('YYYYMMDD')
	} else if (body.e > today) {
		body.e = today
	} else {
		body.e = moment(body.e).format('YYYYMMDD');
	}

	return 'http://developer.nytimes.com/proxy/https/api.nytimes.com/svc/search/v2/articlesearch.json?api-key=a6585d19c1744f52b9ccdfab9ced0521&q='+body.q+'&begin_date='+body.s+'&end_date='+body.e;
}

var helpers = {
	getInfo: function(body){
		var urlQuery = buildURL(body);
		return axios.get(urlQuery).then(function(res){
			return res.data.response.docs.map(function(doc){
				return {
					_id			: Math.random(),
					headline	: doc.headline.main,
					published	: doc.pub_date,
					url			: doc.web_url
				}
			});			
		})
	},
	getData: function(body){
		return axios.get('/getData').then(function(res){
			return res;
		})
	},
	addData: function(title, date, url){
		url = encodeURIComponent(url)
		var dataUrl = '/addData/' + title +'/' + date +'/' + url;
		return axios.post(dataUrl).then(function(res){
			console.log(title)
			return res;
		})
	},
	deleteData: function(id){
		var urlQuery = 'deleteData/' + id;
		return axios.post(urlQuery).then(function(res){
			return res
		})
	}
};

module.exports = helpers;