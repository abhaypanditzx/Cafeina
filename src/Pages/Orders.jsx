import React from "react";
import order from "../assets/orders/orderDone.png";
import onTheWay from "../assets/orders/coffee.png";
import { completedOrders } from "../constant";
import tick from "../assets/orders/icons8-tick-96 3.png";
import { orderProcess } from "../constant";
import { useState } from "react";

const Orders = () => {
  const refreshIds = () => {
    for (let i = 0; i <= 3; i++) {
      let orderR = Math.round(Math.random() * 10);
      let o = i + '';
  
      // Declare the variable outside the loop
      const element = document.getElementById(`order-id-${o}`);
  
      if (element) {
        element.innerHTML = "454488226" + orderR;
      }
    }
  };
  
  window.onload = function (){
  refreshIds();

  }
  return (
    <div className="h-full p-10 flex items-center   justify-around bg-gray-100 max-sm:gap-y-5 max-sm:flex-col">
      <div className=" shadow-md  shadow-gray-500/20 bg-white sm:h-[90vh] max-xs:w-[370px] max-sm:w-[450px] sm:w-[400px] xl:w-[450px]">
        <div className="bg-[#5B2E0E] w-full h-[4rem] text-white text-xl p-4">
          All Orders
        </div>
        <div className="flex  relative items-center gap-x-5 p-4 border-b-[1px] border-gray-200">
          <div className="relative ">
            <img src={onTheWay} />
          </div>
          <div className="flex-col flex-1">
                <h4 className="capitalize">flat white</h4>
                <div className="flex text-gray-800 font-semibold right-20 text-xs">
                  Order ID : <div id={`order-id-3`}>454488226 </div>
                </div>
              </div>
          <span className="absolute top-1 text-gray-600 font-semibold right-2 text-xs">
            21 dec 2023
          </span>
        </div>
        {completedOrders.map((e, index) => {
          return (
            <div
              key={`order-key-${index}`}
              className="flex relative items-center gap-x-5 p-4 border-b-[1px] border-gray-200"
            >
              <div className="relative ">
                <img src={e.oImg} />
                <img
                  src={tick}
                  className="absolute -top-1 -right-2"
                  alt="completed"
                />
              </div>
              <div className="flex-col flex-1">
                <h4 className="capitalize">{e.oName}</h4>
                <div className=" text-gray-800 flex font-semibold right-20 text-xs">
                  Order ID : <div id={`order-id-${index}`}>454488226 </div>
                </div>
              </div>
              <span className="absolute top-5 text-gray-600 font-semibold right-2 text-xs">
                {e.date}
              </span>
            </div>
          );
        })}
      </div>
      <div className=" shadow-md shadow-gray-500/20 justify-center flex p-10  bg-white sm:h-[90vh] max-xs:w-[370px] max-sm:w-[450px] max-sm:justify-start sm:w-[500px] xl:w-[800px]">
        <div className="flex-col w-fit flex items-center">
          {orderProcess.map((e, index) => {
            return (
              <div
                key={`process-id-${index}`}
                className="flex  flex-col items-center"
              >
                <div className="bg-brown h-[20px] w-[5px]"></div>

                <div className="flex w-fit items-center relative  h-fit">
                  <div
                    id={`process-id-${index}`}
                    className="bg-brown flex justify-center items-center  min-w-[50px] min-h-[50px] max-xs:h-[50px] max-xs:w-[50px] xs:w-[60px] xs:h-[60px] rounded-full "
                  >
                    <img src={e.Picon} className="" alt="" />
                  </div>
                  <h5 className="text-lg  absolute max-xs:left-[60px] max-xs:text-sm xs:left-[100px] w-max">
                    {e.Process}
                  </h5>
                </div>
                <div className="bg-brown h-[20px] w-[5px]"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Orders;
