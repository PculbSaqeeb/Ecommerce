import React from "react";
import image_6 from "../assets/images/Rectangle 375.jpg";
import image_7 from "../assets/images/Group.jpg";

const DealCard = () => {
  return (
    <div>
      <div className="w-[489px] rounded-[10px] shadow-[0_0_30px_rgba(165,165,165,0.07)] overflow-hidden">
        <img className="w-full h-[298px]" src={image_6} alt="Deal" />
        <div className="flex flex-col items-center justify-center">
          <img
            className="mt-[30px] w-[151px] h-[62px]"
            src={image_7}
            alt="Brand"
          />
          <p className="text-4xl font-bold text-textPrimary mt-[43px]">
            Best of Styles
          </p>
          <p className="text-2xl font-bold text-textPrimary mt-[23px] pb-[38px]">
            Under Rs.799
          </p>
        </div>
      </div>
    </div>
  );
};

export default DealCard;
