/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  const result = [];
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let y = i + 1; y <= arr.length; y++) {
      if (arr[i] === arr[y]) {
        count += 1;
      }
      if (arr[i] !== arr[y] && count === 1) {
        result.push(arr[i]);
        break;
      }
      if (arr[i] !== arr[y] && count > 1) {
        result.push(count + arr[i]);
        i = i + count - 1;
        count = 1;
        break;
      }
      if (arr[i] === arr.length - 1) {
        result.push(arr[i]);
      }
    }
  }
  return result.join('');
}

module.exports = encodeLine;
