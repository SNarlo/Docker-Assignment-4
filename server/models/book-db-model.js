const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Booking = new Schema({
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true},
    BookingWith: { type: String, required: true},
    BookingDate: { type: Date, required: true},
    BookingTime: {type: String, required: true}
    }, { 
        timestamps: true,
    })

module.exports = mongoose.model('booking', Booking)