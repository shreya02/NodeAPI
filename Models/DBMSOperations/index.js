const fs= require('fs')
class DBMSOperationss
   {
        constructor(){
      
    }
    }
    fs.readdirSync(__dirname + "/Methods/").forEach(function(file) {
        if (file != 'index.js') {
        let filename = file.replace('.js', '')
        DBMSOperationss.prototype[filename] = require(__dirname + "/Methods/" + filename)
        }
    })

module.exports = DBMSOperationss
