var fs = require('fs');
var mongoose = require('mongoose');
var User = require('../models/user');

var indexController = {
	index: function(req, res) {
		res.render('index');
	},

	randomBattle: function(req, res) {
		res.render('random-battle');
	},

	solo: function(req, res) {
		res.render('solo');
	},

	createTeam: function(req, res) {
		fs.readFile('models/ai.js', 'utf-8', function(err, theFile){
			// console.log("err:", err);
			if(err){
				console.log('readfile failed index.js');
			}
			else{
				console.log("theFile:", theFile);
				res.render('create-team', {
					file: theFile
				});
			}
		})
	},

	saveTeam: function(req, res){
		console.log("req.user.team:", req.user.team);
		req.user.team = req.body.team;
		req.user.save();
	}
};

module.exports = indexController;