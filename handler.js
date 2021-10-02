'use strict';
const {
  verifyPasswordLength,
  verifyPasswordStrength
} = require('./constraints/')
module.exports.password = async (event) => {
  try {
    const { password } = event.pathParameters
    await verifyPasswordLength(password)
   const {message, score} = await verifyPasswordStrength(password)

    return {
      statusCode: 200,
      body: JSON.stringify({
        message,
        score
      })
    }
  } catch (err) {
    return {
      statusCode: err.statusCode,
      body: JSON.stringify({
        message: err.message,
        score: err.score
      })
    }
  }
};
