import React from 'react';
import './App.css';
import  { Routes, Route }  from 'react-router-dom';
import LandingPage from './components/landingpage/LandingPage';
import SignUp from './components/userauth/SignUp';
import LogIn from './components/userauth/LogIn';
import Home from './components/pages/Home';

function App() {

 
  return (
    <div className="App">
      < Routes>
        < Route path="/" element={< LandingPage />} />
        < Route path="/auth/signup" element={< SignUp />} />
        < Route path="/auth/login" element={< LogIn />} />
        < Route path="/home" element={< Home />} />
      </ Routes>
    </div>
  );
}

export default App;
