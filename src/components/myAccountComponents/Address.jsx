import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosAddCircleOutline } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

const Address = () => {
  const defaultLocation = `Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678`;
  const [currentAddress, setCurrentAddress] = useState(defaultLocation);
  const [isPopup, setIsPopup] = useState(false);
  function getLocation() {
    const successCallback = (position) => {
      console.log(position);
    };

    const errorCallback = (error) => {
      console.log(error);
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }
  return (
    <div className=" lg:w-[650px] md:w-[500px] xl:w-[800px] h-[400px] border-[1px] ">
   
<div className={`h-screen ${
          isPopup ? "fixed " : "hidden"} fixed backdrop-blur-md  left-0 top-0 w-screen bg-gray-500/20 flex justify-center items-center`}>
<div
        className={`${
          isPopup ? "fixed " : "hidden"
        } fixed h-[300px] w-[500px] overflow-hidden rounded-md bg-white shadow-xl top-[50%]left-[50%]`}
      >
        <h1 className="text-xl p-2 text-center text-gray-800  font-poppins font-[500] capitalize">
          edit address
        </h1>
        <RxCross1
          onClick={() => {
            setIsPopup(!isPopup);
          }}
          className="absolute right-2 text-xl cursor-pointer bg-[#5B2E0E] text-white  rounded-full p-0.5 h-6 w-6  top-2"
        />
        <div className="relative w-full flex justify-center items-center gap-y-5 flex-col p-5">
          <textarea
        
            name=""
            id=""
            cols="30"
            value={currentAddress}
            onChange={(e) => {
              setCurrentAddress(e.target.value);
            }}
            rows="5"
            className="bg-gray-100  w-full"
          ></textarea>
          <button onClick={()=>{setCurrentAddress(currentAddress) , setIsPopup(!isPopup)}} className="bg-[#5B2E0E] px-4 py-1.5  w-fit text-white rounded-md">
            save
          </button>
        </div>
      </div>
</div>
      <div
        onClick={() => {
          setIsPopup(!isPopup);
        }}
        className="text-red-500 text-lg px-10 capitalize w-full flex items-center  cursor-pointer gap-x-2 p-4 border-b-[1px]"
      >
        {" "}
        <IoIosAddCircleOutline className="text-[20px]" />{" "}
        <span>add new address</span>
      </div>
      <div className="flex flex-col p-10 gap-4">
        <div className="flex-col flex">
          <h1 className="text-xl font-[500] capitalize">current address :</h1>
          <h2 className="text-md ">{currentAddress}</h2>
        </div>
        <div
          onClick={getLocation}
          className="flex text-gray-500 cursor-pointer gap-x-2 items-center"
        >
          <IoLocationOutline />{" "}
          <span className="text-xs">Use Current Location</span>
        </div>
      </div>
    </div>
  );
};

export default Address;
