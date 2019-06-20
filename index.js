global.BasicResponse = require('./Utilities/ResponseBody')
global.appPath = __dirname
require('./Global')
const express = require('express')
const app=express()
const cors= require('cors')
const bodyParser= require('body-parser')
const routes = require('./Routes')


const eventEmitter=require('events');
global.serverup = new eventEmitter()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//app.use('/v1/emp',routes)
//app.use('/v1/pun',routes)
//app.use('/v1/web',routes)
//app.use('/v1/mail',routes)
// app.use('/v1/db',routes)
app.use('/v1/std',routes)

httpServer = require('http').createServer(app)

httpServer.listen(process.env.PORT || 5000, () => {
  connectedEmitter.on('ConnectedDatabase', () => {
    console.log('server listening on Port 5000')
    setTimeout(function() {
      serverup.emit('listening')
    }, 1000)
  })
  console.log("connected");
  
})

module.exports = httpServer