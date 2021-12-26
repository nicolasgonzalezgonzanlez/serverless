'use strict';
const serverless = require('serverless-http')
const express = require('express')
const bodyParser = require('body-parser')
const router = require('./components/')
const app = express()


app.use(bodyParser.urlencoded({ extended: true }))

router(app)

module.exports.app = serverless(app)