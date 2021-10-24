const mongoose = require('mongoose')

const Schema = mongoose.Schema

const User = new Schema({
    _id: {type: String, required: true},
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true},
    Email: {type: String, required: true}
    }, { 
        timestamps: true,
    })

module.exports = mongoose.model('user', User)