import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const card1 = {
  image: "https://via.placeholder.com/150/92c952",
  title: "card Title One",
  description: "card description",
};

const card2 = {
  image: "https://via.placeholder.com/150/771796",
  title: "card Title Two",
  description: "card description",
};

// JSX
function CardList() {
  return (
    <main className="card-list">
      <Card
        image={card1.image}
        title={card1.title}
        description={card1.description}
      >
        <p>This is my paragraph for the first card.</p>

      </Card>
      <Card
        image={card2.image}
        title={card2.title}
        description={card2.description}
      />
    </main>
  );
}

//const title = "Card Title";

function Card({image, title, description, children}) {  
  return (
    <section className="card">
      <img src={image} alt="card-image" />
      <h1 style={{ marginTop: "1rem" }}>{title}</h1>
      <p>{description}</p>
      {children}
    </section>
  );
} 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CardList />);
