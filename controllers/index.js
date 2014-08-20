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
				aiCode2: userObj.team,
				opponentId: userObj._id
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
	},

	gameOver: function(req, res){
		if(req.body.winner === 'currentUser'){
			req.user.wins +=1;
			req.user.save();
			User.findOne({_id: req.body.loser}, function(err, userObj){
				if(err){
					console.log('can not find losser in db to update')
				}
				else{
					userObj.losses += 1;
					userObj.save();
				}
			})
		}
		else{
			req.user.losses +=1;
			req.user.save();
			User.findOne({_id: req.body.loser}, function(err, userObj){
				if(err){
					console.log('can not find losser in db to update')
				}
				else{
					userObj.wins += 1;
					userObj.save();
				}
			})
		}
	}
};

module.exports = indexController;