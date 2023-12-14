import React, { useState } from "react";
import { Category, trustedCompanyLogo } from "../constant";
import OfferingCart from "../components/OfferingCart";

import Top from "../components/Top";
const Home = () => {
  return (
    <div className="overflow-h h-full bg-gray-100 w-screen overflow-hidden">
      <Top />
      <div className="bg-flex flex-col  items-center w-full ">
        {/* CATEGORY */}
        <div className="sm:px-10 max-sm:px-5 py-4 flex  flex-col">
          <h1 className=" max-xs:text-xl text-3xl font-bold text-gray-800 py-3 capitalize ">
            Handcrafted Curations
          </h1>

          <div className="flex relative flex-row justify- items-center p-4 w-full max-xs:gap-1  gap-24">
            {Category.map((e) => {
              return (
                <div key={e.class} className="flex items-center flex-col ">
                  <div
                    className={` ${e.class}  max-[375px]:h-[65px]  max-[375px]:w-[65px]  text-white bg-no-repeat overflow-hidden hover:scale-95 bg-cover cursor-pointer max-sm:w-[100px] max-sm:h-[100px] max-xs:w-[80px]  max-xs:h-[80px] border-[2px] hover:border-green-500  sm:w-[110px] sm:h-[110px] max-xs:text-xs text-xl text-shadow font-bold rounded-full `}
                  ></div>
                  <h3 className="max-xs:text-[10px] w-max p-2">{e.title}</h3>
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE SIZE CARTS  */}
        <OfferingCart />
      </div>
      {/* Trusted Companies Section */}
      <div className="w-[80%] border-[2px] mt-10 h-[200px] max-xs:h-[130px] rounded-xl mb-5  m-auto border-[#5B2E0E]">
        <h1 className="text-3xl max-xs:text-[16px] h-fit m-auto w-fit py-1">Trusted Companies</h1>
        <div className="flex justify-center h-fit w-full items-center max-xs:px-2 sm:gap-x-4 ">
          {trustedCompanyLogo.map((e, index) => {
            return (
              <div key={index} className=" flex justify-center items-center sm:h-[130px]  max-xs:h-[80px] max-xs:w-[100px] xs:w-[140px]">
                <img
                  className=" object-cover"
                  src={e.logo}
                  alt="trusted-company-logo"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
