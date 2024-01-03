import React from "react";
import { IoStarOutline, IoStarHalfOutline, IoStarSharp } from "react-icons/io5";

const AddReview = () => {
  return (
    <div className="flex justify-center flex-col items-center max-xs:p-5 xs:p-10  w-full  m-auto">
     <div className="flex justify-center p-5 max-xs:w-[380px]  max-[320px]:w-[300px] shadow-md bg-white flex-col">
     <h2 className="text-2xl text-gray-600 border-b-[1px]">Give Feedback</h2>
      <div className="flex justify-around  w-full">
        <div className="rating">
          <input value="5" name="rate" id="star5" type="radio" />
          <label title="text" htmlFor="star5"></label>
          <input value="4" name="rate" id="star4" type="radio" />
          <label title="text" htmlFor="star4"></label>
          <input value="3" name="rate" id="star3" type="radio" />
          <label title="text" htmlFor="star3"></label>
          <input value="2" name="rate" id="star2" type="radio" />
          <label title="text" htmlFor="star2"></label>
          <input value="1" name="rate" id="star1" type="radio" />
          <label title="text" htmlFor="star1"></label>
        </div>
      </div>
      <div className="flex justify-center roundes-sm b  items-center  gap-2 max-xs:p-2 xs:p-4">
        <textarea
          type="text"
          rows={5}
          placeholder="share your experience..."
          className="lg:w-[500px] sm:w-[400px] outline-none max-xs:w-[300px] placeholder:p-2  bg-gray-200 placeholder:text-gray-500"
        />
      </div>
      <button className="bg-[#5B2E0E] hover:text-white/90 px-4 max-xs:px-2  self-end  mr-4  w-fit py-2 max-xs:py-1 h-fit rounded-md text-white text-base">
        submit
      </button>
     </div>
    </div>
  );
};

export default AddReview;
