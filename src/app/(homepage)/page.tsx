import Header from "@/components/Header";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FlowersGrid from "./components/FlowersGrid";

export default function Home() {
  const flowers = [
    { id: 1, name: "Flower 1" },
    { id: 2, name: "Flower 2" },
    { id: 3, name: "Flower 3" },
    { id: 4, name: "Flower 4" },
    { id: 5, name: "Flower 5" },
    { id: 6, name: "Flower 6" },
    { id: 7, name: "Flower 7" },
  ];
  return (
    <div className="">
      <Header />
      <HeroSection />
      <FlowersGrid flowers={flowers}></FlowersGrid>
    </div>
  );
}
