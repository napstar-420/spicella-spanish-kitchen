/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Header from "./HeaderContainer.js";
import { menuItems } from "./menu";
import { BsArrowRightShort } from "react-icons/bs";
import { TbHelp } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaMapMarkerAlt,
  FaRegHeart,
  FaHeart,
} from "react-icons/fa";

const Home = () => {
  const [favorite, setFavorite] = useState(false);

  const sectionStyle = {
    width: "90%",
    margin: "auto",
    paddingTop: "4em",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const articleStyle = {
    width: "40%",
  };

  const paraStyle = {
    fontSize: "1.2rem",
    fontFamily: "Albert Sans, sans-serif",
    width: "70%",
    margin: "auto",
    textAlign: "center",
    marginBottom: "2em",
  };

  return (
    <div className="home">
      <Header />
      <main>
        <section style={sectionStyle} id="home">
          <article style={articleStyle}>
            <h1
              style={{
                fontSize: "2rem",
                marginBottom: "1rem",
                fontFamily: "Albert Sans, sans-serif",
              }}
            >
              Spicella Spanish Kitchen
            </h1>
            <p
              style={{
                fontSize: "1.2rem",
                fontFamily: "Albert Sans, sans-serif",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              obcaecati deleniti illum odio molestiae ad vero, similique, neque
              quidem at nihil excepturi cum quae alias quis optio ullam
              architecto fuga necessitatibus accusantium error, magni in. Totam
              nobis, maiores magnam quod animi quisquam labore quasi dolores
              necessitatibus iure perferendis, amet molestiae, excepturi sint
              saepe architecto culpa?
            </p>
          </article>
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1447&q=80"
            width="40%"
            alt="store-img"
          />
        </section>
        <div className="underline" />
        <section id="about-us">
          <h1
            style={{
              fontSize: "2rem",
              marginBottom: "1rem",
              fontFamily: "Albert Sans, sans-serif",
              textAlign: "center",
            }}
          >
            About us
          </h1>
          <div
            style={{
              display: "flex",
              width: "90%",
              margin: "5em auto",
              justifyContent: "center",
              gap: "2em",
            }}
          >
            <img
              style={{ width: "33%", height: "20em" }}
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <img
              style={{ width: "33%", height: "20em" }}
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <img
              style={{ width: "33%", height: "20em" }}
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <p style={paraStyle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat cum
            odio autem corrupti rerum vero sunt blanditiis quod, expedita ullam
            porro doloribus et totam ipsam accusamus! Corrupti laboriosam,
            ratione dicta quas ipsam unde aliquam. Eum impedit deleniti
            voluptates nulla minus possimus libero, animi esse cum voluptate
            ipsum deserunt ut architecto eligendi, culpa magni obcaecati minima
            quidem, modi quibusdam saepe ipsa consequuntur. Quasi ipsa assumenda
            temporibus maiores vitae, molestias quas inventore!
          </p>
          <p style={paraStyle}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
            consequatur enim suscipit placeat quis nostrum obcaecati ad nulla ut
            non error facilis et, voluptatibus alias provident necessitatibus
            voluptatum reprehenderit aspernatur? Nisi quod quis culpa reiciendis
            quia blanditiis laudantium error nemo earum animi! Vel esse
            corrupti, iste id delectus cumque asperiores ratione perferendis
            cupiditate debitis sit, inventore quis neque assumenda, quae sed
            eaque minima soluta repellendus mollitia. Eius maiores architecto
            perspiciatis rem quae dolorum laboriosam incidunt aut quos!
          </p>
          <p style={paraStyle}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ipsam
            nemo fugiat consequuntur. Reprehenderit nam qui, vel dolor
            repellendus provident impedit maiores numquam ipsa facilis ipsam
            obcaecati eligendi velit illo?
          </p>
        </section>
        <div className="underline"></div>
        <h1
          style={{ textAlign: "center", fontFamily: "Albert Sans, sans-serif" }}
          id="menu"
        >
          Menu
        </h1>
        <section className="menu-container">
          {menuItems.map((item, index) => {
            const { name, url } = item;
            return (
              <div className="item-container" key={index}>
                <img src={url} alt={name} />
                <div
                  className="content"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.3rem 0 0.5rem 0",
                  }}
                >
                  <h2 style={{ fontFamily: "Roboto, sans-serif" }}>{name}</h2>
                  {favorite ? (
                    <FaHeart
                      type="button"
                      style={{ fontSize: "1.5rem", cursor: "pointer" }}
                      onClick={() => {
                        setFavorite(!favorite);
                      }}
                    />
                  ) : (
                    <FaRegHeart
                      type="button"
                      style={{ fontSize: "1.5rem", cursor: "pointer" }}
                      onClick={() => {
                        setFavorite(!favorite);
                      }}
                    />
                  )}
                </div>
                <p
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "600",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto porro repellat quaerat maiores hic. Magni autem
                  tenetur dolor libero porro!
                </p>
              </div>
            );
          })}
        </section>
        <div className="underline"></div>
        <h1
          style={{ textAlign: "center", fontFamily: "Albert Sans, sans-serif" }}
          id="services"
        >
          Services
        </h1>
        <section className="services-container">
          <div className="content">
            <h2>Booking for an Occasion</h2>
            <h3>
              Providing World Class Enivroment whether its a meeting or a
              Birthday Party
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              nostrum aliquid aspernatur. Suscipit, quos fugiat. Minima, esse
              repellat nisi iste ad vel et iure at doloremque porro soluta
              laborum, libero vero est culpa, saepe blanditiis? Reiciendis vero
              explicabo odit eaque enim? Dolores aliquid quasi odio consequuntur
              quaerat, natus ullam ut?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse,
              illum? Sint magni itaque quo quas sequi dicta ut, cupiditate
              tempora obcaecati animi nisi laboriosam vitae eveniet porro fuga
              commodi veniam eligendi non voluptate amet eos pariatur illo!
              Magnam placeat natus magni dolore molestiae repudiandae tenetur
              quis illo soluta itaque ab quaerat iure, cupiditate, ratione dicta
              nisi doloremque ducimus, quam dolor? Magni cupiditate impedit quae
              optio a iure exercitationem fuga quidem.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              impedit delectus sed quibusdam, ipsum nesciunt accusamus maiores
              ullam repudiandae minima mollitia assumenda adipisci perferendis
              itaque rerum voluptas ad voluptatem cumque quisquam harum natus
              magni doloribus voluptatum? Dolorum, perspiciatis! Saepe, dolores.
            </p>
          </div>
        </section>
        <div className="sub-service-container">
          <div className="chef sub-service-item">
            <h2>Our Chef's</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              veritatis quisquam fuga velit molestias aut odit quos veniam
              dolores minus.
            </p>
          </div>
          <div className="waiter sub-service-item">
            <h2>Our Waiter's</h2>
            <p>
              LPorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quisquam, voluptatem. Facilis rem porro incidunt dolores!
            </p>
          </div>
          <div className="staff sub-service-item">
            <h2>Our Staff</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
              numquam hic animi soluta veniam sit modi officiis, recusandae
              mollitia vel aspernatur nemo dolor obcaecati architecto.
            </p>
          </div>
        </div>
        <div className="underline"></div>
      </main>
    </div>
  );
};

export default Home;
