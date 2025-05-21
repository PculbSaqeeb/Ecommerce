import React from "react";
import fb_icon from "../assets/icons/fb_icon.svg";
import insta_icon from '../assets/icons/insta_icon.svg'
import whatsaap_icon from '../assets/icons/whatsaap_icon.svg';
import tweeter_icon from '../assets/icons/tweeter_icon.svg'
import mail_icon from '../assets/icons/emial_icon.svg'
import logo_white from '../assets/icons/white_logo_icon.png'

const Footer = () => {
  return (
 <div className="w-full bg-[#00071B] text-white px-4 overflow-x-hidden">


       
  <div className="flex max-sm:items-center sm:flex-row items-center gap-[30px] pl-[50px] max-sm:pl-10 max-sm:pt-6">
    <img className="w-[76px] h-[64px] mt-[44px] max-sm:mt-2" src={logo_white} alt="" />
    <p className="text-[64px] font-bold text-white mt-[36px] max-sm:mt-2 max-sm:text-[32px]">Globex</p>
  </div>

  <div className="flex flex-wrap gap-[40px] sm:gap-[40px] max-sm:gap-7 justify-center sm:ml-[19px] mt-[90px] max-sm:mt-10 lg:gap-20">
    <ul className="flex flex-col gap-[17px] cursor-pointer text-[18px] max-sm:text-[16px] items-start text-left">
      <li className="text-[24px] font-bold max-sm:text-[20px] ">Women</li>
      <li>All Women</li>
      <li>Skirts</li>
      <li>T-shirts</li>
      <li>Tops</li>
      <li>Jackets</li>
    </ul>

    <ul className="flex flex-col gap-[17px] cursor-pointer text-[18px] max-sm:text-[16px] items-start text-left">
      <li className="text-[24px] font-bold max-sm:text-[20px]">Men</li>
      <li>All Men</li>
      <li>Shirts</li>
      <li>T-shirts</li>
      <li>Shorts</li>
      <li>Jackets</li>
    </ul>

    <ul className="flex flex-col gap-[17px] cursor-pointer text-[18px] max-sm:text-[16px] items-start text-left">
      <li className="text-[24px] font-bold max-sm:text-[20px]">Kids</li>
      <li>All Kids</li>
      <li>Shirts</li>
      <li>T-shirts</li>
      <li>Shorts</li>
      <li>Jackets</li>
    </ul>

    <ul className="flex flex-col gap-[17px] cursor-pointer text-[18px] max-sm:text-[16px] items-start text-left">
      <li className="text-[24px] font-bold max-sm:text-[20px]">Shopping</li>
      <li>Your cart</li>
      <li>Your orders</li>
      <li>Compared Items</li>
      <li>Wishlist</li>
      <li>Shipping Details</li>
    </ul>

    <ul className="flex flex-col gap-[17px] cursor-pointer text-[18px] max-sm:text-[16px] items-start text-left">
      <li className="text-[24px] font-bold max-sm:text-[20px]">More links</li>
      <li>Blogs</li>
      <li>Gift center</li>
      <li>Buying guides</li>
      <li>New arrival</li>
      <li>Clearance</li>
    </ul>

    <ul className="flex flex-col gap-[17px] cursor-pointer text-[18px] max-sm:text-[16px] px-10 text-left">
      <li className="text-[24px] font-bold max-sm:text-[20px]">Stay in Touch</li>
      <li className="w-[445px] h-[44px] text-lg max-sm:w-full max-sm:h-auto max-sm:text-sm">
        Stay in touch to get special offers, free giveaways and once in a lifetime deals
      </li>
      <li className="w-full">
        <div className="flex relative mt-[16px] w-[447px] max-sm:w-full">
          <input
            className="pl-[69px] bg-[#00071B] border border-[#ABABAB] w-full h-[44px] text-[18px] placeholder:text-[18px] max-sm:text-sm max-sm:placeholder:text-sm"
            type="text"
            placeholder="Enter your email"
          />
          <img className="absolute left-[16px] top-[11px] w-[20px] max-sm:w-[16px]" src={mail_icon} alt="" />
        </div>
      </li>
    </ul>
  </div>

  <div className="border-b border-white mt-[79px] max-sm:mt-[40px]"></div>

  <div className="mt-[39px] pb-[38px]">
    <ul className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-[50px] text-[18px] max-sm:text-[14px] text-center">
      <li>Terms & Condition</li>
      <li>Privacy Policy</li>
      <li>
        <div className="flex gap-[20px] sm:gap-[20px]  justify-center mt-2 sm:mt-0">
          <img src={fb_icon} alt="Facebook" className="w-6 max-sm:w-4 md:w-[32px] h-[32px]" />
          <img src={insta_icon} alt="Instagram" className="w-6 max-sm:w-4 md:w-[32px] h-[32px]" />
          <img src={whatsaap_icon} alt="WhatsApp" className="w-6 max-sm:w-4 md:w-[32px] h-[32px]" />
          <img src={tweeter_icon} alt="Twitter" className="w-6 max-sm:w-4 md:w-[32px] h-[32px]" />
        </div>
      </li>
    </ul>
  </div>
</div>  


// {/* <div className="w-full bg-[#1A4242] text-white px-4 py-10">
//   {/* Logo and Title */}
//   <div className="flex flex-col sm:flex-row items-center sm:justify-start gap-4 sm:gap-[38px] px-4 sm:px-[139px]">
//     <img src={logo_white} alt="Globex Logo" className="w-[76px] h-auto" />
//     <p className="text-[48px] sm:text-[72px] font-bold">Globex</p>
//   </div>

//   {/* Links Section */}
//   <div className="flex flex-wrap justify-center sm:justify-start gap-10 sm:gap-[100px] mt-12 sm:mt-16 px-4 sm:px-[139px]">
//     {/* Shopping */}
//     <ul className="flex flex-col gap-[12px] text-[16px] sm:text-[18px] text-left">
//       <li className="text-[20px] sm:text-[24px] font-bold">Shopping</li>
//       <li>Your cart</li>
//       <li>Your order</li>
//       <li>Compared Items</li>
//       <li>Wishlist</li>
//       <li>Shipping Details</li>
//     </ul>

//     {/* More links */}
//     <ul className="flex flex-col gap-[12px] text-[16px] sm:text-[18px] text-left">
//       <li className="text-[20px] sm:text-[24px] font-bold">More links</li>
//       <li>Blog</li>
//       <li>Gift Center</li>
//       <li>Buying guides</li>
//       <li>New arrival</li>
//       <li>Clearance</li>
//     </ul>

//     {/* Social Media */}
//     <ul className="flex flex-col gap-[12px] text-[16px] sm:text-[18px] text-left">
//       <li className="text-[20px] sm:text-[24px] font-bold">Connect With Us</li>
//       <li>
//         <div className="flex gap-4 sm:gap-[34px] mt-2 sm:mt-[15.96px] cursor-pointer">
//           <img src={fb_icon} alt="Facebook" className="w-6 max-sm:w-5" />
//           <img src={insta_icon} alt="Instagram" className="w-6 max-sm:w-5" />
//           <img src={whatsaap_icon} alt="WhatsApp" className="w-6 max-sm:w-5" />
//           <img src={tweeter_icon} alt="Twitter" className="w-6 max-sm:w-5" />
//         </div>
//       </li>
//     </ul>
//   </div>

//   {/* Divider */}
//   <div className="border-t border-white mt-10 sm:mt-16 mx-4 sm:mx-[139px]"></div>

//   {/* Bottom Footer */}
//   <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-[100px] text-[14px] sm:text-[18px] text-center">
//     <p>Terms & Conditions</p>
//     <p>Privacy Policy</p>
//   </div>
// </div> */}


  );
};

export default Footer;
