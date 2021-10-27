import './ThankYouPage.css'
import { Card, Button } from 'react-bootstrap'
import Logo from '../../assets/brick-&-mortar-logo.png'
import { useAuth } from '../../contexts/AuthContext'
import { useHistory } from 'react-router-dom'

const ThankYouPage = (props) => {

    const { logOut } = useAuth() 
    const history = useHistory()
 
    // Logs the user out of the booking app
    const handleLogout = async () => {
        try {
            await logOut()
            history.push('/login')
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div>
            <Card>
                <img id='thank-you-logo' src={Logo} alt='brick & mortar logo'></img>
                <Card.Body>
                    <p>Thank you for making a booking with the brick & mortar store. Your booking details are below: </p>
                    <h2>Booking for: {props.location.state.firstName} {props.location.state.lastName}</h2>
                    <h2>Booking Date: {props.location.state.date}</h2>
                    <h2>Booking Time: {props.location.state.time}</h2>
                    <h2>With: {props.location.state.staff}</h2>
                </Card.Body>
                <Button onClick={() => handleLogout}>Sign Out</Button>
            </Card>
        </div>
    )
}

export default ThankYouPage
