$("#HUD").hide();
GameSpace.updateState('aiPvp');
GameSpace.preInitialize();

var coordinates = GameSpace.getTeamSpace();
// console.log("coordinates:", coordinates);
GameSpace.team1 = new Team(coordinates[0], coordinates[1], 'team1');
GameSpace.putTeamOnMap(GameSpace.team1, 'team1');