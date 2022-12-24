import React from 'react'
import '../../css/landingpage/Header.css'
import foodpng from '../../images/landingpage/foodie.png'

const Header = () => {
  return (
    <div className="container fluid header">
      <div className="row glass">
        <div className="col-md-6">
          <div className="header-text">
            <h1>Explore culinary
             <span> experiences</span>
            </h1>
            <p>
            Find and book the perfect restaurant for any occasion on our app. Browse ratings and reviews, create lists of your favorite spots, and connect with other foodies. Discover the best restaurants in your city and make reservations at your favorite spots, all in one place.
            </p>
          </div>
          <div className="getstarted">
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="foodimage">
            <img src={foodpng} alt="foodie" />
          </div>
        </div>
        </div>
    </div>
    
  )
}

export default Header