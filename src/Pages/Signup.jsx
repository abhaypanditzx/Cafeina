import React, { useState, useContext } from "react";
import UserContext from "../components/UserContext";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Signup = () => {
  const {
    userId,
    email,
    password,
    setEmail,
    setPassword,
    signUp,
    setPhone,
    phone,
    userName,
    setUserName,
    viewPassword,
    setViewPassword,
  } = useContext(UserContext);
  return (
    <div className="h-screen flex justify-center items-center  p-10 w-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            create Account
          </h2>
          <form className="flex flex-col">
            <input
              type="text"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="user name"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Email address"
            />
            <div className="bg-gray-100 relative text-gray-900 border-0 rounded-md mb-4 flex h-fit  focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150">
              <input
                value={password}
                className="bg-gray-100  text-gray-900 border-0 rounded-md  w-full p-2  focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type={viewPassword}
                placeholder="Password"
              />
              {viewPassword == "password" ? (
                <RiEyeCloseLine
                  onClick={() => {
                    setViewPassword("text");
                  }}
                  className="absolute top-[30%] cursor-pointer right-2"
                />
              ) : (
                <RiEyeLine
                  onClick={() => {
                    setViewPassword("password");
                  }}
                  className="absolute  top-[30%] cursor-pointer right-2"
                />
              )}
            </div>
            <div className="flex items-center justify-between flex-wrap">
              <label
                htmlFor="remember-me"
                className="text-sm text-gray-900 cursor-pointer"
              >
                <input type="checkbox" id="remember-me" className="mr-2" />
                Remember me
              </label>
              <a
                href="#"
                className="text-sm text-blue-500 hover:underline mb-0.5"
              >
                Forgot password?
              </a>
              <p className="text-gray-900 mt-4">
                {" "}
                already have an account?{" "}
                <Link
                  to="/login"
                  className="text-sm text-blue-500 -200 hover:underline mt-4"
                >
                  login
                </Link>
              </p>
            </div>
            <button
              onClick={signUp}
              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
            >
              signUp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Signup;
