
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DealCard from "./DealCard";
import Sliders from "../components/Sliders";

const Deal = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3.3,
    slidesToScroll: 4,
    arrows: false,
  };

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
  );
};

export default Deal;

