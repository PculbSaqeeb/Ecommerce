import React from "react";
import image_10 from "../assets/images/Rectangle 395 (2).jpg";
import { VscArrowSmallRight } from "react-icons/vsc";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sliders from "../components/Sliders";
import arrow from "../assets/icons/arrow_icon.svg";
import Button from "./Button";

const Blog = () => {
  

  return (
    <div className="w-full mt-[80px] px-[50px]">
      <p className="text-[36px] font-bold text-textPrimary mb-[30px]">
        Feature Blogs
      </p>

      <Sliders slidesToShow={2.2}>
        {[1, 2, 3, 4].map((_, index) => (
          <div key={index} className="!flex ">
            <div className="w-[461px] h-[361px] rounded-tl-[10px] rounded-bl-[10px] overflow-hidden">
              <img
                src={image_10}
                alt="blog"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-[293px] h-[361px] py-[27px] px-[32.35px] rounded-tr-[10px] rounded-br-[10px] shadow-[0_0_30px_rgba(0,0,0,0.07)]">
              <p className="text-[18px] text-textSecondary">Blog</p>
              <p className="mt-[18px] text-[20px] w-[150px] font-semibold text-textPrimary">
                Discover new way to decorate your home.
              </p>
              <p className="text-[16px] w-[228px] mt-[18px] text-textPrimary">
                Lorem ipsum dolor sit amet, aliqua consectetur adipiscing elit
                ut.
              </p>
              <div className="w-[40px] mt-[10px] border border-slate-900"></div>

              <div className="flex gap-[81.34px] items-center mt-[11px]">
                <p className="text-[16px]  text-textPrimary">By Souha . H</p>
                <img
                  src={arrow}
                  className="w-[20px] h-[20px] text-textSecondary"
                />
              </div>
            </div>
          </div>
        ))}
      </Sliders>

      <div className="flex justify-center">
        {/* <button className="w-[172px] h-[48px] border-2 border-borderDark rounded-[10px] text-[20px] mt-[50px] text-textPrimary ">
          View all
        </button> */}

        <Button
          className="w-[172px] text-[20px] mt-[50px]"
          variant="lightOutline"
        >
          View all
        </Button>
      </div>
    </div>
  );
};

export default Blog;
