// anti-dark-pattern-extension/src/background.js
// eslint-disable-next-line no-undef
chrome.runtime.onInstalled.addListener(function () {
    // Run detection logic on every tab when the extension is installed or updated
    // eslint-disable-next-line no-undef
    chrome.tabs.query({}, function (tabs) {
      tabs.forEach(function (tab) {
        // eslint-disable-next-line no-undef
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          function: runDetection,
        });
      });
    });
  });
  
  function runDetection() {
    // Include the content.js logic here if needed
    // Example: Notify the extension popup about the detected dark pattern
    // eslint-disable-next-line no-undef
    chrome.runtime.sendMessage({ action: 'darkPatternDetected', pattern: 'False Urgency' });
  }
  
  // Listen for messages from the extension popup
  // eslint-disable-next-line no-undef
  chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === 'getDetectedPatterns') {
      // Example: Retrieve and send the list of detected patterns to the popup
      const detectedPatterns = getDetectedPatterns();
      sendResponse(detectedPatterns);
    }
  });
  
  // Additional background script logic if needed
  
  // Example: Function to retrieve detected patterns (replace with actual implementation)
  function getDetectedPatterns() {
    return ['False Urgency']; // Placeholder for detected patterns, replace with actual data
  }
      