import React, { useState } from "react";
import coffee from "../assets/cold-coffee.png";
import { Category } from "../constant";
import OfferingCart from "../components/OfferingCart";
const Home = () => {
  return (
    <div className="overflow-h h-full bg-gray-100 w-screen overflow-hidden">
      <div
        className={` bg-no-repeat bg-cover xs:bg-pink-bg max-xs:bg-coffee-main-bg  sm:h-screen flex max-xs:h-[80vh] items-center  p-5 justify-around `}
      >
        <div
          className={`coffee-bg  flex items-center max-xs:hidden p-5 sm:h-[330px]  justify-center lg:h-[450px]`}
        >
          <img src={coffee} className="lg:h-[500px] sm:h-[400px]" />
        </div>
        <div className="xs:w-[40%] max-xs:w-[100%] flex h-full max-xs:justify-center items-start p-3 flex-col ">
         <div className="leading-[105px] ">
         <h1 className="lg:text-[100px] text-shadow tracking-tight  max-xs:text-[55px] font-bold text-white sm:text-[60px]">
            COFFEE
          </h1>
          <h3 className="lg:text-[40px] text-shadow font-bold max-xs:leading-[32px] sm:leading-[56px] max-xs:text-[25px] text-white sm:text-[20px]">
            NOW REFRESH YOUR MOOD ANYWHERE ANYTIME
          </h3>
         </div>
         <p className="text-[15px] mt-0  text-shadow  text-white max-sm:hidden">
            Our iconic Signature Blends are slow roasted for the perfect balance
            of rich flavour and smooth taste. We guarantee you the freshest
            taste and finest ingredients, every time. Check out our full range
            of drinks, snacks and meals and discover
          </p>
          <button className="bg-white font-medium hover:scale-95 max-xs:px-3 max-xs:py-1.5 max-xs:text-sm duration-200 px-6 py-2 rounded-xl mt-6">
            Explore
          </button>
        </div>
      </div>
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
                    className={` ${e.class}   text-white bg-no-repeat overflow-hidden hover:scale-95 bg-cover cursor-pointer max-sm:w-[100px] max-sm:h-[100px] max-xs:w-[60px]  max-xs:h-[60px] border-[2px] hover:border-green-500  sm:w-[110px] sm:h-[110px] max-xs:text-xs text-xl text-shadow font-bold rounded-full `}
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
    </div>
  );
};

export default Home;
