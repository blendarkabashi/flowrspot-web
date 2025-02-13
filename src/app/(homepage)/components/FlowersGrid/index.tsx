import Container from "@/components/Container";
import React from "react";
import FlowerCard from "../FlowerCard";

interface Flower {
  id: React.Key | null | undefined;
  name: string;
  latinName: string;
  genus: string;
  pictureUrl: string;
  authorId: string;
  sightingsNum: number;
}

interface FlowersGridProps {
  flowers: Flower[];
}

const FlowersGrid: React.FC<FlowersGridProps> = ({ flowers }) => {
  return (
    <Container>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 py-[90px]">
        {flowers.map((flower: Flower) => (
          <FlowerCard key={flower.id} flower={flower} />
        ))}
      </div>
    </Container>
  );
};

export default FlowersGrid;
