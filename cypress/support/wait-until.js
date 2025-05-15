// Cypress wait-until plugin implementation
const waitUntil = require("wait-until");

/**
 * Custom Cypress command to wait until a condition evaluates to true
 * @param {() => boolean} conditionFn - Function that should return a boolean
 * @param {Object} options - Configuration options
 * @param {number} options.timeout - Timeout in ms
 * @param {number} options.interval - Retry interval in ms
 * @param {string} options.errorMsg - Error message if timeout is reached
 * @returns {Cypress.Chainable}
 */
Cypress.Commands.add("waitUntil", (conditionFn, options = {}) => {
  const resolveValue = options.resolveValue;
  const timeout = options.timeout || 10000;
  const interval = options.interval || 200;
  const errorMsg =
    options.errorMsg || "Timed out waiting for condition to be true";

  const startTime = Date.now();

  const checkCondition = (resolve, reject) => {
    const result = conditionFn();

    if (result) {
      resolve(resolveValue || result);
    } else if (Date.now() - startTime > timeout) {
      reject(new Error(errorMsg));
    } else {
      setTimeout(() => checkCondition(resolve, reject), interval);
    }
  };

  return new Cypress.Promise((resolve, reject) => {
    checkCondition(resolve, reject);
  });
});
