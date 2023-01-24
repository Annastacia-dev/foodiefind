import React,{ useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import SignUp from './SignUp'

const LogIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const [showLogIn, setShowLogIn] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            email: email,
            password: password
        }
       fetch('/users/sign_in',{
              method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
       })
         .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }



  return (
    <>
   { 
   showLogIn ? (
        <Container>
            <Row>
                <Col>
                    <h1>Log In</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"
                            name='email' autoComplete="email"
                            onChange={(e) => setEmail(e.target.value)}
                             />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"
                            name='password' autoComplete="current-password"
                            onChange={(e) => setPassword(e.target.value)}
                             />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember Me" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        {/* don't have an account sign up */}
                        <p>Don't have an account?&nbsp;
                            <Button variant="link" onClick={() => setShowLogIn(false)}>
                                Sign Up
                            </Button>
                        </p>
                    </Form>
                </Col>
            </Row>
        </Container>
    ) : <SignUp />
    }
        
    </>
  )
}

export default LogIn