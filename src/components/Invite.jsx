import React from "react";
import cross_icon from "../assets/icons/cross_icon.svg";

const Invite = () => {
  return (
    <div>
      <div className="h-[51px] w-full flex items-center justify-center bg-backgroundLight text-[18px] mx-3 lg:mx-0">
        <div className="flex items-center text-[13px] md:text-[18px]">
          <p className="text-textPrimary ">
            Invite Friends and get 50% off on your next purchase
            <span className="text-linkPrimary ml-[15px]">Invite now</span>
          </p>
          <img className="w-6 md:w-9 text-textPlaceholder absolute right-2 lg:right-[10px] cursor-pointer" src={cross_icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Invite;
