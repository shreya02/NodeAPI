const express = require('express')
const router = express.Router()
const sendemail=require('./sendemail')
const sendmsg=require('./sendmsg')

router.post("/",sendemail)
router.post("/sendmsg",sendmsg)

module.exports = router
