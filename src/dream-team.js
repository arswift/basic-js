const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 const createDreamTeam = (members) => {
  if (!Array.isArray(members)) return false;
  let letter = [];
  members.forEach((member) => {
  if (typeof member === 'string') letter.push(member.replace(/\s/g, '')[0].toUpperCase());
})
  return letter.sort().join('');
}

module.exports = {
  createDreamTeam
};
