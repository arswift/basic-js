const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  let result = [];
  let temp;
  const controls = new Set(['--discard-next', '--discard-prev', '--double-next', '--double-prev']);
  for (let i = 0; i < arr.length; i++) {
    if (controls.has(arr[i])) {
      switch (arr[i]) {
        case '--discard-next':
          if (arr[i+1]) {
            temp = i + 1;
            i++;
          }
          break;
        case '--discard-prev':
          if ((i-1) !== (temp)) result.pop();
          break;
        case '--double-next':
          if (arr[i+1]) result.push(arr[i+1]);
          break;
        case '--double-prev':
          if (arr[i-1] && ((i-1) !== (temp))) {
            result.push(arr[i-1]);
          }
          
      }
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

module.exports = {
  transform
};
