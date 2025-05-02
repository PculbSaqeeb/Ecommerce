import React from "react";
import "../style/style.css";
import image_6 from "../assets/images/fallback_image.png";
import star_icon from "../assets/icons/star_icon.svg";

const ProductCard = ({ product }) => {

  return (
    <div >
      <div className="w-[410px] h-[423px] rounded-[10px] flex-shrink-0 shadow-[0_0_30px_rgba(0,0,0,0.05)] cursor-pointer overflow-hidden">
        <img
          className="w-full h-[301px] object-cover"
          src={product?.images}
          onError={(e) => (e.currentTarget.src = image_6)}
          alt=""
        />
        <div className="px-[21px]">
          <h5 className="font-bold text-2xl text-textPrimary mt-[10px] truncate max-w-[390px]">
            {product?.title}
          </h5>

          <div className="flex items-center">
            {/* <p className="text-[18px] text-textPrimary mt-[5px]">Brand Name</p> */}
            <p className="text-[18px] text-textPrimary mt-[5px]   ">
              {product?.brand.name}
            </p>
            <p className="text-lg text-textSecondary ml-[30px] mt-[4px]">4.4</p>
            <img
              className="w-[18px] h-[17px] ml-[5px] mt-[2px]"
              src={star_icon}
              alt=""
            />
          </div>

          <div className="mt-[15px] pb-[13px] flex">
            <p className="text-2xl font-bold text-textPrimary">
              {product?.price}
            </p>
            <span className="text-textSecondary text-lg ml-[15px] line-through">
              {product?.discountPrice}
            </span>
            <span className="text-success font-bold text-lg ml-[15px]">
              ({product?.discountPercentage || 0}% off)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
