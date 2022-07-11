/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { GrMail } from 'react-icons/gr'

import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
  } from "react-icons/fa";

const ContactUs = () => {
    
  return <>
      <section className="contact_us_container">
        <h1 id="contact_us">Contact Us</h1>
        <form className="contact-form">
            <input type="text" placeholder="FULL NAME" required/>
            <input type="EMAIL" placeholder="EMAIL" required/>
            <textarea name="Message" id="message" cols="40" required rows="10" style={{resize: 'none'}}>Your Message Here</textarea>
            <button type="submit" onClick={(e)=>{e.preventDefault()}} className='submit-btn'>Send</button>
        </form>
        <div className="media-container">
            <a href="#"><GrMail style={{marginRight: '0.3em'}}/> Email </a>
            <a href="#"><FaFacebook style={{marginRight: '0.3em'}}/> Facebook </a>
            <a href="#"><FaTwitter style={{marginRight: '0.3em'}}/> Twitter </a>
            <a href="#"><FaInstagram style={{marginRight: '0.3em'}}/> Instagram </a>
        </div>
      </section>
  </>;
};

export default ContactUs;
