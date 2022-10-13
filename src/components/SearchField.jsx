import logo from "/src/assets/images/search.svg";

import React, { useState } from "react";

export const SearchField = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    event.preventDefault();

    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSearchValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex relative items-center w-full gap-2 p-2 border-gray-700 border-[1px] rounded-lg bg-black/10 mt-4"
    >
      <label htmlFor="search" className="">
        <img src={logo} alt="Search Icon" className="w-8 h-auto" />
      </label>
      <input
        type="search"
        name="search"
        id="search"
        className="appearance-none placeholder:text-gray-700 placeholder:text-[1em] rounded-lg p-2 focus:outline-none w-full bg-transparent focus:bg-transparent disabled:cursor-not-allowed placeholder:invisible hover:placeholder:visible"
        value={searchValue}
        autoComplete="off"
        placeholder="Sorry😓, this feature is still under development"
        onChange={handleChange}
        disabled
      />
    </form>
  );
};
