
// import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import DealCard from "./DealCard";
// import Sliders from "../components/Sliders";

// const Deal = () => {
//   return (
//     <div className="mx-[50px]">
//       <p className="text-4xl font-bold text-textPrimary mt-[80px]">
//         Deals of the Day
//       </p>
//       <div className="mt-[27px]">
//         <Sliders slidesToShow={3.3}>
//           {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
//             <div key={index} className=""> 
//               <DealCard />
//             </div> 
//           ))}
//         </Sliders>
//       </div>
//     </div>
    
//   );
// };

// export default Deal;


import React from "react";
import DealCard from "./DealCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Deal = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        // Mobile screens
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          // centerMode: true,
          centerPadding: "30px",

        }
      },
      {
        // Small tablets
        breakpoint: 768,
        settings: {
          slidesToShow: 1.2,

        }
      },
      {
        // Medium tablets
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.2,

        }
      },
      {
        // Small desktops
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,

        }
      },
      {
        // Large desktops (default)
        breakpoint: 10000,
        settings: {
          slidesToShow: 3.3,

        }
      }
    ]
  };

  return (
    <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-[50px]">
      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-textPrimary dark:text-white mt-10 sm:mt-[50px] md:mt-[80px]">
        Deals of the Day
      </p>
      <div className="mt-4 sm:mt-5 md:mt-[27px]">
        <Slider {...settings}>
          {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
            <div key={index} className="px-2 sm:px-3"> 
              <DealCard />
            </div> 
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Deal;