import React, { useContext } from 'react'
import { UserContext } from '../contexts/user'

const Home = () => {

  const { user } = useContext(UserContext)

 


  return (
    <div>Home
      <h1 className="text-center">Welcome {user && user.username}</h1>
    </div>
    
  )
}

export default Home