import React from "react";
import order from "../assets/orders/orderDone.png";
import onTheWay from "../assets/orders/coffee.png";
import { completedOrders } from "../constant";
import tick from "../assets/orders/icons8-tick-96 3.png";
import circle from "../assets/orders/orderTracking/circle-1.png";
import shipping from "../assets/orders/orderTracking/circle-3.png";
import line from "../assets/orders/orderTracking/Rectangle 16.png";

const Orders = () => {
  return (
    <div className="h-full p-10 flex items-center justify-around bg-gray-100 max-xs:gap-y-5 max-xs:flex-col">
      <div className=" shadow-md shadow-gray-500/50 bg-white sm:h-[90vh] max-xs:w-[300px] sm:w-[300px] xl:w-[300px]">
        <div className="bg-[#5B2E0E] w-full h-[4rem] text-white text-xl p-4">
          All Orders
        </div>
        <div className="flex  items-center gap-x-5 p-4 border-b-[1px] border-gray-200">
          <div className="relative ">
            <img src={onTheWay} />
          </div>
          <h4 className="capitalize">flat white</h4>
        </div>
        {completedOrders.map((e, index) => {
          return (
            <div
              key={`order-id-${index}`}
              className="flex  items-center gap-x-5 p-4 border-b-[1px] border-gray-200"
            >
              <div className="relative ">
                <img src={e.oImg} />
                <img
                  src={tick}
                  className="absolute -top-1 -right-2"
                  alt="completed"
                />
              </div>
              <h4 className="capitalize">{e.oName}</h4>
            </div>
          );
        })}
      </div>
      <div className=" shadow-md shadow-gray-500/50 bg-white sm:h-[90vh] max-xs:w-[350px] sm:w-[500px] xl:w-[800px]">
        <div className="flex w-full  h-full sm:flex-row max-xs:flex-col max-xs:gap-y-0 justify-center items-center max-xs:gap-x-0 p-5 sm:gap-x-8">
          {" "}
         <div className="flex max-xs:flex-row relative sm:flex-col ">
         <img className="max-xs:w-[50px] w-[60px] " src={circle} alt="" />
          <span className="absolute max-xs:right-[-7rem] sm:right-[-1rem] sm:top-[5rem] max-xs:top-2 w-max">Order Reviced</span>
         </div>
          <img className="max-xs:h-[40px] max-xs:w-[8px] sm:h-[100px] sm:w-[10px] max-xs:rotate-0 rotate-90" src={line} alt=""  />
                  <div className="flex max-xs:flex-row relative sm:flex-col ">
         <img className="max-xs:w-[50px] w-[60px] " src={circle} alt="" />
          <span className="absolute max-xs:right-[-7rem] sm:right-[-1rem] sm:top-[5rem] max-xs:top-2 w-max">Order Reviced</span>
         </div>
          <img className="max-xs:h-[40px] max-xs:w-[8px] sm:h-[100px] sm:w-[10px] max-xs:rotate-0 rotate-90" src={line} alt=""  />
                   <div className="flex max-xs:flex-row relative sm:flex-col ">
         <img className="max-xs:w-[50px] w-[60px] " src={circle} alt="" />
          <span className="absolute max-xs:right-[-7rem] sm:right-[-1rem] sm:top-[5rem] max-xs:top-2 w-max">Order Reviced</span>
         </div>
          <img className="max-xs:h-[40px] max-xs:w-[8px] sm:h-[100px] sm:w-[10px] max-xs:rotate-0 rotate-90" src={line} alt=""  />
                 <div className="flex max-xs:flex-row relative sm:flex-col ">
         <img className="max-xs:w-[50px] w-[60px] " src={shipping} alt="" />
          <span className="absolute max-xs:right-[-7rem] sm:right-[-1rem] sm:top-[5rem] max-xs:top-2 w-max">on the way</span>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
