$("#HUD").hide();
GameSpace.updateState('aiPvp');
GameSpace.preInitialize();

var coordinates = GameSpace.getTeamSpace();
console.log("coordinates:", coordinates);
// GameSpace.team1 = GameSpace.createTeam();