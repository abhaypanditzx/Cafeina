import React, { useState } from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { IoChevronDownSharp } from "react-icons/io5";
import { FooterDropDown } from "../constant";
const Footer = () => {
  const HandleDropDown = (id, DropDownId) => {
    let chevron = document.getElementById(id);
    let DropDown = document.getElementById(DropDownId);

    if (chevron.style.transform === "rotate(0deg)") {
      DropDown.style.display = "block";
      chevron.style.transform = "rotate(180deg)";
    } else {
      DropDown.style.display = "none";

      chevron.style.transform = "rotate(0deg)";
    }
  };

  return (
    <footer className="bg-[#5B2E0E] w-full flex flex-col px-5 py-10 h-full">
      <div>
        <h1 className="text-white text-3xl p-2 max-xs:text-2xl max-xs:p-1  ">
          Coffee
        </h1>
        <span className="text-gray-300 max-xs:text-[10px] sm:text-sm px-2  ">
          powered by exc.company 2023
        </span>
      </div>

      <div className="flex flex-col text-gray-200 items-center max-xs:py-2  w-full">
        <h5 className="sm:text-lg max-xs:text-sm">Follow us</h5>
        <div className="flex space-x-2 p-1.5 justify-center ">
          <FaFacebookF className="sm:text-2xl max-sm:text-base cursor-pointer" />
          <FaInstagram className="sm:text-2xl max-sm:text-base cursor-pointer" />
        </div>
      </div>
      <div className="w-[350px] mt-10 m-auto h-full max-xs:w-[200px] justify-center gap-4 flex flex-wrap">
        <button className="bg-orange-500 max-xs:text-xs max-xs:px-2  text-white rounded-md hover:underline px-5 py-1.5 ">
          {" "}
          About Us
        </button>
        <button className="bg-orange-500 max-xs:text-xs max-xs:px-2  text-white rounded-md hover:underline px-5 py-1.5 ">
          {" "}
          Locate Us
        </button>
        <button className="bg-orange-500 max-xs:text-xs max-xs:px-2  text-white rounded-md hover:underline px-5 py-1.5 ">
          Privacy Policy
        </button>
        <button className="bg-orange-500 max-xs:text-xs max-xs:px-2  text-white rounded-md hover:underline px-5 py-1.5 ">
          Terms & Conditions
        </button>
      </div>
      {FooterDropDown.map((e, index) => {
        return (
          <div key={index} className="flex flex-col   w-[90%]  ">
            <div
              onClick={() => HandleDropDown(e.id, e.DropDownId)}
              className="border-b-[1px] text-white flex  items-center justify-between px-5 border-white w-full h-[50px]"
            >
              <h4>{e.mainTitle}</h4>
              <IoChevronDownSharp id={e.id} className={`cursor-pointer`} />
            </div>

            <div id={e.DropDownId} className="bg-gray-900 hidden w-full h-fit">
              <ul>
                {e.dropDownLinks.map((linkObj) => (
                  <li
                    className="border-b-[1px] max-xs:text-xs hover:text-white cursor-pointer text-white/80 px-4 py-1 border-[#a6a6a686]"
                    key={linkObj.Link}
                  >
                    {linkObj.Link}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </footer>
  );
};

export default Footer;
