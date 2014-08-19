// AI Battle Tactics can only understand your robot
// if its class is called 'Team'
var Team = function(x, y, name) {
	// Do NOT modify the next 2 lines as they are needed for the game to run correctly.
	this.name = name;
	GameSpace.Squad.call(this, x, y);

	// The order in this array determines the order that you characters move for the match.
    this.turnOrder = ['warrior', 'rogue', 'priest'];
};

// Do NOT modify the next 2 lines as they are needed for the game to run correctly.
Team.prototype = new GameSpace.Squad();
Team.prototype.constructor = Team;


Team.prototype.turnRogue = function(map, rogue) {
	// .move takes coordinates x, y and moves the character. Remember that the top of the map is y = 0 and it gets higher as you move down.
	// You can only move a character by 1 square at a time. If you put in a number out side of [-1, 1] it will still only move 1 square. It only accepts integers. "Moving" on to an enemy atacks them. Same with your own team...

	// Move the character to the right by 1 square.
    rogue.move(1, 0);
};

Team.prototype.turnPriest = function(map, priest) {
    priest.move(1, 0);

};

Team.prototype.turnWarrior = function(map, warrior) {
    warrior.moveTo('priest');
};