import React from "react";
import "../style/style.css";
import image_6 from "../assets/images/Rectangle 13.jpg";
import star_icon from "../assets/icons/star_icon.svg";


const ProductCard = ({ product }) => {
  return (
    <div>
      {/* <div className="w-[410px] rounded-[10px] flex-shrink-0 shadow-[0_0_30px_rgba(0,0,0,0.05)] cursor-pointer overflow-hidden pb-[13px]">
        <img
          className="w-full h-[301px] object-cover"
          src={product?.images}
          onError={(e) => {
            if (e.currentTarget.src !== image_6) {
              e.currentTarget.src = image_6;
            }
          }}
          alt=""
        />
        <div className="px-[21px]">
          <h5 className="font-bold text-2xl text-textPrimary mt-[10px] truncate max-w-[390px]">
            {product?.title}
          </h5>

          <div className="flex items-center"> 
            <p className="text-[18px] text-textPrimary mt-[5px]   ">
              {product?.brand?.name}
            </p>
            <p className="text-lg text-textSecondary ml-[30px] mt-[4px]">{product?.averageRating?.toFixed(1) ||0}</p>
            <img
              className="w-[18px] h-[17px] ml-[5px] mt-[2px]"
              src={star_icon}
              alt=""
            />
          </div>

          <div className="mt-[15px] flex">
            <p className="text-2xl font-bold text-textPrimary">
              Rs. {product?.price}
            </p>
            <span className="text-textSecondary text-lg ml-[15px] line-through">
              Rs. {product?.discountPrice}
            </span>
            <span className="text-success font-bold text-lg ml-[15px]">
              ({product?.discountPercentage || 0}% off)
            </span>
          </div>
        </div>
      </div> */}
      {/* <div className="w-full max-w-lg mx-auto rounded-[10px] shadow-[0_0_30px_rgba(0,0,0,0.05)] cursor-pointer overflow-hidden pb-5">
        <img
          className="w-full h-60 sm:h-64 md:h-72 lg:h-80 object-cover"
          src={product?.images}
          onError={(e) => {
            if (e.currentTarget.src !== image_6) {
              e.currentTarget.src = image_6;
            }
          }}
          alt=""
        />
        <div className="px-5">
          <h5 className="font-bold text-xl sm:text-2xl text-textPrimary mt-2 truncate">
            {product?.title}
          </h5>

          <div className="flex items-center mt-1">
            <p className="text-sm sm:text-base text-textPrimary">
              {product?.brand?.name}
            </p>
            <p className="text-sm sm:text-base text-textSecondary ml-4">
              {product?.averageRating?.toFixed(1) || 0}
            </p>
            <img className="w-4 h-4 ml-1" src={star_icon} alt="" />
          </div>

          <div className="mt-4 flex flex-wrap items-center">
            <p className="text-lg sm:text-xl font-bold text-textPrimary">
              Rs. {product?.price}
            </p>
            <span className="text-sm sm:text-base text-textSecondary ml-4 line-through">
              Rs. {product?.discountPrice}
            </span>
            <span className="text-sm sm:text-base text-success font-bold ml-4">
              ({product?.discountPercentage || 0}% off)
            </span>
          </div>
        </div>
      </div> */}

        <div className="w-full max-w-[95%]  sm:max-w-[400px] md:max-w-[360px] lg:max-w-[410px] xl:max-w-[410px] rounded-[10px] shadow-[0_0_30px_rgba(0,0,0,0.05)] cursor-pointer overflow-hidden pb-5 transition-all duration-300 hover:scale-[1.02]">
      <img
        className="w-[410px] h-52 sm:h-60 md:h-64 lg:h-72 xl:h-[301px] object-cover"
        src={product?.images}
        onError={(e) => {
          if (e.currentTarget.src !== image_6) {
            e.currentTarget.src = image_6;
          }
        }}
        alt={product?.title}
      />

      <div className="px-4 sm:px-5">
        <h5 className="font-bold text-lg sm:text-xl lg:text-2xl text-textPrimary mt-3 truncate">
          {product?.title}
        </h5>

        <div className="flex items-center mt-1">
          <p className="text-sm sm:text-base text-textPrimary">
            {product?.brand?.name}
          </p>
          <p className="text-sm sm:text-base text-textSecondary ml-3">
            {product?.averageRating?.toFixed(1) || 0}
          </p>
          <img className="w-4 h-4 ml-1" src={star_icon} alt="rating star" />
        </div>

        <div className="mt-4 flex flex-wrap items-center">
          <p className="text-base sm:text-lg lg:text-xl font-bold text-textPrimary">
            Rs. {product?.price}
          </p>
          <span className="text-sm sm:text-base text-textSecondary ml-3 line-through">
            Rs. {product?.discountPrice}
          </span>
          <span className="text-sm sm:text-base text-success font-bold ml-3">
            ({product?.discountPercentage || 0}% off)
          </span>
        </div>
      </div>
    </div>  

    </div>
  );
};

export default ProductCard;
