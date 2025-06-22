import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/style.css";
import left_arrow_icon from "../assets/icons/left_arrow_icon.svg";
import right_arrow_icon from "../assets/icons/right_arrow_icon.svg";
import { useNavigate } from "react-router";
import Button from "./Button";
import { fetchCarousel } from "../redux/carouselSlice";
import { useDispatch, useSelector } from "react-redux";

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-[10px] z-10 top-1/2 transform -translate-y-1/2 cursor-pointer rounded-full bg-textPrimary w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[56px] lg:h-[56px] text-white flex items-center justify-center"
    onClick={onClick}
  >
    <img src={right_arrow_icon} className="w-2 md:w-3 lg:w-4" alt="" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-[10px] z-10 top-1/2 transform -translate-y-1/2 cursor-pointer rounded-full bg-textPrimary w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[56px] lg:h-[56px] text-white flex items-center justify-center"
    onClick={onClick}
  >
    <img src={left_arrow_icon} className="w-2 md:w-3 lg:w-4" alt="" />
  </div>
);

const Trending = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "380px",
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1280,
        settings: {
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          centerPadding: "0px",
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

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const carousel = useSelector((state) => state.crousole.crousole);

  const handleProductNavigate = (e) => {
    e.stopPropagation();
    navigate("/products");
  };


  useEffect(() => {
    if (!carousel || carousel.length === 0) {
      dispatch(fetchCarousel());
    }
  }, [dispatch,carousel]);


  return (
    <div className="relative sm:px-8 mt-[30px] trending-slider-wrapper">
      <p className="text-[36px] font-bold text-textPrimary dark:text-white mb-10">
        Trending Offers
      </p>

      <Slider {...settings} className="">
        {carousel && carousel?.map((item, index) => (
          <div
            key={index}
            className="!flex items-center justify-center cursor-pointer xl:h-[400px] h-[587px] mb-2"
          >
            <div className="max-w-[1146px] xl:h-[587px] flex flex-col lg:flex-row xl:flex-row items-center rounded-[10px] shadow-[0_0_12px_rgba(0,0,0,0.1)] overflow-hidden ">
              <div className="w-[120px] h-[300px] sm:w-[400px] md:w-[490px] lg:w-[550px] lg:h-[500px] xl:w-[542px] flex flex-col items-center justify-center bg-white">
                <img className="w-full h-[60px] md:h-[100px] lg:h-[160px] object-contain" src={item?.logoURL} alt="Offer" />
                <p className="text-[14px] md:text-[20px] xl:text-[20px] font-bold text-textPrimary mt-[15px] lg:mt-[30px] text-center">
                  {item?.offer}
                </p>
                <Button

                  onClick={(e) => handleProductNavigate(e)}
                  variant="outlineGray"
                  size="md"
                  className="px-10 py-2 mt-[19px] lg:mt-[37px] text-[16px] border-2 dark:text-textPrimary "
                >
                  Explore
                </Button>
              </div>

              <img
                className="w-[310px] h-[300px] sm:w-[400px] md:w-[490px] lg:w-[500px] lg:h-[500px] xl:w-[404px]  object-cover"
                src={item?.image}
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
