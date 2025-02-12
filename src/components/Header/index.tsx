import Image from "next/image";
import React from "react";
import Container from "../Container";
import Button from "../Button";

interface HeaderProps {
  onOpenLogin: () => void;
  onOpenRegister: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenLogin, onOpenRegister }) => {
  return (
    <div className="p-[20px] bg-white">
      <Container>
        <div className="flex items-center justify-between">
          <Image src="/images/logo.svg" alt="Logo" width={170} height={30} />

          <ul className="list-none flex items-center space-x-[45px] text-[#949EA0] text-[14px]">
            <li>
              <a href="#">Flowers</a>
            </li>
            <li>
              <a href="#">Latest Sightings</a>
            </li>
            <li>
              <a href="#">Favorites</a>
            </li>
            <li>
              <a className="text-[#DF9186]" href="#" onClick={onOpenLogin}>
                Login
              </a>
            </li>
            <Button rounded label="New Account" onClick={onOpenRegister} />
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Header;
