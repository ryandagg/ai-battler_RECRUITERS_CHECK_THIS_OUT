$("#game-window").css({
	'float': 'none',
	'margin-top': "1%"
})
$("#HUD").hide();
GameSpace.updateState('aiPvp');
GameSpace.preInitialize();

var coordinates = GameSpace.getTeamSpace();
// console.log("coordinates:", coordinates);
team = new Team(coordinates[0], coordinates[1], 'team1')
GameSpace.updateTeam(1, team);
GameSpace.putTeamOnMap(team, 'team1');