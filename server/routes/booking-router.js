const router = require('express').Router()
let Booking = require ('../models/book-db-model') // Mondgo Db Model schema

router.route('/').get((req, res) => {
    Booking.find()
    .then(bookings => res.json(bookings))
    .catch(err => res.status(400).json('Error: '+ err))
})

router.route('/:id').get((req, res) => {
    Booking.findById(req.params.id)
    .then(booking => res.json(booking))
    .catch(err => res.status(400).json('Error: ' + err))
})


router.route('/add').post((req, res) => {
    const firstName = req.body.FirstName
    const lastName = req.body.LastName
    const bookingWith = req.body.BookingWith
    const bookingDate = req.body.BookingDate
    const bookingTime = req.body.BookingTime

    const newBooking = new Booking({
        FirstName : firstName,
        LastName : lastName,
        BookingWith : bookingWith,
        BookingDate : bookingDate,
        BookingTime : bookingTime
    });

    newBooking.save()
    .then(() => res.json('Booking added'))
    .catch(err => res.status(400).json('Error: '+ err))
})


module.exports = router