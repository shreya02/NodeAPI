const fs= require('fs')
class StudentOperations 
  {
        constructor(){
      
    }
    }
    fs.readdirSync(__dirname + "/Methods/").forEach(function(file) {
        if (file != 'index.js') {
        let filename = file.replace('.js', '')
        StudentOperations.prototype[filename] = require(__dirname + "/Methods/" + filename)
        }
    })

module.exports = StudentOperations;
