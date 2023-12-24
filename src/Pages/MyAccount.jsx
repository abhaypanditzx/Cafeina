import React, { useState } from "react";
import address from "../assets/icons/address.png";
import history from "../assets/icons/history.png";
import logout from "../assets/icons/logout.png";
import Address from "../components/myAccountComponents/Address";
import OrderHistory from "../components/myAccountComponents/OrderHistory";

const MyAccount = () => {
  const [currentComponent, setCurrentComponent] = useState(<Address />);
  const sideLinks = [
    { id: 1, img: address, name: "my address", component: <Address /> },
    { id: 2, img: history, name: "order history", component: <OrderHistory /> },
    { id: 3, img: logout, name: "logout", component: false},
  ];
  return (
    <div className="h-screen w-full flex items-center justify-between p-2 gap-2 bg-gray-100">
      <div className=" min-w-[200px] min-h-[600px] max-md:w-[0px] max-xs:hidden  w-[400px] h-[500px] border-[1px] bg-white">
        <div className="flex flex-col items-center gap-y-2  p-10">
          <div className="overflow-hidden w-[100px] ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIL1yCRUIDvX_iqoqxnb0wZQBobBlbTwf1cR5I95cfpA&s"
              className="scale-150 w-[100px]"
              alt=""
            />
          </div>
          <h2 className="text-[20px] font-poppins font-[500]">Abhay Pandit</h2>
          <h2 className="text-[17px] font-poppins font-[400]">
            +91 xxxx xxxx xx
          </h2>
        </div>
        <ul className="capitalize h-fit flex flex-col">
          {sideLinks.map((e) => {
            return (
              <li
                key={e.id}
                id={`sidelink-id-${e.id}`}
                onClick={() => {
                  setCurrentComponent(e.component);
                }}
                className="border-t-[1px] py-6 flex justify-start items-center gap-x-4 hover:bg-[#f4f4f4] cursor  px-4"
              >
                <img src={e.img} alt="icon" className="h-[20px]" />
                <span>{e.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className=" min-w-[200px] min-h-[600px] max-md:w-[500px]  w-[900px] justify-center items-center flex h-[500px] border-[1px] bg-white">
        {currentComponent}
      </div>
    </div>
  );
};

export default MyAccount;
