import React from "react";
import logo from "../assets/icons/logo.svg";
import fb_icon from "../assets/icons/fb_icon.svg";
import insta_icon from "../assets/icons/insta_icon.svg";
import whatsaap_icon from "../assets/icons/whatsaap_icon.svg";
import tweeter_icon from "../assets/icons/tweeter_icon.svg";

const Footer_1 = () => {
  return (
    <div>
      <div className="w-full h-[460.11px] bg-[#1A4242] font text-white mt-[96px] ">
        <div className="flex ">
          <div className="flex gap-[38px]  ml-[139px] items-center">
            <img src={logo} alt="" />
            <p className="text-[72px] font-bold ">Globex</p>
          </div>

          <div className="ml-[187px] pt-[113.96px]">
            <ul>
              <li className="text-[24px] font-bold">Shopping</li>
              <li className="text-[18px] pt-[37.28px]">Your cart</li>
              <li className="text-[18px] pt-[15.96px]">Your order</li>
              <li className="text-[18px] pt-[15.96px]">Compared Items</li>
              <li className="text-[18px] pt-[15.96px]">Wishlist</li>
              <li className="text-[18px] pt-[15.96px]">Shipping Details</li>
            </ul>
          </div>

          <div className="ml-[219px] pt-[113.96px]">
            <ul>
              <li className="text-[24px] font-bold">More links</li>
              <li className="text-[18px] pt-[37.28px]">Blog</li>
              <li className="text-[18px] pt-[15.96px]">Gift Center</li>
              <li className="text-[18px] pt-[15.96px]">Buying guides</li>
              <li className="text-[18px] pt-[15.96px]">New arrival</li>
              <li className="text-[18px] pt-[15.96px]">Clearance</li>
            </ul>
          </div>

          <div className="ml-[210px] pt-[113.96px]">
            <ul>
              <li className="text-[24px] font-bold ml-[46px]">More links</li>
              <li>
                <div className="flex gap-[34px] cursor-pointer pt-[15.96px]">
                  <img src={fb_icon} alt="" />
                  <img src={insta_icon} alt="" />
                  <img src={whatsaap_icon} alt="" />
                  <img src={tweeter_icon} alt="" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer_1;
