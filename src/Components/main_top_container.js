import React from "react";

const IntroCont = () => {
  return (
    <section id="home">
      <article>
        <h1
          style={{
            fontSize: "2rem",
            marginBottom: "1rem",
            fontFamily: "Albert Sans, sans-serif",
            color: "#e67f09",
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
          quidem at nihil excepturi cum quae alias quis optio ullam architecto
          fuga necessitatibus accusantium error, magni in. Totam nobis, maiores
          magnam quod animi quisquam labore quasi dolores necessitatibus iure
          perferendis, amet molestiae, excepturi sint saepe architecto culpa?
        </p>
      </article>
      <img
        src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1447&q=80"
        width="40%"
        alt="store-img"
      />
    </section>
  );
};

export default IntroCont;
