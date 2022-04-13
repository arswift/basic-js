const { NotImplementedError } = require('../extensions/index.js');

const countCats = (matrix) => {
  let counter = 0;
  matrix.forEach((box) => {
    counter += box.filter(cat => cat === '^^').length;
  })
  return counter;
}

module.exports = {
  countCats
};
