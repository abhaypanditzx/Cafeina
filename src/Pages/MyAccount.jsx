import React, { useState, useContext, useRef } from "react";
import { sideLinks } from "../constant";
import Address from "../components/myAccountComponents/Address";
import UserContext from "../components/UserContext";
import { Link } from "react-router-dom";
const MyAccount = () => {
  const {
    userId,
    email,
    password,
    userName,
    setPassword,
    setEmail,
    profilePicture,
    phone,
  } = useContext(UserContext);
  const DefaultAddress = `Street:  A-3, 1st Floor, Raj Industrial Estate, Military Road, Marol, Andheri(e),  Maharashtra, India`;
  const [address, setAddress] = useState(DefaultAddress);

  const [currentComponent, setCurrentComponent] = useState(<Address />);

  return (
    <>
      {userId ? (
        <div className="h-full max-xs:flex-col w-full flex items-center justify-between p-3 gap-2 bg-gray-100">
          <div className=" min-w-[200px] min-h-[600px] max-xs:w-[100%]  w-[400px] sm:h-[500px] border-[1px] bg-white">
            <div className="flex flex-col items-center gap-y-2  p-10">
              <div className="overflow-hidden w-[100px] ">
                <img
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIL1yCRUIDvX_iqoqxnb0wZQBobBlbTwf1cR5I95cfpA&s"
                  }
                  className="scale-150 w-[100px]"
                  alt="pfp"
                />
              </div>
              <h1 className="text-[20px] font-poppins  font-[500] " id="myName">
                {userName}
              </h1>
              <h2 className="text-[14px] text-gray-600 font-poppins font-[400]">
                {email}
              </h2>
            </div>
            <ul className="capitalize max-xs:hidden h-fit flex flex-col">
              {sideLinks.map((e) => {
                return (
                  <li
                    key={e.id}
                    id={`sidelink-id-${e.id}`}
                    onClick={() => {
                      setCurrentComponent(e.component);
                    }}
                    className="border-t-[1px] py-6 cursor-pointer flex justify-start items-center gap-x-4 hover:bg-[#f4f4f4] cursor  px-4"
                  >
                    <img src={e.img} alt="icon" className="h-[20px]" />
                    <span>{e.name}</span>
                  </li>
                );
              })}
            </ul>
            {/*htmlFor    mobile  */}
            <div className="hidden flex-col  h-full max-xs:flex gap-y-4 p-2">
              <div className="address">
                <h1 className="heading">Address</h1>
                <textarea
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  className="bg-gray-100 h-[75px] p-2 w-full"
                />
              </div>
              <div className="phone">
                <h1 className="heading">phone number</h1>
                <input
                  type="tel"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  className="bg-gray-100 h-[40px] p-2 w-full"
                  value={phone}
                />
              </div>
              <div className="email">
                <h1 className="heading">email </h1>
                <input
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="bg-gray-100 h-[40px] p-2 w-full"
                  value={email}
                />
              </div>
              <div className="password">
                <h1 className="heading">password</h1>
                <input
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="bg-gray-100 h-[40px] p-2 w-full"
                  value={password}
                />
              </div>
            </div>
            <button className="bg-red-600 hidden max-xs:block self-center m-5 w-fit text-white font-poppins px-4 py-1 rounded-lg">
              save
            </button>
          </div>
          <div className=" min-w-[200px] min-h-[600px] max-xs:hidden max-md:w-[500px]  w-[900px] justify-center items-center flex h-[500px] border-[1px] bg-white">
            {currentComponent}
          </div>
        </div>
      ) : (
        <div className="h-screen w-full justify-center items-center flex ">
          <div className="flex  h-screen justify-center items-center bg-black/10  flex-col w-full gap-5">
            <Link to="/login">
              <button className="bg-blue-600 h-fit hover:bg-blue-700  text-white px-4 w-[200px] py-2 ">
                login
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-blue-600 h-fit hover:bg-blue-700  text-white px-4 w-[200px] py-2 ">
                signUp
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default MyAccount;
