import { useState } from "react";
import { NavLinks } from "../constant";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import logo from "/icon.png";
const NavBar = (props) => {
  const [isToggle, setIsToggle] = useState(false);
  const { activeLink, setActiveLink } = props;

  return (
    <nav className="bg-[#ffffff] sticky top-0 min-h-[60px] max-xs:h-[60px] shadow-md shadow-[#00000042] h-[70px] items-center flex z-50 justify-around max-xs:justify-between max-xs:px-4 w-full">
      {/* desktop decive navbar */}

      {/* LOGO */}
      <Link to="/">
        <img src={logo} className="w-[50px] h-[50px]" alt="logo" />
      </Link>
      {/* LINKS */}
      <ul className="text-white flex  max-sm:gap-8 sm:gap-14 lg:gap-24 max-xs:hidden ">
        {NavLinks.map((e) => {
          return (
            <Link to={e.id} key={e.id}>
              <li
                onClick={() => {
                  setActiveLink(e.id);
                }}
                className={`hover:text-gray-600 max-sm:text-sm sm:text-[18px] ${
                  activeLink === e.id ? "text-gray-600" : "text-black"
                }`}
              >
                {e.title}
              </li>
            </Link>
          );
        })}
      </ul>
      {/* LOGIN OR SIGNUP */}
      <button className="hover:brightness-110 absolute max-lg:right-2 lg:right-5 max-xs:hidden max-xs:px-2  max-xs:py-1 text-xs hover:scale-95 font-bold py-1.5 px-4 tracking-[1px] rounded-full bg-[#130803] text-white">
        Login/SignUp
      </button>


      {/* SIDEBAR_MOBILE_DEVICE */}
      <button
        onClick={() => {
          setIsToggle(!isToggle);
        }}
        className="flex z-50"
      >
        <IoIosMenu
          className={`text-white text-[40px] xs:hidden ${
            isToggle ? "hidden" : "block"
          }  `}
        />
        <RxCross1
          className={`text-black text-[40px] ${isToggle ? "block" : "hidden"} `}
        />
      </button>
      <div
        className={`${
          isToggle ? "block" : "hidden"
        } absolute right-0 top-0 h-[110vh] z-40 bg-white w-[300px]`}
      >
        <div className="h-[55px] border-b-[1px] border-gray-300"></div>
        <ul className="flex flex-col border-b-[2px] w-[80%] m-auto border-gray-300 p-2 ">
          <Link to="menu">
            <li
              onClick={() => {
                setIsToggle(!isToggle);
              }}
              style={{ fontWeight: "400" }}
              className=" font-sans  py-3 px-3"
            >
              Menu
            </li>
          </Link>
          <Link to="orders">
            <li
              onClick={() => {
                setIsToggle(!isToggle);
              }}
              style={{ fontWeight: "400" }}
              className=" font-sans  py-3 px-3"
            >
              My Orders
            </li>
          </Link>
          <Link to="/myaccount">
            <li style={{ fontWeight: "400" }} className=" font-sans  py-3 px-3">
              My Account
            </li>
          </Link>
        </ul>
        <div className="flex gap-x-4 my-5 w-[80%] m-auto px-4">
          <button className="w-[80px] rounded-2xl max-xs:text-xs font-semibold bg-white  h-[30px] border-black border-[2px]">
            Sign in{" "}
          </button>
          <button className="w-[80px] rounded-2xl max-xs:text-xs font-semibold bg-black text-white h-[30px] border-black border-[2px]">
            Join now{" "}
          </button>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
