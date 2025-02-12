"use client";
import Header from "@/components/Header";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FlowersGrid from "./components/FlowersGrid";
import LoginModal from "./components/LoginModal";
import { useState, useEffect } from "react";
import RegisterModal from "./components/RegisterModal";

export default function Home() {
  const flowers = [
    {
      id: "1",
      name: "Flower 1",
      latinName: "Latin Flower 1",
      genus: "Genus 1",
      pictureUrl: "/images/pl-image.png",
      authorId: "Author",
      sightingsNum: 0,
    },
    {
      id: "2",
      name: "Flower 2",
      latinName: "Latin Flower 2",
      genus: "Genus 1",
      pictureUrl: "/images/pl-image.png",
      authorId: "Author",
      sightingsNum: 0,
    },
    {
      id: "3",
      name: "Flower 3",
      latinName: "Latin Flower 3",
      genus: "Genus 1",
      pictureUrl: "/images/pl-image.png",
      authorId: "Author",
      sightingsNum: 0,
    },
    {
      id: "4",
      name: "Flower 4",
      latinName: "Latin Flower 4",
      genus: "Genus 1",
      pictureUrl: "/images/pl-image.png",
      authorId: "Author",
      sightingsNum: 0,
    },
    {
      id: "5",
      name: "Flower 5",
      latinName: "Latin Flower 5",
      genus: "Genus 1",
      pictureUrl: "/images/pl-image.png",
      authorId: "Author",
      sightingsNum: 0,
    },
    {
      id: "6",
      name: "Flower 6",
      latinName: "Latin Flower 6",
      genus: "Genus 1",
      pictureUrl: "/images/pl-image.png",
      authorId: "Author",
      sightingsNum: 0,
    },
    {
      id: "7",
      name: "Flower 7",
      latinName: "Latin Flower 7",
      genus: "Genus 1",
      pictureUrl: "/images/pl-image.png",
      authorId: "Author",
      sightingsNum: 0,
    },
  ];
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  useEffect(() => {
    if (showLoginModal || showRegisterModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showLoginModal]);

  return (
    <div>
      <Header
        onOpenLogin={() => setShowLoginModal(true)}
        onOpenRegister={() => setShowRegisterModal(true)}
      />
      <HeroSection />
      <FlowersGrid flowers={flowers}></FlowersGrid>
      {showLoginModal && (
        <LoginModal closeModal={() => setShowLoginModal(false)} />
      )}
      {showRegisterModal && (
        <RegisterModal closeModal={() => setShowRegisterModal(false)} />
      )}
    </div>
  );
}
