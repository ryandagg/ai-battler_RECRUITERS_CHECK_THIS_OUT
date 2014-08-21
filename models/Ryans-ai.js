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
    if(rogue.checkHealthPercent('enemy', 'priest')){
    	rogue.moveTo('enemy', 'priest');
    }
    else if(rogue.checkHealthPercent('enemy', 'warrior')){
    	rogue.moveTo('enemy', 'warrior');
    }
    else if(rogue.checkHealthPercent('enemy', 'rogue')){
    	rogue.moveTo('enemy', 'rogue');
    }
     if(rogue.checkHealthPercent('enemy', 'priest')){
    	rogue.moveTo('enemy', 'priest');
    }
    else if(rogue.checkHealthPercent('enemy', 'warrior')){
    	rogue.moveTo('enemy', 'warrior');
    }
    else if(rogue.checkHealthPercent('enemy', 'rogue')){
    	rogue.moveTo('enemy', 'rogue');
    }
};

Team.prototype.turnPriest = function(map, priest) {
	if(priest.checkHealthPercent('mine', 'priest') < 0.66){
		priest.heal([0, 0]);
	}
	else if(priest.checkHealthPercent('mine','warrior') < 0.66){
		// console.log("priest.checkHealthPercent('mine','warrior'):", priest.checkHealthPercent('mine','warrior'))
		var isNextTo = priest.nextTo('mine', 'warrior');
		if(!isNextTo){
			console.log("isNextTo:", isNextTo);

			// console.log("priest.moveTo('mine', 'warrior')")
    		priest.moveTo('mine', 'warrior');
		}
		else{
			priest.heal(isNextTo);
		}
	}
	else{
		if(priest.checkHealthPercent('enemy', 'priest')){
			// console.log("priest.moveTo('enemy', 'priest')")
    		priest.moveTo('enemy', 'priest');
	    }
	    else if(priest.checkHealthPercent('enemy', 'warrior')){
			// console.log("priest.moveTo('enemy', 'warrior')")
	    	priest.moveTo('enemy', 'warrior');
	    }
	    else if(priest.checkHealthPercent('enemy', 'rogue')){
			// console.log("priest.moveTo('enemy', 'rogue')")
	    	priest.moveTo('enemy', 'rogue');
	    }
	}
};

Team.prototype.turnWarrior = function(map, warrior) {
    if(warrior.checkHealthPercent('enemy', 'priest')){
    	warrior.moveTo('enemy', 'priest');
    }
    else if(warrior.checkHealthPercent('enemy', 'warrior')){
    	warrior.moveTo('enemy', 'warrior');
    }
    else if(warrior.checkHealthPercent('enemy', 'rogue')){
    	warrior.moveTo('enemy', 'rogue');
    }
};