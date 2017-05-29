"use strict"

   
var sandbox = {
	code: {
	},
	exec: function(str)
	{                
		var keys = ['console.log',
					'function',
					'for','while','do',
					'if','else',                            
					'switch','case',
					'return','break'];

		str = str.replace(/var/g, ""); //remove var 

		str = str.replace(/([a-zA-Z_]{1,}[a-zA-Z0-9_\.]{0,})/g, function (match) {                  
			if(keys.indexOf(match) != -1) return match;
			return "this.code."+match;
		});

		try
		{

			eval(str);
		}
		catch(err)
		{
			console.log(err.message)
		}
	},
	show_vars: function()
	{
		console.log(this.code);
	}
}

