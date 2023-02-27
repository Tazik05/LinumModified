// ECMAScript 5 strict mode
"use strict";

assert2(cr, "cr namespace not created");
assert2(cr.behaviors, "cr.behaviors not created");

/////////////////////////////////////
// Behavior class
// *** CHANGE THE BEHAVIOR ID HERE *** - must match the "id" property in edittime.js
//           vvvvvvvvvv
cr.behaviors.datalist = function(runtime)
{
	this.runtime = runtime;
};

(function ()
{
	// *** CHANGE THE BEHAVIOR ID HERE *** - must match the "id" property in edittime.js
	//                               vvvvvvvvvv
	var behaviorProto = cr.behaviors.datalist.prototype;
		
	/////////////////////////////////////
	// Behavior type class
	behaviorProto.Type = function(behavior, objtype)
	{
		this.behavior = behavior;
		this.objtype = objtype;
		this.runtime = behavior.runtime;
		
	};
	
	var behtypeProto = behaviorProto.Type.prototype;


	behtypeProto.onCreate = function()
	{
	};

	/////////////////////////////////////
	// Behavior instance class
	behaviorProto.Instance = function(type, inst)
	{
		this.type = type;
		this.behavior = type.behavior;
		this.inst = inst;				// associated object instance to modify
		this.runtime = type.runtime;

	};
	
	var behinstProto = behaviorProto.Instance.prototype;
	
	behinstProto.onCreate = function()
	{
		/** Load properties **/
		this.myProperty = this.properties[0];
		
		/** Apply behavior **/
		var self = this;
		this.wordsArray = [];
		
		/** on créer l'élément datalist **/
		this.datalist = document.createElement("datalist");
		this.datalist.id = "datalist"+this.inst.uid;
		
		/** on créer une array contenant la liste des mots **/
		this.wordsArray  = this.properties[0].split(",");
		var wordsArrayLength = this.wordsArray.length;
		
		for (var i = 0; i < wordsArrayLength; i++) 
		{
			var word = document.createElement("option");
			word.value = self.wordsArray[i];
			jQuery(word).appendTo(self.datalist);
		}
		
		jQuery(document).ready( function() {
			/** on récupère la textbox concernée **/
			var textbox = self.inst.elem;
			textbox.setAttribute("list", "datalist"+self.inst.uid);

			/** on ajoute l'élément datalist au projet **/
			jQuery(self.datalist).appendTo(self.runtime.canvasdiv ? self.runtime.canvasdiv : "body");
		}); 

	};
	
	behinstProto.tick = function ()
	{
		var dt = this.runtime.getDt(this.inst);
		
		// called every tick for you to update this.inst as necessary
		// dt is the amount of time passed since the last tick, in case it's a movement
	};

	//////////////////////////////////////
	// Conditions
	function Cnds() {};
	behaviorProto.cnds = new Cnds();

	//////////////////////////////////////
	// Actions
	function Acts() {};

	// the example action
	Acts.prototype.setWords = function (wordslist)
	{ 
		if (wordslist != "") {
			/** clear la datalist **/
			this.wordsArray.length = 0;
			this.datalist.innerHTML = "";
			
			this.wordsArray  = wordslist.split(",");
			var wordsArrayLength = this.wordsArray.length;
					
			for (var i = 0; i < wordsArrayLength; i++) 
			{
				var word = document.createElement("option");
				word.value = this.wordsArray[i];
				jQuery(word).appendTo(this.datalist);
			}
		};		
	};
	
	Acts.prototype.addWord = function (word)
	{
		if (word != "")
		{
			var _word = document.createElement("option");
				_word.value = word;
				jQuery(_word).appendTo(this.datalist);
		};
	};	
	
	behaviorProto.acts = new Acts();

	//////////////////////////////////////
	// Expressions
	function Exps() {};
	behaviorProto.exps = new Exps();
	
}());