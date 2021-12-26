const controller = require('./controller')

const  router = (app) => {
  app.get('/users', controller.getUser)
  app.post('/user', controller.postUser)
}

module.exports = router