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
    const [errors, setErrors] = useState([])

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
                r.json().then(user => {
                    setUser(user)
                    navigate('/home')
                })
            } else {
                r.json().then(err => setErrors(err.errors))
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
        style: { backgroundColor: 'green'}
    })





  return (
    <div>
      LogIn
    </div>
  )
}

export default LogIn
