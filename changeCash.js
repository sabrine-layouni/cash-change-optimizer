// Global constants
const MIN_AMOUNT_RANGE = 1;
const MAX_AMOUNT_RANGE = 9007199254740991;

/**
 * Calculate the optimal change for a given amount.
 * @param {number} amount - The amount for which to calculate change.
 * @returns {Change} - The calculated change.
 */
function change(amount) {
  // Validate input
  if (
    amount < MIN_AMOUNT_RANGE ||
    amount > MAX_AMOUNT_RANGE ||
    !Number.isInteger(amount)
  ) {
    return null;
  }

  // Initialize result object
  let change = {
    two: 0,
    five: 0,
    ten: 0,
  };

  // Calculate the number of 2€ coins
  change.two =
    amount < 4
      ? Math.floor(amount / 2)
      : [0, 3, 1, 4, 2][Math.floor(amount) % 5];

  // Calculate the remaining amount after
  const REMAINING_AMOUNT = amount - change.two * 2;

  // Calculate the number of 5€ banknotes
  change.five = Math.floor((REMAINING_AMOUNT % 10) / 5);

  // Calculate the number of 10€ banknotes
  change.ten = Math.floor(REMAINING_AMOUNT / 10);

  // Check if all values in change are 0, and if so, set result to null
  if (Object.values(change).every((value) => value === 0)) {
    change = null;
  }

  return change;
}

// Test cases
console.log(change(1));
console.log(change(6));
console.log(change(10));
console.log(change(9007199254740991));
