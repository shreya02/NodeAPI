const express = require('express')
const router = express.Router()
console.log("hello to mongoose");

const creat = require('./create')
const rea=require('./read')
const del = require('./delete')
const updat = require('./update')


router.get("/", rea)
router.delete("/", del)
router.put("/", updat)
router.post("/", creat)

module.exports = router
