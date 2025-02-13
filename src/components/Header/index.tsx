"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Container from "../Container";
import Button from "../Button";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { login, logout } from "@/store/slices/authSlice";

interface HeaderProps {
  onOpenLogin: () => void;
  onOpenRegister: () => void;
  onOpenViewModal: () => void;
}

const Header: React.FC<HeaderProps> = ({
  onOpenLogin,
  onOpenRegister,
  onOpenViewModal,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.auth.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        dispatch(login({ user: JSON.parse(storedUser) }));
      }
      setLoading(false);
    }
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("user");
  };

  if (loading) return null;

  return (
    <div className="p-[20px] bg-white">
      <Container>
        <div className="flex items-center justify-between">
          <Image src="/images/logo.svg" alt="Logo" width={170} height={30} />

          <ul className="hidden md:flex list-none items-center space-x-[30px] xl:space-x-[45px] text-[#949EA0] text-[12px] xl:text-[14px]">
            <li>
              <a href="#">Flowers</a>
            </li>
            <li>
              <a href="#">Latest Sightings</a>
            </li>
            <li>
              <a href="#">Favorites</a>
            </li>
            {user ? (
              <div
                className="flex items-center cursor-pointer"
                onClick={onOpenViewModal}
              >
                <div>
                  {user.firstName} {user.lastName}
                </div>
                <img
                  src={user?.pictureUrl || "/images/profile-placeholder.jpg"}
                  className="rounded-full h-[40px] w-[40px] ml-[20px]"
                  alt="User Profile"
                />
              </div>
            ) : (
              <>
                <li>
                  <a className="text-[#DF9186]" href="#" onClick={onOpenLogin}>
                    Login
                  </a>
                </li>
                <Button rounded label="New Account" onClick={onOpenRegister} />
              </>
            )}
          </ul>
          <img className="block md:hidden" src={"/images/hamburger.svg"}></img>
        </div>
      </Container>
    </div>
  );
};

export default Header;
