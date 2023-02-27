// ECMAScript 5 strict mode
"use strict";

assert2(cr, "cr namespace not created");
assert2(cr.plugins_, "cr.plugins_ not created");

/////////////////////////////////////
// Plugin class

cr.plugins_.nwkpt = function(runtime)
{
	this.runtime = runtime;
};

(function ()
{
	/////////////////////////////////////
	
	var pluginProto = cr.plugins_.nwkpt.prototype;
		
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
		this.path = require('path');

	};
	
	//////////////////////////////////////
	// Conditions
	pluginProto.cnds = {};
	var cnds = pluginProto.cnds;
	

	//////////////////////////////////////
	// Actions
	pluginProto.acts = {};
	var acts = pluginProto.acts;	
		
	
	//////////////////////////////////////
	// Expressions
	pluginProto.exps = {};
	var exps = pluginProto.exps;
	exps.normalize = function (ret, pt)	
	{
		ret.set_string(this.path.normalize(pt));
	};
	exps.join = function (ret, pt1, pt2)	
	{
		ret.set_string(this.path.join(pt1,pt2));
	};
	exps.resolve = function (ret, pt1, pt2)	
	{
		ret.set_string(this.path.resolve(pt1,pt2));
	};
	exps.relative = function (ret, pt1, pt2)	
	{
		ret.set_string(this.path.relative(pt1,pt2));
	};
	exps.dirname = function (ret, pt)	
	{
		ret.set_string(this.path.dirname(pt));
	};
	exps.basename = function (ret, pt1, pt2)	
	{
	    if (pt2==="") {
		ret.set_string(this.path.basename(pt1));
		} else {
		ret.set_string(this.path.basename(pt1,pt2));
		}
	};
	exps.extname = function (ret, pt)	
	{
		ret.set_string(this.path.extname(pt));
	};
	exps.sep = function (ret)	
	{
		ret.set_string(this.path.sep);
	};
	


}());