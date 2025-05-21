import React from "react";
import image_6 from "../assets/images/Rectangle 375.jpg";
import image_7 from "../assets/images/Group.jpg";

const DealCard = () => {
  return (

    // <div>
    //   <div className="w-full sm:w-[350px] md:w-[280px] smallDesktop:w-[360px] lg:w-[435px] xl:w-[489px] rounded-[10px] shadow-[0_0_30px_rgba(165,165,165,0.07)] overflow-hidden">
    //     <img
    //       className="w-full h-[200px] sm:h-[250px] md:h-[240px] lg:h-[298px] object-cover"
    //       src={image_6}
    //       alt="Deal"
    //     />
    //     <div className="flex flex-col items-center justify-center">
    //       <img
    //         className="mt-6 sm:mt-[25px] md:mt-[30px] w-[100px] sm:w-[120px] md:w-[140px] lg:w-[151px] h-[40px] sm:h-[50px] md:h-[58px] lg:h-[62px]"
    //         src={image_7}
    //         alt="Brand"
    //       />
    //       <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-textPrimary mt-6 md:mt-[43px] text-center">
    //         Best of Styles
    //       </p>
    //       <p className="text-lg sm:text-xl md:text-2xl font-bold text-textPrimary mt-4 md:mt-[23px] pb-6 md:pb-[38px] text-center">
    //         Under Rs.799
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className="w-full rounded-[10px] shadow-[0_0_30px_rgba(165,165,165,0.07)] overflow-hidden">
      <img
        className="w-full h-[180px] sm:h-[200px] md:h-[220px] lg:h-[250px] xl:h-[298px] object-cover"
        src={image_6}
        alt="Deal"
      />
      <div className="flex flex-col items-center justify-center">
        <img
          className="mt-4 sm:mt-5 md:mt-6 lg:mt-[30px] w-[80px] sm:w-[100px] md:w-[120px] lg:w-[140px] xl:w-[151px] h-[33px] sm:h-[40px] md:h-[50px] lg:h-[58px] xl:h-[62px]"
          src={image_7}
          alt="Brand"
        />
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-textPrimary mt-4 sm:mt-5 md:mt-6 lg:mt-[43px] text-center">
          Best of Styles
        </p>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-textPrimary mt-2 sm:mt-3 md:mt-4 lg:mt-[23px] pb-4 sm:pb-5 md:pb-6 lg:pb-[38px] text-center">
          Under Rs.799
        </p>
      </div>
    </div>
    </div>

  );
};

export default DealCard;
