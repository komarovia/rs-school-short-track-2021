/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const arr = matrix.flat();
  let result = 0;
  if (!arr.includes(0)) {
    result = arr.reduce((sum, current) => sum + current, 0);
    return result;
  }
  if (arr.length <= 4) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] === 0) {
        result += arr[i];
      }
      if (i > 0 && arr[i + 1] === 0) {
        result += arr[i - 1];
      }
    }
    return result;
  }
  for (let i = 0; i < arr.length - 4; i++) {
    if (arr[i + 4] === 0) {
      result += arr[i];
    }
    if (i > 3 && arr[i + 4] === 0) {
      result += arr[i - 4];
    }
  }
  return result;
}

module.exports = getMatrixElementsSum;
