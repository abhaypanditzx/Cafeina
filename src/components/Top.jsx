import React from 'react'
import coffee from "../assets/cold-coffee.png";

const Top = () => {
  return (
    <div
    className={` bg-no-repeat bg-cover xs:bg-pink-bg max-xs:items-start max-xs:bg-coffee-main- bg-gray-600 max-xs:bg-contain sm:h-[85vh] flex max-xs:h-[45vh] items-center max-xs:p-1 xs:p-5 justify-around `}
  >
    <div
      className={`coffee-bg  flex items-center max-xs:hidden p-5 sm:h-[330px] max-xs:justify-center xs:justify-center lg:h-[450px]`}
    >
      <img src={coffee} className="lg:h-[500px] sm:h-[400px]" />
    </div>
    <div className="xs:w-[40%] max-xs:w-[100%]flex max-xs:h-[300px] xs:h-full max-xs:p-3 max-xs:justify-start items-start p-3 flex-col ">
      <div className=" max-xs:leading-[50px] xs:leading-[105px] ">
        <h1 className="lg:text-[100px] text-shadow tracking-tight xs:font-[500] max-xs:text-[2.4rem] max-xs:font-[400] text-white sm:text-[60px]">
        COFFEE
        </h1>
        <h3 className="lg:text-[40px]  max-[375px]:text-[20px] text-shadow tracking-tight max-xs:leading-[2pc] sm:leading-[56px] max-xs:text-[1.4rem] xs:text-gray-100 max-xs:text-gray-200 sm:text-[20px]">
          NOW REFRESH YOUR MOOD ANYWHERE ANYTIME
        </h3>
      </div>
      <p className="text-[15px] mt-0  text-shadow  text-white max-sm:hidden">
        Our iconic Signature Blends are slow roasted for the perfect balance
        of rich flavour and smooth taste. We guarantee you the freshest
        taste and finest ingredients, every time. Check out our full range
        of drinks, snacks and meals and discover
      </p>
      <button className="bg-white max-[375px]: font-medium hover:scale-95 max-xs:px-4 max-xs:py-1.5 max-xs:text-sm duration-200 px-6 py-2 rounded-xl mt-6">
        Explore
      </button>
    </div>
  </div>
  )
}

export default Top