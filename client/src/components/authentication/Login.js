import React, {useRef, useState} from 'react'
import {Card, Button, Form, Alert} from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'
import './Login.css'
import { useAuth } from '../../contexts/AuthContext'

const Login = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [alertVisible, setAlertVisible] = useState(false)
    const history = useHistory()

    const handleVisibleError = () => {
        setAlertVisible(true)
        setError('Failed to log in')
        setTimeout(() => {
            setAlertVisible(false)
        }, 2000)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch(err) {
            handleVisibleError()
            console.log(err)
        }

        setLoading(false)
    }

    return (
        <div className='login-form-container'> 
            <Card id='login-card'>
                <Card.Body id='login-card-body'>
                    <div id='create-account-text-container'>
                        <div className='horizontal-line'></div>
                        <p id='create-text'>Or log in with email</p>
                        <div className='horizontal-line'></div>         
                    </div>
                    {error && alertVisible && <Alert variant='danger'>{error}</Alert>}
                    <Form onSubmit={handleSubmit} id='form'>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='text' ref={emailRef} required/>
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' ref={passwordRef} required/>
                        </Form.Group>
                        <br></br>
                        <span><Link className='form-links' to='/forgot-password'>Forgot password?</Link></span>
                        <span id='not-registered'>Not registered yet? <Link className='form-links' to='/signup'>Create an account</Link></span>
                        <Button disabled={loading} id='submit-button' type='Submit'>Sign in</Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Login