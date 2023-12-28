import React, { useState, useContext } from "react";
import { sideLinks } from "../constant";
import Address from "../components/myAccountComponents/Address";
import UserContext from "../components/UserContext";
const MyAccount = () => {
  const { user } = useContext(UserContext);
  const DefaultAddress = `Street:  A-3, 1st Floor, Raj Industrial Estate, Military Road, Marol, Andheri(e),  Maharashtra, India`;
  const [email, setEmail] = useState("abhaypanditzx@gmail.com");
  const [password, setPassword] = useState("testpassword123");
  const [phone, setPhone] = useState("+91 xxxx-nnnnnn");
  const [address, setAddress] = useState(DefaultAddress);
  const [currentComponent, setCurrentComponent] = useState(<Address />);
  const updateUserInfo = () => {
    console.log("user info updated");
  };
  return (
    <>
      {user ? (
        <div className="h-full max-xs:flex-col w-full flex items-center justify-between p-3 gap-2 bg-gray-100">
          <div className=" min-w-[200px] min-h-[600px] max-xs:w-[100%]  w-[400px] sm:h-[500px] border-[1px] bg-white">
            <div className="flex flex-col items-center gap-y-2  p-10">
              <div className="overflow-hidden w-[100px] ">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIL1yCRUIDvX_iqoqxnb0wZQBobBlbTwf1cR5I95cfpA&s"
                  className="scale-150 w-[100px]"
                  alt=""
                />
              </div>
              <h2 className="text-[20px] font-poppins font-[500]">{`${user}`}</h2>
              <h2 className="text-[17px] font-poppins font-[400]">
                +91 xxxx xxxx xx
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
            {/* for    mobile  */}
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
            <button
              onClick={updateUserInfo}
              className="bg-red-600 hidden max-xs:block self-center m-5 w-fit text-white font-poppins px-4 py-1 rounded-lg"
            >
              save
            </button>
          </div>
          <div className=" min-w-[200px] min-h-[600px] max-xs:hidden max-md:w-[500px]  w-[900px] justify-center items-center flex h-[500px] border-[1px] bg-white">
            {currentComponent}
          </div>
        </div>
      ) : (
        <div className="h-screen flex justify-center items-center  w-screen bg-gray-100">
          <div class="flex flex-col items-center justify-center h-screen">
            <div class="w-full max-w-md bg-white rounded-lg shadow-md p-6">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Login</h2>
              <form class="flex flex-col">
                <input
                  type="email"
                  class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  placeholder="Email address"
                />
                <input
                  type="password"
                  class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  placeholder="Password"
                />
                <div class="flex items-center justify-between flex-wrap">
                  <label
                    for="remember-me"
                    class="text-sm text-gray-900 cursor-pointer"
                  >
                    <input type="checkbox" id="remember-me" class="mr-2" />
                    Remember me
                  </label>
                  <a
                    href="#"
                    class="text-sm text-blue-500 hover:underline mb-0.5"
                  >
                    Forgot password?
                  </a>
                  <p class="text-gray-900 mt-4">
                    {" "}
                    Don't have an account?{" "}
                    <a
                      href="#"
                      class="text-sm text-blue-500 -200 hover:underline mt-4"
                    >
                      Signup
                    </a>
                  </p>
                </div>
                <button
                  type="submit"
                  class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyAccount;
