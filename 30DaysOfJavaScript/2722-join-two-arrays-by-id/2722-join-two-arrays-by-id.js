/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const result = {};
    for(const item of arr1) {
        result[item.id] = item;
    }
    for(const item of arr2) {
        result[item.id] = result[item.id] ? {...result[item.id], ...item} : item;
    }
    return Object.values(result);
};