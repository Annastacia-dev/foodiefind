import React from 'react'
import '../../css/landingpage/Footer.css'

const Footer = () => {
  return (
    <footer className='container-fluid footer'>
        <div className='row'>
            <div className='col-md-12'>
                <div className='footer-contacts'>
                    <div className='footer-links'>
                        <a href='mailto:info@foodiefind.io'>
                            < i className='fas fa-envelope'></i>
                        </a>
                        <a href='https://www.facebook.com/foodiefind.io'  target='_blank' rel='noopener noreferrer'>
                            <i className='fab fa-facebook'></i>
                        </a>
                        <a href='https://www.instagram.com/foodiefind.io' target='_blank' rel='noopener noreferrer'>
                            <i className='fab fa-instagram'></i>
                        </a>
                        <a href='https://www.twitter.com/foodiefind.io' target='_blank' rel='noopener noreferrer'>
                            <i className='fab fa-twitter'></i>
                        </a>
                        <a href='https://www.linkedin.com/company/foodiefind' target='_blank' rel='noopener noreferrer'>
                            <i className='fab fa-linkedin'></i>
                        </a>
                        <a href='https://www.youtube.com/channel/UCY8YJY8YJY8YJY8YJY8YJY8' target='_blank' rel='noopener noreferrer'>
                            <i className='fab fa-youtube'></i>
                        </a>
                        <a href='https://www.pinterest.com/foodiefind.io' target='_blank' rel='noopener noreferrer'>
                            <i className='fab fa-pinterest'></i>
                        </a>
                        <a href='https://www.tumblr.com/foodiefind.io' target='_blank' rel='noopener noreferrer'>
                            <i className='fab fa-tumblr'></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {/* Copyright */}
        <div className='row'>
            <div className='col-md-12'>
                <div className='footer-copyright'>
                    <p>© 2022 - {new Date().getFullYear()} Foodie Find. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer