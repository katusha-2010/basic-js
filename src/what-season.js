const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  if(!date) {return 'Unable to determine the time of year!'}  
  if(date.toString().split(' ').slice(0,4).join('') === new Date().toString().split(' ').slice(0,4).join('')) {
    throw new Error('Invalid date!')
  }  
  let month = date.toString().split(' ')[1];   
  switch(month) {
    case 'Jan':
    case 'Feb':
    case 'Dec':
      return 'winter'
      break

    case 'Apr':
    case 'May':
    case 'Mar':
      return 'spring'
      break

    case 'Jun':
    case 'Jul':
    case 'Aug':
      return 'summer'
      break

    case 'Sep':
    case 'Oct':
    case 'Nov':
      return 'autumn'
      break

    default:
      throw new Error('Invalid date!')
      break
  }
}

module.exports = {
  getSeason
};
