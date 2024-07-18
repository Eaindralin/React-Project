import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const cards = [
  {
    id: 1,
    image: "https://via.placeholder.com/150/92c952",
    title: "card Title One",
    description: "First description",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150/771796",
    title: "card Title Two",
    description: "Second description",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150/92c952",
    title: "card Title Third",
    description: "Third description",
  },
];

///const fruits =["orange","apple","banana"];

//const newCards = cards.map((card) => console.log(card));

///const newFruits = fruits.map((fruit) => <h1>{fruit}</h1>);

// JSX
function CardList() {
  return <main className="card list">{cards.map ((card) => {
    const {img,title,description} = card;
    return <Card key={card.id} {...card} />;
  })}</main>;
}

//const title = "Card Title";

function Card(props) {    
  const { image, title, description } = props;
  return (
    <section className="card">
      <img src={image} alt="card-image" />
      <h1 style={{ marginTop: "1rem" }}>{title}</h1>
      <p>{description}</p>
    </section>
  );
} 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CardList />);
