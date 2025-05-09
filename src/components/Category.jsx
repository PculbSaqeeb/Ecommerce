import React from "react";
import image_8 from "../assets/images/Rectangle 383.jpg";
import { VscArrowSmallRight } from "react-icons/vsc";
const Category = () => {
  return (
    <div>
      {/* <div className="mx-[50px] mt-[80px]">
        <p className="text-[36px] text-textPrimary font-bold">
          Shop by Categories
        </p>
        <div className="grid grid-cols-6 gap-[25px] mt-[27px] cursor-pointer">
          <div className=" row-span-2 col-span-2 relative group">
            <img
              className="w-[590px] h-[686px] rounded-[10px] object-contain "
              src={image_8}
              alt=""
            />

            <div className="absolute top-0 left-0 pl-[29.35px] pt-[30.04px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white w-[585px] h-[681px] bg-black bg-opacity-50 rounded-[10px]">
              <p className="text-[24px] font-bold">Women Pant</p>
              <p className="flex items-center">
                Explore <VscArrowSmallRight size={27} className="text-white" />
              </p>
            </div>
          </div>

          <div className="col-span-2 group relative">
            <img
              className="w-[590px] h-[331px] rounded-[10px] object-cover"
              src={image_8}
              alt=""
            />
            <div className="absolute top-0 left-0 pl-[29.35px] pt-[30.04px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white w-[585px] h-[330px] bg-black bg-opacity-50 rounded-[10px]">
              <p className="text-[24px] font-bold">Men's Jacket</p>
              <p className="flex items-center">
                Explore <VscArrowSmallRight size={27} className="text-white" />
              </p>
            </div>
          </div>

          
          <div className=" col-span-2 relative group">
            <img
              className="w-[590px] h-[331px] rounded-[10px] object-cover"
              src={image_8}
              alt=""
            />
            <div className="absolute top-0 left-0 pl-[29.35px] pt-[30.04px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white w-[585px] h-[330px] bg-black bg-opacity-50 rounded-[10px]">
              <p className="text-[24px] font-bold">Sweater</p>
              <p className="flex items-center">
                Explore <VscArrowSmallRight size={27} className="text-white" />
              </p>
            </div>
          </div>

          <div className=" col-span-2 relative group">
            <img
              className="w-[590px] h-[331px] rounded-[10px] object-cover"
              src={image_8}
              alt=""
            />

            <div className="absolute top-0 left-0 pl-[29.35px] pt-[30.04px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white w-[585px] h-[330px] bg-black bg-opacity-50 rounded-[10px]">
              <p className="text-[24px] font-bold">Women Top</p>
              <p className="flex items-center">
                Explore <VscArrowSmallRight size={27} className="text-white" />
              </p>
            </div>
          </div>

          <div className="relative group">
            <img
              className="w-[590px] h-[331px] rounded-[10px] object-cover"
              src={image_8}
              alt=""
            />
            <div className="absolute top-0 left-0 pl-[29.35px] pt-[30.04px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white w-[279px] h-[330px] bg-black bg-opacity-50 rounded-[10px]">
              <p className="text-[24px] font-bold">Pants</p>
              <p className="flex items-center">
                Explore <VscArrowSmallRight size={27} className="text-white" />
              </p>
            </div>
          </div>
          <div className="relative group">
            <img
              className="w-[590px] h-[331px] rounded-[10px] object-cover"
              src={image_8}
              alt=""
            />
            <div className="absolute top-0 left-0 pl-[29.35px] pt-[30.04px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white w-[279px] h-[330px] bg-black bg-opacity-50 rounded-[10px]">
              <p className="text-[24px] font-bold">Women Jacket</p>
              <p className="flex items-center">
                Explore <VscArrowSmallRight size={27} className="text-white" />
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="mx-4 sm:mx-6 md:mx-10 lg:mx-[50px] mt-16">
  <p className="text-2xl sm:text-3xl md:text-4xl text-textPrimary font-bold">
    Shop by Categories
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mt-8 cursor-pointer">
    {/* Item 1 (Large) */}
    <div className="xl:col-span-2 xl:row-span-2 relative group">
      <img
        className="w-full h-full max-h-[686px] rounded-[10px] object-cover"
        src={image_8}
        alt=""
      />
      <div className="absolute top-0 left-0 w-full h-full p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-[10px] text-white">
        <p className="text-lg sm:text-xl md:text-2xl font-bold">Women Pant</p>
        <p className="flex items-center mt-1">
          Explore <VscArrowSmallRight size={24} />
        </p>
      </div>
    </div>

    {/* Item 2 */}
    <div className="relative group">
      <img
        className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[331px] rounded-[10px] object-cover"
        src={image_8}
        alt=""
      />
      <div className="absolute top-0 left-0 w-full h-full p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-[10px] text-white">
        <p className="text-lg sm:text-xl font-bold">Men's Jacket</p>
        <p className="flex items-center mt-1">
          Explore <VscArrowSmallRight size={24} />
        </p>
      </div>
    </div>

    {/* Item 3 */}
    <div className="relative group">
      <img
        className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[331px] rounded-[10px] object-cover"
        src={image_8}
        alt=""
      />
      <div className="absolute top-0 left-0 w-full h-full p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-[10px] text-white">
        <p className="text-lg sm:text-xl font-bold">Sweater</p>
        <p className="flex items-center mt-1">
          Explore <VscArrowSmallRight size={24} />
        </p>
      </div>
    </div>

    {/* Item 4 */}
    <div className="relative group">
      <img
        className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[331px] rounded-[10px] object-cover"
        src={image_8}
        alt=""
      />
      <div className="absolute top-0 left-0 w-full h-full p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-[10px] text-white">
        <p className="text-lg sm:text-xl font-bold">Women Top</p>
        <p className="flex items-center mt-1">
          Explore <VscArrowSmallRight size={24} />
        </p>
      </div>
    </div>

    {/* Item 5 */}
    <div className="relative group">
      <img
        className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[331px] rounded-[10px] object-cover"
        src={image_8}
        alt=""
      />
      <div className="absolute top-0 left-0 w-full h-full p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-[10px] text-white">
        <p className="text-lg sm:text-xl font-bold">Pants</p>
        <p className="flex items-center mt-1">
          Explore <VscArrowSmallRight size={24} />
        </p>
      </div>
    </div>

    {/* Item 6 */}
    <div className="relative group">
      <img
        className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[331px] rounded-[10px] object-cover"
        src={image_8}
        alt=""
      />
      <div className="absolute top-0 left-0 w-full h-full p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-[10px] text-white">
        <p className="text-lg sm:text-xl font-bold">Women Jacket</p>
        <p className="flex items-center mt-1">
          Explore <VscArrowSmallRight size={24} />
        </p>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Category;
