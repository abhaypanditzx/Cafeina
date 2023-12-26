import React from "react";
import { VscChromeClose, VscCheck } from "react-icons/vsc";
import { RiArrowGoBackLine } from "react-icons/ri";
const OrderHistory = () => {
  const data = [
    {
      id: "4544882",
      statusIcon: <VscCheck />,
      statusTitle: "paid",
      date: "12-08-2023",
    },
    {
      id: "4544882",
      statusIcon: <VscCheck />,
      statusTitle: "paid",
      date: "12-08-2023",
    },
    {
      id: "4544882",
      statusIcon: <VscCheck />,
      statusTitle: "paid",
      date: "10-08-2023",
    },
    {
      id: "4544882",
      statusIcon: <VscChromeClose />,
      statusTitle: "cancelled",
      date: "09-05-2023",
    },
    {
      id: "4544882",
      statusIcon: <VscCheck />,
      statusTitle: "paid",
      date: "04-01-2023",
    },
    {
      id: "4544882",
      statusIcon: <RiArrowGoBackLine />,
      statusTitle: "refunded",
      date: "15-12-2022",
    },
    {
      id: "4544882",
      statusIcon: <VscCheck />,
      statusTitle: "paid",
      date: "02-11-2022",
    },
  ];
  return (
    <div className="w-full self-start ">
      <nav className="bg-[#5B2E0E] w-full flex justify-center items-center  h-[4rem]">
        <ul className="flex justify-around w-full text-white font-[500] font-poppins capitalize text-[18px]">
          <li>Order Id</li>
          <li> Status</li>
          <li> Date</li>
        </ul>
      </nav>
      <div className="flex-col overflow-y-scroll w-full">
        {data.map((e, index) => {
          return (
            <ul
              key={`order-history-id-${index}`}
              className="w-full flex justify-around py-5 border-b-[1px] items-center  "
            >
              <li>{e.id}</li>
              <li
                id={`order-history-id-${index}`}
                className="flex justify-center items-center text-green-500 bg-green-500/10 rounded-xl  px-4 py-1.5"
              >
                {e.statusIcon} <span>{e.statusTitle}</span>
              </li>
              <li>{e.date}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default OrderHistory;
