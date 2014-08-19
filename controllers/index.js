var fs = require('fs');
var mongoose = require('mongoose');
var User = require('../models/user');

var indexController = {
	index: function(req, res) {
		res.render('index');
	},

	randomBattle: function(req, res) {
		User.findOne({username: 'joe'}, function(err, userObj){
			// console.log("userObj[0].team:", userObj[0].team)
			res.render('random-battle', {
				aiCode1: req.user.team,
				aiCode2: userObj.team
			});
		})
	},

	solo: function(req, res) {
		res.render('solo');
	},

	createTeam: function(req, res) {
		res.render('create-team', {
			file: req.user.team
		});
	},

	saveTeam: function(req, res){
		// console.log("req.user.team:", req.user.team);
		req.user.team = req.body.team;
		req.user.save()
	}
};

module.exports = indexController;