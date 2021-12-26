const store = require('./store')
const getUser = async (req, res, next) => {
  try {
    const db = await store.getAllUser()
    res.status(200).json(db);
  } catch (error) {
    next(error);
  }
};

const postUser = async (req, res, next) => {
  try {
    const body = JSON.parse(req.body.toString())
  
    const db = await store.createdUser(body)
    res.status(db.status).json({message: db.message});
  } catch (error) {
    next(error);
  }
};

const getUserForId = async (req, res, next) => {
  try {
    const db = await store.getOneUser(req.params.id)
    res.status(db.status).json(db.message)
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUser,
  postUser,
  getUserForId
};