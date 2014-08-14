(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['game-draw'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, functionType="function", blockHelperMissing=helpers.blockHelperMissing, buffer = "\n        <tr> \n        	";
  stack1 = ((stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0)),blockHelperMissing.call(depth0, stack1, {"name":"this","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data}));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n        </tr> \n    ";
},"2":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", escapeExpression=this.escapeExpression, buffer = "\n        	<td>\n        		<div class=\"tile "
    + escapeExpression(((helper = helpers['class'] || (depth0 && depth0['class'])),(typeof helper === functionType ? helper.call(depth0, {"name":"class","hash":{},"data":data}) : helper)))
    + "\" id='"
    + escapeExpression(((helper = helpers.columnCounter || (depth0 && depth0.columnCounter)),(typeof helper === functionType ? helper.call(depth0, {"name":"columnCounter","hash":{},"data":data}) : helper)))
    + "-"
    + escapeExpression(((helper = helpers.rowCounter || (depth0 && depth0.rowCounter)),(typeof helper === functionType ? helper.call(depth0, {"name":"rowCounter","hash":{},"data":data}) : helper)))
    + "'>";
  stack1 = ((helper = helpers.text || (depth0 && depth0.text)),(typeof helper === functionType ? helper.call(depth0, {"name":"text","hash":{},"data":data}) : helper));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "</div>\n    		</td> \n            ";
},"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, options, functionType="function", blockHelperMissing=helpers.blockHelperMissing, buffer = "<table id=\"game-table\">\n	<tbody> \n    ";
  stack1 = ((helper = helpers.map || (depth0 && depth0.map)),(options={"name":"map","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers.map) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n    </tbody> \n</table>";
},"useData":true});
})();