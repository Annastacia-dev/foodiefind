import React from 'react'
import '../../css/landingpage/NavBar.css'

const NavBar = () => {

  // on scroll add class scrolled to navbar
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").classList.add("scrolled");
    } else {
      document.getElementById("navbar").classList.remove("scrolled");
    }
  }


  return (
    <nav id="mainNav" className="navbar navbar-expand-lg navbar-light fixed-top py-3">
    <div className="container px-4 px-lg-5">
        <a href="#page-top" className="navbar-brand">
        <i className="fa-solid fa-utensils"></i>
          foodie find
          </a>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto my-2 my-lg-0">
                <li className="nav-item">
                    <a href="/" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="/about" className="nav-link">About Us</a>
                </li>
                <li className="nav-item">
                    <a href="/services" className="nav-link">Services</a>
                </li>
                <li className="nav-item">
                    <a href="/contacts" className="nav-link">Contact</a>
                </li>
            </ul>
        </div>
        <button 
        className="navbar-toggler navbar-toggler-left"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto my-2 my-lg-0">
                <li className="nav-item">
                    <button className="btn btn-primary login" href="/login">Log In</button>
                </li>
            </ul>
        </div>
    </div>
  </nav>
  )
 
}

export default NavBar