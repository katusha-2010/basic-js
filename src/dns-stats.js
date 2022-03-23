const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {}
  let arr = domains.map(el => el.split('.').reverse().map(el=> '.' + el));
  let arr2=[];
  for(let i=0; i<arr.length; i++) {
    let str ='';
    for(let j=0; j< arr[i].length; j++) {       
      str += arr[i][j]
      arr2.push(str)
    }
  }
  for(let i=0; i<arr2.length; i++) {
    typeof obj[arr2[i]] === 'undefined'? obj[arr2[i]] = 1 : obj[arr2[i]] += 1;
  }
  return obj
}

module.exports = {
  getDNSStats
};
