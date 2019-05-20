const fs= require('fs')
class EmployeeDataOperations
   {
        constructor(){
      
    }
    }
    fs.readdirSync(__dirname + "/Methods/").forEach(function(file) {
        if (file != 'index.js') {
        let filename = file.replace('.js', '')
        EmployeeDataOperations.prototype[filename] = require(__dirname + "/Methods/" + filename)
        }
    })

module.exports = EmployeeDataOperations
