/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { GrMail } from "react-icons/gr";
import { BsArrowRightShort } from "react-icons/bs";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="contact">
      <div className="contact-border"></div>
      <section className="contact_us_container">
        <h1 id="contact_us">Contact Us</h1>
        <form className="contact-form">
          <input type="text" placeholder="FULL NAME" required />
          <input type="EMAIL" placeholder="EMAIL" required />
          <textarea
            name="Message"
            id="message"
            cols="40"
            required
            rows="10"
            style={{ resize: "none" }}
          >
            Your Message Here
          </textarea>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
            }}
            className="submit-btn"
          >
            Send <BsArrowRightShort style={{ fontSize: "2em" }} />
          </button>
        </form>
        <div className="media-container">
          <h2>Or Visit</h2>
          <a href="#" id="email">
            <GrMail style={{ marginRight: "0.3em" }} /> Email{" "}
          </a>
          <a href="#" id="facebook">
            <FaFacebook style={{ marginRight: "0.3em" }} /> Facebook{" "}
          </a>
          <a href="#" id="twitter">
            <FaTwitter style={{ marginRight: "0.3em" }} /> Twitter{" "}
          </a>
          <a href="#" id="instagram">
            <FaInstagram style={{ marginRight: "0.3em" }} /> Instagram{" "}
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
