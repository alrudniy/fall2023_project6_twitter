//The background script will be coded using the Chrome Messaging
//System (CMS) API. The documentation can be accessed here:

//https://developer.chrome.com/docs/extensions/reference/

console.log('background running');

chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked(tab) {
    console.log("button clicked!")
}


