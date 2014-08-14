$(document).on('ready', function() {
	GameSpace.updateState('aiPvp');
	// there is some strange bug where an error occuring after intitialize is called will call initilize twice. Not sure if it's in jQuery or my code. This stops the infinite loop that occurs after this bug.
	console.log("GameSpace.STATE:", GameSpace.STATE)
	try {
		GameSpace.initialize();
	}
	catch(err) {
		console.log("initialize failed");
		setTimeout(function() {
			throw err;
		},100) 
	}

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
	})

	// change tile & text on ready
	GameSpace.resizeTiles();
	GameSpace.resizeFont();

	// change map size on resize
	$(window).resize(function() {
		GameSpace.resizeTiles();
		GameSpace.resizeFont();
	});
});