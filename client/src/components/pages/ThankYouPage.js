import './ThankYouPage.css'
import React from 'react'
import { Card, Button } from 'react-bootstrap'
import Logo from '../../assets/brick-&-mortar-logo.png'
import Header from '../header/Header'

const ThankYouPage = (props) => {

    return (
        <div>
            <Header />
            <Card>
                <Card.Body>
                    <p>Thank you for making a booking with the brick & mortar store. Your booking details are below: </p>
                    <h2>Booking for: {props.location.state.firstName} {props.location.state.lastName}</h2>
                    <h2>Booking Date: {props.location.state.date}</h2>
                    <h2>Booking Time: {props.location.state.time}</h2>
                    <h2>With: {props.location.state.staff}</h2>
                </Card.Body>
                <Button>Sign Out</Button>
            </Card>
        </div>
    )
}

export default ThankYouPage
