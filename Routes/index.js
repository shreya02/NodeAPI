const express = require('express')
const router = express.Router()

const emp= require('./EmployeeDetails')
const pun=require('./PunchCardDetails')
const web=require('./WebpageWork')
const mail=require('./EmailAPI')
const db=require('./MySQL_API')
const stu=require('./StudentDatabase')
console.log("going to sd");

//  router.use('/employeedetails',emp)
// router.use('/punchcarddetails',pun)
// router.use('/webpagework',web)
//router.use('/emailapi',mail)
// router.use('/mysqlapi',db)
router.use('/studentapi',stu)

module.exports=router;