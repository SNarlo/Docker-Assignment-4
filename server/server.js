const express = require('express')
const cors = require('cors')

require('dotenv').config();

const db = require('./database')

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

const bookingRouter = require('./routes/booking-router')

// Loads all bookings
app.use('/bookings', bookingRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})
