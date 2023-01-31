import React from 'react';
import './App.css';
import  { Routes, Route }  from 'react-router-dom';
import LandingPage from './components/landingpage/LandingPage';
import SignUp from './components/userauth/SignUp';
import LogIn from './components/userauth/LogIn';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import Reviews from './components/pages/Reviews';
import Wishlist from './components/pages/Wishlist';
import Diary from './components/pages/Diary';
import Activity from './components/pages/Activity';
import Favourites from './components/pages/Favourites';
import Settings from './components/pages/Settings';

function App() {

 
  return (
    <div className="App">
      < Routes>
        <Route path="/" element={< LandingPage />} />
        <Route path="/auth/signup" element={< SignUp />} />
        <Route path="/auth/login" element={< LogIn />} />
        <Route path="/home" element={< Home />} />
        <Route path="/profile" element={< Profile />} />
        <Route path="/reviews" element={< Reviews />} />
        <Route path="/wishlist" element={< Wishlist />} />
        <Route path="/diary" element={< Diary />} />
        <Route path="/activity" element={< Activity />} />
        <Route path="/favourites" element={< Favourites />} />
        <Route path="/settings" element={< Settings />} />
      </ Routes>
    </div>
  );
}

export default App;
