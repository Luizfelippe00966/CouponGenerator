// couponGenerator.js

/**
 * Generate a coupon code with a custom prefix and random numbers behind it.
 * @param {string} prefix - Custom name or prefix for the coupon.
 * @param {number} length - Number of digits to append after the prefix.
 * @returns {string} - Generated coupon code.
 */
function generateCoupon(prefix, length) {
  if (!prefix || typeof prefix !== 'string') {
    throw new Error('Prefix must be a non-empty string');
  }
  if (!length || typeof length !== 'number' || length <= 0) {
    throw new Error('Length must be a positive number');
  }

  // Generate random number with specified length, padded with leading zeros if needed
  const max = Math.pow(10, length);
  const randomNumber = Math.floor(Math.random() * max)
    .toString()
    .padStart(length, '0');

  return prefix + randomNumber;
}

// Command line interface to use the generator
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.error('Usage: node couponGenerator.js <PREFIX> <NUMBER_LENGTH>');
    console.error('Example: node couponGenerator.js SALE 6');
    process.exit(1);
  }

  const [prefix, lengthStr] = args;
  const length = parseInt(lengthStr, 10);

  try {
    const coupon = generateCoupon(prefix, length);
    console.log('Generated coupon:', coupon);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

module.exports = generateCoupon;
