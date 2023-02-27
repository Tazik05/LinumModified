function GetPluginSettings()
{
	return {
		"name":			"Node-Webkit Path",				
		"id":			"nwkpt",
		"version":	    "1.0",		
		"description":	"Provides utilities for handling and transforming file paths",
		"author":		"JohnnySheffield",
		"help url":		"http://nodejs.org/api/path.html",
		"category":		"Node-webkit",				
		"type":			"object",			// not in layout
		"rotatable":	false,
		"flags":		pf_singleglobal						
	
	};
};


////////////////////////////////////////
// Conditions

////////////////////////////////////////
// Actions


////////////////////////////////////////
// Expressions
AddStringParam("path","Path to normalize","\"\"");
AddExpression(0, ef_return_string, "normalize", "Path", "normalize", "Normalize a string path, taking care of '..' and '.' parts.");
AddStringParam("path1","Path1 to join","\"\"");
AddStringParam("path2","Path2 to join","\"\"");
AddExpression(1, ef_return_string, "join", "Path", "join", "Join all arguments together and normalize the resulting path.");
AddStringParam("path1","Path from","\"\"");
AddStringParam("path2","Path to","\"\"");
AddExpression(2, ef_return_string, "resolve", "Path", "resolve", "Resolves path 'to' to an absolute path.");
AddStringParam("path1","Path from","\"\"");
AddStringParam("path2","Path to","\"\"");
AddExpression(3, ef_return_string, "relative", "Path", "relative", "Solve the relative path from from to to.");
AddStringParam("path","Path","\"\"");
AddExpression(4, ef_return_string, "dirname", "Path", "dirname", "Return the directory name of a path. Similar to the Unix dirname command.");
AddStringParam("path","Path","\"\"");
AddStringParam("ext","Extension","\"\"");
AddExpression(5, ef_return_string, "basename", "Path", "basename", "Return the last portion of a path. Similar to the Unix basename command.");
AddStringParam("Path","Path","\"\"");
AddExpression(6, ef_return_string, "extname", "Path", "extname", "Return the extension of the path, from the last '.' to end of string in the last portion of the path.");
AddExpression(7, ef_return_string, "sep", "Path", "sep", "The platform-specific file separator. ");


////////////////////////////////////////
ACESDone();

////////////////////////////////////////

var property_list = [];
	
// Called by IDE when a new object type is to be created
function CreateIDEObjectType()
{
	return new IDEObjectType();
}

// Class representing an object type in the IDE
function IDEObjectType()
{
	assert2(this instanceof arguments.callee, "Constructor called as a function");
}

// Called by IDE when a new object instance of this type is to be created
IDEObjectType.prototype.CreateInstance = function(instance)
{
	return new IDEInstance(instance);
}

// Class representing an individual instance of an object in the IDE
function IDEInstance(instance, type)
{
	assert2(this instanceof arguments.callee, "Constructor called as a function");
	
	// Save the constructor parameters
	this.instance = instance;
	this.type = type;
	
	// Set the default property values from the property table
	this.properties = {};
	
	for (var i = 0; i < property_list.length; i++)
		this.properties[property_list[i].name] = property_list[i].initial_value;
		
}

// Called when inserted via Insert Object Dialog for the first time
IDEInstance.prototype.OnInserted = function()
{
}

// Called when double clicked in layout
IDEInstance.prototype.OnDoubleClicked = function()
{
}

// Called after a property has been changed in the properties bar
IDEInstance.prototype.OnPropertyChanged = function(property_name)
{
}

// For rendered objects to load fonts or textures
IDEInstance.prototype.OnRendererInit = function(renderer)
{
}

// Called to draw self in the editor if a layout object
IDEInstance.prototype.Draw = function(renderer)
{
}

// For rendered objects to release fonts or textures
IDEInstance.prototype.OnRendererReleased = function(renderer)
{
}