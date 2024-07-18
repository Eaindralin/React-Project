import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// JSX
function CardList() {
  return (
    <main className="card-list">
      <Card />
      <Card />
      <Card />
      <Card />
    </main>
  );
}

//const title = "Card Title";

function Card() {
  const title = "Card Title";
  return (
    <section className="card">
      <img src="https://via.placeholder.com/150/92c952" alt="card-image" />
      <h1 style={{marginTop:"1rem"}}>{title}</h1>
      <Description />
    </section>
  );
  function Description() {
    return (
      <p style={{marginTop:"1rem"}}>
        A paragraph is a series.
      </p>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CardList />);
