// Function to extract text content from the active webpage
function extractTextContent() {
  const textContent = document.body.textContent;
  return textContent;
}

// Send the extracted content to the background script
function sendTextContentToBackgroundScript(content) {
  chrome.runtime.sendMessage({ action: "extractedContent", content });
}

// Listen for messages from the popup or background script
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "processContent") {
    const extractedContent = extractTextContent();
    sendTextContentToBackgroundScript(extractedContent);
  }
});
