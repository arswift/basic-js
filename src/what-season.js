const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 const getSeason = (date) => {
  if (!date) return 'Unable to determine the time of year!';
  if ((!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0) && arguments.length > 0) throw new Error('Invalid date!');
  // if (!date.getTime()) throw new Error('Invalid date!');
  let month = date.getMonth();
  let result = (2 <= month && month <= 4) ? 'spring' : (5 <= month && month <= 7) ? 'summer' : (8 <= month && month <= 10) ? 'fall' : 'winter';
  return result;
}

module.exports = {
  getSeason
};
