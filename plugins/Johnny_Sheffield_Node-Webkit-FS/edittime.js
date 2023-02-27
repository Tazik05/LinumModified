function GetPluginSettings()
{
	return {
		"name":			"Node-Webkit FS",				
		"id":			"nwkfs",
		"version":	    "1.0",		
		"description":	"File I/O is provided by simple wrappers around standard POSIX functions.",
		"author":		"JohnnySheffield",
		"help url":		"http://nodejs.org/api/fs.html",
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

AddStringParam("Old Path", "Old path", "\"\"");
AddStringParam("New Path", "New path", "\"\"");
AddAction(0, 0, "renameSync", "fs", "rename", "Synchronous rename", "renameSync");
AddStringParam("Path", "Path", "\"\"");
AddAction(1, 0, "unlinkSync", "fs", "unlink", "Synchronous unlink", "unlinkSync");
AddStringParam("Path", "path", "\"\"");
AddNumberParam("Mode", "Mode", 0777);
AddAction(2, 0, "mkdirSync", "fs", "mkdirSync", "Synchronous mkdir", "mkdirSync");

////////////////////////////////////////
// Expressions
AddStringParam("Path", "path", "\"\"");
AddExpression(0, ef_return_string, "readdirSync", "fs", "readdirSync", " Reads the contents of a directory.");


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