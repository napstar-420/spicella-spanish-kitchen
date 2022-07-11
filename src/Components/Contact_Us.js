/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { GrMail } from 'react-icons/gr'

import {
    FaFacebookSquare,
    FaTwitterSquare,
    FaInstagramSquare,
  } from "react-icons/fa";

const ContactUs = () => {
    
  return <>
      <section className="contact_us_container" style={{border: '4px solid black', margin: '2em 10em'}}>
        <h1>Contact Us</h1>
        <form className="contact-form">
            <input type="text" placeholder="FULL NAME"/>
            <input type="EMAIL" placeholder="EMAIL"/>
            <textarea name="Message" id="message" cols="40" rows="10" style={{resize: 'none'}}>Your Message Here</textarea>
            <button type="submit" onClick={(e)=>{e.preventDefault()}}>Send</button>
        </form>
        <div className="media-container">
            <a href="#"><GrMail/> Email </a>
            <a href="#"><FaFacebookSquare/> Facebook </a>
            <a href="#"><FaTwitterSquare/> Twitter </a>
            <a href="#"><FaInstagramSquare/> Instagram </a>
        </div>
      </section>
  </>;
};

export default ContactUs;
