const fs= require('fs')
class PunchCardOperation 
  {
        constructor(){
      
    }
    }
    fs.readdirSync(__dirname + "/Methods/").forEach(function(file) {
        if (file != 'index.js') {
        let filename = file.replace('.js', '')
        PunchCardOperation.prototype[filename] = require(__dirname + "/Methods/" + filename)
        }
    })

module.exports = PunchCardOperation
