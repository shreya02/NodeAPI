const express = require('express')
const router = express.Router()

//const rea=require('./read')
const wri=require('./add')
const ge=require('./getall')

//router.get("/", rea)
router.get("/",ge)
router.post("/",wri)
module.exports = router
