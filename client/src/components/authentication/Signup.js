import React, {useRef, useState} from 'react'
import {Card, Button, Form, Row, Alert} from 'react-bootstrap'
import './Signup.css'
import {useAuth} from '../../contexts/AuthContext'
import { useHistory } from 'react-router-dom'

const SignUp = () => {

    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()
    const {signup} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [alertVisible, setAlertVisible] = useState(false)
    const history = useHistory()

    const handleVisibleError = (error) => {
        setError(error)
        setAlertVisible(true)
        setTimeout(() => {
            setAlertVisible(false)
        }, 2000)
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
            return handleVisibleError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push('/login')
        } catch {
            handleVisibleError('Failed to create an account')
        }

        setLoading(false)
    }


    return (
        <div className='sign-up-form-container'> 
            <Card id='sign-up-card'>
                <Card.Body id='sign-up-card-body'>
                    <div id='create-account-text-container'>
                        <div className='horizontal-line'></div>
                        <p id='create-text'>Create an account</p>
                        <div className='horizontal-line'></div>         
                    </div>
                    {error && alertVisible && <Alert variant='danger'>{error}</Alert>}
                    <Form onSubmit={handleSubmit} id='form'>
                        <Row className='g-2'>
                            <Form.Group id='first-name' className='w-50'>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type='text' ref={firstNameRef} required/>
                            </Form.Group>
                            <Form.Group id='last-name' className='w-50'>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type='text' ref={lastNameRef} required/>
                            </Form.Group>
                        </Row>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='text' ref={emailRef} required/>
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' ref={passwordRef} required/>
                        </Form.Group>
                        <Form.Group id='password-confirm'>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type='password' ref={passwordConfirmationRef} required/>
                        </Form.Group>
                        <Button disabled={loading} id='submit-button' type='Submit'>Create Account</Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SignUp