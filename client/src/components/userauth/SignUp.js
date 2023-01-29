import React,{ useState, useContext} from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { UserContext } from '../../contexts/user'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Select from 'react-select';
import {locations } from '../data/locations'
const customId = '';


const SignUp = () => {

    const navigate = useNavigate()

    const { setUser } = useContext(UserContext)

    const [profilePicture, setProfilePicture] = useState('')
    const [location, setLocation] = useState('')
    const [loading, setLoading] = useState(false)



    const [userFormData, setUserFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    })

    const [errors, setErrors] = useState([])

    const handleChange = (e) => {
        setUserFormData({...userFormData, [e.target.name]: e.target.value})
    }

    const handleUpload = async (e) => {
        setLoading(true)
        const formData = new FormData()
        formData.append('file', e.target.files[0])
        formData.append('upload_preset', 'afyanet');

        try{
            const res = await axios.post('https://api.cloudinary.com/v1_1/dauveffyr/image/upload', formData)
            setProfilePicture(res.data.secure_url)
            setLoading(false)
        } catch(err){
          setLoading(false)
          console.log(err)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {
          first_name: userFormData.firstName,
          last_name: userFormData.lastName,
          username: userFormData.username,
          email: userFormData.email,
          location: location,
          profile_picture: profilePicture,
          admin: false,
          password: userFormData.password,
          password_confirmation: userFormData.passwordConfirmation
        }

        fetch('/signup', {
            method: 'POST',
            headers: {
                Accepts: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: user})
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
                    setErrors(err.errors)
                    errorToast()
                } )
            }
        } )

    }

    const sucessToast = () => toast.success('You have successfully signed up!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
    })


    const errorToast = () => errors.map(error => toast.error(error, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
    }))


    const uploadToast = () => loading ? toast.info('Uploading image...', {
        toastId: customId,
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
    }) : null

    
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
      <Container className="container px-4 px-lg-5">
        <Row className="justify-content-md-center">
          <Col lg={8}>
            <h1 className="text-center">Create Account</h1>
            <Form onSubmit={handleSubmit}>
              <Row className="justify-content-md-center">
                  <Form.Group controlId="formBasicProfilePicture">
                    <Form.Label>Profile Picture<span className='required'>*</span></Form.Label>
                    <Form.Control type="file" name="profilePicture" onChange={(e) => {
                      handleUpload(e)
                    }} />
                    {uploadToast()}
                    </Form.Group>      
              </Row>
              <Row className="justify-content-md-center">
                  <Col lg={6}>
                    <Form.Group controlId="formBasicFirstName">
                      <Form.Label>First Name<span className='required'>*</span></Form.Label>
                      <Form.Control type="text" placeholder="Enter first name" name="firstName" value={userFormData.firstName} onChange={handleChange} required />
                    </Form.Group>
                  </Col>
                  <Col lg={6}>
                    <Form.Group controlId="formBasicLastName">
                      <Form.Label>Last Name<span className='required'>*</span></Form.Label>
                      <Form.Control type="text" placeholder="Enter last name" name="lastName" value={userFormData.lastName} onChange={handleChange} required />
                    </Form.Group>
                  </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col lg={6}>
                  <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username<span className='required'>*</span></Form.Label>
                    <Form.Control type="text" placeholder="Enter username" name="username" value={userFormData.username} onChange={handleChange} autoComplete="username"
                     required />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address<span className='required'>*</span></Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" value={userFormData.email} onChange={handleChange} required />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Form.Group controlId="formBasicLocation">
                  <Form.Label>Location<span className='required'>*</span></Form.Label>
                  <Select
                  name="location"
                  placeholder="Select a Location"
                  options={locations}
                  value={location} 
                  isOptionDisabled={(option) => option.isdisabled} 
                  required
                  onChange={e => setLocation(e.value)}>
                  </Select>  
                </Form.Group>
              </Row>
              <Row className="justify-content-md-center">
                <Col lg={6}>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password<span className='required'>*</span></Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" value={userFormData.password} autoComplete="new-password"
                    onChange={handleChange} required />
                  </Form.Group>
               </Col>
                <Col lg={6}>
                  <Form.Group controlId="formBasicPasswordConfirmation">
                    <Form.Label>Password Confirmation<span className='required'>*</span></Form.Label>
                    <Form.Control type="password" placeholder="Password Confirmation" name="passwordConfirmation" value={userFormData.passwordConfirmation}
                    autoComplete="new-password"
                     onChange={handleChange} required />
                </Form.Group>
                </Col>
              </Row>
              <Button variant="primary" type="submit"
                disabled={loading}
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col lg={8}>
            <p className="text-center">Already have an account? <Link to="/auth/login">Login</Link></p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SignUp
