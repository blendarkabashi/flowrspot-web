import Button from "@/components/Button";
import React from "react";

interface Flower {
  id: React.Key | null | undefined;
  name: string;
  latinName: string;
  genus: string;
  pictureUrl: string;
  authorId: string;
  sightingsNum: number;
}

const FlowerCard = ({ flower }: { flower: Flower }) => {
  return (
    <div
      className="relative bg-cover bg-no-repeat min-h-[350px]"
      style={{ backgroundImage: `url('${flower.pictureUrl}')` }}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-[rgba(0,0,0,0.0001)] to-[rgba(0,0,0,0.7)] to-[89.5%]"></div>
      <div className="flex flex-col justify-between h-full p-5 relative z-10">
        <a href="#">
          <img
            src={"/images/fav-icon-inactive.svg"}
            className="w-[30px] ml-auto"
          ></img>
        </a>
        <div className="text-center">
          <div className="text-[20px] text-white">{flower.name}</div>
          <div className="italic text-[12px] opacity-70 text-white mb-[20px]">
            {flower.latinName}
          </div>
          <Button
            variant="hoverGradient"
            label="127 sightings"
            className="text-[12px]"
          />
        </div>
      </div>
    </div>
  );
};

export default FlowerCard;
