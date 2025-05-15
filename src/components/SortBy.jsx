import React from "react";

const SortBy = ({ onSortChange }) => {
  return (
    <div>
      {/* <div className="w-[355px] pt-[30px] pl-[28px] text-[18px] text-textPrimary bg-slate-50 rounded-[10px] absolute right-[48px] mt-[19px]">
        <p className="font-bold">Popularity</p>
        <div className="mt-[29px]">
          <input  onChange={() => onSortChange('lowToHigh')}  type="radio" id="l_to_h" name="sort"/>
          <label htmlFor="l_to_h" className="ml-[8px]">Price - Low to High</label>
        </div>
        <div className="mt-[29px]">
          <input onChange={() => onSortChange('highToLow')} type="radio" id="h_to_l" name="sort"/>
          <label htmlFor="h_to_l" className="ml-[8px]">Price - High to Low</label>
        </div>
        <div className="mt-[29px] pb-[43px] ">
          <input onChange={() => onSortChange('newest')} type="radio" id="new" name="sort"/>
          <label htmlFor="new" className="ml-[8px]">Newest</label>
        </div>
      </div> */}
      <div className="w-[300px] sm:max-w-[355px] bg-slate-50 rounded-[10px] absolute right-4 sm:right-[48px] mt-[19px] px-6 pt-6 text-[16px] sm:text-[18px] text-textPrimary z-50 shadow-lg">
        <p className="font-bold">Popularity</p>

        <div className="mt-6">
          <input onChange={() => onSortChange('lowToHigh')} type="radio" id="l_to_h" name="sort" />
          <label htmlFor="l_to_h" className="ml-2">Price - Low to High</label>
        </div>

        <div className="mt-6">
          <input onChange={() => onSortChange('highToLow')} type="radio" id="h_to_l" name="sort" />
          <label htmlFor="h_to_l" className="ml-2">Price - High to Low</label>
        </div>

        <div className="mt-6 pb-6">
          <input onChange={() => onSortChange('newest')} type="radio" id="new" name="sort" />
          <label htmlFor="new" className="ml-2">Newest</label>
        </div>
      </div>


    </div>
  );
};

export default SortBy;
