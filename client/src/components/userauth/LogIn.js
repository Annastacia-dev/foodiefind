import React,{ useState, useContext} from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { UserContext } from '../../contexts/user'

const LogIn = () => {

    const navigate = useNavigate()

    const { setUser } = useContext(UserContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/login', {
            method: 'POST',
            headers: {
                Accepts: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        .then(r =>{
            if(r.ok){
                r.json().then(data => {
                    localStorage.setItem('token', data.jwt)
                    setUser(data.user)
                    sucessToast()
                    setTimeout(() => {
                        navigate('/home')

                    } , 3000)
                })
            } else {
                r.json().then(err =>{
                    setError(err.error)
                    errorToast()
                } )
            }
        } )

    }

    const sucessToast = () => toast.success('You have successfully logged in!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        style: { backgroundColor: '#659B38'}
    })

    const errorToast = () => toast.error(error, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        style: { backgroundColor: '#CD192F'}
    })


    
  return (
    <div>
        <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
         />

        <Container className="mt-5" fluid>
            <Row className="justify-content-center">
                <Col xs={12} md={6}>
                    <h1 className="text-center">Log In</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} required onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password}
                            required autoComplete="on" onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Log In
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs={12} md={6} className="text-center">
                    <p>Don't have an account? <a href="/auth/signup">Sign Up</a></p>
                </Col>
            </Row>
        </Container>

    </div>
  )
}

export default LogIn
