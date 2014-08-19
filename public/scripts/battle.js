// stops onReady from getting called twice. See long comment below.
var count = 0;
$(document).on('ready', function() {
	count++;
	if(count < 2){
		// console.log("count:", count);
		coordinates = GameSpace.getTeamSpace();
		// console.log("coordinates:", coordinates);
		GameSpace.team2 = new Team(coordinates[0], coordinates[1], 'team2');
		GameSpace.putTeamOnMap(GameSpace.team2, 'team2');
		// GameSpace.initialize();
		// there is some strange bug where an error occuring after intitialize is called will call jQuery onReady twice. Not sure if it's in jQuery or my code. This stops the infinite loop that occurs after this bug.
		// console.log("called once?:")
		// console.log("GameSpace.STATE1:", GameSpace.STATE)
		try {
			GameSpace.finalInitialize();
		}
		catch(err) {
			console.log("initialize failed");
			setTimeout(function() {
				throw err;
			},100)
		};
		// console.log("GameSpace.STATE2:", GameSpace.STATE);

		// keyboard handler
		$(document).keypress(function(e) {
			// console.log(e.charCode);
			GameSpace.rogue.keyHandler(e.charCode);
		});

		// click handler to inspect elements on map
		// delegation on this IS NOT WORKING and no one knows why
		$(document).on("click", ".tile", function() {
			// console.log("tile click firing");
			GameSpace.clickText($(this).attr("id"));
			// console.log("clickText firing");
		});

		$(document).on("click", ".close-popup", function() {
			$(".text-popup").remove();
		});

		// change tile & text on ready
		GameSpace.resizeTiles(0.90);
		GameSpace.resizeFont(0.90);

		// change map size on resize
		$(window).resize(function() {
			GameSpace.resizeTiles(0.90);
			GameSpace.resizeFont(0.90);
		});
	}
});
