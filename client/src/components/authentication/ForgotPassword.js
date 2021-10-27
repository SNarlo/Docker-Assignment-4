import './ForgotPassword.css'
import React, {useRef, useState} from 'react'
import {Card, Button, Form, Alert} from 'react-bootstrap'
import {Link } from 'react-router-dom'
import {useAuth} from '../../contexts/AuthContext'


export const ForgotPassword = () => {

    const emailRef = useRef()
    const forgotPassword = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [alertVisible, setAlertVisible] = useState(false)
    const [message, setMessage] = useState('')

    const handleVisibleError = () => {
        setAlertVisible(true)
        setError('Failed to reset password')
        setTimeout(() => {
            setAlertVisible(false)
        }, 2000)
    }


    const handleSubmit = async (e) => {
    e.preventDefault()

    try {
        setMessage('')
        setError('')
        setLoading(true)
        await forgotPassword(emailRef.current.value)
        setMessage('Check your inbox for further instructions')
    } catch(err) {
        handleVisibleError()
        console.log(err)
    }

    setLoading(false)
}


    return (
        <div className='form-container'> 
            <Card className='form-card'>
                <Card.Body className='form-card-body'>
                    <h2 className='form-header'>Reset Password By Email</h2>
                    {error && alertVisible && <Alert Fade='true' variant='danger' style={{marginTop:"5%"}}>{error}</Alert>}
                    {message &&  <Alert Fade='true' variant='success' style={{marginTop:"5%"}}>{message}</Alert>}
                    <Form onSubmit={handleSubmit} id='form'>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='text' ref={emailRef} required/>
                        </Form.Group>
                        <br></br>
                        <Form.Group className='links'>
                        <span><Link class='form-links' to='/Login'>Return to Log In</Link></span>
                        <Button disabled={loading} id='submit-button' type='Submit'>Reset Password</Button> 
                        </Form.Group>
                        
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}