define([
	"dojo/_base/declare",
	"esriMaps/extensions/tools/_Tool"
	], function (declare, _Tool) {

return declare([_Tool], {
	message: "Welcome!",
	label: "My Tool",
	description: "This is my custom tool",
	execute:function(){     // Function called when tool is clicked in the app
		alert(this.message);
	},
	...
});
