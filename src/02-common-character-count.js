/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arrOne = s1.split('').sort();
  const arrTwo = s2.split('').sort();
  const arrCompareOne = [];
  const arrCompareTwo = [];
  let result = 0;
  for (let i = 0; i < arrOne.length; i++) {
    if (arrTwo.includes(arrOne[i])) {
      arrCompareOne.push(arrOne[i]);
    }
  }
  for (let i = 0; i < arrTwo.length; i++) {
    if (arrCompareOne.includes(arrTwo[i])) {
      arrCompareTwo.push(arrTwo[i]);
    }
  }
  for (let i = 0; arrCompareTwo.length > 0;) {
    if (arrCompareOne.includes(arrCompareTwo[i])) {
      result += 1;
      arrCompareTwo.shift();
      arrCompareOne.shift();
    } else arrCompareTwo.shift();
  }
  return result;
}

module.exports = getCommonCharacterCount;
