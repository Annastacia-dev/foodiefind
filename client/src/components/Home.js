import React, { useContext } from 'react'
import { UserContext } from '../contexts/user'

const Home = () => {

  const { user } = useContext(UserContext)

 


  return (
    <div>
      <img src={user && user.profile_picture ? user.profile_picture : "https://www.w3schools.com/howto/img_avatar.png"} style={{width: "50px"}}alt="profile" />
      <h1 className="text-center">Welcome {user && user.username}</h1>
    </div>
    
  )
}

export default Home