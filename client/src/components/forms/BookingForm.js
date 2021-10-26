import React, { useRef, useState, useEffect } from 'react'
import { ToggleButton } from 'react-bootstrap'
import { ButtonGroup } from 'react-bootstrap'
import './BookingForm.css' 
import { Card, Button, Form} from 'react-bootstrap'
import bookingApis from '../../apis/bookings'
import userApis from '../../apis/users'
import {useAuth} from '../../contexts/AuthContext'

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

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newBooking = {
            FirstName : firstName,
            LastName : lastName,
            BookingWith : staffRef.current.value,
            BookingDate : dateRef.current.value,
            BookingTime : clockValue
        }

        bookingApis.createBooking(newBooking)
    }

    const timeFunctions = value => {
        setTimeValue(value)
        const time = times.filter(time => time['value'] === value)
        setClockValue(time[0].name)
    }

    const {currentUser} = useAuth()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const dateRef = useRef()
    const staffRef = useRef()
    const [timeValue, setTimeValue] = useState(0)
    const [clockValue, setClockValue] = useState('')

    useEffect(() => {
        userApis.getUser(currentUser.uid)
        .then(user => {
            setFirstName(user.FirstName)
            setLastName(user.LastName)
        })
        .catch(err => console.log(err))
    }, [currentUser.uid])

    
    return (
        <div className='booking-form-container'>
                <Form  onSubmit={handleSubmit} className='booking-form-body'>
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
                           <Form.Check required='true'>
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
                                            onChange={(e) => timeFunctions(e.currentTarget.value)}>
                                            {time.name}
                                        </ToggleButton>
                                    ))}
                                </ButtonGroup>
                           </Form.Check>
                            <Form.Group>
                                <Form.Label>Who would you like you booking with?</Form.Label>
                                <Form.Control as='select' ref={staffRef}>
                                    <option>Select a staff member</option>
                                    <option value="Tom">Tom</option>
                                    <option value="Sarah">Sarah</option>
                                    <option value="James">James</option>
                                </Form.Control>
                            </Form.Group>
                        </Card.Body>
                        <Button type='Submit'>Make a Booking!</Button>
                    </Card>
                </Form>
        </div>
    )
}

export default BookingForm
