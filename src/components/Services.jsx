import React from "react";
import carbon_delivery from "../assets/icons/carbon_delivery.svg";
import headphone from "../assets/icons/headphone.svg";
import sale from "../assets/icons/sale.svg";
import shipp from "../assets/icons/shipp.svg";
import flag from "../assets/icons/bi_flag.svg";
const Services = () => {
  return (
    <div className="flex gap-[57px] ml-[50px] mr-[52px] mt-[80px] text-textPrimary">
      <div className="w-[318px]  rounded-[10px] bg-[#F0F0F0] flex flex-col items-center pt-[25px] ">
        <img className="w-[56px] h-[56px] " src={flag} alt="" />

        <p className="mt-[16px] text-[24px] font-bold text-center ">
          Locally Owned
        </p>
        <p className="mt-[16px] text-center text-[18px] mx-[29px] pb-[18px]">
          We have local business and sell best quality clothes
        </p>
      </div>

      <div className="w-[318px]  rounded-[10px] bg-[#F0F0F0]  flex flex-col items-center pt-[25px] ">
      
        <img className="w-[56px] h-[56px]" src={carbon_delivery} alt="" />
        <p className="mt-[16px] text-[24px] font-bold text-center">
          Fast Delivery
        </p>
        <p className="mt-[16px] text-center text-[18px] mx-[29px] pb-[18px]">
          We provide fast delivery to our customers
        </p>
      </div>

      <div className="w-[318px]  rounded-[10px] bg-[#F0F0F0] flex-shrink-0 flex flex-col items-center pt-[25px] ">
        

        <img className="w-[56px] h-[56px]" src={shipp} alt="" />

        <p className="mt-[16px] text-[24px] font-bold text-center">
          Easy Return
        </p>
        <p className="mt-[16px] text-center text-[18px] mx-[29px] pb-[18px]">
          We provide easy return policy.
        </p>
      </div>

      <div className="w-[318px]  rounded-[10px] bg-[#F0F0F0]  flex flex-col items-center pt-[25px] ">
      
        <img className="w-[56px] h-[56px]" src={headphone} alt="" />
        <p className="mt-[16px] text-[24px] font-bold text-center">
          Online Support
        </p>
        <p className="mt-[16px] text-center text-[18px] mx-[29px] pb-[18px]">
          We give 24/7 online support
        </p>
      </div>

      <div className="w-[318px]  rounded-[10px] bg-[#F0F0F0]  flex flex-col items-center pt-[25px] ">
       
        <img className="w-[56px] h-[56px]" src={sale} alt="" />

        <p className="mt-[16px] text-[24px] font-bold text-center">
          Best Offers
        </p>
        <p className="mt-[16px] text-center text-[18px] mx-[29px] pb-[18px]">
          We give best offers to our customers
        </p>
      </div>
    </div>
  );
};

export default Services;
