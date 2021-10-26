import './ThankYouPage.css'
import { Card } from 'react-bootstrap'
import Logo from '../../assets/brick-&-mortar-logo.png'


const ThankYouPage = (props) => {

    console.log(props.location.state)

    return (
        <div>
            <Card>
                <img src={Logo}></img>
                <Card.Body>
                    <p>Thank you for making a booking with the brick & mortar store. Your booking details are below: </p>
                    <h2>Booking for: {props.location.state.firstName} {props.location.state.lastName}</h2>
                    <h2>Booking Date: {props.location.state.date}</h2>
                    <h2>Booking Time: {props.location.state.time}</h2>
                    <h2>With: {props.location.state.staff}</h2>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ThankYouPage
