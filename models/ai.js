var Warrior = new Character(1, 1);

Warrior.prototype.turn = function(){
	this.move(1, 0);
}