/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrTest = String(n).split('');
  const arrPrime = [];

  if (arrTest.includes('0')) {
    arrTest.splice(arrTest.findIndex((item) => item === '0'), 1);
    if (arrTest.length <= 3) {
      return +arrTest.join('');
    }
  }
  if (arrTest[0] === '1' && +arrTest[1] > +arrTest[0]) {
    arrTest.splice(0, 1);
    if (arrTest.length < 3 && arrTest[0] > arrTest[1]) {
      return +arrTest.join('');
    }
  }

  for (let i = 0; i < arrTest.length; i++) {
    if (arrTest.includes(arrTest[i], i + 1)
      || (!arrTest.includes(arrTest[i], i + 1)
      && arrTest[i] === arrPrime[arrPrime.length - 1])) {
      arrPrime.push(arrTest[i]);
      arrTest.splice(i, 1);
      i -= 1;
    }
  }
  arrTest.reverse();
  arrPrime.push(arrTest[0]);

  return +arrPrime.join('');
}

module.exports = deleteDigit;
