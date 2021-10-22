const router = require('express').Router()
let Booking = require ('../models/book-db-model') // Mondgo Db Model schema

router.route('/').get((req, res) => {
    Booking.find()
    .then(bookings => res.json(bookings))
    .catch(err => res.status(400).json('Error: '+ err))
})


router.route('/add').post((req, res) => {
    const FirstName = req.body.FirstName
    const LastName = req.body.LastName
    const BookingWith = req.body.BookingWith
    const BookingDate = new Date(req.body.BookingDate)
    const BookingTime = req.body.BookingTime

    const newBooking = new Booking({
        FirstName,
        LastName,
        BookingWith,
        BookingDate,
        BookingTime
    })

    newBooking.save()
    .then(() => res.json('Booking added'))
    .catch(err => res.status(400).json('Error: '+ err))
})

module.exports = router