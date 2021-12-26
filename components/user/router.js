const controller = require('./controller')

const  router = (app) => {
  app.get('/users', controller.getUser)
  app.post('/user', controller.postUser)
  app.get('/user/:id', controller.getUserForId)
}

module.exports = router