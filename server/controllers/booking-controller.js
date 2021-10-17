const Booking = require("../models/book-db-model")

// Create a booking at the time selected on the date selected
const createBooking = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: "You must select a time",
        })
    }

    // TODO: Continue writing DB actions
}