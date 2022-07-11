import React, { useState } from "react";
import { menuItems } from "./menu";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const MenuContainer = () => {
  const [favorite, setFavorite] = useState(false);
  return (
    <>
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
    </>
  );
};

export default MenuContainer;
