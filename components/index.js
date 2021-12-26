const RouterUser = require('./user/router')
const Router = (app) => {
  RouterUser(app)
}

module.exports = Router