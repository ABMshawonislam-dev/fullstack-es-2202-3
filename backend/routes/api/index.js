const express = require('express')
const auth = require('./auth')
const route = express.Router()

route.use('/auth', auth)


module.exports = route