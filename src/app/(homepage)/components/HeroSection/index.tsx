import Container from "@/components/Container";
import Image from "next/image";
import React from "react";
import SearchInput from "../SearchInput";

const HeroSection = () => {
  return (
    <div className="bg-[url('/images/pl-hero.png')] bg-cover bg-center bg-no-repeat min-h-[500px] flex items-center justify-center">
      <Container className="text-center">
        <h1 className="font-semibold text-white text-[40px]">
          Discover flowers around you
        </h1>
        <p
          className="text-[17px] mt-[5px] opacity-75 mb-[45px] text-white"
          style={{ fontFamily: "Playfair Display" }}
        >
          Explore between more than 8.427 sightings
        </p>
        <SearchInput placeholder="Looking for something specific?" />
      </Container>
    </div>
  );
};

export default HeroSection;
