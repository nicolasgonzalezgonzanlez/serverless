const controller = require('./controller')

const  router = (app) => {
  app.get('/user', controller.getCashinCompanies)
  app.post('/user', controller.postUser)
}

module.exports = router