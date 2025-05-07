import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/style.css";
import left_arrow_icon from "../assets/icons/left_arrow_icon.svg";
import right_arrow_icon from "../assets/icons/right_arrow_icon.svg";
import { useNavigate } from "react-router";
import Button from "./Button";
import { getCarouselData } from "../services/crousoleServices";

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-[-20px] z-10 top-1/2 transform -translate-y-1/2 cursor-pointer rounded-full bg-textPrimary w-[54px] h-[54px] text-white flex items-center justify-center"
    onClick={onClick}
  >
    <img src={right_arrow_icon} className="" size={35} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-[-20px] z-10 top-1/2 transform -translate-y-1/2 cursor-pointer rounded-full bg-textPrimary w-[54px] h-[54px] text-white flex items-center justify-center"
    onClick={onClick}
  >
    <img src={left_arrow_icon} size={35} />
  </div>
);

const Trending = () => {
    const [carousel,setCarousel]=useState([]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "310px",
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    focusOnSelect: true,
  };

  const navigate = useNavigate();

  const handleProductNavigate = (e) => {
    e.stopPropagation(); 
    navigate("/products");
  };

   const fetchCarousel = async () => {
      try {
        const data = await getCarouselData();
        setCarousel(data);
      } catch (error) {
        console.error("Failed to load carousel:", error);
      }
    };
  
    useEffect(()=>{
      fetchCarousel();
    },[])
  
  

  return (
    <div className="relative sm:px-8 mt-[67px]">
      <p className="text-[36px] font-bold text-textPrimary mb-10">
        Trending Offer
      </p>

      <Slider {...settings} className="">
        {carousel.data && carousel.data.map((item, index) => (
          <div
            key={index}
            className="!flex items-center justify-center mt-[54px] cursor-pointer h-[587px] mb-2"
          >
            <div className="w-[1146px] h-[587px] flex rounded-[10px] shadow-[0_0_12px_rgba(0,0,0,0.1)] overflow-hidden ">
              <div className="w-[542px] h-full flex flex-col items-center justify-center bg-white">
                <img className="w-[175px] h-[72px] object-cover" src={item.logoURL} alt="Offer" />
                <p className="text-[48px] font-bold text-textPrimary mt-[65px] text-center">
                  {item.offer}
                </p>
                <Button
                
                  onClick={(e)=>handleProductNavigate(e)}
                  variant="outlineGray"
                  size="md"
                  className="w-[172px] mt-[39px] text-[24px] border-2"
                >
                  Explore
                </Button>
              </div>

              <img
                className="w-[604px] h-full object-cover bg-white"
                src={item.image}
                alt=""
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Trending;
