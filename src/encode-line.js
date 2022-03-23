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
  let arr = str.split('');
  let string = ''
  let count = 1;
  for(let i=1; i<=arr.length; i++) {    
    if(arr[i-1] !== arr[i]) {
      count === 1? string += arr[i-1]: string += count + arr[i-1];
      count = 1;
    } else {
      count += 1;
    }
  }
  return string
}

module.exports = {
  encodeLine
};
