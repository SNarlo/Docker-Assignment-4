import React, { useRef } from 'react'
import '/date-and-time-form.css'
import { Card, Button, Form } from 'react-bootstrap'

const BookingForm = () => {

    const dateRef = useRef()
    // const timeRef = useRef()
    

    return (
        <div className='booking-form-container'>
            <h1 id='form-title'>make a booking</h1>
                <Form>
                    <Card class='calendar-card'>
                        <Form.Group>
                            <Form.Label>Select a Date</Form.Label>
                            <Form.Control type='date' ref={dateRef}/>
                        </Form.Group>
                    </Card>
                    <Card class='time-slot-card'>
                       
                    <Button>Make a Booking!</Button>
                    </Card>
                </Form>
        </div>
    )
}

export default BookingForm
