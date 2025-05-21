// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Sliders = ({ children ,slidesToShow,responsive}) => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 700,
//     slidesToShow: slidesToShow,
//     slidesToScroll: 1,
//     arrows: false,
//     autoplay: true,              
//     autoplaySpeed: 2000,  
//   };
//   return (
//     <div>
//       <Slider {...settings}>{children}</Slider>
//     </div>
//   );
// };

// export default Sliders;


import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sliders = ({ children, slidesToShow = 4, responsive }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    centerMode:true,
    slidesToShow,
    slidesToScroll: 4,
    arrows: false,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: responsive || [
      {
        breakpoint: 1536,
        settings: { slidesToShow: 3, slidesToScroll: 4 },
      },
      {
        breakpoint: 1280,
        settings: { slidesToShow: 2.5, slidesToScroll: 2.5,},
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 2, },
      },
      {
        breakpoint: 912,
        settings: { slidesToScroll: 2, slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 2, },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1, },
      },

    ],
  };

  return (
    <div>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default Sliders;
