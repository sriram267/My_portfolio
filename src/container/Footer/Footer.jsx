import React from 'react'
import "./Footer.scss"
import { images } from "../../constants"

const Footer = () => {
  return (
    <div className="app__footer">
      <h1 className="head-text">"Let's Connect!" - A Gateway to New Opportunities and Collaborations</h1>
      
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="" />
          <a href="mailto:vssriram7@gmail.com" className="p-text">vssriram7@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="" />
          <a href="tel: +91 9087757910" className="p-text">+91 9087757910</a>
        </div>
      </div>

      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input className="p-text" type="text" placeholder="Your Name" />
        </div>
        <div className="app__flex">
          <input className="p-text" type="text" placeholder="Your Email" />
        </div>
        <div>
          <textarea 
            className="p-text"
            placeholder="Your Message"
          />
        </div>
        <button type="button" className="p-text" >Send Message</button>
      </div>
    </div>
  )
}

export default Footer
