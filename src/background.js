
// eslint-disable-next-line no-undef
chrome.runtime.onInstalled.addListener(function () {
  console.log('background');

});
let detectedPatterns=[];
console.log('detected patterns');


// eslint-disable-next-line no-undef
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log('inside listnerr');
  if (message.action === 'darkPatternDetected') {
    console.log('inside message action darkpatern');
    detectedPatterns.push(message.pattern);
  } else if (message.action === 'getDetectedPatterns') {
    console.log('inside message action getdetected');
    sendResponse(detectedPatterns);
  }
});

