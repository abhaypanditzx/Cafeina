import React from "react";
import { IoStarOutline, IoStarHalfOutline, IoStarSharp } from "react-icons/io5";
import { CustomerDetails, stars } from "../constant";

function CustomerReview() {
  return (
    <div className="flex  p-4 flex-wrap mx-9 justify-center sm:gap-x-[100px] mt-[100px] max-xs:gap-y-5">
      {CustomerDetails.map((e) => {
        return (
          <div
            key={e.id}
            className="border-gray-400 bg-white/50 rounded-lg border-[1px] min-h-[200px]  p-5 sm:h-[300px] sm:w-[250px]"
          >
            <img
              src={e.pfp}
              className="min-h-[50px] w-[110px] h-[110px] rounded-full m- object-cover"
            />
            <p className="text-md capitalize px-1 text-gray-500 ">{e.name}</p>
            <div className="flex">
              {stars.map((e, index) => {
                return (
                  <div key={index} className="flex p-1 text-lg text-yellow-600">
                    {e}
                  </div>
                );
              })}
            </div>
            <p className="text-sm p-1">{e.comment}</p>
          </div>
        );
      })}
    </div>
  );
}

export default CustomerReview;
