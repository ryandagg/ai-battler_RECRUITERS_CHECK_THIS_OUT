Character.prototype.move = function(x, y) {
	// only takes x & y values between -1 to 1.
	this.directionalMovementHandler(x, y);
}