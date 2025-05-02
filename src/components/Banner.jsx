import React from "react";
import image_3 from "../assets/images/Rectangle 374.jpg";
import image_6 from "../assets/images/Vector-removebg-preview.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/style.css";
import { useNavigate } from "react-router";
import Button from "./Button";

const Banner = () => {
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

  const navigate = useNavigate();

  const handleProductNavigate = () => {
    navigate("/products");
  };

  const images = [image_3, image_3, image_3, image_3];

  return (
    <div className="w-full">
      <Slider {...settings}>
        {images.map((item) => {
          return (
            <div className="!flex w-full">
              <img className="w-[1028px] h-[796px]" src={item} alt="" />
              <div className="bg-image1 w-[892px] h-[797px] flex items-center justify-center shadow-[0,0,10px,rgba(#000000)]">
                <div className=" ">
                  <img className="w-[533px] h-[83px] " src={image_6} alt="" />
                  <p className="bold text-5xl text-textMuted bg-transparent mt-[66px] text-center">
                    Big Fashion Festival
                  </p>

                  <p className="bold text-5xl text-textMuted mt-[22px] text-center">
                    50% - 80% off
                  </p>
                  <div className="flex justify-center">
                    {/* <button onClick={handleProductNavigate} className="w-[172px] h-[48px] rounded-[10px] border-2 border-borderDark mt-[34px] ">
                      Explore
                    </button> */}

                    <Button
                      onClick={handleProductNavigate}
                      variant="lightOutline"
                      size="md"
                      className="w-[172px] mt-[34px]"
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
