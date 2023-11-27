let isMonitoring = false;

// Function to extract text content from the active webpage
function extractTextContent() {
  const textContent = document.body.textContent;
  return textContent;
}

// Send the extracted content to the background script
function sendTextContentToBackgroundScript(content) {
  chrome.runtime.sendMessage({ action: "extractedContent", content });
}

// Toggle monitoring state
function toggleMonitoring() {
  isMonitoring = !isMonitoring;

  // If monitoring is started, extract content and send to the background script
  if (isMonitoring) {
    const extractedContent = extractTextContent();
    sendTextContentToBackgroundScript(extractedContent);
  }
}

/* // Listen for messages from the popup or background script
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "processContent") {
    const extractedContent = extractTextContent();
    sendTextContentToBackgroundScript(extractedContent);
  }
}); */

// Listen for messages from the popup or background script
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "processContent") {
    // Check if monitoring is enabled before extracting and sending content
    if (isMonitoring) {
      const extractedContent = extractTextContent();
      sendTextContentToBackgroundScript(extractedContent);
    }
  }
});

// Add an event listener for the toggle button in your popup or options HTML
// Assuming you have a button with an ID "toggleButton"
document.getElementById("toggleButton").addEventListener("click", toggleMonitoring);