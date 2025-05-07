import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Button from "./Button";
import { getCarouselData } from "../services/crousoleServices";
import Slider from "react-slick";

const Banner_2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const navigate = useNavigate();
  const [carousel, setCarousel] = useState([]);

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

  useEffect(() => {
    fetchCarousel();
  }, []);

  return (
    <div className="mt-[93px] bg-red-100">
      <Slider {...settings}>
        {carousel.data &&
          carousel.data.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full h-[892px] flex items-center justify-center bg-cover bg-center"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              >
                <div className="flex flex-col items-center justify-center mt-[217px]">
                  <p className="text-7xl font-bold text-white tracking-[10px]">
                    {item.brand.toUpperCase()}
                  </p>
                  <p className="bold text-5xl text-white mt-[66px] text-center">
                    Big Fashion Festival
                  </p>

                  <p className="bold text-[48px] text-white mt-[22px]">
                    {item.offer}
                  </p>

                  <Button
                    onClick={handleProductNavigate}
                    variant="whiteOutline"
                    className="mt-[34px] text-white px-[37px] py-[9px] text-[24px]"
                  >
                    Explore
                  </Button>
                </div>
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default Banner_2;
