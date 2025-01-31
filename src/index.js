import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { click } from "@testing-library/user-event/dist/click";
import { cards } from "./cards";
import Card from "./Card";
import {data,fruit} from "./data";
import UseEffect from "./UseEffect";
import UseReduce from "./UseReduce";
import App from "./App";
import Hello from "./Components/Hello";


// JSX
function CardList() {
  console.log(data);
  return (
    <main className="card list">
      {cards.map((card) => {
        const { img, title, description } = card;
        return <Card key={card.id} {...card} />;
      })}
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Hello />);
