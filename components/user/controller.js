const store = require('./store')
const getCashinCompanies = async (req, res, next) => {
  try {
    res.status(200).json({message:'cashinCompanies'});
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


module.exports = {
  getCashinCompanies,
  postUser
};