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
  // throw new NotImplementedError('Not implemented');  
  let result = [];
  if(Array.isArray(arr)===false) {throw new Error("'arr' parameter must be an instance of the Array!")}
  for(i=0; i<arr.length; i++) {
    switch(arr[i]) {
      case '--discard-next': arr.splice(i+1,1)
        break;
      case '--discard-prev': result.splice(i-1,1)
        break;
      case '--double-next': result.push(arr[i+1])
        break;
      case '--double-prev': result.push(arr[i-1])
        break;
      default: result.push(arr[i])        
    }
  }
  result.includes(undefined)?result.splice(result.indexOf(undefined),1): result;
  result.includes('--discard-next')?result.splice(result.indexOf('--discard-next'),1): result;
  result.includes('--discard-prev')?result.splice(result.indexOf('--discard-prev'),1): result;
  result.includes('--double-next')?result.splice(result.indexOf('--double-next'),1): result;
  result.includes('--double-prev')?result.splice(result.indexOf('--double-prev'),1): result;
  return result;
}

module.exports = {
  transform
};
