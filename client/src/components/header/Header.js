import './Header.css'
import React from 'react'
import { Navbar } from 'react-bootstrap'
import Logo from '../../assets/brick-&-mortar-logo.png'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

const Header = (props) => {

    const { logOut } = useAuth()

    return (
        <div>
            <Navbar>
                <div className='logo-container'>
                    <img src={Logo} alt='brick & mortar logo'></img>
                </div>
                <div className='username-container'>
                    <Link to='/login' onClick={logOut}>Log Out</Link>
                </div>
            </Navbar>
        </div>
    )
}

export default Header
