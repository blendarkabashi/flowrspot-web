"use client";

import Header from "@/components/Header";
import HeroSection from "./components/HeroSection";
import FlowersGrid from "./components/FlowersGrid";
import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";
import ViewUserModal from "./components/ViewUserModal";
import { useState, useEffect } from "react";
import axiosInstance from "@/lib/axiosInstance";

export default function Home() {
  const [flowers, setFlowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showViewUserModal, setShowViewUserModal] = useState(false);

  useEffect(() => {
    const fetchFlowers = async () => {
      try {
        const response = await axiosInstance.get("/flowers");
        setFlowers(response.data.items);
      } catch (err) {
        setError("Failed to fetch flowers. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchFlowers();
  }, []);

  useEffect(() => {
    if (showLoginModal || showRegisterModal || showViewUserModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showLoginModal, showRegisterModal, showViewUserModal]);

  return (
    <div>
      <Header
        onOpenLogin={() => setShowLoginModal(true)}
        onOpenRegister={() => setShowRegisterModal(true)}
        onOpenViewModal={() => setShowViewUserModal(true)}
      />
      <HeroSection />
      {loading ? (
        <div className="text-center text-gray-500 text-lg mt-10">
          Loading flowers...
        </div>
      ) : error ? (
        <div className="text-center text-red-500 text-lg mt-10">{error}</div>
      ) : (
        <FlowersGrid flowers={flowers} />
      )}
      {showLoginModal && (
        <LoginModal closeModal={() => setShowLoginModal(false)} />
      )}
      {showRegisterModal && (
        <RegisterModal closeModal={() => setShowRegisterModal(false)} />
      )}
      {showViewUserModal && (
        <ViewUserModal closeModal={() => setShowViewUserModal(false)} />
      )}
    </div>
  );
}
