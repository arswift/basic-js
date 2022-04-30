const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, {repeatTimes = 1, separator = '+', addition = '', additionSeparator = '|', additionRepeatTimes = 1}) {
    let additionArr = [];
    for (let i = 1; i <= additionRepeatTimes; i++) {
      additionArr.push(`${addition}`);
    }
    let additionStr = additionArr.join(additionSeparator);
    let resultArr = [];
    for (let i = 1; i <= repeatTimes; i++) {
      resultArr.push(`${str}` + additionStr);
    }
    let resultStr = resultArr.join(separator);
    return resultStr;
}

module.exports = {
  repeater
};
