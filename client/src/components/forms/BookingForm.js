import React, { useRef, useState, useEffect } from 'react'
import { ToggleButton } from 'react-bootstrap'
import { ButtonGroup } from 'react-bootstrap'
import './BookingForm.css' 
import { Card, Button, Form} from 'react-bootstrap'
import bookingApis from '../../apis/bookings'
import userApis from '../../apis/users'
import {useAuth} from '../../contexts/AuthContext'
import { useHistory } from 'react-router-dom'

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

    const history = useHistory()
    const {currentUser} = useAuth()
    const dateRef = useRef()
    const staffRef = useRef()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
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
        history.push({
            pathname:"/thank-you", 
            state: {
                firstName: firstName, 
                lastName: lastName, 
                time: clockValue, 
                date: dateRef.current.value, 
                staff: staffRef.current.value
            }
        })
    }

    const timeFunctions = value => {
        setTimeValue(value)
        const time = times.filter(time => time['value'] === value)
        setClockValue(time[0].name)
    }

    return (
        <div className='booking-form-container'>
                <Form onSubmit={handleSubmit} className='booking-form-body'>
                    <h1 id='booking-form-title'>make a booking</h1>
              
                    <Card className='card' id='booking-card'>
                        <h3 className='form-title'>booking details</h3>
                        <Card.Body className='booking-card-body'>
                            <Form.Group>
                                <Form.Label className='booking-form-label'>Select a Date</Form.Label>
                                <Form.Control type='date' ref={dateRef} required='true'/>
                            </Form.Group>
                            <Form.Group className='booking-times' required='true'>
                                <Form.Label className='booking-form-label'>Select a Time</Form.Label>
                                <ButtonGroup className='button-group'>
                                    {times.map((time, key) => (
                                        <ToggleButton 
                                            required='true'
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
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className='booking-form-label'>Who would you like you booking with?</Form.Label>
                                <Form.Control as='select' ref={staffRef} required='true'>
                                    <option>Select a staff member</option>
                                    <option value="Tom">Tom</option>
                                    <option value="Sarah">Sarah</option>
                                    <option value="James">James</option>
                                </Form.Control>
                            </Form.Group>
                            <Button id='booking-form-submit-btn' type='Submit' >Make a Booking!</Button>
                        </Card.Body>
                    </Card>
                </Form>
        </div>
    )
}

export default BookingForm
