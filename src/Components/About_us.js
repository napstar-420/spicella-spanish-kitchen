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
        porro doloribus et totam ipsam accusamus! Corrupti laboriosam, ratione
        dicta quas ipsam unde aliquam. Eum impedit deleniti voluptates nulla
        minus possimus libero, animi esse cum voluptate ipsum deserunt ut
        architecto eligendi, culpa magni obcaecati minima quidem, modi quibusdam
        saepe ipsa consequuntur. Quasi ipsa assumenda temporibus maiores vitae,
        molestias quas inventore!
      </p>
      <p style={paraStyle}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
        consequatur enim suscipit placeat quis nostrum obcaecati ad nulla ut non
        error facilis et, voluptatibus alias provident necessitatibus voluptatum
        reprehenderit aspernatur? Nisi quod quis culpa reiciendis quia
        blanditiis laudantium error nemo earum animi! Vel esse corrupti, iste id
        delectus cumque asperiores ratione perferendis cupiditate debitis sit,
        inventore quis neque assumenda, quae sed eaque minima soluta repellendus
        mollitia. Eius maiores architecto perspiciatis rem quae dolorum
        laboriosam incidunt aut quos!
      </p>
      <p style={paraStyle}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ipsam
        nemo fugiat consequuntur. Reprehenderit nam qui, vel dolor repellendus
        provident impedit maiores numquam ipsa facilis ipsam obcaecati eligendi
        velit illo?
      </p>
    </section>
  );
};

export default AboutUs;
