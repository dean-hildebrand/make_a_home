import React from "react";
import FurnitureCard from "./FurnitureCard";
import "../css/FurnitureContainer.css";

const furniture = [
  {
    id: 1,
    title: "Dresser",
    price: "$99",
    image: "../images/dresser.jpg",
  },
  {
    id: 2,
    title: "Futon",
    price: "$199",
    image: "../images/futon.jpg",
  },
  {
    id: 3,
    title: "Chair",
    price: "$299",
    image: "../images/single_chair.jpg",
  },
  {
    id: 4,
    title: "Table",
    price: "$49",
    image: "../images/table.jpg",
  },
];

function FurnitureContainer({ title, image, price, id }) {
  return (
    <div className="furniture__container">
      {furniture.map((f) => (
        <FurnitureCard
          key={f.id}
          title={f.title}
          price={f.price}
          image={f.image}
        />
      ))}
    </div>
  );
}

export default FurnitureContainer;
