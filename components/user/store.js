const userDB = require('../../DynamoDB/user');


const createdUser = async (data) => {
  try {
    const DBResponse = await userDB.insertUser(data)
    return DBResponse
  } catch (err) {
    return { status: 400, message: err };
  }
};

const getAllUser = async () => {
  try {
    const DBResponse = await userDB.getAllUser()
    return DBResponse;
  } catch (err) {
    return { status: 400, message: err };
  }
};


module.exports = {
  createdUser,
  getAllUser
}