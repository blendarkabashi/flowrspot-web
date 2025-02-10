import React from "react";

interface ButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer px-[22px] py-[8px] rounded-[50px] bg-gradient-to-l from-[#EAA79E] to-[#ECBCB3] shadow-[0px_15px_20px_rgba(234,168,159,0.2)] text-white ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
