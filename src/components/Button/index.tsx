import React from "react";
import Spinner from "../../../public/Icons/Spinner";

interface ButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;
  variant?: "default" | "hoverGradient";
  rounded?: Boolean;
  loading?: Boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  className,
  onClick,
  variant = "default",
  rounded,
  loading,
}) => {
  const defaultStyles = `px-[22px] py-[8px] bg-gradient-to-l from-[#EAA79E] to-[#ECBCB3] 
                          shadow-[0px_15px_20px_rgba(234,168,159,0.2)] hover:shadow-[0px_15px_20px_rgba(234,168,159,0.4)] transition-all`;

  const gradientStyles = `px-[15px] py-[8px] bg-[#0000007e] transition-all duration-300 
                         hover:bg-gradient-to-l hover:from-[#EAA79E] hover:to-[#ECBCB3] 
                         hover:shadow-[0px_15px_20px_rgba(234,168,159,0.2)]`;

  return (
    <button
      onClick={onClick}
      className={`cursor-pointer text-white flex items-center justify-center
                  ${
                    variant === "hoverGradient" ? gradientStyles : defaultStyles
                  } 
                  ${rounded ? "rounded-[50px]" : ""}
                  ${className || ""}`}
    >
      {loading ? <Spinner /> : label}
    </button>
  );
};

export default Button;
