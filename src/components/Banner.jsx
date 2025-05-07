import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/style.css";
import { useNavigate } from "react-router";
import Button from "./Button";
import { getCarouselData } from "../services/crousoleServices";
  
  
  const Banner = () => {
  const navigate = useNavigate();
  const [carousel,setCarousel]=useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    customPaging: function (i) {
      return (
        <div
          style={{
            backgroundColor: "#C4C4C4",
            borderRadius: "50%",
            width: "12px",
            height: "12px",
            transition: "background-color 0.3s",
            marginTop: "17px",
          }}
        />
      );
    },
    appendDots: (dots) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {dots}
      </div>
    ),
  };


  const handleProductNavigate = () => {
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
    <div className="w-full">
      <Slider {...settings}>
        {carousel.data && carousel.data.map((item) => {
          return (
            <div className="!flex w-full">
              <img className="w-[1028px] h-[793px] object-cover" src={item.image} alt={item.brand} />
              <div className="bg-image1 w-[892px] h-[797px] flex items-center justify-center">
                <div className=" ">
                  {/* <img className="w-[533px] h-[83px] " src={image_6} alt="" /> */}
                  <p className="text-7xl font-bold text-center tracking-widest">{item.brand.toUpperCase()}</p>
                  <p className="bold text-5xl text-textMuted bg-transparent mt-[66px] text-center">
                    Big Fashion Festival
                  </p>

                  <p className="bold text-[42px] text-textMuted mt-[22px] text-center">
                    {item.offer}
                  </p>
                  <div className="flex justify-center">

                    <Button
                      onClick={handleProductNavigate}
                      variant="lightOutline"
                      size="md"
                      className="w-[172px] mt-[34px] text-[24px]"
                    >
                      Explore
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Banner;
