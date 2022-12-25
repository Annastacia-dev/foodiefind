import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import '../../css/landingpage/About.css'
import foodimage from '../../images/landingpage/food3.png'

const About = () => {
  return (
    <>
      <Container fluid="md" id="about" className="about">
        <Row>
          <Col md={6}>
            <div className="image-container">
              <img src={foodimage} alt="food" />
            </div>
          </Col>
          <Col md={6} >
          <div className="header-content">
              <h1 className="header-title">
                About Us.
              </h1>
              <p className="about-text">
              Welcome to our restaurant review and booking platform, where foodies can discover and book the best restaurants in their city. Our user-friendly interface allows users to browse ratings and reviews, create lists of their favorite restaurants, and connect with other foodies in their area.
              </p>
              <p className="about-text">
              In addition to helping users find the perfect restaurant for any occasion, we also provide a platform for restaurants to create profiles and showcase their menus, photos, and other information. This allows diners to get a better understanding of the restaurant's atmosphere, menu options, and overall vibe before they visit.
              </p>
              <p className="about-text">
              At Foodie Find, we are committed to providing the best possible user experience and are constantly working to improve our platform and add new features. We hope you enjoy using our app and discovering new culinary experiences!
              </p> 
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default About