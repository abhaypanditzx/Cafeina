import { useState } from "react";
import { NavLinks } from "../constant";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
const NavBar = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [isToggle, setIsToggle] = useState(false);

  return (
    <nav className="bg-[#130803] sticky top-0 min-h-[60px] max-xs:h-[60px]  h-[70px] items-center flex z-50 justify-around max-xs:justify-between max-xs:px-4 w-full">
      {/* desktop decive navbar */}
      <Link to="/">
        <h1 className="text-xl text-white underline  p-1  max-xs:text-sm ">
          CFF
        </h1>
      </Link>
      <ul className="text-white flex  max-sm:gap-8 sm:gap-14 lg:gap-24 max-xs:hidden ">
        {NavLinks.map((e) => {
          return (
            <Link to={e.id} key={e.id}>
              <li
                onClick={() => {
                  setActiveLink(e.id);
                }}
                className={`hover:text-white/80 max-sm:text-sm text-base ${
                  activeLink === e.id ? "text-gray-300" : "text-white"
                }`}
              >
                {e.title}
              </li>
            </Link>
          );
        })}
      </ul>

      <button className="hover:brightness-110  max-xs:hidden max-xs:px-2  max-xs:py-1 text-xs hover:scale-95 font-bold py-1.5 px-6 rounded-full bg-gradient-to-r border-2 border-white text-white">
        Login/SignUp
      </button>
      {/* HAMBURGER_ICON */}
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
      {/* SIDEBAR_MOBILE_DEVICE */}
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
          <li style={{ fontWeight: "400" }} className=" font-sans  py-3 px-3">
            My Account
          </li>
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
