#### dissecting the Google New tab is quite interesting
we have the following elements that interact with the embeddedSearch:  
```javascriot
div#fkbx                                                    // the container
  div#fkbx-text                                             // the "Search on Google or type URL" text
  input#q jsaction="mousedown:ntp.fkbxclk" tabindex="-1" .. // the input that 'll forward to the embeddedSearch
  div#fkbx-crt                                              // the search box carret
  div#fkbx-spch tabindex="0"                                // the vocal search button
  div#fkbx-hspch tabindex="0"                               // the vocal search popup info
  div#fkbx-hht                                              // the "OK, Google" popup info
```
interestingly, deleting all the content of the container ( div#fkbx ) triggers the embeddedSearch focus right after click on the container ( & not after first keypress ).  
the following can be observed on the body:  
- when clicking the container ( even empty ), the class 'fkbxfcs' getts added
- once we are typing in the embeddedSeach, then the body changes that to the 'hide-sf' class, which hides the google logo & search container

R: if it was needed to get all the elements which have an id the starts with, ends with, or contain 'fkbx', we can use the following:  
```javascript
querySelector('[id^=fkbx]'); // 'll match all IDs that start with 'fkbx'
querySelector('[id$=fkbx]'); // 'll match all IDs that end with 'fkbx'
querySelector('[id*=fkbx]'); // 'll match all IDs that contain 'fkbx'
```

#### remember we cas easily modify the content of the embedded search box ( that is, the so-called 'omnibox' used for search input as well as URLs )

to replace it's current content by stuff:  
```javascript
chrome.embeddedSearch.searchBox.paste('some stuff');
```

to replace it's current content by the content of the clipboard ( aka, it implicitely must have a way to access its content programatically .. ):  
```javascript
chrome.embeddedSearch.searchBox.paste();
// or
chrome.embeddedSearch.searchBox.paste('');
```

to clear its current content: 
```javascript
chrome.embeddedSearch.searchBox.paste('\b'); // using "\b" ( formerly "backspace" ) allows to delete all its content
```


#### we can also quickly copy stuff to the clipboard
```javascript
var stuff = 'some stuff'; // get whatever
var txta = document.createElement('textarea');
document.body.appendChild( txta );
txta.value = stuff;
txta.select();
// we need the user to initiate the process ( MAYBE we could get it once & then fake it by re-sending the same evetn id ? ^^ .. )
var btn = document.createElement('button');
btn.onclick = function(){ document.execCommand('copy'); txta.remove(); btn.remove(); }
document.body.appendChild( btn );
```
also, the following works in Chrome & FF from the console  
```javascript
copy('some stuff');
```

Last but not least, the following still is quite relevant ;p
[Musing with Google ;p](https://www.blackhat.com/presentations/bh-europe-05/BH_EU_05-Long.pdf)
