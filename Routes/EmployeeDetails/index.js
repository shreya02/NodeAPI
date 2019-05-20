const express = require('express')
const router = express.Router()

const creat = require('./create')
const rea=require('./read')
const del = require('./delete')
const updat = require('./update')


router.get("/", rea)
router.post("/", creat)
router.delete("/", del)
router.put("/", updat)

module.exports = router
