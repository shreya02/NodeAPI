const fs= require('fs')
class WebpageOperations 
  {
        constructor(){
      
    }
    }
    fs.readdirSync(__dirname + "/Methods/").forEach(function(file) {
        if (file != 'index.js') {
        let filename = file.replace('.js', '')
        WebpageOperations.prototype[filename] = require(__dirname + "/Methods/" + filename)
        }
    })

module.exports = WebpageOperations;
