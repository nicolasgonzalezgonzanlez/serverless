'use strict';
const serverless = require('serverless-http')
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('hola mundo con express y serverless')
})

module.exports.app = serverless(app)