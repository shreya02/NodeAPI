const fs= require('fs')
class EmailOperationss
   {
        constructor(){
      
    }
    }
    fs.readdirSync(__dirname + "/Methods/").forEach(function(file) {
        if (file != 'index.js') {
        let filename = file.replace('.js', '')
        EmailOperationss.prototype[filename] = require(__dirname + "/Methods/" + filename)
        }
    })

module.exports = EmailOperationss
