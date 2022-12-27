import React from 'react'
import {Row, Col} from 'react-bootstrap'
import '../../css/landingpage/Links.css'

const Links = () => {
  return (
    <div className='container-fluid links'>
        <Row>
            <h1 className="header-title">Links.</h1>
        </Row>
        <Row>
            <Col md={6}>
                <div className="links-content">
                    <h1 className="links-title">
                        About
                    </h1>
                    <div className="links-links">
                        <a href="/about">About Foodie Find</a>
                        <a href="/careers">Careers</a>
                        <a href="/contentandguidlines">Content &amp; Guidelines</a>
                        <a href="/termsofservice">Terms of Service</a>
                        <a href="/privacypolicy">Privacy Policy</a>
                        < a href='adc'>Ad Choices</a>
                    </div>
                </div>
            </Col>
            <Col md={6}>
                <div className="links-content">
                    <h1 className="links-title">
                        Restaurants
                    </h1>
                    <div className="links-links">
                        <a href="/restaurant">Foodie Find For Restaurants</a>
                        <a href="/restaurantownerlogin">Restaurant Owner Login</a>
                        <a href="/restaurantownerregister">Restaurant Owner Register</a>
                        <a href="/restaurantsupport">Restaurant Support</a>
                        <a href="/investors">Investors</a>
                        <a href="/partners">Partners</a>
                        <a href="/advertise">Advertise with Foodie Find</a>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default Links