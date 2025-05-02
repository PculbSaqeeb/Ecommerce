import React from "react";
import image_1 from "../assets/images/Vector (1).png";
import fb_icon from "../assets/icons/fb_icon.svg";
import insta_icon from '../assets/icons/insta_icon.svg'
import whatsaap_icon from '../assets/icons/whatsaap_icon.svg';
import tweeter_icon from '../assets/icons/tweeter_icon.svg'
import mail_icon from '../assets/icons/mail_icon.svg'

const Footer = () => {
  return (
    <div>
      <div className="w-full bg-[#00071B] text-white">
        <div className="flex items-center gap-[29px] pl-[50px]">
          <img className="w-[76px] h-[64px] mt-[44px]" src={image_1} alt="" />
          <p className="text-[64px] font-bold text-white mt-[36px]">Globex</p>
        </div>

        <div className="flex gap-[110px] ml-[179px] mt-[90px]">
          <ul className=" flex flex-col gap-[17px] cursor-pointer">
            <li className="text-2xl font-bold">Women</li>
            <li className="">All women</li>
            <li>Skirts</li>
            <li>T-shirts</li>
            <li>Tops</li>
            <li>Jackets</li>
          </ul>

          <ul className="flex flex-col gap-[17px] cursor-pointer">
            <li className="text-2xl font-bold">Men</li>
            <li className="">All Men</li>
            <li>Skirts</li>
            <li>T-shirts</li>
            <li>Tops</li>
            <li>Jackets</li>
          </ul>

          <ul className="flex flex-col gap-[17px] cursor-pointer">
            <li className="text-2xl font-bold">Kids</li>
            <li className="">All Kids</li>
            <li>Skirts</li>
            <li>T-shirts</li>
            <li>Tops</li>
            <li>Jackets</li>
          </ul>

          <ul className=" flex flex-col gap-[17px] cursor-pointer">
            <li className="text-2xl font-bold">Shopping</li>
            <li className="">Your cart</li>
            <li>Your order</li>
            <li>T-Compared Items</li>
            <li>Wishlist</li>
            <li>Shipping Details</li>
          </ul>

          <ul className=" flex flex-col gap-[17px] cursor-pointer">
            <li className="text-2xl font-bold">More links</li>
            <li className="">Blogs</li>
            <li>Gift center</li>
            <li>Buying guides</li>
            <li>New arrival</li>
            <li>Clearance</li>
          </ul>

          <ul className="flex flex-col gap-[16px] cursor-pointer">
            <li className="text-2xl font-bold">Stay in Touch</li>
            <li className="w-[445px] h-[44px] text-lg">
              Stay in touch to get special offers, free giveaways and once in a
              lifetime deals
            </li>
            <li>
              <div className="flex relative">
                <input className="pl-[69px] bg-[#00071B] border border-[#ABABAB] w-[447px] h-[44px]" type="text" placeholder="Enter your email" />
                <img className="absolute left-[16px] mt-[10px]" src={mail_icon} alt="" />
              </div>
            </li>
          </ul>
        </div>

        <div className="border-b border-white mt-[79px]"></div>

        <div className="mt-[39px] pb-[38px]">
            <ul className="flex justify-center gap-[200px] text-lg">
                <li>Terms & Condition</li>
                <li>Privacy Policy</li>
                <li>
                    <div className="flex gap-[34px] cursor-pointer">
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
  );
};

export default Footer;
