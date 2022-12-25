import React from 'react'
import {Container , Row, Col} from 'react-bootstrap'
import '../../css/landingpage/Features.css'

const Features = () => {
  return (
    <>
    <div className="features">
      <Container>
        <Row>
        <div className="header-content">
              <h1 className="header-title">Features.</h1>
        </div>
          <Col>
            <div className="feature">
              <i className="fa-solid fa-search"></i>
              <h3>Find Restaurants</h3>
              <p>Search for restaurants based on location, cuisine type, price range, and other criterias.</p>
            </div>
          </Col>
          <Col>
            <div className="feature">
              <i className="fa-solid fa-star"></i>
              <h3>Ratings &amp; Reviews</h3>
              <p>Rate and review restaurants you have visited, helping other users make informed decisions about where to dine.</p>
            </div>
          </Col>
          <Col>
            <div className="feature">
              <i class="fa-regular fa-note-sticky"></i>
              <h3>Keep Track</h3>
              <p>
                Create lists of your favorite restaurants and keep track of the ones you want to visit.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
        <Col>
            <div className="feature">
              <i className="fa-solid fa-bookmark"></i>
              <h3>Reservations</h3>
              <p>Make reservations at participating restaurants directly through the app.</p>
            </div>
          </Col>
          <Col>
            <div className="feature">
            <i className="fa-solid fa-link"></i>
              <h3>Social</h3>
              <p>Connect with other foodies and share their favorite restaurants and dining experiences.</p>
            </div>
          </Col>
          <Col>
            <div className="feature">
            <i className="fa-solid fa-percent"></i>
              <h3>Deals &amp; promotions</h3>
              <p>
              Exclusive deals and promotions, such as discounts on meals or special events.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  )
}

export default Features