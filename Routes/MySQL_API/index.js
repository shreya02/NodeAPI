const express = require('express')
const router = express.Router()

const merge=require('./merges')
const grading=require('./salgrads')
const trial=require('./trials')

router.post("/", merge)
router.post("/sal",grading)
router.post("/prac",trial)

module.exports = router
