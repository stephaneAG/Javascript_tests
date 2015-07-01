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
  var testClosure = {}; // empty object	
  var testClosure2 = []; // empty array
  //var createVar = function(htmlIdStr){ var testClosure.htmlIdStr = theDocument.getElementById(htmlIdStr);  }; // nope :/
  //var createVar = function(htmlIdStr){ testClosure.htmlIdStr = theDocument.getElementById(htmlIdStr);  };
  //var createVar = function(htmlIdStr){ console.log(htmlIdStr); }; // ok
  var createVar = function(htmlIdStr){ testClosure.htmlIdStr = theDocument.getElementById(htmlIdStr);  };

  var createVar2 = function(htmlIdStr){  var varName = htmlIdStr + "_var"; testClosure2[varName] = theDocument.getElementById(htmlIdStr);  };
  var testClosure2Vars = function(varName){ return testClosure2[varName] };
  // after some tests, the following works from the javascript console of the web browser (here, chrome)
  // neatFramework.createVar('pageh1'); //> returns undefined
  // pageh1.textContent = "yop it works !"; //> returns "yop it works !" & change the html h1#pageh1 text
  // console.debug(pageh1); //> returns <h1 id="pageh1">yop it works !</h1> & undefined
  
  // Q: what is " <200b> " ? ( R: it appeared after drag-n-droppin' the above <h1> ... </h1> url from the js console to he browser url bar, et then copying it back above in the current js file -> DIGG ! )

  // re-try the above tests, this time from inside the current javascript file
  //createVar('pageh2'); // we have a h1#pageh2 in the html page
  //pageh2.textContent = "I work from inside too ! :D";
  //console.debug(pageh2); // 'll only works in chrome ( .. )

  // Not-that-silly test: from the above previous tests, this could actually work, at least in chrome & locally ( but it may also online & with whatever browser ? )
  //isItIdsThatMakeItWork.innerHTML = "ok, work, at least in chrome & locally ( but it may also online & with whatever browser ? )";
  
  // another little test ( what seemed sooo practical to me at first, and why I wrote the "createVar" function above )
  /*
  var IDsArray = ['pageh1', 'pageh2', 'pageh3'];
  IDsArray.forEach(function(entry) {
	      console.log(entry); // log the ID to the console
	      createVar(entry); // link with the corresponding html content
	      // change the html text content ( since we use an array of h1 IDs present in our html page )
	      //testClosure.entry.textContent = "Work in foreach loops using IDs of html element from an array :D"; // WARNING: will only work if the element have this property / Nb: yet NOT working at all
	      console.debug(entry); // WARNING: 'll only works in chrome ( .. )
  });
  */

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

  //testClosure2['pageh1_var'].textContent = "does it work ? it does ! not ? :D"; // works ?
  //pageh1.textContent = "outisde an array is does !";
  //pageh2.textContent = "outisde an array is does !";
  //pageh3.textContent = "outisde an array is does !";

  /* -- doesn't work --
  for(var obj in testClosure){
    console.log("obj found:");
    console.debug(obj);
    for(var strObj in obj){
      strObj.textContent = "Works now ?";
      console.log("StrObj found:");
      console.debug(strObj);
    }
  };
  */

  /* *** */
  // also testing a simple-yet-useful "getELementById()" replacement ( nb: what did you say ? not needed because of the above ? yup, it may, but whatever, it "may" ( .. ) )
  //var elemById = function(elementIdStr){ theDocument.getElementById(elementIdStr); console.debug(elementIdStr); };
  //var testVar = elemById('pageh1'); // not working
  //var testVar2 = theDocument.getElementById('pageh1'); // should be working
  //testVar.text = "Nope ?"; //  thus not working
  //testVar2.textContent = "Is it the why ?";

  /* ************************************************************************************************************************************************ */
		
  // the module version variable
  var _module_version = '[ createVar_Fcn_module.js v0.1a ]';

  // framework scope
  var neatFramework = theWindow.neatFramework || {}; // if 'neatFramework' is not defined, we make it equal to an empty object
  theWindow.neatFramework = neatFramework; // and then use it as the window.neatFramework object (..)

  // make available some fcns outside of the 'Self Executing Anonymous Function' of the 'Barebone_module' closure ..
  theWindow.Barebone_module_version = _module_version; // attach it to 'theWindow' ( > wich is defined 'upon' window (..) )
  //neatFramework.createVar = createVar; // make our createVar function callable from outside this code / DEUBG TEST: trying without it callable & see if 'pageh1', for ex, is still available in the global scope
  //neatFramework.elemByID = elemById; // make our custom 'getElementById()' fnc available outside the app's scope for testing purposes (..)  

})(window, document);
