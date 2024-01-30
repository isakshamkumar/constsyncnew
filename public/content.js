// anti-dark-pattern-extension/src/content.js
import he from 'he';

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
    const decodedText = he.decode(element.innerText.toLowerCase());

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

  // Example: Detect Basket Sneaking
  const detectBasketSneaking = () => {
    // Add logic to detect basket sneaking and take appropriate actions
    // ...
  };

  // Example: Detect Confirm Shaming
  const detectConfirmShaming = () => {
    // Add logic to detect confirm shaming and take appropriate actions
    // ...
  };

  // Example: Detect Forced Action
  const detectForcedAction = () => {
    // Add logic to detect forced action and take appropriate actions
    // ...
  };

  // Example: Detect Subscription Trap
  const detectSubscriptionTrap = () => {
    // Add logic to detect subscription trap and take appropriate actions
    // ...
  };

  // Example: Detect Interface Interference
  const detectInterfaceInterference = () => {
    // Add logic to detect interface interference and take appropriate actions
    // ...
  };

  // Example: Detect Bait and Switch
  const detectBaitAndSwitch = () => {
    // Add logic to detect bait and switch and take appropriate actions
    // ...
  };

  // Example: Detect Drip Pricing
  const detectDripPricing = () => {
    // Add logic to detect drip pricing and take appropriate actions
    // ...
  };

  // Example: Detect Disguised Advertisement
  const detectDisguisedAdvertisement = () => {
    // Add logic to detect disguised advertisement and take appropriate actions
    // ...
  };

  // Example: Detect Nagging
  const detectNagging = () => {
    // Add logic to detect nagging and take appropriate actions
    // ...
  };

  // Add more detection functions as needed

})();
