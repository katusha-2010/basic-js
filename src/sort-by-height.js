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
  let arr1 = arr.filter(el => el !== -1).sort(function(a,b) {return a-b})
  let i=0;
  let arr2 = [];
  for(let j = 0; j < arr.length; j++) {
    if(arr[j] === -1) {
      arr2.push(-1)
    } else {
      arr2.push(arr1[i]);
      i++
    }
  }
  return arr2
}

module.exports = {
  sortByHeight
};
