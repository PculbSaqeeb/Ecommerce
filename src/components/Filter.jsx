// import React, { useState } from "react";
// import down_arrow_icon from "../assets/icons/down_arrow_icon.svg";
// import up_arrow_icon from "../assets/icons/up_arrow_icon.svg";
// import "../style/style.css";
// import Button from "./Button";
// import { useDispatch } from "react-redux";
// import { fetchFilteredProducts, fetchProductData } from "../redux/productSlice";
// import * as Slider from "@radix-ui/react-slider"

// const allBrands = ["Levi's", "Reebok", "H&M", "Under Armour"];
// const allColors = ["Red", "Blue", "Green", "Black", "White"];
// const allDiscounts = ["10%", "20%", "30%", "40%", "50%", "60%"];

// const Filter = ({ filterVisible }) => {
//   const dispatch = useDispatch();
//   const [showBrandList, setShowBrandList] = useState(false);
//   const [showColorList, setShowColorList] = useState(false);
//   const [showDiscountList, setShowDiscountList] = useState(false);

//   const [selectedBrands, setSelectedBrands] = useState([]);
//   const [selectedColors, setSelectedColors] = useState([]);
//   const [selectedDiscounts, setSelectedDiscounts] = useState([]);

//   const [priceRange, setPriceRange] = useState([0, 3000])
//   const min = 0
//   const max = 3000
//   const step = (max - min) / 30 // 8 dots + 1

//   const handleValueChange = (newValues) => {
//     setPriceRange(newValues)
//   }

//   const handleCheckboxChange = (item, list, setList) => {
//     setList((prev) =>
//       prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
//     );
//   };

//   const handleApplyFilter = () => {
//     if (
//       selectedBrands.length === 0 &&
//       selectedColors.length === 0 &&
//       selectedDiscounts.length === 0
//     ) {
//       dispatch(fetchProductData());
//     } else {
//       dispatch(
//         fetchFilteredProducts({
//           brands: selectedBrands,
//           colors: selectedColors,
//           discount: selectedDiscounts,
//         })
//       );
//     }
//   };

//   const handleClearAll = () => {
//     setSelectedBrands([]);
//     setSelectedColors([]);
//     setSelectedDiscounts([]);
//     dispatch(fetchProductData());
//   };

//   const renderSection = (title, showList, setShowList, items, selectedList, setSelectedList) => (
//     <div className="border-t border-[#84848480] pt-[25px] mt-[25px]">
//       <div className="flex justify-between">
//         <p className="text-[24px] text-textPrimary font-bold">{title}</p>
//         <img
//           onClick={() => setShowList(!showList)}
//           className="pr-[6.5px] cursor-pointer"
//           src={showList ? up_arrow_icon : down_arrow_icon}
//           alt={`Toggle ${title} List`}
//         />
//       </div>
//       {showList && (
//         <div className="mt-2 space-y-2">
//           {items.map((item) => (
//             <label key={item} className="block text-[18px] text-[#333]">
//               <input
//                 type="checkbox"
//                 className="mr-2"
//                 checked={selectedList.includes(item)}
//                 onChange={() => handleCheckboxChange(item, selectedList, setSelectedList)}
//               />
//               {title === "Discount Range" ? `${item} and above` : item}
//             </label>
//           ))}
//         </div>
//       )}
//     </div>
//   );

//   return (
//     <div className={`${!filterVisible ? "block" : "hidden"} w-[460px] mb-[80px]`}>
//       <div className="rounded-[10px] pl-[22px] pr-[23px] ml-[50px] mt-[58px] shadow-[0_0_30px_rgba(0,0,0,0.07)] pb-[25px] bg-white">
//         {/* Header */}
//         <div className="pt-[31px] flex justify-between items-center">
//           <p className="text-textPrimary text-[36px] font-bold">Filter</p>
//           <Button onClick={handleClearAll} variant="textOnly" className="text-[18px]">
//             Clear all
//           </Button>
//         </div>

//         {/* Filter Sections */}
//         {renderSection("Brand", showBrandList, setShowBrandList, allBrands, selectedBrands, setSelectedBrands)}
//         {renderSection("Color", showColorList, setShowColorList, allColors, selectedColors, setSelectedColors)}
//         {renderSection("Discount Range", showDiscountList, setShowDiscountList, allDiscounts, selectedDiscounts, setSelectedDiscounts)}

//         {/* Apply Button */}
//         <div className="flex justify-center">
//           <Button onClick={handleApplyFilter} className="mt-[20px] flex items-center">
//             Apply Filter
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Filter;

import React, { useEffect, useState } from "react";
import down_arrow_icon from "../assets/icons/down_arrow_icon.svg";
import up_arrow_icon from "../assets/icons/up_arrow_icon.svg";
import "../style/style.css";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { fetchFilteredProducts, fetchProductData } from "../redux/productSlice";
import * as Slider from "@radix-ui/react-slider"
import { brandName, colorName } from "../services/filterServices";
import { useNavigate } from "react-router";

// const allBrands = ["Levi's", "Reebok", "H&M", "Under Armour"];
// const allColors = ["Red", "Blue", "Green", "Black", "White"];
const allDiscounts = ["10", "20", "30", "40", "50", "60"];

const Filter = ({ filterVisible, setFilterVisible }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showBrandList, setShowBrandList] = useState(false);
  const [showColorList, setShowColorList] = useState(false);
  const [showDiscountList, setShowDiscountList] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedDiscounts, setSelectedDiscounts] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 3000]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [allBrands, setAllBrand] = useState([]);
  const [allColors, setAllColor] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        // setLoading(true);
        const response = await brandName();
        setAllBrand(response.data);
        // setError(null);
      } catch (error) {
        setAllBrand([]);
      } finally {
        // setLoading(false);
      }
    };

    if (!allBrands || allBrands.length === 0) {
      fetchBrands();
    }
  }, [allBrands]);

  useEffect(() => {
    const fetchColors = async () => {
      try {
        // setLoading(true);
        const response = await colorName();
        setAllColor(response.data);
        // setError(null);
      } catch (error) {
        setAllColor([]);
      } finally {
        // setLoading(false);
      }
    };
    if (!allColors || allColors.length === 0) {
      fetchColors();
    }
    // fetchColors();
  }, []);

  const handleCheckboxChange = (item, list, setList) => {
    setList((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const min = 0;
  const max = 3000;
  const step = Math.round((max - min) / 90);

  const handleValueChange = (newValues) => {
    setPriceRange(newValues);
  };

  const handleApplyFilter = () => {
    if (window.innerWidth < 640) {
      navigate("/products")
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (
      selectedBrands?.length === 0 &&
      selectedColors?.length === 0 &&
      selectedDiscounts?.length === 0 &&
      priceRange[0] === 0 &&
      priceRange[1] === 30000
    ) {
      dispatch(fetchProductData());
    } else {
      dispatch(
        fetchFilteredProducts({
          priceRange: priceRange,
          brands: selectedBrands,
          colors: selectedColors,
          discounts: selectedDiscounts,
        })
      );
    }
    setFilterVisible(!filterVisible)
  };

  const handleClearAll = () => {
    setPriceRange([0, 3000])
    setSelectedBrands([]);
    setSelectedColors([]);
    setSelectedDiscounts([]);
    dispatch(fetchProductData());
  };

  return (
    <div
      className={`${!filterVisible ? "block" : "hidden"}  w-[350px] md:w-[420px] xl:w-[460px] lg:w-[460px] mb-[80px] `}
    >
      <div className="rounded-[10px] pl-[22px] pr-[23px] ml-4 lg:ml-[50px] xl:ml-[50px] mt-[20px] md:mt-[58px] shadow-[0_0_30px_rgba(0,0,0,0.07)] pb-[25px] bg-white">
        <div className="pt-[31px] flex justify-between">
          <p className="text-textPrimary text-[36px] font-bold">Filters</p>
          <Button
            onClick={handleClearAll}
            variant="textOnly"
            className="text-[18px]"
          >
            Clear All
          </Button>
        </div>

        <p className="mt-[17px] text-[24px]">Price</p>

        <div className="relative pb-6 mt-[27px]">
          <Slider.Root
            className="relative flex items-center select-none touch-none w-[297px] h-5"
            value={priceRange}
            onValueChange={handleValueChange}
            min={min}
            max={max}
            step={step}
            minStepsBetweenThumbs={1}
            aria-label="Price Range"
          >
            <Slider.Track className="bg-[#939393] relative grow rounded-full h-2 border cursor-pointer">
              <Slider.Range className="absolute bg-[#0081DE] rounded-full h-full" />
            </Slider.Track>

            <div className="absolute w-full top-[28px] left-[7px] cursor-pointer">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full bg-[#6D6D6D]"
                  style={{ left: `${i * 11}%` }}
                />
              ))}
            </div>

            <Slider.Thumb className="block w-[20px] h-[20px] bg-white border border-[#898989] rounded-full cursor-pointer" />
            <Slider.Thumb className="block w-[20px] h-[20px] bg-white border border-[#898989] rounded-full cursor-pointer " />
          </Slider.Root>
        </div>

        <div className="flex mt-[29px] ">
          <div>
            <div className="text-lg text-[#636363] ">Min</div>
            <div className="text-lg mt-[9px]">Rs. {priceRange[0]}</div>
          </div>
          <div className="ml-[180px]">
            <div className="text-lg text-[#636363] font-serif">Max</div>
            <div className="text-lg mt-[9px]">Rs. {priceRange[1]}</div>
          </div>
        </div>

        <div className="flex justify-between border-t border-[#84848480] pt-[25px] mt-[25px]">
          <p className="text-[24px] text-textPrimary font-bold">Brand</p>
          <img
            onClick={() => setShowBrandList(!showBrandList)}
            className="pr-[6.5px] cursor-pointer"
            src={showBrandList ? up_arrow_icon : down_arrow_icon}
            alt="Toggle Brand Filter"
          />
        </div>
        {showBrandList && (
          <div className="mt-2 space-y-2">
            {allBrands.map((brand, index) => (
              <label key={index} className="block text-[18px] text-textPrimary">
                <input
                  type="checkbox"
                  className="mr-2 accent-textSecondary"
                  checked={selectedBrands.includes(brand.id)}
                  onChange={() =>
                    handleCheckboxChange(
                      brand.id,
                      selectedBrands,
                      setSelectedBrands
                    )
                  }
                />
                {brand.name}  <span className="text-textSecondary">(30)</span>
              </label>
            ))}
          </div>
        )}

        <div className="flex justify-between border-t border-[#84848480] pt-[25px] mt-[25px]">
          <p className="text-[24px] text-textPrimary font-bold">Color</p>
          <img
            onClick={() => setShowColorList(!showColorList)}
            className="pr-[6.5px] cursor-pointer"
            src={showColorList ? up_arrow_icon : down_arrow_icon}
            alt="Toggle Color Filter"
          />
        </div>
        {showColorList && (
          <div className="mt-2 space-y-2">
            {allColors.map((color, index) => (
              <label key={index} className="block text-[18px] text-textPrimary">
                <input
                  type="checkbox"
                  className="mr-2 accent-textSecondary"
                  checked={selectedColors.includes(color.id)}
                  onChange={() =>
                    handleCheckboxChange(
                      color.id,
                      selectedColors,
                      setSelectedColors
                    )
                  }
                />
                {color.name}
              </label>
            ))}
          </div>
        )}

        <div className="flex justify-between border-t border-[#84848480] pt-[25px] mt-[25px]">
          <p className="text-[24px] text-textPrimary font-bold">
            Discount Range
          </p>
          <img
            onClick={() => setShowDiscountList(!showDiscountList)}
            className="pr-[6.5px] cursor-pointer"
            src={showDiscountList ? up_arrow_icon : down_arrow_icon}
            alt="Toggle Discount Filter"
          />
        </div>
        {showDiscountList && (
          <div className="mt-2 space-y-2">
            {allDiscounts.map((discount) => (
              <label key={discount} className="block text-[18px] text-textPrimary">
                <input
                  type="checkbox"
                  className="mr-2 accent-textSecondary"
                  checked={selectedDiscounts.includes(discount)}
                  onChange={() =>
                    handleCheckboxChange(
                      discount,
                      selectedDiscounts,
                      setSelectedDiscounts
                    )
                  }
                />
                {discount} % and above
              </label>
            ))}
          </div>
        )}
        <div className="flex justify-center">
          <Button
            onClick={handleApplyFilter}
            className="mt-[20px] flex items-center"
          >
            Apply Filters
          </Button>
        </div>
      </div>
    </div>

    //     <div
    //   className={`${!filterVisible ? "block" : "hidden"} w-full md:w-[460px] mb-[80px] px-4 md:px-0 mt-[30px]`}
    // >
    //   <div className="rounded-[10px] px-4 md:pl-[22px] md:pr-[23px] ml-0 md:ml-[50px] mt-[30px] md:mt-[58px] shadow-[0_0_30px_rgba(0,0,0,0.07)] pb-[25px] bg-white">
    //     <div className="pt-[31px] flex justify-between">
    //       <p className="text-textPrimary text-[28px] md:text-[36px] font-bold">Filters</p>
    //       <Button
    //         onClick={handleClearAll}
    //         variant="textOnly"
    //         className="text-[16px] md:text-[18px]"
    //       >
    //         Clear All
    //       </Button>
    //     </div>

    //     <p className="mt-[17px] text-[20px] md:text-[24px]">Price</p>

    //     <div className="relative pb-6 mt-[27px]">
    //       <Slider.Root
    //         className="relative flex items-center select-none touch-none w-full max-w-[297px] h-5"
    //         value={priceRange}
    //         onValueChange={handleValueChange}
    //         min={min}
    //         max={max}
    //         step={step}
    //         minStepsBetweenThumbs={1}
    //         aria-label="Price Range"
    //       >
    //         <Slider.Track className="bg-[#939393] relative grow rounded-full h-2 border ">
    //           <Slider.Range className="absolute bg-[#0081DE] rounded-full h-full" />
    //         </Slider.Track>

    //         <div className="absolute w-full top-[28px] left-[7px]">
    //           {Array.from({ length: 9 }).map((_, i) => (
    //             <div
    //               key={i}
    //               className="absolute w-1.5 h-1.5 rounded-full bg-[#6D6D6D]"
    //               style={{ left: `${i * 11}%` }}
    //             />
    //           ))}
    //         </div>

    //         <Slider.Thumb className="block w-[20px] h-[20px] bg-white border border-[#898989] rounded-full" />
    //         <Slider.Thumb className="block w-[20px] h-[20px] bg-white border border-[#898989] rounded-full " />
    //       </Slider.Root>
    //     </div>

    //     <div className="flex justify-between mt-[29px]">
    //       <div>
    //         <div className="text-lg text-[#636363]">Min</div>
    //         <div className="text-lg mt-[9px]">Rs. {priceRange[0]}</div>
    //       </div>
    //       <div className="text-right">
    //         <div className="text-lg text-[#636363]">Max</div>
    //         <div className="text-lg mt-[9px]">Rs. {priceRange[1]}</div>
    //       </div>
    //     </div>

    //     <div className="flex justify-between border-t border-[#84848480] pt-[25px] mt-[25px]">
    //       <p className="text-[20px] md:text-[24px] text-textPrimary font-bold">Brand</p>
    //       <img
    //         onClick={() => setShowBrandList(!showBrandList)}
    //         className="pr-[6.5px] cursor-pointer"
    //         src={showBrandList ? up_arrow_icon : down_arrow_icon}
    //         alt="Toggle Brand Filter"
    //       />
    //     </div>
    //     {showBrandList && (
    //       <div className="mt-2 space-y-2">
    //         {allBrands.map((brand) => (
    //           <label key={brand} className="block text-[16px] md:text-[18px] text-[#333]">
    //             <input
    //               type="checkbox"
    //               className="mr-2"
    //               checked={selectedBrands.includes(brand)}
    //               onChange={() =>
    //                 handleCheckboxChange(
    //                   brand,
    //                   selectedBrands,
    //                   setSelectedBrands
    //                 )
    //               }
    //             />
    //             {brand}
    //           </label>
    //         ))}
    //       </div>
    //     )}

    //     <div className="flex justify-between border-t border-[#84848480] pt-[25px] mt-[25px]">
    //       <p className="text-[20px] md:text-[24px] text-textPrimary font-bold">Color</p>
    //       <img
    //         onClick={() => setShowColorList(!showColorList)}
    //         className="pr-[6.5px] cursor-pointer"
    //         src={showColorList ? up_arrow_icon : down_arrow_icon}
    //         alt="Toggle Color Filter"
    //       />
    //     </div>
    //     {showColorList && (
    //       <div className="mt-2 space-y-2">
    //         {allColors.map((color) => (
    //           <label key={color} className="block text-[16px] md:text-[18px] text-[#333]">
    //             <input
    //               type="checkbox"
    //               className="mr-2"
    //               checked={selectedColors.includes(color)}
    //               onChange={() =>
    //                 handleCheckboxChange(
    //                   color,
    //                   selectedColors,
    //                   setSelectedColors
    //                 )
    //               }
    //             />
    //             {color}
    //           </label>
    //         ))}
    //       </div>
    //     )}

    //     <div className="flex justify-between border-t border-[#84848480] pt-[25px] mt-[25px]">
    //       <p className="text-[20px] md:text-[24px] text-textPrimary font-bold">
    //         Discount Range
    //       </p>
    //       <img
    //         onClick={() => setShowDiscountList(!showDiscountList)}
    //         className="pr-[6.5px] cursor-pointer"
    //         src={showDiscountList ? up_arrow_icon : down_arrow_icon}
    //         alt="Toggle Discount Filter"
    //       />
    //     </div>
    //     {showDiscountList && (
    //       <div className="mt-2 space-y-2">
    //         {allDiscounts.map((discount) => (
    //           <label key={discount} className="block text-[16px] md:text-[18px] text-[#333]">
    //             <input
    //               type="checkbox"
    //               className="mr-2"
    //               checked={selectedDiscounts.includes(discount)}
    //               onChange={() =>
    //                 handleCheckboxChange(
    //                   discount,
    //                   selectedDiscounts,
    //                   setSelectedDiscounts
    //                 )
    //               }
    //             />
    //             {discount} % and above
    //           </label>
    //         ))}
    //       </div>
    //     )}
    //     <div className="flex justify-center">
    //       <Button
    //         onClick={handleApplyFilter}
    //         className="mt-[20px] flex items-center"
    //       >
    //         Apply Filters
    //       </Button>
    //     </div>
    //   </div>
    // </div>

  );
};

export default Filter;

