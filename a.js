import { decode } from 'he';

(function () {
  const runDetection = () => {
    detectFalseUrgency();
    detectBasketSneaking();
    detectConfirmShaming();
    detectForcedAction();
    detectSubscriptionTrap();
    detectInterfaceInterference();
    detectBaitAndSwitch();
    detectDripPricing();
    detectDisguisedAdvertisement();
    detectNagging();
    detectPriceComparisonPrevention();
    detectHiddenCosts();
  };

  window.addEventListener('load', runDetection);

  const detectFalseUrgency = () => {
    detectPattern('False Urgency', ['limited time', 'only a few left']);
  };

  const detectBasketSneaking = () => {
    detectPattern('Basket Sneaking', ['added to your cart']);
  };

  // Other detection functions...

  const detectPriceComparisonPrevention = () => {
    detectPattern('Price Comparison Prevention', ['exclusive deal', 'only on our site']);
  };

  const detectHiddenCosts = () => {
    detectPattern('Hidden Costs', ['fees may apply', 'additional charges']);
  };

  const detectPattern = (patternName, keywords) => {
    const potentialElements = document.querySelectorAll('*');

    potentialElements.forEach((element) => {
      if (isPatternElement(element, keywords)) {
        console.log(`Detected ${patternName}:`, element);
        handlePattern(patternName, element);
      }
    });
  };

  const isPatternElement = (element, keywords) => {
    const decodedText = decode(element.innerText.toLowerCase());

    return keywords.some(keyword => decodedText.includes(keyword));
  };

  const handlePattern = (patternName, element) => {
    chrome.runtime.sendMessage({ action: 'darkPatternDetected', pattern: patternName });
  };
})();
