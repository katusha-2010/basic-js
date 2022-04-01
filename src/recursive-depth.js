const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  
  calculateDepth(array, count = 1) { 
    // console.log(arr)   
    let sum = 0;     
    for(let arr of array) {
      if(Array.isArray(arr)) {
        sum += 1;
      }
    }
    if(sum === 0) {
      return count;
    } else {      
      return this.calculateDepth(array.flat(), count+1)
    }
  }
}

module.exports = {
  DepthCalculator
};
