import React from "react";

const ProductCardSkleton = () => {

    <div>
        <div className="w-full max-w-[95%] sm:max-w-[400px] md:max-w-[320px] smallDesktop:max-w-[370px] lg:max-w-[410px] xl:max-w-[410px] rounded-[10px] shadow-[0_0_30px_rgba(0,0,0,0.05)] overflow-hidden pb-5 animate-pulse">

            <div className="w-full h-52 sm:h-60 md:h-64 lg:h-72 xl:h-[301px] bg-gray-300"></div>
            <div className="px-4 sm:px-5 mt-3 space-y-2">
                <div className="h-6 sm:h-7 lg:h-8 bg-gray-300 rounded w-3/4"></div>

                <div className="flex items-center space-x-3 mt-2">
                    <div className="h-4 sm:h-5 bg-gray-300 rounded w-1/4"></div>
                    <div className="h-4 sm:h-5 bg-gray-200 rounded w-1/5"></div>
                    <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                </div>

                <div className="flex flex-wrap items-center mt-4 space-x-3">
                    <div className="h-5 sm:h-6 bg-gray-300 rounded w-1/4"></div>
                    <div className="h-5 sm:h-6 bg-gray-200 rounded w-1/4"></div>
                    <div className="h-5 sm:h-6 bg-gray-100 rounded w-1/4"></div>
                </div>
            </div>
        </div>
    </div>

};

export default ProductCardSkleton;