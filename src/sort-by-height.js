const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let copy = arr;
  let positions = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) positions.push(i);
  }
  let j = 0;
  for (let i = 0; i < positions.length; i++) {
    copy.splice(positions[i] - j, 1);
    j++;
  }
  copy.sort((a, b) => a - b);
  for (let i = 0; i < positions.length; i++) {
    copy.splice(positions[i], 0, -1);
  }
  return copy
}


module.exports = {
  sortByHeight
};
