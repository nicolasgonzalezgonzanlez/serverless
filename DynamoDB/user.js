const DB = require('./instanceMongoDB');
const TableName = process.env.tableName;

function getAllUser() {
  return new Promise((resolve, reject) => {
     const params = {
      TableName: TableName
    };
    DB.scan(params, (err, response) => {
      if (err) return reject(err)
      return resolve(response)
    });
  });
}

function insertUser(data) {
  return new Promise((resolve, reject) => {
    const params = {
      TableName,
      Item: data
    };
    DB.put(params, (err, response) => {
      if (err) reject( { status: 400, message: 'No se ha podido crear el usuario' })
      else resolve({ status: 201, message: 'Usuario creado exitosamente' })
    });
  });
}

module.exports = {
  getAllUser,
  insertUser
}