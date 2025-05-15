
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DealCard from "./DealCard";
import Sliders from "../components/Sliders";

const Deal = () => {
  return (
    <div className="mx-[50px]">
      <p className="text-4xl font-bold text-textPrimary mt-[80px]">
        Deals of the Day
      </p>
      <div className="mt-[27px]">
        <Sliders slidesToShow={3.3}>
          {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
            <div key={index} className=""> 
              <DealCard />
            </div> 
          ))}
        </Sliders>
      </div>
    </div>
    // <div className="px-4 md:px-[50px]">
    //   <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-textPrimary mt-[50px] md:mt-[80px]">
    //     Deals of the Day
    //   </p>

    //   <div className="mt-6 md:mt-[27px]">
    //     <Sliders
    //       slidesToShow={3.1}
    //     >
    //       {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
    //         <div key={index} className="px-2"> 
    //           <DealCard />
    //         </div>
    //       ))}
    //     </Sliders>
    //   </div>
    // </div>
  );
};

export default Deal;

