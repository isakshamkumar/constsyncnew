// content.js
// eslint-disable-next-line no-undef
chrome.runtime.onInstalled.addListener(function () {
  console.log('background');
  runDetection();
});

function runDetection() {
  // Include the content.js logic here if needed
  // eslint-disable-next-line no-undef
  chrome.runtime.sendMessage({ action: 'darkPatternDetected', pattern: 'False Urgency' });
}

// eslint-disable-next-line no-undef
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === 'getDetectedPatterns') {
      const detectedPatterns = getDetectedPatterns();
      sendResponse(detectedPatterns);
  }
}); 

function getDetectedPatterns() {
  return ['False Urgency']; // Placeholder for detected patterns, replace with actual data
}
