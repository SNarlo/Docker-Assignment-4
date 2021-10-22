const router = require('express').Router()
let Booking = require ('../models/book-db-model')

router.route('/').get((req, res) => {
    Booking.find()
    .then(bookings => res.json(bookings))
    .catch(err => res.status(400).json('Error: ', err))
})


router.route('/add').post((req, res) => {
    const 
})