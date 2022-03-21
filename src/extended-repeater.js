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
function repeater(str, options) {
  let arrAdd = [];
  for(let i=1; i<=options.additionRepeatTimes || i<=1; i++) {
    typeof(options.addition)!=="undefined"? arrAdd.push(String(options.addition)) : arrAdd.push(options.addition)
  }
  let addition;
  !options.additionSeparator? addition = arrAdd.join('|') : addition = arrAdd.join(options.additionSeparator);
  
  arrAdd = [];
  
  for(let i=1; i<=options.repeatTimes || i<=1; i++) {
    arrAdd.push(String(str) + addition)
  }
  let strAdd;
  !options.separator? strAdd  = arrAdd.join('+') : strAdd  = arrAdd.join(options.separator);
  return strAdd
}

module.exports = {
  repeater
};
