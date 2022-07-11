/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { TbHelp } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaMapMarkerAlt,
} from "react-icons/fa";

const HeaderContainer = () => {
  return (
    <header className="header-container">
      <div className="top-nav">
        <ul>
          <li>&reg; Since 1956</li>
          <li>
            Help <TbHelp style={{ margin: "0 0.5rem" }} />
          </li>
        </ul>
      </div>
      <div className="middle-container">
        <div className="image-back" />
        <div className="welcome-container">
          <h1>Spicella Spanish Kitchen</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            ad aut iusto at molestias repudiandae pariatur rem similique magnam
            asperiores amet fuga fugiat enim debitis error earum nisi quos
            ullam, dolores sed eius voluptate!
          </p>
          <div className="buttons">
            <button className="header-btn menu-btn">
              <a href="#menu">Menu</a>
            </button>
            <button className="header-btn order-btn">
              Order Online <BsArrowRightShort className="order-icon" />
            </button>
          </div>
          <nav>
            <a href="#home">
              Home <IoIosArrowDown className="nav-link-icon" />
            </a>
            <a href="#about-us">
              About us <IoIosArrowDown className="nav-link-icon" />
            </a>
            <a href="#menu">
              Menu <IoIosArrowDown className="nav-link-icon" />
            </a>
            <a href="#services">
              Services <IoIosArrowDown className="nav-link-icon" />
            </a>
            <a href="#">
              Contact <IoIosArrowDown className="nav-link-icon" />
            </a>
            <a href="#">
              Rate us <IoIosArrowDown className="nav-link-icon" />
            </a>
          </nav>
          <div className="bottom-container">
            <button>
              <FaMapMarkerAlt /> Locate us
            </button>
            <div className="icons">
              <FaFacebookSquare className="social-icons" />
              <FaInstagramSquare className="social-icons" />
              <FaTwitterSquare className="social-icons" />
              <FaYoutubeSquare className="social-icons" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderContainer;
