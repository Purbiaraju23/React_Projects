import React from 'react'
import '../index.css'

function Footer() {
  return (
    <>
    <footer className="footer">
      <div className="social">
        <i className="social-item">
          <img src="images/icons/phone.svg" alt=""/>
        </i>
        <i className="social-item">
          <img src="images/icons/envelope.svg" alt=""/>
        </i>
        <i className="social-item">
          <img src="images/icons/instagram.svg" alt=""/>
        </i>
        <i className="social-item">
          <img src="images/icons/twitter.svg" alt=""/>
        </i>
      </div>
      <p className="footer-message">
        Thank You ❤️ Visit Again
      </p>
    </footer>
    </>
  )
}

export default Footer   