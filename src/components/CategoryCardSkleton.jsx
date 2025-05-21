import React from "react";

const CategoryCardSkleton = () => {

    <div className="w-full max-w-[400px] mx-auto sm:mx-0 rounded-[10px] shadow-[0_0_30px_rgba(0,0,0,0.05)] overflow-hidden mt-5 pb-5 animate-pulse">

        <div className="w-full h-[210px] sm:h-[250px] md:h-[240px] bg-gray-300" />

        <div className="px-5">
            <div className="h-6 md:h-7 bg-gray-300 rounded w-3/4 mt-3" />
            <div className="mt-3 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-5/6" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
            </div>
        </div>
    </div>

};

export default CategoryCardSkleton;