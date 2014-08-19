var fs = require('fs');
var mongoose = require('mongoose');
var User = require('../models/user');

var indexController = {
	index: function(req, res) {
		res.render('index');
	},

	randomBattle: function(req, res) {
		User.find({username: 'joe'}, function(err, user){
			res.render('random-battle', {
				aiCode1: req.user.team,
				aiCode2: user.team
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