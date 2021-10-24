import './Header.css'
import React, {useState, useEffect} from 'react'
import { Navbar } from 'react-bootstrap'
import Logo from '../../assets/brick-&-mortar-logo.png'
import { Link, useHistory } from 'react-router-dom'
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
     async function handleLogout() {
        try {
            await logOut()
            history.push('/login')
        } catch(err) {
            console.log(err)
        }
    }


    return (
        <div>
            <Navbar>
                <div className='logo-container'>
                    <img src={Logo} alt='brick & mortar logo'></img>
                </div>
                <div className='username-container'>
                    <h2>{`${currentAuthUser.FirstName} ${currentAuthUser.LastName}`}</h2>
                    <Link to='/login' onClick={() => handleLogout}>Log Out</Link>
                </div>
            </Navbar>
        </div>
    )
}

export default Header
