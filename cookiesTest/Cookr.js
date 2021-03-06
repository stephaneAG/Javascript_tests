/* -- Cookies handling in javascript -- */

// to create a cookie in javascript
document.cookie = "username=John Doe";

// we can also specify an expiration date in UTC time
// by default, the cookie is deleted wjen the browser is closed
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";

// adding a path parameter, we can also tell the browser what path the cookie belongs to
// by default, it belongs to the current page
document.cookie="username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";

// to read a cookie
// 'll return all cookies in one string much like: cookie1=value; cookie2=value;
var theCookie = document.cookie;

// to modify a cookie, we simply set it again
document.cookie="username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";

// to delete a cookie, we just set its expires parameter to a passed date
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";

// fcn to set a cookie ( from w3schools )
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

// fcn to get a cookie ( from w3schools )
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
    }
    return "";
}

// fcn to check a cookie presence
// 'll display a greeting if one is set
// else, 'll display a prompt box, asking for the name of the user, and store it
// for 365 days by calling the setCookie fcn
function checkCookie() {
    var username=getCookie("username");
    if (username!="") {
        alert("Welcome again " + username);
    }else{
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
            setCookie("username", username, 365);
        }
    }
}

// an alternative to the above could be written, accepting parameters for args & callbacks ( ..) 



