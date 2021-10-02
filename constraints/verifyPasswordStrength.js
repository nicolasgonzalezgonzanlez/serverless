const zxcvbn = require('zxcvbn')
module.exports = pass => {
  const score = zxcvbn(pass).score
  if (score < 2) {
    return Promise.reject({
      message: 'The password is very weak',
      score
    })
  }
  return Promise.resolve({message: 'The password is correct', score})
}