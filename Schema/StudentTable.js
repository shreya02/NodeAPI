var Mongoose = require('mongoose')

var studentSchema = new Mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: String,
    phone: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = {
    StudentSchema: db.model('studentSchema',studentSchema )
    }