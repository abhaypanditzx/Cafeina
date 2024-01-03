import React, { useState, createContext, useContext } from "react";
import OfferingCart from "../components/OfferingCart";
import CustomerReview from "../components/CustomerReview";
import AddReview from "../components/AddReview";
import Trusted_company from "../components/Trusted_company";
import Handcrafted_Curations from "../components/Handcrafted_Curations";
import Slider from "../components/Slider"
const Home = () => {
  const [user, setUser] = useState("abhay pandit");
  const userContext = createContext();

  return (
    <div className="overflow-h h-full bg-gray-100 w-screen overflow-">
      {/* <Top /> */}
      <Slider/>
      <section className="bg-flex flex-col  items-center w-full ">
        {/* CATEGORY */}

        <Handcrafted_Curations />
        {/* MOBILE SIZE CARTS  */}
        <OfferingCart />
      </section>
      {/* Trusted Companies Section */}
      <Trusted_company />
      <CustomerReview />
      <AddReview />
    </div>
  );
};

export default Home;
