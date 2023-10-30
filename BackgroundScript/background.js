//The background script will be coded using the Chrome Messaging
//System (CMS) API. The documentation can be accessed here:

//https://developer.chrome.com/docs/extensions/reference/

// Listen for the extension's installed event.
chrome.runtime.onInstalled.addListener(function () {
    // Perform any initialization tasks here.
  });
  
  // Listen for messages from the popup.
  chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    
    
    alert(response)
    
    
    if (message.action === "startAnalysis") {
      // Handle the message and perform analysis or other actions here.
      // For example, you can pass a message to a content script.
      // Here, we're sending a message to the active tab's content script.
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "performAnalysis" }, function (response) {
          if (response && response.result) {
            // Handle the response from the content script.
          }
        });
      });
    }
  });
  
  // You can add more event listeners and logic as needed for your extension.
  
  // Example of a function that you might call from the popup.
  function performBackgroundTask() {
    // Perform a background task here.
    console.log("Background task executed.");
  }
  
  // Listen for other extension events or browser events as needed.
  
  // Example of handling an extension button click.
  chrome.browserAction.onClicked.addListener(function (tab) {
    // Handle the button click event.
  });
  

