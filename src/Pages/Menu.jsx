import React, { useEffect, useState } from "react";

const Menu = () => {
  const [coffeeData, setCoffeeData] = useState([]);
  const url = "https://fake-coffee-api.vercel.app/api";
  const getData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCoffeeData(data);
      console.log(data); // You can handle the data here as needed
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData(); // Call the function when the component mounts
  }, []); // Passing an empty dependency array ensures it runs only once when the component mounts
  const { name } = coffeeData;

  return (
    <div className="p-10">
      <div className="flex flex-wrap justify-center items-center ">
        {coffeeData.map((e, index) => {
          return (
            <div
              key={`id-${index}`}
              className="border-[1px] border-gray-200 w-fit m-2"
            >
              <img
                src={e.image_url}
                className="h-[200px] "
                alt=""
              />
              <div className="flex justify-between border-b items-center p-2">
                <div className="flex flex-col py-2">
                  <h1 className="text-lg font-[600] tracking-wide">
                    {e.name}
                  </h1>
                  <h3 className=" text-gray-600 text-xs">{`(${e.flavor_profile})`}</h3>
                </div>

                <h5 className="text-gray-500 text-sm">{e.weight + "g"}</h5>
              </div>
              <div className="flex p-2 justify-between">
              <h3 className=" text-red-600 text-lg">{ "₹" + e.price}</h3>
              <button className="text-white px-4 py-2 rounded-md  bg-green-600 ">view deal</button>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
