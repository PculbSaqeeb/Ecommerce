import React from "react";
import "../style/style.css";
import image_6 from "../assets/images/Rectangle 13.jpg";
import star_icon from "../assets/icons/star_icon.svg";


const ProductCard1 = ({ product }) => {
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
                        <p className="text-lg text-textSecondary ml-[30px] mt-[4px]">{product?.averageRating?.toFixed(1) || 0}</p>
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

            <div className="w-[280px] sm:w-[300px] smallDesktop:w-[360px] lg:w-[410px] xl rounded-[10px] flex-shrink-0 shadow-[0_0_30px_rgba(0,0,0,0.05)] cursor-pointer overflow-hidden pb-4">
                <img
                    className="w-full aspect-[4/3] object-cover"
                    src={product?.images}
                    onError={(e) => {
                        if (e.currentTarget.src !== image_6) {
                            e.currentTarget.src = image_6;
                        }
                    }}
                    alt={product?.title || "Product Image"}
                />

                <div className="px-5">
                    <h5 className="font-bold text-xl sm:text-2xl text-textPrimary mt-2 truncate">
                        {product?.title}
                    </h5>

                    <div className="flex flex-wrap items-center mt-1 gap-x-6 gap-y-1">
                        <p className="text-base sm:text-lg text-textPrimary">
                            {product?.brand?.name}
                        </p>
                        <div className="flex items-center">
                            <p className="text-base sm:text-lg text-textSecondary">
                                {product?.averageRating?.toFixed(1) || 0}
                            </p>
                            <img
                                className="w-4 h-4 ml-1 mb-[2px]"
                                src={star_icon}
                                alt="star"
                            />
                        </div>
                    </div>

                    <div className="mt-3 flex flex-wrap items-center gap-4">
                        <p className="text-xl sm:text-2xl font-bold text-textPrimary">
                            Rs. {product?.price}
                        </p>
                        <span className="text-textSecondary text-base sm:text-lg line-through">
                            Rs. {product?.discountPrice}
                        </span>
                        <span className="text-success font-bold text-base sm:text-lg">
                            ({product?.discountPercentage || 0}% off)
                        </span>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ProductCard1;
