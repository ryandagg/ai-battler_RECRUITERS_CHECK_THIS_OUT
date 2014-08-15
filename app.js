var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
app.get('/random-battle', indexController.randomBattle);
// app.get('/ranodom-battle', indexController.battle);
app.get('/solo', indexController.solo);
app.get('/create-team', indexController.createTeam);

var port = Number(process.env.PORT || 5000);
var server = app.listen(port, function() {
	console.log('Express server listening on port ' + server.address().port);
});

