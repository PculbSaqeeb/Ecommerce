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

            <div className="absolute top-1 left-0 pl-[29.35px] pt-[30.04px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white w-[585px] h-[681px] bg-black bg-opacity-50 rounded-[10px]">
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
      </div>  */}

      <div className="mx-[20px] sm:mx-[30px] md:mx-[40px] lg:mx-[50px] mt-[40px] sm:mt-[60px] lg:mt-[80px]">
        <p className="text-[24px] sm:text-[30px] lg:text-[36px] text-textPrimary font-bold">
          Shop by Categories
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[20px] sm:gap-[25px] lg:gap-[20px] mt-[20px] sm:mt-[27px] cursor-pointer">
          <div className="relative group lg:h-[686px] row-span-1 sm:row-span-1 md:row-span-2 col-span-1 sm:col-span-2 md:col-span-2 lg:row-span-2 lg:col-span-2">
            <img className="w-full h-full rounded-[10px] object-cover" src={image_8} alt="" />
            <div className="absolute inset-0 pl-[20px] pt-[20px] sm:pl-[29.35px] sm:pt-[30.04px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white bg-black bg-opacity-50 rounded-[10px]">
              <p className="text-[20px] sm:text-[24px] font-bold">Women Pant</p>
              <p className="flex items-center">Explore <VscArrowSmallRight size={27} className="text-white" /></p>
            </div>
          </div>

          <div className="relative group col-span-1 lg:h-[331px] lg:col-span-2 ">
            <img className="w-full h-full rounded-[10px] object-cover" src={image_8} alt="" />
            <div className="absolute inset-0 pl-[20px] pt-[20px] sm:pl-[29.35px] sm:pt-[30.04px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white bg-black bg-opacity-50 rounded-[10px]">
              <p className="text-[20px] sm:text-[24px] font-bold">Men's Jacket</p>
              <p className="flex items-center">Explore <VscArrowSmallRight size={27} className="text-white" /></p>
            </div>
          </div>

          <div className="relative group col-span-1 lg:col-span-2 lg:h-[331px]">
            <img className="w-full h-full rounded-[10px] object-cover" src={image_8} alt="" />
            <div className="absolute inset-0 pl-[20px] pt-[20px] sm:pl-[29.35px] sm:pt-[30.04px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white bg-black bg-opacity-50 rounded-[10px]">
              <p className="text-[20px] sm:text-[24px] font-bold">Sweater</p>
              <p className="flex items-center">Explore <VscArrowSmallRight size={27} className="text-white" /></p>
            </div>
          </div>

          <div className="relative group col-span-1 lg:col-span-2 lg:h-[331px]">
            <img className="w-full h-full rounded-[10px] object-cover" src={image_8} alt="" />
            <div className="absolute inset-0 pl-[20px] pt-[20px] sm:pl-[29.35px] sm:pt-[30.04px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white bg-black bg-opacity-50 rounded-[10px]">
              <p className="text-[20px] sm:text-[24px] font-bold">Women Top</p>
              <p className="flex items-center">Explore <VscArrowSmallRight size={27} className="text-white" /></p>
            </div>
          </div>

          <div className="relative group col-span-1 lg:h-[331px]">
            <img className="w-full h-full rounded-[10px] object-cover" src={image_8} alt="" />
            <div className="absolute inset-0 pl-[20px] pt-[20px] sm:pl-[29.35px] sm:pt-[30.04px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white bg-black bg-opacity-50 rounded-[10px]">
              <p className="text-[20px] sm:text-[24px] font-bold">Pants</p>
              <p className="flex items-center">Explore <VscArrowSmallRight size={27} className="text-white" /></p>
            </div>
          </div>

          <div className="relative group col-span-1 lg:h-[331px]">
            <img className="w-full h-full rounded-[10px] object-cover" src={image_8} alt="" />
            <div className="absolute inset-0 pl-[20px] pt-[20px] sm:pl-[29.35px] sm:pt-[30.04px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white bg-black bg-opacity-50 rounded-[10px]">
              <p className="text-[20px] sm:text-[24px] font-bold">Women Jacket</p>
              <p className="flex items-center">Explore <VscArrowSmallRight size={27} className="text-white" /></p>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Category;
