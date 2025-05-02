// import React, { useState } from "react";
// import down_arrow_icon from "../assets/icons/down_arrow_icon.svg";
// import up_arrow_icon from "../assets/icons/up_arrow_icon.svg";
// import "../style/style.css";
// import * as Slider from "@radix-ui/react-slider";
// import dots from "../assets/icons/dot.svg";
// import Button from "./Button";
// import { applyFilters, clearFilters } from "../store/productSlice";
// import { fetchFilteredProducts } from "../redux/productSlice";

// const allBrands = ["Nike", "Adidas", "Puma"];
// const allColors = ["Red", "Blue", "Green"];
// const allDiscounts = [10, 20, 30, 50];


// const Filter = ({ filterVisible }) => {
//   const [showBrandList, setShowBrandList] = useState(null);
//   const [selectedBrands, setSelectedBrands] = useState([]);
//   const [selectedColors, setSelectedColors] = useState([]);
//   const [selectedDiscounts, setSelectedDiscounts] = useState([]);
//   const [priceRange, setPriceRange] = useState([0, 3000]);
//   const min = 0;
//   const max = 3000;
//   const step = (max - min) / 30;
//   const handleValueChange = (newValues) => {
//     setPriceRange(newValues);
//   };

//   const handleBrandList = (filterSection) => {
//     setShowBrandList((prev) => (prev === filterSection ? null : filterSection));
//   };

//   const handleCheckboxChange = (type, value) => {
//     const updater = {
//       brand: [selectedBrands, setSelectedBrands],
//       color: [selectedColors, setSelectedColors],
//       discount: [selectedDiscounts, setSelectedDiscounts],
//     };

//     const [filters, setFilters] = useState({
//       brands: [],
//       colors: [],
//       priceRange: [0, 10000],
//       discounts: [],
//     });
  

//     const [current, set] = updater[type];
//     if (current.includes(value)) {
//       set(current.filter((item) => item !== value));
//     } else {
//       set([...current, value]);
//     }
//   };

//   // const handleApplyFilter = () => {
//   //   const filters = {
//   //     brands: selectedBrands,
//   //     colors: selectedColors,
//   //     discounts: selectedDiscounts,
//   //     priceRange: priceRange,
//   //   };
//   //   console.log("Applied Filters:", filters);
//   // };

//   const handleClearAll = () => {
//     setSelectedBrands([]);
//     setSelectedColors([]);
//     setSelectedDiscounts([]);
//     setPriceRange([0, 3000]);
//   };


//   const handleCheckbox = (type, value) => {
//     setFilters((prev) => {
//       const isChecked = prev[type].includes(value);
//       const updated = isChecked
//         ? prev[type].filter((item) => item !== value)
//         : [...prev[type], value];
//       return { ...prev, [type]: updated };
//     });
//   };

//   const handlePriceChange = (e) => {
//     const [min, max] = e.target.value.split("-");
//     setFilters((prev) => ({
//       ...prev,
//       priceRange: [parseInt(min), parseInt(max)],
//     }));
//   };

//   useEffect(() => {
//     dispatch(fetchFilteredProducts(filters));
//   }, [filters]);

//   return (
//     <div
//       className={`${!filterVisible ? "block" : "hidden"} w-[460px] mb-[80px]`}
//     >
//       <div className=" rounded-[10px] pl-[22px] pr-[23px] ml-[50px] mt-[58px] shadow-[0_0_30px_rgba(0,0,0,0.07)] pb-[25px]">
//         <div className="pt-[31px] flex justify-between">
//           <p className="text-textPrimary text-[36px] font-bold">Filter</p>
//           <Button
//             onClick={handleClearAll}
//             variant="textOnly"
//             className=" text-[18px]"
//           >
//             Clear all
//           </Button>
//         </div>
//         <p className="mt-[17px] text-[24px]">Price</p>

//         <div className="">
//           <div className="relative cursor-pointer w-[297px] h-[32px] mt-[27px]">
//             <Slider.Root
//               className="relative flex items-center select-none touch-none"
//               value={priceRange}
//               onValueChange={handleValueChange}
//               min={min}
//               max={max}
//               step={step}
//               minStepsBetweenThumbs={1}
//               aria-label="Price Range"
//             >
//               <Slider.Track className="bg-[#939393] relative grow rounded-full h-2">
//                 <Slider.Range className="absolute bg-[#0081DE] rounded-full h-full" />
//               </Slider.Track>

//               <div className="absolute w-[285px] top-[24px] cursor-pointer">
//                 {Array.from({ length: 9 }).map((_, i) => (
//                   <img
//                     key={i}
//                     src={dots}
//                     className="absolute"
//                     style={{ left: `${i * 12.5}%` }}
//                   />
//                 ))}
//               </div>

//               <Slider.Thumb className="block w-5 h-5 bg-white border border-[#898989] rounded-full focus:outline-none" />
//               <Slider.Thumb className="block w-5 h-5 bg-white border border-[#898989] rounded-full focus:outline-none" />
//             </Slider.Root>
//           </div>

//           <div className="flex gap-[180px] mt-[29px]">
//             <p className="text-[18px] text-[#636363]">Min</p>
//             <p className="text-[18px] text-[#636363]">Max</p>
//           </div>

//           <div className="flex gap-[125px] mt-[9px] border-b border-[#84848480] pb-[25px]">
//             <p className="text-[16px]">Rs. {priceRange[0]}</p>
//             <p className="text-[16px]">Rs. {priceRange[1]}</p>
//           </div>
//         </div>

//         <div className="flex justify-between border-b border-[#84848480] pb-[25px]">
//           <p className="mt-[25px] text-[24px] text-textPrimary font-bold">
//             Brand
//           </p>

//           <img
//             onClick={() => handleBrandList("brand")}
//             className="pr-[6.5px] cursor-pointer"
//             src={showBrandList === "brand" ? up_arrow_icon : down_arrow_icon}
//             alt=""
//           />
//         </div>

//         {showBrandList === "brand" &&  allBrands.map((brand) => (
//           <label key={brand}>
//             <input
//               type="checkbox"
//               checked={filters.brands.includes(brand)}
//               onChange={() => handleCheckbox("brands", brand)}
//             />
//             {brand}
//           </label>
//         ))}

//         <div className="flex justify-between border-b border-[#84848480] pb-[25px]">
//           <p className="mt-[25px] text-[24px] text-textPrimary font-bold">
//             Color
//           </p>
//           <img
//             onClick={() => handleBrandList("color")}
//             className="pr-[6.5px] cursor-pointer"
//             src={showBrandList === "color" ? up_arrow_icon : down_arrow_icon}
//             alt=""
//           />
//         </div>

//         {showBrandList === "color" && allColors.map((color) => (
//           <label key={color}>
//             <input
//               type="checkbox"
//               checked={filters.colors.includes(color)}
//               onChange={() => handleCheckbox("colors", color)}
//             />
//             {color}
//           </label>
//         ))}

//         <div className="flex justify-between border-b border-[#84848480] pb-[25px]">
//           <p className="mt-[25px] text-[24px] text-textPrimary font-bold">
//             Discount
//           </p>
//           <img
//             onClick={() => handleBrandList("discount")}
//             className="pr-[6.5px] cursor-pointer"
//             src={showBrandList === "discount" ? up_arrow_icon : down_arrow_icon}
//             alt=""
//           />
//         </div>

//         {showBrandList === "discount" && allDiscounts.map((d) => (
//           <label key={d}>
//             <input
//               type="checkbox"
//               onChange={() => handleCheckbox("discounts", d)}
//               checked={filters.discounts.includes(d)}
//             />
//             {d}% and above
//           </label>
//         ))}

//         <div className="flex justify-center">
//           <Button
//             onClick={() => handleApplyFilter()}
//             className="mt-[20px] flex items-center"
//           >
//             Apply Filter
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Filter;


import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import down_arrow_icon from "../assets/icons/down_arrow_icon.svg";
import up_arrow_icon from "../assets/icons/up_arrow_icon.svg";
import "../style/style.css";
import * as Slider from "@radix-ui/react-slider";
import dots from "../assets/icons/dot.svg";
import Button from "./Button";
import { fetchFilteredProducts } from "../redux/productSlice";

const allBrands = ["Levi's", "Rebook", "H&M","Under Armour"];
const allColors = ["Red", "Blue", "Green"];
const allDiscounts = [10, 20, 30, 50];

const Filter = ({ filterVisible }) => {
  const dispatch = useDispatch();

  const [showBrandList, setShowBrandList] = useState(null);

  const [filters, setFilters] = useState({
    brands: [],
    colors: [],
    priceRange: [0, 3000],
    discounts: [],
  });

  const min = 0;
  const max = 3000;
  const step = (max - min) / 30;

  const handleValueChange = (newValues) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: newValues,
    }));
  };

  const handleBrandList = (filterSection) => {
    setShowBrandList((prev) => (prev === filterSection ? null : filterSection));
  };

  const handleCheckbox = (type, value) => {
    setFilters((prev) => {
      const isChecked = prev[type].includes(value);
      const updated = isChecked
        ? prev[type].filter((item) => item !== value)
        : [...prev[type], value];
      return { ...prev, [type]: updated };
    });
  };

  const handleClearAll = () => {
    setFilters({
      brands: [],
      colors: [],
      priceRange: [0, 3000],
      discounts: [],
    });
  };

  const handleApplyFilter = () => {
    dispatch(fetchFilteredProducts(filters));
  };

  // useEffect(() => {
  //   dispatch(fetchFilteredProducts(filters));
  // }, [filters]);

  return (
    <div className={`${!filterVisible ? "block" : "hidden"} w-[460px] mb-[80px]`}>
      <div className="rounded-[10px] pl-[22px] pr-[23px] ml-[50px] mt-[58px] shadow-[0_0_30px_rgba(0,0,0,0.07)] pb-[25px]">
        <div className="pt-[31px] flex justify-between">
          <p className="text-textPrimary text-[36px] font-bold">Filter</p>
          <Button onClick={handleClearAll} variant="textOnly" className="text-[18px]">
            Clear all
          </Button>
        </div>

        {/* Price Section */}
        <p className="mt-[17px] text-[24px]">Price</p>
        <div className="relative cursor-pointer w-[297px] h-[32px] mt-[27px]">
          <Slider.Root
            className="relative flex items-center select-none touch-none"
            value={filters.priceRange}
            onValueChange={handleValueChange}
            min={min}
            max={max}
            step={step}
            minStepsBetweenThumbs={1}
            aria-label="Price Range"
          >
            <Slider.Track className="bg-[#939393] relative grow rounded-full h-2">
              <Slider.Range className="absolute bg-[#0081DE] rounded-full h-full" />
            </Slider.Track>
            <div className="absolute w-[285px] top-[24px] cursor-pointer">
              {Array.from({ length: 9 }).map((_, i) => (
                <img
                  key={i}
                  src={dots}
                  className="absolute"
                  style={{ left: `${i * 12.5}%` }}
                />
              ))}
            </div>
            <Slider.Thumb className="block w-5 h-5 bg-white border border-[#898989] rounded-full focus:outline-none" />
            <Slider.Thumb className="block w-5 h-5 bg-white border border-[#898989] rounded-full focus:outline-none" />
          </Slider.Root>
        </div>
        <div className="flex gap-[180px] mt-[29px]">
          <p className="text-[18px] text-[#636363]">Min</p>
          <p className="text-[18px] text-[#636363]">Max</p>
        </div>
        <div className="flex gap-[125px] mt-[9px] border-b border-[#84848480] pb-[25px]">
          <p className="text-[16px]">Rs. {filters.priceRange[0]}</p>
          <p className="text-[16px]">Rs. {filters.priceRange[1]}</p>
        </div>

        {/* Brand Section */}
        <div className="flex justify-between border-b border-[#84848480] pb-[25px]">
          <p className="mt-[25px] text-[24px] text-textPrimary font-bold">Brand</p>
          <img
            onClick={() => handleBrandList("brand")}
            className="pr-[6.5px] cursor-pointer"
            src={showBrandList === "brand" ? up_arrow_icon : down_arrow_icon}
            alt=""
          />
        </div>
        {showBrandList === "brand" &&
          allBrands.map((brand) => (
            <label key={brand}>
              <input
                type="checkbox"
                checked={filters.brands.includes(brand)}
                onChange={() => handleCheckbox("brands", brand)}
              />
              {brand}
            </label>
          ))}

        {/* Color Section */}
        <div className="flex justify-between border-b border-[#84848480] pb-[25px]">
          <p className="mt-[25px] text-[24px] text-textPrimary font-bold">Color</p>
          <img
            onClick={() => handleBrandList("color")}
            className="pr-[6.5px] cursor-pointer"
            src={showBrandList === "color" ? up_arrow_icon : down_arrow_icon}
            alt=""
          />
        </div>
        {showBrandList === "color" &&
          allColors.map((color) => (
            <label key={color}>
              <input
                type="checkbox"
                checked={filters.colors.includes(color)}
                onChange={() => handleCheckbox("colors", color)}
              />
              {color}
            </label>
          ))}

        {/* Discount Section */}
        <div className="flex justify-between border-b border-[#84848480] pb-[25px]">
          <p className="mt-[25px] text-[24px] text-textPrimary font-bold">Discount</p>
          <img
            onClick={() => handleBrandList("discount")}
            className="pr-[6.5px] cursor-pointer"
            src={showBrandList === "discount" ? up_arrow_icon : down_arrow_icon}
            alt=""
          />
        </div>
        {showBrandList === "discount" &&
          allDiscounts.map((d) => (
            <label key={d}>
              <input
                type="checkbox"
                onChange={() => handleCheckbox("discounts", d)}
                checked={filters.discounts.includes(d)}
              />
              {d}% and above
            </label>
          ))}

        <div className="flex justify-center">
          <Button onClick={handleApplyFilter} className="mt-[20px] flex items-center">
            Apply Filter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
