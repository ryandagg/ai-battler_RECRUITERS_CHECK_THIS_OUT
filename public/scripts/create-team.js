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

// var code = editor.getCode();
// console.log("code:", code)