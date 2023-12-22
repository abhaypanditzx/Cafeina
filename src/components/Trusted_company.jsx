import React from 'react'
import {  trustedCompanyLogo } from "../constant";

const Trusted_company = () => {
  return (
    <div className="w-[80%] border-[2px] mt-10 h-[200px] max-xs:h-[140px]  rounded-xl mb-5  m-auto border-[#5B2E0E]">
    <h1 className="text-3xl max-xs:text-[20px] h-fit m-auto w-fit py-1 font-[550]">Trusted Companies</h1>
    <div className="flex justify-center h-fit w-full items-center xl:gap-20 max-xs:px-2 sm:gap-x-4 ">
      {trustedCompanyLogo.map((e, index) => {
        return (
          <div key={index} className=" flex justify-center items-center sm:h-[130px]  max-xs:h-[80px] max-xs:w-[100px] xs:w-[140px]">
            <img
              className=" object-cover"
              src={e.logo}
              alt="trusted-company-logo"
            />
          </div>
        );
      })}
    </div>
  </div>
  )
}

export default Trusted_company