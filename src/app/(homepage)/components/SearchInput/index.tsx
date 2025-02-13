import React from "react";

interface SearchInputProps {
  placeholder: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder }) => {
  return (
    <div className="flex items-center bg-[#F5F5F5] rounded-[5px] p-[20px] w-full">
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent placeholder:font-light w-full outline-none text-[18px] text-black"
      ></input>
      <img src={"/images/pl-icon-search.svg"}></img>
    </div>
  );
};

export default SearchInput;
