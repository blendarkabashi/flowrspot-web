import React from "react";

interface Flower {
  // Define the properties of the Flower interface
  name: string;
}

const FlowerCard = ({ flower }: { flower: Flower }) => {
  return <div>{flower.name}</div>;
};

export default FlowerCard;
