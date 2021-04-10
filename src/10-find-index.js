/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let start = -1;
  let finish = array.length;

  while (finish - start > 1) {
    const middle = Math.floor((start + finish) / 2);
    if (array[middle] === value) {
      return middle;
    }
    if (array[middle] > value) {
      finish = middle;
    } else start = middle;
  }
  return false;
}

module.exports = findIndex;
