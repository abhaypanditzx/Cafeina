import React from "react";
import coffee from "../assets/cold-coffee.png";
import { Link } from "react-router-dom";

const Top = () => {
  return (
    <div
      className={` bg-no-repeat bg-cover  xs:bg-pink-bg max-xs:items-start max-sm:hidden bg-gradient-to-tr max-[420px]:hidden from-black to-gray-800  max-xs:bg-contain sm:h-[65vh] lg:h-[80vh] xl:h-[85vh] flex max-xs:h-fit items-center max-xs:p-1 xs:p-5 justify-start `}
    >
      <div className=" sm:w-[60%] lg:w-[55%] max-xs:w-[100%] z-2 flex max-xs:h-[300px] xs:h-full max-xs:p-3 max-xs:justify-center items-start p-2 flex-col ">
        
          <h1 className="lg:text-[80px] max-xs:leading:-[1pc] xl:leading-[80px]  sm:leading-[3.5rem] lg:leading-[6pc]  font-bold  text-shadow tracking-[0.5px] max-xs:text-[50px]  text-white sm:text-[62px]">
           <b className="text-black font-lato"> Cafeína</b> refresh yourself anytime anywhere
          </h1>
   
        <p className="text-[15px] lg:mt-2.5 sm:mt-2  xl:mt-4 z-30 text-shadow xl:w-[600px] lg:w-[500px]   text-white max-sm:hidden">
          Our iconic Signature Blends are slow roasted for the perfect balance
          of rich flavour and smooth taste. We guarantee you the freshest taste
          and finest ingredients, every time. Check out our full range of
          drinks, snacks and meals and discover
        </p>
        <Link to="/menu">
          <button className="bg-white max-[375px]:font-medium max-xs:mt-4 hover:scale-95 max-xs:px-4 max-xs:py-1.5 max-xs:text-sm duration-200 px-6 py-2 rounded-xl sm:mt-4 lg:mt-5 xl:mt-8">
            Explore
          </button>
        </Link>
      </div>
      <div
        className={`coffee-bg  flex items-center sm:right-1 z-1 absolute lg:right-2 xl:right-10 max-xs:hidden  sm:h-[330px] sm:w-[400px] max-xs:justify-center justify-center xl:h-[30.8rem] xl:w-[600px] lg:w-[500px]  lg:h-[23.8rem] bg-contain`}
      >
        <img src={coffee} className="lg:h-[450px] xl:h-[550px] xl:-mt-[80px]  sm:h-[400px]" />
      </div>
    </div>
  );
};

export default Top;
