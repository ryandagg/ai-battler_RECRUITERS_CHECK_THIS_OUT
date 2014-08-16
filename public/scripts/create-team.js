// var baseAI = JSON.stringify(function(){});
// console.log("baseAI:", baseAI)
// var baseAI = "{a: 1}\nstuff";
// var baseAI = JSON.stringify(CodeMirror);

var editor = CodeMirror(document.getElementById('text-editor'), {
	lineNumbers: true,
	value: AIFILE,
	// value: JSON.parse(baseAI),
	indentUnit: 4,
	lineWrapping: true,
	mode: 'javascript'
});

var code = editor.getValue();
console.log("code:", code);

$(document).on("ready", function(){
	$(document).on("click", '#code-save-btn', function(e){
		e.preventDefault();
		// get the value of the code mirror text and send to server
		$.post("/save-team", {team: editor.getValue()});
	})
})