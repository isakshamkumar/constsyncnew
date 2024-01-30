/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// anti-dark-pattern-extension/src/content.js
const he = require('he');
const decode = he.decode;


(function () {
  const runDetection = () => {
    console.log('run detection');
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
    // Add more functions to detect other dark patterns
  };

  window.addEventListener('load', runDetection);

  const detectFalseUrgency = () => {
    const potentialFalseUrgencyElements = document.querySelectorAll('*');

    potentialFalseUrgencyElements.forEach((element) => {
      if (isFalseUrgencyElement(element)) {
        console.log('Detected False Urgency:', element);
        handleFalseUrgency(element);
      }
    });
  };

  const isFalseUrgencyElement = (element) => {
    const decodedText = decode(element.innerText.toLowerCase());

    return (
      decodedText.includes('limited time') ||
      decodedText.includes('only a few left') ||
      checkElementStyles(element)
    );
  };

  const checkElementStyles = (element) => {
    const computedStyles = window.getComputedStyle(element);

    return (
      computedStyles.getPropertyValue('color').toLowerCase() === 'red' ||
      computedStyles.getPropertyValue('font-weight') === 'bold'
    );
  };

  const handleFalseUrgency = (element) => {
    alert('Warning: This page may use false urgency tactics to encourage quick purchases.');
    console.log('Product Availability Information:', getProductAvailability(element));
    createReportButton(element, 'false-urgency');
  };

  // eslint-disable-next-line no-unused-vars
  const getProductAvailability = (element) => {
    // Example: Extract and return information about product availability from the detected element
    // You need to implement this based on the actual structure of the webpage
    // Return a string or object with relevant details
    return 'Product availability details';
  };

  const createReportButton = (element, type) => {
    const reportButton = document.createElement('button');
    reportButton.innerText = `Report ${type}`;
    reportButton.addEventListener('click', () => {
      reportDarkPattern(element, type);
    });

    element.appendChild(reportButton);
  };

  const reportDarkPattern = (element, type) => {
    fetch('http://localhost:3001/reportDarkPattern', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ elementId: element.id, type }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`${type} reported:`, data);
      })
      .catch((error) => {
        console.error(`Failed to report ${type}:`, error);
      });
  };

  // Repeat similar detailed logic for other dark patterns

  // Add more detection functions and their handling functions below:

// Detect Basket Sneaking
const detectBasketSneaking = () => {
    const potentialBasketSneakingElements = document.querySelectorAll('*');
  
    potentialBasketSneakingElements.forEach((element) => {
      if (isBasketSneakingElement(element)) {
        console.log('Detected Basket Sneaking:', element);
        handleBasketSneaking(element);
      }
    });
  };
  
  const isBasketSneakingElement = (element) => {
    const decodedText = decode(element.innerText.toLowerCase());
  
    return (
      decodedText.includes('added to your cart') ||
      decodedText.includes('included in your order') ||
      checkElementStyles(element)
    );
  };
  
  const handleBasketSneaking = (element) => {
    alert('Warning: This page may be adding items to your cart without your consent.');
    console.log('Basket Information:', getBasketInformation(element));
    createReportButton(element, 'basket-sneaking');
  };
  
  // Detect Confirm Shaming
  const detectConfirmShaming = () => {
    const potentialConfirmShamingElements = document.querySelectorAll('*');
  
    potentialConfirmShamingElements.forEach((element) => {
      if (isConfirmShamingElement(element)) {
        console.log('Detected Confirm Shaming:', element);
        handleConfirmShaming(element);
      }
    });
  };
  
  const isConfirmShamingElement = (element) => {
    const decodedText = decode(element.innerText.toLowerCase());
  
    return (
      decodedText.includes('are you sure you want to miss out') ||
      decodedText.includes('don\'t you want the best deal') ||
      checkElementStyles(element)
    );
  };
  
  const handleConfirmShaming = (element) => {
    alert('Warning: This page may be trying to shame you into making a purchase.');
    console.log('Confirm Shaming Message:', getConfirmShamingMessage(element));
    createReportButton(element, 'confirm-shaming');
  };
  // eslint-disable-next-line no-unused-vars
  const getBasketInformation = (element) => {
    // Extract and return information about the basket from the detected element
    // You need to implement this based on the actual structure of the webpage
    // Return a string or object with relevant details
    return 'Basket information details';
  };
  
  // eslint-disable-next-line no-unused-vars
  const getConfirmShamingMessage = (element) => {
    // Extract and return the confirm shaming message from the detected element
    // You need to implement this based on the actual structure of the webpage
    // Return a string or object with relevant details
    return 'Confirm shaming message details';
  };
  
  


  // eslint-disable-next-line no-unused-vars
 
  // Detect Forced Action
// Detect Forced Action
const detectForcedAction = () => {
    detectPattern('Forced Action', ['must purchase', 'required to buy']);
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
  
  
  // Detect Subscription Trap
  const detectSubscriptionTrap = () => {
    detectPattern('Subscription Trap', ['difficult to cancel', 'hard to unsubscribe']);
  };
  
  // Detect Interface Interference
  const detectInterfaceInterference = () => {
    detectPattern('Interface Interference', ['misleading layout', 'confusing design']);
  };
  
  // Detect Bait and Switch
  const detectBaitAndSwitch = () => {
    detectPattern('Bait and Switch', ['not as advertised', 'different than promised']);
  };
  
  // Detect Drip Pricing
  const detectDripPricing = () => {
    detectPattern('Drip Pricing', ['additional fees', 'extra charges']);
  };
  
  // Detect Disguised Advertisement
  const detectDisguisedAdvertisement = () => {
    detectPattern('Disguised Advertisement', ['sponsored content', 'promoted post']);
  };
  
  // Detect Nagging
  const detectNagging = () => {
    detectPattern('Nagging', ['keep reminding', 'constant alerts']);
  };
  

})();
