// import React from "react";
// import image_9 from "../assets/images/Ellipse 60.jpg";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../style/style.css";
// import black_star_icon from "../assets/icons/black_star_icon.svg";
// import right_arrow_icon from "../assets/icons/right_arrow_icon.svg";
// import left_arrow_icon from "../assets/icons/left_arrow_icon.svg";

// const NextArrow = ({ onClick }) => (
//   <div
//     className="absolute right-[-20px] z-10 top-1/2 transform -translate-y-1/2 cursor-pointer rounded-full bg-textPrimary w-[54px] h-[54px] text-white flex items-center justify-center"
//     onClick={onClick}
//   >
//     <img src={right_arrow_icon} className="" size={35} />
//   </div>
// );

// const PrevArrow = ({ onClick }) => (
//   <div
//     className="absolute left-[-20px] z-10 top-1/2 transform -translate-y-1/2 cursor-pointer rounded-full bg-textPrimary w-[54px] h-[54px] text-white flex items-center justify-center"
//     onClick={onClick}
//   >
//     <img src={left_arrow_icon} size={35} />
//   </div>
// );

// const Trending = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 700,
//     slidesToShow: 1,
//     centerMode: true,
//     centerPadding: "418px",
//     autoplay: true,
//     autoplaySpeed: 3000,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     focusOnSelect: true,
//   };

//   return (
//     <div className="relative sm:px-8 mt-[80px]">
//       <p className="text-[36px] font-bold text-textPrimary">
//         What Our Customer Says
//       </p>

//       <Slider {...settings}>
//         {[1, 2, 3, 4].map((_, index) => (
//           <div
//             key={index}
//             className="!flex items-center justify-center mt-[27px] cursor-pointer pb-[5px]"
//           >
//             <div className="w-[946px]  flex flex-col items-center shadow-[0px_0px_10px_rgba(0,0,0,0.04)] justify-center rounded-[10px] bg-white">
//               <img
//                 className="w-[150px] h-[150px] rounded-full mt-[58px]"
//                 src={image_9}
//                 alt="Offer"
//               />
//               <div className="flex items-center justify-center mt-[24px] text-center">
//                 {[1, 2, 3, 4, 5].map((_, i) => (
//                   <img
//                     key={i}
//                     className="w-[24px] m-[1px]"
//                     src={black_star_icon}
//                     alt=""
//                   />
//                 ))}
//                 <p className="text-[18px] ml-[11px]">4.4</p>
//               </div>

//               <p className="text-[24px] text-textPrimary mt-[24px] text-center px-[32px] pb-[48px]">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui vel
//                 morbi cursus sed sodales molestie proin dictum gravida.
//                 Porttitor maecenas tincidunt ipsum semper malesuada. In sapien
//                 feugiat laoreet convallis eu sed.
//               </p>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Trending;


import React from "react";
import image_9 from "../assets/images/Ellipse 60.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/style.css";
import black_star_icon from "../assets/icons/black_star_icon.svg";
import right_arrow_icon from "../assets/icons/right_arrow_icon.svg";
import left_arrow_icon from "../assets/icons/left_arrow_icon.svg";

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-[0px]  z-10 top-1/2 transform -translate-y-1/2 cursor-pointer rounded-full bg-textPrimary w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[56px] lg:h-[56px] text-white flex items-center justify-center"
    onClick={onClick}
  >
    <img src={right_arrow_icon} className="w-2 md:w-3 lg:w-4" alt=""/>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-[0px] z-10 top-1/2 transform -translate-y-1/2 cursor-pointer rounded-full bg-textPrimary w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[56px] lg:h-[56px] text-white flex items-center justify-center"
    onClick={onClick}
  >
    <img src={left_arrow_icon} className="w-2  md:w-3  lg:w-4" alt=""/>
  </div>
);

const Trending = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "418px",
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1580, 
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "200px", 
        },
      },
      {
        breakpoint: 1280, 
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "30px", 
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "30px", 
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "0px", 
        },
      },
    ],
  };

  return (
    <div className="relative sm:px-8 mt-[80px]">
      <p className="text-[36px] font-bold text-textPrimary dark:text-white">What Our Customer Says</p>

      <Slider {...settings}>
        {[1, 2, 3, 4].map((_, index) => (
          <div
            key={index}
            className="!flex items-center justify-center mt-[27px] cursor-pointer pb-[5px]"
          >
            <div className="w-[946px] sm:w-[90%] md:w-[95%] lg:w-[95%] flex flex-col items-center shadow-[0px_0px_10px_rgba(0,0,0,0.04)] justify-center rounded-[10px] bg-white">
              <img
                className="w-[150px] h-[150px] rounded-full mt-[58px]"
                src={image_9}
                alt="Offer"
              />
              <div className="flex items-center justify-center mt-[24px] text-center">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <img key={i} className="w-[24px] m-[1px]" src={black_star_icon} alt="" />
                ))}
                <p className="text-[18px] ml-[11px]">5</p>
              </div>

              <p className="text-[18px] lg:text-[24px] xl:text-[24px] text-textPrimary mt-[24px] text-center px-[32px] pb-[48px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui vel
                morbi cursus sed sodales molestie proin dictum gravida. Porttitor
                maecenas tincidunt ipsum semper malesuada. In sapien feugiat laoreet
                convallis eu sed.
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Trending;
