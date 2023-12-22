import React from 'react'
import { Category } from "../constant";

const Handcrafted_Curations = () => {
  return (
    <div className="sm:px-10 py-4 flex  flex-col">
    <h1 className=" max-xs:text-xl max-sm:px-5  text-3xl font-bold text-gray-800 py-3 capitalize ">
      Handcrafted Curations
    </h1>

    <div className="flex relative flex-row justify- items-center p-4 w-full overflow-auto max-sm:gap-5 max-xs:gap-1 sm:gap-10  lg:gap-24">
      {Category.map((e) => {
        return (
          <div key={e.class} className="flex items-center flex-col ">
            <div
              className={` ${e.class}  max-[375px]:h-[65px]  max-[375px]:w-[65px]  text-white bg-no-repeat overflow-hidden hover:scale-95 bg-cover cursor-pointer max-sm:w-[70px] max-sm:h-[70px] max-xs:w-[80px]  max-xs:h-[80px] border-[2px] hover:border-green-500  sm:w-[110px] sm:h-[110px] max-xs:text-xs text-xl text-shadow font-bold rounded-full `}
            ></div>
            <h3 className="max-xs:text-[13px] sm:text-base po w-max p-2">{e.title}</h3>
          </div>
        );
      })}
    </div>
  </div>
  )
}

export default Handcrafted_Curations