import React from "react";

interface InputProps {
  label: string;
  type?: string;
  value: string;
  id: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  value,
  id,
  placeholder = " ",
  onChange,
  className = "",
}) => {
  return (
    <div className={`relative ${className}`}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        max={type === "date" ? "2008-12-31" : undefined}
        id={id}
        className="block rounded-[3px] px-2.5  pt-4 pb-[7px] w-full text-sm text-gray-900 bg-[#F5F6F7] border border-[#DFE5EA] appearance-none focus:outline-none focus:ring-0 peer"
        placeholder=" "
      />
      <label
        htmlFor={id}
        className="absolute text-sm text-[#949EA0] duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
