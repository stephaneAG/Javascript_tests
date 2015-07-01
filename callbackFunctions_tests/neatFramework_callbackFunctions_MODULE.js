/* 
	Barebone_module.js - A javascript module providing neat Barebone tweaks (..)
	by StephaneAG - 2013
 */

// Self_executing_Anonymous Fcn ( providing closure & preventing polluting the global namespace (..) )
// R: 'barebone syntax' : (function(){})(); 
(function(theWindow, theDocument, theUndefined){
  var undef; // an undefined var
  // some 'closures' tests ..
  //console.log('[ Barebone_module.js ] theWindow == window ? : ' + ( theWindow == window ) ); // true
  //console.log('[ Barebone_module.js ] theDocument == document ? : ' + ( theDocument == document ) ); // true
  //console.log('[ Barebone_module.js ] theUndefined == "undefined" ? : ' + ( theUndefined == undef ) ); // true
		
  /* ************************************************************************************************************************************************ */
  // our actual module code ..	
  var callbackFunctions_module = {}; // empty object representing the module ( we could also "attach" our stuff directly to the "neatFramework" object, as done in other files of the framework  )

  var helloModuleWorld = function(){ console.log("Hello World from the module !"); };
  // R: the above can be called INTERNALLY using: " helloModuleWorld(); "
  //                        and EXTERNALLY using: " neatFramework.callbackFunctions_Mod.helloWorld(); "
  
  /* ** actual functions ( here, only ones accepting callbacks, quite logical as the current file is a callback functions test file ! ) ** */
  var _tryMe = function(param1, param2){ console.log(param1 + ' and ' + param2); }; // nb: we used the "_" to indicate that this function won't be made available outside of the current scope ( not obligatory )

  /* functions "consuming the above" / externally-defined functions as callbacks */

  // First manner: to be called internally using: " callbackTester1("hello", "goodbye", _tryMe); "
  //                        and externally using: " neatFramework.callbackFunctions_Mod.callbackTester1(externalFunction, "hello", "goodbye"); "
  var callbackTester1 = function(callback, param1, param2){ callback(param1, param2); };

  // Second manner: to be called ( internally ) using: " callbackTester2("hello", "goodbye", _tryMe); "
  //                             and externally using: " neatFramework.callbackFunctions_Mod.callbackTester2(externalFunction, "hello", "goodbye"); "
  //  -> a little more general
  var callbackTester2 = function(callback){ callback(arguments[1], arguments[2]); };
  
  // Third manner: to be called ( internally ) using : " callbackTester3("hello", "goodbye", _tryMe); "
  //                            and externally using: "
  //  -> even more general, and can be used whatever the number of arguments
  var callbackTester3 = function(callback){ callback.apply(arguments); }; // did NOT work, displaying "undefined" instead of the arguments passed :/

  // Fourth manner: to be called ( internally ) using : " callbackTester( function(){ _tryMe("hello", "goodbye"); } ); "
  //                              and externally using: " neatFramework.callbackFunctions_Mod.callbackTester4(function(){ externalFunction("hello", "goodbye");} ); "
  //  -> this time using closure and an anonymous function
  var callbackTester4 = function(callback){ callback(); };

  // Fifth manner, among others, chrome's devs way: tobe called internally using: "  "
  //                                                        and externally using: " neatFramework.callbackFunctions_Mod.callbackTester_ChromeLike("hy", "bye", function(extStat){ console.log(extStat); } ); "
  var callbackTester_ChromeLike = function(fcnParam1, fcnParam2, callback){ console.log("OK, " + fcnParam1 + " and " + fcnParam2); var statusStr = "Done"; callback(statusStr); };
  //var callbackTester_ChromeLike = function(fcnParam1, fcnParam2, callback){ console("OK, "  callback(); };
  

  /* ** code used within the browser's javascript console to test the above out ;D ** */
  /* 
    // chrome-like usage, passing an anonymous function
    var callbackTester_ChromeLike = function(fcnParam1, fcnParam2, callback){ console("OK, " + fcnParam1 + " and " + fcnParam2); var statusStr = "Done"; callback(); };
    //>OK, hy and bye 
    //>hello there

    // chrome-like usage, passing an externally-defined function
    var myFunc = function(){ console.log("hello from myFunc !"); };
    neatFramework.callbackFunctions_Mod.callbackTester_ChromeLike("hy", "bye", myFunc );
    //>OK, hy and bye
    //>hello from myFunc ! 
    
    // chrome-like usage, passing a function that accept a parameter to get the value passed by the function calling the callback one
    neatFramework.callbackFunctions_Mod.callbackTester_ChromeLike("hy", "bye", function(extStat){ console.log(extStat); } );
    //>OK, hy and bye 
    //>Done

  */

  /* ************************************************************************************************************************************************ */
		
  // the module version variable
  var _module_version = '[ createVar_Fcn_module.js v0.1, clean ]';

  // framework scope
  var neatFramework = theWindow.neatFramework || {}; // if 'neatFramework' is not defined, we make it equal to an empty object
  theWindow.neatFramework = neatFramework; // and then use it as the window.neatFramework object (..)

  // make available some fcns outside of the 'Self Executing Anonymous Function' of the 'Barebone_module' closure ..
  theWindow.Barebone_module_version = _module_version; // attach it to 'theWindow' ( > wich is defined 'upon' window (..) )
  //neatFramework.createVar = createVar; // make it callable from outside the current scope

  // "attach" our function not directly to the "neatFramework" object this time, but to the "closure"(/empty object) of the current module, called "callbackFunctions_module"
  callbackFunctions_module.helloWorld = helloModuleWorld; // note: the names of the function inside the file and the one "attached" ( callable from outside the current scope ) can be different ( .. )
  //callbackFunctions_module.tryMe = _tryMe; // will be commented out, but after a little test to make sure everything works properly -> ok !
  callbackFunctions_module.callbackTester1 = callbackTester1;
  callbackFunctions_module.callbackTester2 = callbackTester2;
  callbackFunctions_module.callbackTester3 = callbackTester3;
  callbackFunctions_module.callbackTester4 = callbackTester4;
  callbackFunctions_module.callbackTester_ChromeLike = callbackTester_ChromeLike;
  neatFramework.callbackFunctions_Mod = callbackFunctions_module; // note: nearly the same as above, but "one parent level up", to add our module to the "neatFramework" object ;)
})(window, document);
