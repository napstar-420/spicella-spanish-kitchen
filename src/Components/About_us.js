import React from "react";

const AboutUs = () => {
  const paraStyle = {
    fontSize: "1.2rem",
    fontFamily: "Albert Sans, sans-serif",
    width: "70%",
    margin: "auto",
    textAlign: "center",
    marginBottom: "2em",
  };
  return (
    <section id="about-us">
      <h1
        style={{
          fontSize: "3rem",
          fontFamily: "Albert Sans, sans-serif",
          color: "#fff",
          textAlign: "center",
        }}
      >
        Who we are
      </h1>
      <div className="about-us-container">
        <p>
          <h2>Hygiene</h2>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quasi
          inventore necessitatibus repellendus iure! Totam error nisi,
          repudiandae molestias minus veniam excepturi pariatur velit et!
        </p>
        <p>
          <h2>Taste</h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam,
          provident odit repellat sint tenetur placeat iste recusandae omnis,
          ipsam porro molestiae ratione consequuntur nesciunt ab at quisquam
          laudantium cupiditate iusto rerum! Neque, cupiditate a sed tempora
          illum iusto. Hic, velit.
        </p>
        <p>
          <h2>Enviroment</h2>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam,
          perferendis, quas architecto sapiente neque ea, doloribus mollitia
          rerum quod quos fuga consectetur. Expedita dicta eos et quis magnam
          error nemo?
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
