import React, { useContext } from "react";
import UserContext from "../components/UserContext";


const ProductPreview = () => {
  const { currentProduct, setCurrentProdcut } = useContext(UserContext);
  const {
    name,
    image_url,
    description,
    price,
    id,
    region,
    weight,
    flavor_profile,
  } = currentProduct;

  return (
    <div className="p-5 ">
      {currentProduct ? (
        <div className="flex flex-row max-sm:flex-col gap-5 justify-around">
          <div className="min-w-[200px] lg:w-[400px] max-xs:h-[200px] h-[400px]  overflow-hidden p-5 max-w-[400px] bg-white">
            <img src={image_url} className="h-full w-full" alt="" />
          </div>
          <div className="min-w-[250px] lg:w-[800px] p-2  max-xs:h-full xs:h-[400px] max-w-[800px] bg-white">
            <div className="p-5 w-full">
              <h1 className="text-2xl text-black font-[500]">{name}</h1>
              <h5 className="text-xl text-gray-800 max-xs:text-sm">{`(${description})`}</h5>
            </div>
            <div className="flex w-full max-xs:flex-col xs:flex-row xs:items-center ">
              <ul className="flex-col flex p-5 max-w-[400px] gap-y-2">
                <li className="text-black text-xl font-sans pb-2 font-[590]">
                  Product details
                </li>
                <li className="text-[16px] font-sans flex justify-start ">
                  <h5 className="font-[600]  w-[60px] tracking-wide">price </h5>{" "}
                  <span className="font-[400] mx-4 text-start">{`₹${price}`}</span>
                </li>
                <li className="text-[16px] font-sans flex justify-start">
                  <h5 className="font-[600]  w-[60px] tracking-wide">
                    Region{" "}
                  </h5>{" "}
                  <span className="font-[400] mx-4 text-start">{region}</span>
                </li>
                <li className="text-[16px] font-sans flex justify-start">
                  <h5 className="font-[600]  w-[60px] tracking-wide">weight</h5>{" "}
                  <span className="font-[400] mx-4 text-start">{weight}</span>
                </li>
                <li className="text-[16px] font-sans flex justify-start">
                  <h5 className="font-[600]  w-[60px] tracking-wide">
                    flavor{" "}
                  </h5>{" "}
                  <span className="font-[400] mx-4 text-start">
                    {flavor_profile}
                  </span>
                </li>
                <li className="text-[22px] capitalize  font-sans text-green-700 flex justify-start">
                  in stock
                </li>
              </ul>
              <div className="flex flex-col m-auto w-fit p-5 gap-y-5 ">
                <button className="px-4 py-2 bg-green-600  font-[600] capitalize text-white hover:text-gray-100 w-[150px] rounded-md hover:scale-95">
                  add to cart{" "}
                </button>
                <button className="px-4 py-2 bg-gray-600  font-[600] capitalize text-white hover:text-gray-100 w-[150px] rounded-md hover:scale-95">
                  buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-row max-sm:flex-col gap-5 justify-around">
          <div className="min-w-[200px] lg:w-[400px] max-xs:h-[200px] h-[400px]  overflow-hidden p-5 max-w-[400px] bg-white">
            <img src={`image_url`} className="h-full w-full" alt="" />
          </div>
          <div className="min-w-[250px] lg:w-[800px] p-2  h-[400px] max-w-[800px] bg-white">
            <div className="p-5">
              <h1 className="text-2xl text-black font-[500]">{`name`}</h1>
              <h5 className="text-xl text-gray-800 max-xs:text-sm">{`(${`description`})`}</h5>
            </div>
            <ul className="flex-col flex p-5">
              <li className="text-black text-xl font-sans  font-[590]">
                Product details
              </li>
              <li className="text-[16px] font-sans  ">
                <h5 className="font-[600]  w-[60px] tracking-wide">price </h5>{" "}
                <span className="font-[400] mx-4 text-start">{`₹${amout}`}</span>
              </li>
              <li className="text-[16px] font-sans  ">
                <h5 className="font-[600]  w-[60px] tracking-wide">Region </h5>{" "}
                <span className="font-[400] mx-4 text-start">{`region`}</span>
              </li>
              <li className="text-[16px] font-sans  ">
                <h5 className="font-[600]  w-[60px] tracking-wide">weight </h5>{" "}
                <span className="font-[400] mx-4 text-start">{`weight`}</span>
              </li>
              <li className="text-[16px] font-sans  ">
                <h5 className="font-[600]  w-[60px] tracking-wide">flavor </h5>{" "}
                <span className="font-[400] mx-4 text-start">{`flavor_profile`}</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPreview;
