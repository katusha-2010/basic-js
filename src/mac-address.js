const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let numbers = ['0','1','2','3','4','5','6','7','8','9'];
  let letters = ['A','B','C','D','E','F'];
  let arr = n.split('-').map(el=> el.split('')).flat();
  let count  = 0
  for(let i =0; i< arr.length; i++) {
    numbers.includes(arr[i]) || letters.includes(arr[i]) ? count += 0 : count += 1
  }  
  return count > 0 ? false : true
}
module.exports = {
  isMAC48Address
};
