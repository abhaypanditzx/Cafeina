import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";
import { offeringCart } from "../constant";

const OfferingCart = () => {
  const [display, setDisplay] = useState(false);

  return (
    <div className="flex bg-gray-400 bg-transparent w-[95%]  justify-center relative  m-auto flex-col items- h-full p-2">
      <h1 className=" sm:text-3xl max-xs:text-xl text-gray-800 capitalize ">
        latest offering
      </h1>
      <div className="flex  w-full items-start justify-start   m-auto max-xs:gap-x-0 gap-5  flex-wrap h-full py-2">
                 {/* THREE MAIN CARTS */}
 {offeringCart.map((e , index)=>{
  return(
    <div id={`offering-product-${index}`} key={index} className="max-xs:w-[180px] max-[375px]:w-[166px] max-xs:m-auto sm:w-[300px] sm:h-[320px] mt-10 bg-white shadow-md shadow-gray-500/40 ]">
    <img src={e.productImg} className="w-full sm:h-[167px] max-xs:h-[100px] object-cover " />
    <div className="flex flex-col max-xs:p-2 sm:p-5">
      <h4 className="text-[14px] max-[375px]:text-[12px] max-xs:text-[13px] text-gray-900 font-semibold">
        {e.productName}
      </h4>
      <span className="max-xs:text-[10px] font-light text-[15px] text-gray-800">
       {e.ProductKcal}
      </span>
      <div className="flex mt-10  max-xs:mt-4 justify-around items-center">
        <h4 className="text-[15px] max-xs:text-[13px] max-[375px]:text-[12px] font-semibold">{e.productPrice}</h4>
        <button className="px-5 py-1.5 max-xs:py-0.5 max-xs:px-2 max-[375px]:text-[10px] sm:text-sm text-white font-semibold te bg-green-700 max-xs:text-[8px] sm:text-md w-max rounded-2xl ">
          Add Item
        </button>
      </div>
    </div>
  </div>
  )
 })}
        
        <Link to="menu">
          <button className=" flex  bg-gray-200 hover:text-blue-500 rounded-2xl items-center max-xs:hidden  text-sm h-fit w-fit px-5 py-1.5 text-gray-800">
            <span> more</span>
            <MdNavigateNext />
          </button>
        </Link>
      </div>
   
    </div>
  );
};

export default OfferingCart;
