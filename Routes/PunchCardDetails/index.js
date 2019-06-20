const express = require('express')
const router = express.Router()

const rea=require('./read')

router.post("/", rea)

module.exports = router
