import React from "react";
import logo from "../assets/icons/logo.svg";
import fb_icon from "../assets/icons/fb_icon.svg";
import insta_icon from "../assets/icons/insta_icon.svg";
import whatsaap_icon from "../assets/icons/whatsaap_icon.svg";
import tweeter_icon from "../assets/icons/tweeter_icon.svg";

const Footer1 = () => {
  return (
    <div>
      <div className="w-full bg-[#1A4242] text-white font">
        <div className="max-w-screen-xl mx-auto py-[30px] lg:flex flex-col md:flex-row">
          <div>
            <div className="flex items-center gap-[38px] mb-10 md:mb-0 mx-[30px]">
              <img loading="lazy" src={logo} alt="Logo" className="w-[124px] h-[111.83px]" />
              <p className="text-[36px] md:text-[48px] lg:text-[72px] font-bold">Globex</p>
            </div>
            <p className="text-[24px] mt-[33.02px] font-bold mx-[30px]">Globex, 2021 Alright reserved</p>
          </div>

          <div className="sm:flex sm:gap-[100px] xl:ml-[187px] mx-[30px] justify-between sm:mt-[30px]">

            <div className="mb-10 md:mb-0 mt-[30px] sm:mt-0">
              <ul>
                <li className="text-[20px] md:text-[24px] font-bold">Shopping</li>
                <li className="text-[16px] md:text-[18px] pt-4">Your cart</li>
                <li className="text-[16px] md:text-[18px] pt-2">Your order</li>
                <li className="text-[16px] md:text-[18px] pt-2">Compared Items</li>
                <li className="text-[16px] md:text-[18px] pt-2">Wishlist</li>
                <li className="text-[16px] md:text-[18px] pt-2">Shipping Details</li>
              </ul>
            </div>

            <div className="mb-10 md:mb-0">
              <ul>
                <li className="text-[20px] md:text-[24px] font-bold">More links</li>
                <li className="text-[16px] md:text-[18px] pt-4">Blog</li>
                <li className="text-[16px] md:text-[18px] pt-2">Gift Center</li>
                <li className="text-[16px] md:text-[18px] pt-2">Buying guides</li>
                <li className="text-[16px] md:text-[18px] pt-2">New arrival</li>
                <li className="text-[16px] md:text-[18px] pt-2">Clearance</li>
              </ul>
            </div>

            <div>
              <ul className="xl:flex flex-col justify-end items-end h-full">
                <li className="text-[20px] md:text-[24px] font-bold mb-4">Social Media</li>
                <li>
                  <div className="flex gap-4">
                    <img src={fb_icon} alt="Facebook" className="w-6 h-6 cursor-pointer" />
                    <img src={insta_icon} alt="Instagram" className="w-6 h-6 cursor-pointer" />
                    <img src={whatsaap_icon} alt="WhatsApp" className="w-6 h-6 cursor-pointer" />
                    <img src={tweeter_icon} alt="Twitter" className="w-6 h-6 cursor-pointer" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Footer1;
