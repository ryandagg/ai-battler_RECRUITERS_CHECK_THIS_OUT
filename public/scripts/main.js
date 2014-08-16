// Initialize with your OAuth.io app public key
OAuth.initialize('d3c43480c2169b5764bc');

$('#log-in').on("click", function(e){
	e.preventDefault();
	OAuth.popup('github', function(error, success){
  	console.log("success:", success)
	});
})
