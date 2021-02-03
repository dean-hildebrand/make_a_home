import React from "react";

function FurnitureCard({ title, price, image, id }) {
  return (
    <div className="furniture__card">
      <img src={image} alt={id} />
      <h2>{title}</h2>
      <p>{price}</p>
    </div>
  );
}

export default FurnitureCard;
