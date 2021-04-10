/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const arr = email.split('');
  const temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '@') {
      temp.push(i);
    }
  }

  const domain = arr.slice(temp[temp.length - 1] + 1, arr.length);
  return domain.join('');
}

module.exports = getEmailDomain;
