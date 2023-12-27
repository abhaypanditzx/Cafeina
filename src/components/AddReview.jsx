import React from "react";
import { IoStarOutline, IoStarHalfOutline, IoStarSharp } from "react-icons/io5";

const AddReview = () => {
  return (
    <div className="flex justify-center flex-col  items-center p-10  w-full  m-auto">
      <h2 className="text-2xl text-gray-600">Give Feedback</h2>

      <div className="flex justify-center roundes-sm border-[1px] bg-white  items-center  m-auto   gap-2 p-4">
        <div className="max-h-[50px] max-w-[50px] overflow-hidden rounded-full">
          <img
            className="max-h-[50px] max-w-[50px] scale-150 object-fill rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIL1yCRUIDvX_iqoqxnb0wZQBobBlbTwf1cR5I95cfpA&s"
          />
        </div>
        <textarea
          type="text"
          placeholder="share your experience..."
          className="lg:w-[500px] sm:w-[400px] outline-none max-xs:w-[250px] placeholder:p-2 placeholder:text-gray-500"
        />
           <button className="bg-[#130803] hover:text-white/90 px-4 max-xs:px-2  w-fit py-2 max-xs:py-1 h-fit rounded-md text-white text-base">
          submit
        </button>
      </div>
      {/* <div className="flex justify-around  w-full">
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
     
      </div> */}
    </div>
  );
};

export default AddReview;
