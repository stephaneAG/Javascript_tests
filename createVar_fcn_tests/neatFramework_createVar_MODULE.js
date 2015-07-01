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
  var testClosure2 = []; // empty array
  var createVar2 = function(htmlIdStr){  var varName = htmlIdStr + "_var"; testClosure2[varName] = theDocument.getElementById(htmlIdStr);  };
  var testClosure2Vars = function(varName){ return testClosure2[varName] };

  // simple singles

  /*
  createVar2('pageh1');
  //pageh1_var.textContent = "does it work ? it does ! not ? :D"; // not working
  console.debug(testClosure2['pageh1_var']); // works !
  testClosure2['pageh1_var'].textContent = "YAlllllaaaaa !!!!!"; // works !!!, but not THAT elegant
  testClosure2Vars('pageh1_var').textContent = 'Yipppiiiiiiiie!'; // should also works
  */

  // using an array
  var IDsArray = ['pageh1', 'pageh2', 'pageh3'];
  IDsArray.forEach(function(entry){
    createVar2(entry); // add a new var linking to the html document element in our array
    testClosure2Vars(entry + "_var").textContent = "ANd now within a foreach loop :D"; // yup, works neat !
    testClosure2[entry+'_var'].textContent = "Also from within a foreach loop but less elegant in my opininon .."; // also works, but not less elegant than the above
  });

  /* ************************************************************************************************************************************************ */
		
  // the module version variable
  var _module_version = '[ createVar_Fcn_module.js v0.1, clean ]';

  // framework scope
  var neatFramework = theWindow.neatFramework || {}; // if 'neatFramework' is not defined, we make it equal to an empty object
  theWindow.neatFramework = neatFramework; // and then use it as the window.neatFramework object (..)

  // make available some fcns outside of the 'Self Executing Anonymous Function' of the 'Barebone_module' closure ..
  theWindow.Barebone_module_version = _module_version; // attach it to 'theWindow' ( > wich is defined 'upon' window (..) )
  //neatFramework.createVar = createVar; // make it callable from outside the current scope
})(window, document);
