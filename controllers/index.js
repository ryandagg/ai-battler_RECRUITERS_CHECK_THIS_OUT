var indexController = {
	index: function(req, res) {
		res.render('index');
	},

	randomBattle: function(req, res) {
		res.render('random-battle');
	},

	solo: function(req, res) {
		res.render('solo');
	}
};

module.exports = indexController;