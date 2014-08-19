$(document).on('ready', function() {
	// GameSpace.STATE = 'solo'
	// there is some strange bug where an error occuring after intitialize is called will call initilize twice. Not sure if it's in jQuery or my code. This stops the infinite loop that occurs after this bug.
	try {
		GameSpace.preInitialize();
		GameSpace.finalInitialize();
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
	GameSpace.resizeTiles(.75);
	GameSpace.resizeFont(.75);

	// change map size on resize
	$(window).resize(function() {
		GameSpace.resizeTiles(.75);
		GameSpace.resizeFont(.75);
	});
});