import React, { useRef, useState } from 'react'
import { ToggleButton } from 'react-bootstrap'
import { ButtonGroup } from 'react-bootstrap'
import './BookingForm.css' 
import { Card, Button, Form } from 'react-bootstrap'

const BookingForm = () => {
    
    const times = [
        { name : '10:00', value: '1'},
        { name : '11:00', value: '2'},
        { name : '12:00', value: '3'},
        { name : '13:00', value: '4'},
        { name : '14:00', value: '5'},
        { name : '15:00', value: '6'},
        { name : '16:00', value: '7'},
        { name : '17:00', value: '8'},
        { name : '18:00', value: '9'},
    ]


    const dateRef = useRef()
    // const timeRef = useRef()
    // const [checked, setChecked] = useState(false)
    const [timeValue, setTimeValue] = useState(0)
    

    return (
        <div className='booking-form-container'>
                <Form className='booking-form-body'>
                    <h1 className='form-title'>make a booking</h1>
                    <Card className='card' id='calendar-card'>
                        <Form.Group>
                            <Form.Label>Select a Date</Form.Label>
                            <Form.Control type='date' ref={dateRef}/>
                        </Form.Group>
                    </Card>
                    <h1 className='form-title'>select a time</h1>
                    <Card className='card' id='time-slot-card'>
                       <Card.Body className='times'>
                            <ButtonGroup>
                              {times.map((time, key) => (
                                  <ToggleButton
                                    key={key}
                                    id={`time-${key}`}
                                    type='radio'
                                    name='type'
                                    className='time-value'
                                    value={time.value}
                                    checked={timeValue === time.value}
                                    onChange={(e) => setTimeValue(e.currentTarget.value)}
                                  >
                                    {time.name}
                                  </ToggleButton>
                            ))}
                            </ButtonGroup>
                       </Card.Body>
                    <Button>Make a Booking!</Button>
                    {/* need a POST event on submit */}
                    </Card>
                </Form>
        </div>
    )
}

export default BookingForm
