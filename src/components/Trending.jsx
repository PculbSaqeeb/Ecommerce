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
    className="absolute right-[10px] z-10 top-1/2 transform -translate-y-1/2 cursor-pointer rounded-full bg-textPrimary w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[56px] lg:h-[56px] text-white flex items-center justify-center"
    onClick={onClick}
  >
    <img src={right_arrow_icon} className="w-2 md:w-3 lg:w-4"  />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-[10px] z-10 top-1/2 transform -translate-y-1/2 cursor-pointer rounded-full bg-textPrimary w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[56px] lg:h-[56px] text-white flex items-center justify-center"
    onClick={onClick}
  >
    <img src={left_arrow_icon}  className="w-2 md:w-3 lg:w-4"/>
  </div>
);

const Trending = () => {
  const [carousel, setCarousel] = useState([]);
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
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          centerPadding: "200px",
        },
      },
      {
        breakpoint: 1280,
        settings: {
          centerPadding: "150px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "0px",
        },
      },
    ],
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

  useEffect(() => {
    fetchCarousel();
  }, [])



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
            <div className="max-w-[1146px] h-[500px] flex flex-col lg:flex-row xl:flex-row items-center rounded-[10px] shadow-[0_0_12px_rgba(0,0,0,0.1)] overflow-hidden ">
              <div className="w-[300px] sm:w-[400px] md:w-[490px] lg:w-[350px] xl:w-[542px] h-full flex flex-col items-center justify-center bg-white">
                <img className="w-[175px] h-[72px] object-cover object-center" src={item.logoURL} alt="Offer" />
                <p className="text-[24px] xl:text-[48px] font-bold text-textPrimary mt-[65px] text-center">
                  {item.offer}
                </p>
                <Button

                  onClick={(e) => handleProductNavigate(e)}
                  variant="outlineGray"
                  size="md"
                  className="w-[172px] mt-[39px] text-[24px] border-2"
                >
                  Explore
                </Button>
              </div>

              <img
                className="w-[310px] sm:w-[400px] md:w-[490px] lg:w-[300px] xl:w-[604px]  h-full object-cover"
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
