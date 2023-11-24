/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
  if(typeof obj === 'object') {
    return Object.keys(obj).length === 0
  }
  
  if (Array.isArray(obj)) 
    return obj.length === 0
  
  return false
};