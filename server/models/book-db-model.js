const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Booking = new Schema(
    {
        FirstName: { type: String, required: true },
        LastName: { type: String, required: true},
        BookingWith: { type: String, required: true},
        Time: { type: Date, required: true}
    },
    { timestamps: true},
)

module.exports = mongoose.model('booking', Booking)