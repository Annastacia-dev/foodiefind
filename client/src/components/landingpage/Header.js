import React from 'react'
import '../../css/landingpage/Header.css'
import foodpng from '../../images/landingpage/foodie.png'

const Header = () => {
  return (
    <>
    <div id='home' className="header">
      <div className="container glasscontainer">
        <div className="row">
          <div className="col-md-6">
            <div className="header-content">
              <h1 className="header-title">
                Explore new culinary experiences.
              </h1>
              <p className="header-text">
              Find and book the perfect restaurant for any occasion on our app. Browse ratings and reviews, create lists of your favorite spots, and connect with other foodies. Discover the best restaurants in your city and make reservations at your favorite spots, all in one place.
              </p>
              <a href="/signup" className="btn btn-outline-light btn-lg">Get Started</a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="header-image">
              <img src={foodpng} alt="foodie" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header