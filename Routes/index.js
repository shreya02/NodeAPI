const express = require('express')
const router = express.Router()

const emp= require('./EmployeeDetails')


router.use('/employeedetails',emp)

module.exports=router;