const DB = require('../instanceMongoDB');
const TableName = process.env.tableName;

const createdUser = async (data) => {
  try {
    let res = {};
    const params = {
      TableName,
      Item: data
    };
    const DBResponse = await DB.put(params);

    if (DBResponse.error) {
      res = { status: 400, message: 'No se ha podido crear el usuario' };
    }else {
      res = { status: 201, message: 'Usuario creado exitosamente' };
    }
    
    return res;
  } catch (err) {
    return { status: 400, message: err };
  }
};
module.exports = {
  createdUser
}