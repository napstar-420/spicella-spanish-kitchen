import React from "react";
import { menuItems } from "./menu";

const MenuContainer = () => {
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
