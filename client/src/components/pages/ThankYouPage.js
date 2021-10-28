import './ThankYouPage.css'
import React from 'react'
import { Card } from 'react-bootstrap'
import Header from '../header/Header'

const ThankYouPage = (props) => {

    return (
        <div>
            <Header />
            <div className='container'>
                <Card className='card-container'>
                    <Card.Body className='card-body'>
                        <p id='thank-you-p'>Thank you for making a booking with the brick & mortar store. Your booking details are below: </p>
                        <h2 className='thank-you-heading'>Booking for: <span className='booking-detail'>{props.location.state.firstName} {props.location.state.lastName}</span></h2>
                        <h2 className='thank-you-heading'>Booking Date: <span className='booking-detail'>{props.location.state.date}</span></h2>
                        <h2 className='thank-you-heading'>Booking Time: <span className='booking-detail'>{props.location.state.time}</span></h2>
                        <h2 className='thank-you-heading'>With: <span className='booking-detail'>{props.location.state.staff}</span></h2>
                        <h1 id='see-you'>See You Then!</h1>
                    </Card.Body>
                </Card>
            </div>
            
        </div>
    )
}

export default ThankYouPage
