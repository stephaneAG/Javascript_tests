/*     -- main.js --
*
*  @StephaneAG - 2014
*/


(function(theWindow, theDocument){
        
        /*
        *     -- initiate the necessary --
        *
        */
    
    
        /*
        *    -- executeCode() - "reload" the edited javascript code --
        */
        var executeCode = function(){
            // create new script element
            var newScript = theDocument.createElement('script');
            newScript.setAttribute('id', 'new-editable-script');
            // get a reference to the user-editable script
            var previousScript = theDocument.querySelector('#editable-script');
            // copy previous script content ( edited ) to new script
            newScript.innerHTML = previousScript.innerHTML;
            // append new script to the page before the previous one ( aka, load it )
            previousScript.parentNode.insertBefore(newScript, previousScript);
            // cleanup previous script
            previousScript.parentNode.removeChild(previousScript);
            // change the id of the new script to match the old one ( for next "executeCode()" call )
            newScript.setAttribute('id', 'editable-script');
        };
    
    
        /*
        *    -- don't pollute the global namespace ! --
        */
        theWindow.neatFramework = theWindow.neatFramework || {};
        neatFramework.executeCode = executeCode;
        
        
        
})(window, document);