const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr : [],
  getLength() {
    
  },
  addLink(value) {
    this.arr.push(value)
    return this;
  },
  removeLink(position) {
    if(position % 1 !== 0 || position <= 0 || position > this.arr.length) {
      this.arr = [];
      throw new Error("You can\'t remove incorrect link!");      
    }
    this.arr.splice(position-1,1)      
    return this;
  },
  reverseChain() {
    this.arr.reverse()
    return this;
  },
  finishChain() {
    let arr1=this.arr.map(el => `( ${el} )`).join('~~')
    this.arr = []
    return arr1
  }
};

module.exports = {
  chainMaker
};
