import axios from 'axios'

const baseUrl = 'http://localhost:5000/bookings'

const getAllBookings = () => {
    const req = axios.get(baseUrl)
    return req.then(res => res.data)
}

const getBooking = (id) => {
    const req = axios.get(`${baseUrl}/${id}`)
    return req.then(res => res.data)
}

const createBooking = (newBooking) => {
    const req = axios.post(baseUrl, newBooking)
    return req.then(res => res.data)
}

// eslint-disable-next-line import/no-anonymous-default-export
const bookingApis = {
    getAllBookings,
    getBooking,
    createBooking
}

export default bookingApis