import React from "react";
import carbon_delivery from "../assets/icons/carbon_delivery.svg";
import headphone from "../assets/icons/headphone.svg";
import sale from "../assets/icons/sale.svg";
import shipp from "../assets/icons/shipp.svg";
import flag from "../assets/icons/bi_flag.svg";

const data = [
  {
    image: flag,
    title: "Locally Owned",
    description: "We have local business and sell best quality clothes",
  },
  {
    image: carbon_delivery,
    title: "Fast Delivery",
    description: "We provide fast delivery to our customers",
  },
  {
    image: shipp,
    title: "Easy Return",
    description: "We provide easy return policy.",
  },
  {
    image: headphone,
    title: "Online Support",
    description: "We give 24/7 online support",
  },
  {
    image: sale,
    title: "Best Offers",
    description: "We give best offers to our customers",
  },
]

const Services = () => {
  return (

    <div className="flex flex-wrap justify-center gap-6 px-4 md:px-[50px] lg:px-[52px] mt-[40px] md:mt-[80px] text-textPrimary">

      {data.map((item, index) => {
        return (
          <div className="w-full sm:w-[48%] lg:w-[318px] rounded-[10px] bg-[#F0F0F0] flex flex-col items-center pt-[25px]">
            <img className="w-[56px] h-[56px]" src={item.image} alt="Locally Owned" />
            <p className="mt-[16px] text-[20px] sm:text-[22px] lg:text-[24px] font-bold text-center">
              {item.title}
            </p>
            <p className="mt-[16px] text-center text-[16px] sm:text-[17px] lg:text-[18px] mx-[20px] pb-[18px]">
              {item.description}
            </p>
          </div>
        )
      })}
    </div>


  );
};

export default Services;
