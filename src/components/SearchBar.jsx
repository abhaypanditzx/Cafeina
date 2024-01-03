import React, { useContext, useState } from "react";
import UserContext from "./UserContext";
import { IoMdSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const SearchBar = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [hidden, setHidden] = useState("hidden");
  const handleInputFocus = () => {
    setIsInputFocused(true);
    // let elem =  document.getElementById('search-main')
    // elem.style.backdropFilter = "blur(10px)"
  };

  // Event handler when input loses focus
  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const {
    coffeeData,
    searchQuery,
    setSearchQuery,
    searchResults,
    setSearchResults,
  } = useContext(UserContext);
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    const filteredResults = coffeeData.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div className="p-4  relative">
      <div
        id="search-main"
        className="bg-gray-200 items-center   justify-center overflow-hidden flex w-fit max-xs:rounded-sm rounded-sm "
      >
        <IoMdSearch className="text-xl  mx-2  text-gray-400 max-xs:hidden cursor-pointer" />
        <input
          type="text"
          onClick={() => {
            setHidden("absolute");
          }}
          id="search-input"
          placeholder="Search..."
          className="outline-none max-sm:w-[200px] max-xs:w-[140px]   px-2 sm:w-[300px] placeholder:px-4 bg-transparent"
          value={searchQuery}
          onChange={handleSearch}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          autoComplete="off"
        />
        <button
          className="bg-[#5B2E0E] py-3 max-xs:text-sm max-xs:px-0.5  max-xs:py-1 px-2 hover:text-gray-50 text-white"
          onClick={handleSearch}
        >
          <span className="max-xs:hidden">Search</span>
          <IoMdSearch className="text-xl  mx-2  text-white xs:hidden cursor-pointer" />
        </button>
      </div>
      <div
        className={`fixed ${
          isInputFocused ? "block" : "hidden"
        } top-[4.5rem] backdrop-blur-sm h-[100vh] w-[100vw]  left-0  max-xs:top-[4rem] bg-gray-400/20  `}
      >
        <ul
          id="search-data"
          className={`absolute ${
            isInputFocused ? "block" : "hidden"
          } left-[6rem] h-[300px]  max-h-[20rem]  max-xs:translate-x-[-50%] max-xs:left-[50%] max-sm:w-[400px] max-xs:w-[300px] sm:w-[500px] overflow-scroll bg-white `}
        >
          <div className="text-lg text-gray-500 font-[600] w-full flex justify-between capitalize p-2">
            <li>discover more</li>{" "}
            <button
              onClick={() => {
                setIsInputFocused(false);
              }}
            >
              <RxCross2 />
            </button>
          </div>
          {searchResults.map((result) => (
            <div
              key={result.id}
              className="flex border-b-[1px] py-2  relative w-full items-center  hover:bg-blue-50 cursor-pointer"
            >
              <img src={result.image_url}  className="max-h-[20px] max-w-[2opx]" alt="" />
              <li
               
                className="font-rubik px-4 py-1.5"
              >
                {result.name}
              </li>
              <IoMdSearch className="text-xl  absolute right-4  w-fit text-gray-400 cursor-pointer" />

            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
