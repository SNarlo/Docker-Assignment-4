const express = require('express')
const cors = require('cors')

require('dotenv').config();

const db = require('./database')

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

const bookingRouter = require('./routes/booking-router')
const userRouter = require('./routes/user-router')

// Loads the bookings router
app.use('/bookings', bookingRouter)
app.use('/users', userRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})
