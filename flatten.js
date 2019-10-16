const arrayToFlatten = [ 1, [2,3], [4,5]];

/**
 * Function takes Array of integers with nested arrays of integers, 
 * reducing array to attempt to concat to merge elements into the accumilating array.
 * Checking if current value is an array, if true pass current array into recursively 
 * check the first element in the nested array to concat into the accumulating array, 
 * else just merge current integer into accumulating array
 * @param {array} array Array of integers with nested arrays of intergers
 * @returns {array} Flattened array
 */
const flatFunc = (array) => array.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flatFunc(cur) : cur), [])

const flattenedArray = flatFunc(arrayToFlatten);

console.log('Array being flattened by hand written function ', flattenedArray);

module.exports = flatFunc;