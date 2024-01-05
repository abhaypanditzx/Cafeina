import React, { useContext, useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import UserContext from "../components/UserContext";
import { Link } from "react-router-dom";
const Menu = () => {
  const {
    coffeeData,
    setCoffeeData,
    isDataLoaded,
    currentProduct,
    setCurrentProdcut,
    setCart,
    cart
  } = useContext(UserContext);
  
  const updatePreviewData = (e) => {
    setCurrentProdcut(e);
  };

  return (
    <div className="p-5 bg-gray-100">
      {isDataLoaded ? (
        <div className="flex flex-wrap justify-center items-center ">
          {coffeeData.map((e) => {
            return (
              <div
                key={`product-id-${e.id}`}
                className="border-[1px] bg-white border-gray-200 rounded-md min-w-[300px] m-2"
              >
                <div className="p-4 ">
                  <div className="h-[200px] w-fit overflow-hidden border-[0px]  ">
                    <img
                      src={e.image_url}
                      className="h-[200px] rounded-sm  bg-[#f7f7f7] scale-95 hover:scale-110"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between border-b items-start py-2 p-2">
                    <Link
                      onClick={() => updatePreviewData(e)}
                      to="/ProductPreview"
                      className="flex flex-col "
                    >
                      <h1
                        id={`product-name-id-${e.id}`}
                        className="text-lg font-[600] cursor-pointer tracking-wide"
                      >
                        {e.name}
                      </h1>

                      <h3 className=" text-gray-600 text-xs">{`(${e.flavor_profile})`}</h3>
                    </Link>

                    <h5 className="text-gray-500 text-sm">{e.weight + "g"}</h5>
                  </div>
                  <div className="flex p-2 justify-between">
                    <h3 className=" text-red-600 text-lg">{"$" + e.price}</h3>
                    <button onClick={()=>{setCart(cart+1)}}  className="text-white px-2 items-center gap-x-3 py-1.5 flex text-sm rounded-md hover:bg-green-700 bg-green-600 ">
                      <IoCartOutline />
                      <span>add to cart</span>{" "}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="h-screen w-full flex items-center justify-center">
          <h1 className=" text-lg font-bold ">loading...</h1>
        </div>
      )}
    </div>
  );
};

export default Menu;
