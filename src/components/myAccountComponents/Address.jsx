import React from "react";
import { IoLocationOutline  } from "react-icons/io5";
import { IoIosAddCircleOutline } from "react-icons/io";
const Address = () => {
  return (
    <div className=" lg:w-[650px] md:w-[500px] xl:w-[800px] h-[400px] border-[1px] ">
      <div className="text-red-500 text-lg px-10 capitalize w-full flex items-center  cursor-pointer gap-x-2 p-4 border-b-[1px]">
        {" "}
        <IoIosAddCircleOutline className="text-[20px]"/> <span>add new address</span>
      </div>
      <div className="flex flex-col p-10 gap-4">
         <div className="flex-col flex">
         <h1 className="text-xl font-[500] capitalize">current address :</h1>
        <h2 className="text-md ">
          Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678
        </h2>
         </div>
        <div className="flex text-gray-500 cursor-pointer gap-x-2 items-center">
          <IoLocationOutline /> <span className="text-xs">Use Current Location</span>
        </div>
      </div>
    </div>
  );
};

export default Address;
