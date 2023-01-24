import React,{ useState, useEffect } from 'react';
import './App.css';
import  { Routes, Route }  from 'react-router-dom';
import LandingPage from './components/landingpage/LandingPage';
import SignUp from './components/userauth/SignUp';
import LogIn from './components/userauth/LogIn';

function App() {

  // fetch user, i'm using devise for authentication
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/user')
      .then(res => {
        if (res.ok) {
          return res.json()
        }
      })
      .then(user => {
        setUser(user)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }



  






  return (
    <div className="App">
      < Routes>
        < Route path="/" element={< LandingPage />} />
        < Route path="/signup" element={< SignUp />} />
        < Route path="/login" element={< LogIn setUser={setUser} />} />
      </ Routes>
    </div>
  );
}

export default App;
