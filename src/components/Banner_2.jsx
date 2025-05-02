import React from "react";
import image_8 from "../assets/images/Vector-removebg-preview.png";
import { useNavigate } from "react-router";
import Button from "./Button";

const Banner_2 = () => {
  const navigate = useNavigate();

  const handleProductNavigate = () => {
    navigate("/products");
  };

  return (
    <div className="mt-[93px]">
      <div className="bg-image w-full h-[892px] flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <img src={image_8} alt="" />
          <p className="bold text-5xl text-white bg-transparent mt-[66px] text-center">
            Big Fashion Festival
          </p>

          <p className="bold text-5xl text-white mt-[22px] text-[48px]">50% - 80% off</p>
          {/* <button onClick={handleProductNavigate} className="px-[37px] py-[9px] rounded-[10px] border-2 border-white mt-[34px] text-white">
              Explore
            </button> */}

          <Button
            onClick={handleProductNavigate}
            variant="whiteOutline"
            className="mt-[34px] text-white px-[37px] py-[9px]"
          >
            Explore
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner_2;
