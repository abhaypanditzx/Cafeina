import React from "react";

import onTheWay from "../assets/orders/coffee.png";
import { completedOrders } from "../constant";
import tick from "../assets/orders/icons8-tick-96 3.png";
import { orderProcess } from "../constant";
const Orders = () => {
  const refreshIds = () => {
    for (let i = 0; i <= 3; i++) {
      let orderR = Math.round(Math.random() * 10);
      let o = i + "";

      // Declare the variable outside the loop
      const element = document.getElementById(`order-id-${o}`);

      if (element) {
        element.innerHTML = "454488226" + orderR;
      }
    }
  };

  window.onload = function () {
    refreshIds();
  };
  return (
    <div className="h-full p-10 flex items-center   justify-around bg-gray-100 max-lg:gap-y-5 lg:flex-row max-lg:flex-col">
      <div className=" shadow-md  shadow-gray-500/20 bg-white sm:h-[90vh] max-xs:w-[370px] max-[320px]:w-[300px] max-sm:w-[450px] sm:w-[400px] xl:w-[400px]">
        <div className="bg-[#5B2E0E] w-full h-[4rem] text-white text-xl p-4">
          All Orders
        </div>
        <div className="flex  relative items-center gap-x-5 p-4 border-b-[1px] border-gray-200">
          <div className="relative ">
            <img src={onTheWay} />
            <div className="absolute bg-green-500 top-0 right-[4px]  rounded-full h-[10px] w-[10px]"></div>
          </div>
          <div className="flex-col flex-1">
            <h4 className="capitalize">flat white</h4>
            <div className="flex text-gray-800 font-semibold right-20 text-xs">
              Order ID : <div id={`order-id-3`}>454488226 </div>
            </div>
          </div>
          <span className="absolute top-8 text-gray-600 font-semibold right-5 text-xs">
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
              <span className="absolute top-8 text-gray-600 font-semibold right-5 text-xs">
                {e.date}
              </span>
            </div>
          );
        })}
      </div>

      <div className="sm:flex-col max-sm:flex-row xs:w-[300px]  max-xs:w-[300px] max-[320px]:w-[200px] flex items-center">
        {orderProcess.map((e, index) => {
          return (
            <div
              key={`process-id-${index}`}
              className="flex max-sm:flex-row m-auto sm:flex-col w-fit justify-center items-center"
            >
              {/* <div className="bg-brown max-sm:h-[5px] max-[320px]:w-[20px] max-xs:w-[25px] max-sm:w-[20px] sm:h-[20px] sm:w-[5px]"></div> */}

              <div className="flex w-fit items-center relative max-sm:py-4  h-fit">
                <div
                  id={`process-id-${index}`}
                  className="bg-brown flex justify-center items-center max-[320px]:w-[30px] max-[320px]:h-[30px]  min-w-[30px] min-h-[30px] max-xs:h-[40px] max-xs:w-[40px] xs:w-[50px] xs:h-[50px] rounded-full "
                >
                  <img src={e.Picon} className="max-[320px]:h-[15px]" alt="" />
                </div>
                <h5 className="text-lg max-sm:text-[0.7rem] max-[320px]:left-[-10px] max-[320px]:text-[0.5rem] max-xs:left-[0px]  absolute   max-sm:left-[-10px]  max-sm:bottom-[-10px] sm:left-[60px] lg:left-[70px] sm:text-sm  z-40 w-max">
                  {e.Process}
                </h5>
              </div>
              <div
                id={`stick-${index}`}
                className="bg-brown max-sm:h-[5px] max-[320px]:w-[34px] max-xs:w-[50px] max-sm:w-[50px] sm:h-[20px] sm:w-[5px]"
              ></div>
            </div>
          );
        })}
      </div>

      <div className=" shadow-md max-sm:flex-col sm:flex-row shadow-gray-500/20 justify-between flex p-5 items-center bg-white sm:h-[90vh] max-xs:w-[370px] max-[320px]:w-[300px] max-sm:w-[450px] max-sm:justify-start sm:w-[500px]  md-[400px] xl:w-[400px]">
        <div className="flex  h-full flex-col w-[100%]  gap-y-4 p-5">
          <img
            className="md:w-[200px] max-lg:w-[300px] lg:w-[400px] border-black/10 border-[5px]"
            src="https://i.ibb.co/pd4qBy4/flat-White.jpg"
            alt="flat-White"
            border="0"
          />
          <div className="flex  h-full flex-col w-[100%]  gap-y-2 ">
            <h1 className="text-xl text-black capitalize">flat white</h1>

            <h4 className="text-lg text-gray-800  capitalize">
              {" "}
              quantity : <span className="text-black">2x</span>
            </h4>
            <h1 className="text-xl text-gray-800 capitalize">
              total bill : <span className="text-black">400rs</span>
            </h1>
            <button className="bg-red-400 hover:bg-red-500 max-xs:text-sm max-xs:px-2 py-2 mt-2  hover:scale-95  rounded-xl text-white px-4 w-fit h-fit flex items-center">
              {" "}
              cancel order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
