/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Header from "./HeaderContainer.js";
import IntroCont from "./main_top_container";
import AboutUs from "./About_us.js";
import Menu from "./Menu_Container.js";
import Services from "./Services_Container.js";
import ContactUs from "./Contact_Us.js";
import Footer from "./Footer_container.js";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <IntroCont />
        <AboutUs />
        <Menu />
        <Services />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
