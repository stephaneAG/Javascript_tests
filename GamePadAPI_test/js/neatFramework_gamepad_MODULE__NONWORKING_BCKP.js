/* 
*  neatFramework: gamepad Module
*
*  neatFramework_gamepad_MODULE.js - A javascript module file holding a scoped/closured/contained implementation of the Gamepad API
*  
*  by StephaneAG - 2014
 */

/*
    Usefull links:
    
    http://www.html5rocks.com/en/tutorials/doodles/gamepad/gamepad-tester/tester.html
    http://www.html5rocks.com/en/tutorials/doodles/gamepad/?redirect_from_locale=fr
    https://github.com/html5rocks/www.html5rocks.com/blob/master/content/tutorials/doodles/gamepad/static/gamepad-tester/tester.html
    https://github.com/html5rocks/www.html5rocks.com/blob/master/content/tutorials/doodles/gamepad/static/gamepad-tester/gamepad.js
    
*/

// Self_executing_Anonymous Fcn ( providing closure & preventing polluting the global namespace (..) )
// R: 'barebone syntax' : (function(){})(); 
(function(theWindow, theDocument, theUndefined){
  var _undef; // an undefined var
  var _undefined = ''; // another "undefined" var
  // some 'closures' tests ..
  //console.log('[ neatFramework_serial_console_MODULE.js ] theWindow == window ? : ' + ( theWindow == window ) ); // true
  //console.log('[ neatFramework_serial_console_MODULE.js ] theDocument == document ? : ' + ( theDocument == document ) ); // true
  //console.log('[ neatFramework_serial_console_MODULE.js ] theUndefined == "undefined" ? : ' + ( theUndefined == undef ) ); // true
  
  /* ************************************************************************************************************************************************ */
  // our actual 'Module' code .
  
  /*  ---- module API ----
  *
  *   The "app_logic.js" file ( or the "main.js" file if the app logic is handled in its own module ) has the following functions available:
  *
  *   - consoleLog()              --> is used to log some stuff on the javascript console with a custom CSS applied 
  */

  // first, we define the closure/scope of our module
  /* ---------- MODULE CLOSURE ---------- */
  var gamepad_module = {}; // empty obj
  /* ------------------------------------ */

  /* -- module API functions -- */
  // helpr
  var _callbackIfDefined = function(callbackfunc){ ( callbackfunc || function(){ console.log('info: no external callback has been set for the function that was just invoked.') } )() };
    
  // -- Callback functions setters, callers & defaults -- //
  // - onDetectGamepadSupport()
  var _onDetectGamepadSupport_callbackfunc = _undefined; // external callback
  var _onDetectGamepadSupport_callback = function(){ _callbackIfDefined( _onDetectGamepadSupport_callbackfunc ) }; // invoke the external callback if defined
  var onDetectGamepadSupport = function(callbackfunc){ _onDetectGamepadSupport_callbackfunc = callbackfunc; }; // invoked to set the external callback
  var _onDetectGamepadSupport = function(supported){ consoleLog('Gamepad support: ' + supported, 'color: orange;'); };    
    
  /* -------------------------- */
    
  // -- vars --
  var gamepad_xbox360 = {
    gamepad_xbox360_THIS: this, // will be usefull later
    refresh_rate: '60',     // the refresh rate ( currently using 'setTimeout()' , we'll see later for 'requestAnimationFrame()' )
    timestamp: 0, // was missing from my code ?!
    prev_timestamp: 0,
      
    timeout_id: 0, // WIP
    
    // -- gamepad mini-API -- //
      
    refresh: function(){
      gamepad_xbox360_THIS.timestamp = navigator.getGamepads()[gamepad_xbox360_THIS.id].timestamp; // update the gamepad timestamp
      if(gamepad_xbox360_THIS.timestamp > gamepad_xbox360_THIS.prev_timestamp){
        gamepad_xbox360_THIS.callback(); // if the timestamp differs, aka stg happened, call the callback
        clearTimeout(gamepad_xbox360_THIS.timeout_id);
        gamepad_xbox360_THIS.poll();
      }
    },  
    callback: function(){
      consoleLog('something happened on the xbox 360 gamepad !', 'color: green;')
    },
      
    poll: function(poll_type){
      if(poll_type == 'animationFrame') consoleLog('Sorry, requestAnimationFrame is not yet supported in this POC !', 'color: aqua;');
      else {
        /*
        (function(that)
        setTimeout(function(){
          this.refresh();
        }, this.);
        )(this);
        */  
        gamepad_xbox360_THIS.timeout_id = setTimeout(function(){ 
        gamepad_xbox360_THIS.refresh(); 
        }, gamepad_xbox360_THIS.refresh_rate );
      }
    },
      
    // -- gamepad controls -- //
      
    connected: false,       // connected
    id:         0,          // index ->the gamepad id ( when multiple gamepads are connected )
    company_id: 'M$',       // id
    timestamp:  0,          // timestamp
    mapping:    'standard', // mapping
      
    joysticks: {
      left: { 
        x:       0,         // axes[0]               1<->0
        y:       0,         // axes[1]               1<->0
        value:   0,         // button[10].value      1||0
        pressed: false      // button[10].pressed
      },
      right: { 
        x:       0,         // axes[2]               1<->0
        y:       0,         // axes[3]               1<->0
        value:   0,         // button[11].value      1||0
        pressed: false      // button[11].pressed
      }
    },

    dpad: {
      top: {
        value:   0,         // buttons[12].value     1||0
        pressed: false      // buttons[12].pressed
      },
      down: {
        value:   0,         // buttons[13].value     1||0
        pressed: false      // buttons[13].pressed
      },
      left: {
        value:   0,         // buttons[14].value     1||0
        pressed: false      // buttons[14].pressed
      },
      right: {
        value:   0,         // buttons[15].value     1||0
        pressed: false      // buttons[15].pressed
      }
    },

    buttons: {
      A: {
        value:   0,         // buttons[0].value      1||0
        pressed: false      // buttons[0].pressed
      },
      B: {
        value:   0,         // buttons[1].value      1||0
        pressed: false      // buttons[1].pressed
      },
      X: {
        value:   0,         // buttons[2].value      1||0
        pressed: false      // buttons[2].pressed
      },
      Y: {
        value:   0,         // buttons[3].value      1||0
        pressed: false      // buttons[3].pressed
      },
        
      select: {
        value:   0,         // buttons[8].value      1||0
        pressed: false      // buttons[8].pressed
      },
      start: {
        value:   0,         // buttons[9].value      1||0
        pressed: false      // buttons[9].pressed
      },
      guide: {
        value:   0,         // buttons[16].value     1||0
        pressed: false      // buttons[16].pressed
      }
    },
      
    triggers: {
      left: {
        top: {
          value:   0,       // buttons[4].value      1||0
          pressed: false    // buttons[4].pressed
        },
        bottom: {
          value: 0,         // buttons[6].value      1<->0
          pressed: false    // buttons[6].pressed
        }
      },
      right: {
        top: {
          value:   0,       // buttons[5].value      1||0
          pressed: false    // buttons[5].pressed
        },
        bottom: {
          value: 0,         // buttons[7].value      1<->0
          pressed: false    // buttons[7].pressed
        }
      },
    }

  };

  // fcn that ...
  var _helloWorld = function(){ console.log("Hello world !"); };
  var helloWorld2 = function(){ console.log("Hello world2 !"); };
  var log_module_version = function(){ console.log(_module_version) };
    
  /* ------------------------------------- */  

  /* ---- ChromeAPI-based functions ---- */
  
  var consoleLog = function(messageStr,cssStr){
    console.log("%c"+messageStr, cssStr);
  };

  /* ----------------------------------- */

  /* --- ChromeAPI callback functions -- */
  /* ----------------------------------- */

  /* ********************************************************************* */

  // a Fcn that handles the 'initial setup', at Module init (..)
  function _initial_setup_module_init(){
    //initial setup config of our module
    detectGamepadSupport(); // display the support of the gamepad API
  }

  /* ************************************************************************************************************************************************ */
    
  // the module test variable
  var _module_version = '[ neatFramework_gamepad_MODULE.js v0.1a ]';
		
  // framework scope
  var neatFramework = theWindow.neatFramework || {}; // if 'neatFramework' is not defined, we make it equal to an empty object
  theWindow.neatFramework = neatFramework; // and then use it as the window.neatFramework object (..)
		
  // the Module's init Fcn
  function _initModule(){
    //console.log('[ neatFramework_chrome_devtools_MODULE.js ] : ' + 'initiating module ..'); // debug message > module is registered
    consoleLog('[ neatFramework_gamepad_MODULE.js ] : ' + 'initiating module ..', 'color: #d88069;');
    _initial_setup_module_init(); // actually init the module's 'initial setup' config/params (..)
  }
		
  // make available some fcns outside of the 'Self Executing Anonymous Function' of the module closure ..
  gamepad_module.module_version = _module_version; // attach it not directly to 'theWindow' ( > wich is defined 'upon' window (..) ), but instead to the module closure
  gamepad_module.log_module_version = log_module_version; // for sure 'll be practical ( see new _checkModule() in app_logic.js )
  // "attach" our function not directly to the "neatFramework" object this time, but to the "closure"(/empty object) of the current module, called "callbackFunctions_module"
  gamepad_module.helloWorld = _helloWorld; // note: the names of the function inside the file and the one "attached" ( callable from outside the current scope ) can be different ( .. )
  gamepad_module.helloWorld2 = helloWorld2; // another test

  /* -- tiny API -- */
  
  // API functions
  
  // -- API FUNCTIONS GOES HERE !!!!! -- //
  var detectGamepadSupport = function(){
    var gamepadSupport = !!navigator.webkitGetGamepads || !!navigator.webkitGamepads;
    _onDetectGamepadSupport(gamepadSupport);
  };
    
  /* -------------- */

  neatFramework.gamepad_module = gamepad_module; 
  gamepad_module.detectGamepadSupport = detectGamepadSupport;
  gamepad_module.xbox360Controller = gamepad_xbox360; // for testing purposes
  /* ************************************************************************************************************************************************ */
  // actually init the module ..
  _initModule();
  /* ************************************************************************************************************************************************ */
		
})(window, document);
