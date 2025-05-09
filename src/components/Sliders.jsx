import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sliders = ({ children ,slidesToShow,responsive}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,              
    autoplaySpeed: 2000,  
  responsive:responsive,
           
  };
  return (
    <div>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default Sliders;
