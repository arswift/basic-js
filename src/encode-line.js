const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let counter = 1;
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str [i+1] && i < str.length - 1) {
      counter++;
    } else {
      if (counter > 1) result += counter;
      result += str[i];
      counter = 1;
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
