// ECMAScript 5 strict mode
"use strict";

assert2(cr, "cr namespace not created");
assert2(cr.plugins_, "cr.plugins_ not created");

/////////////////////////////////////
// Plugin class

cr.plugins_.nwkfs = function(runtime)
{
	this.runtime = runtime;
};

(function ()
{
	/////////////////////////////////////
	
	var pluginProto = cr.plugins_.nwkfs.prototype;
		
	/////////////////////////////////////
	// Object type class
	pluginProto.Type = function(plugin)
	{
		this.plugin = plugin;
		this.runtime = plugin.runtime;
	};

	var typeProto = pluginProto.Type.prototype;

	// called on startup for each object type
	typeProto.onCreate = function()
	{
	};

	/////////////////////////////////////
	// Instance class
	pluginProto.Instance = function(type)
	{
		this.type = type;
		this.runtime = type.runtime;
	};
	
	var instanceProto = pluginProto.Instance.prototype;

	// called whenever an instance is created
	instanceProto.onCreate = function()
	{
		this.fs = require('fs');

	};
	

	//////////////////////////////////////
	// Conditions
	pluginProto.cnds = {};
	var cnds = pluginProto.cnds;
	

	//////////////////////////////////////
	// Actions
	pluginProto.acts = {};
	var acts = pluginProto.acts;	
	
	acts.renameSync = function (OldPath, NewPath)
	{
		this.fs.renameSync(OldPath, NewPath);
	};
	acts.unlinkSync = function (Path)
	{
		this.fs.unlinkSync(Path);
	};
	acts.mkdirSync = function (Path, mode)
	{
		this.fs.mkdirSync(Path, mode);
	};

	
	
	
	//////////////////////////////////////
	// Expressions
	pluginProto.exps = {};
	var exps = pluginProto.exps;
	
	exps.readdirSync = function (ret, Path)	
	{
		ret.set_string(JSON.stringify(this.fs.readdirSync(Path)));
	};

}());