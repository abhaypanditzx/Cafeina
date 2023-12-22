import React, { useState } from "react";
import OfferingCart from "../components/OfferingCart";

import Top from "../components/Top";
import CustomerReview from "../components/CustomerReview";
import AddReview from "../components/AddReview";
import Trusted_company from "../components/Trusted_company";
import Handcrafted_Curations from "../components/Handcrafted_Curations";
const Home = () => {
  return (
    <div className="overflow-h h-full bg-gray-100 w-screen overflow-">
      <Top />
      <div className="bg-flex flex-col  items-center w-full ">
        {/* CATEGORY */}

        <Handcrafted_Curations />
        {/* MOBILE SIZE CARTS  */}
        <OfferingCart />
      </div>
      {/* Trusted Companies Section */}
      <Trusted_company />
      <CustomerReview />
      <AddReview />
    </div>
  );
};

export default Home;
