module.exports = pass => {
  if (pass && pass.length < 6) {
    return Promise.reject({
      message: 'The password is less than six characters',
      statusCode: 400
    })
  }
  return Promise.resolve()
}