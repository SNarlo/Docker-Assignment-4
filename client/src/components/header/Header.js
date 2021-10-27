import './Header.css'
import React, {useState, useEffect} from 'react'
import { Navbar, Button } from 'react-bootstrap'
import Logo from '../../assets/brick-&-mortar-logo.png'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import userApis from '../../apis/users'

const Header = () => {

    const { logOut, currentUser } = useAuth()
    const [currentAuthUser, setCurrentAuthUser] = useState('')
    const history = useHistory()
    
    useEffect(() => {
        userApis.getUser(currentUser.uid)
        .then(user => {
            setCurrentAuthUser(user)
        })
        .catch(err => console.log(err))
    }, [currentUser.uid])


     // Logs the user out of the booking app
     const handleLogout = () => {
        try {
            logOut()
            history.push('/login')
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div>
            <Navbar className='header'>
                <div className='logo-container'>
                    <img src={Logo} alt='brick & mortar logo'></img>
                </div>
                <div className='username-container'>
                    <h2 id='username-header'>{`${currentAuthUser.FirstName} ${currentAuthUser.LastName}`}</h2>
                    <Button id='header-logout-button' onClick={handleLogout}>Log Out</Button>
                </div>
            </Navbar>
        </div>
    )
}

export default Header


