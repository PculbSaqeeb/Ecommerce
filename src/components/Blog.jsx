import image_10 from "../assets/images/Rectangle 395 (2).jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sliders from "../components/Sliders";
import arrow from "../assets/icons/arrow_icon.svg";
import Button from "./Button";

const Blog = () => {
  


  return (
    <div className="w-full mt-[80px] px-[50px]">
      <p className="text-[36px] font-bold text-textPrimary mb-[27px]">
        Featured Blogs
      </p>

      {/* <Sliders slidesToShow={2.2}>
        {[1, 2, 3, 4].map((_, index) => (
          <div key={index} className="!flex mt-[2px] mb-[2px]">
            <div className="w-[461px] h-[361px] rounded-tl-[10px] rounded-bl-[10px] overflow-hidden">
              <img
                src={image_10}
                alt="blog"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-[293px] h-[361px] py-[27px] px-[32.35px] rounded-tr-[10px] rounded-br-[10px] shadow-[0_0_30px_rgba(0,0,0,0.07)]">
              <p className="text-[18px] text-textSecondary">Blog</p>
              <p className="mt-[18px] text-[20px] w-[150px] font-bold text-[#27363B]">
                Discover new way to decorate your home.
              </p>
              <p className="text-[18px] w-[228px] mt-[18px] text-textSecondary">
                Lorem ipsum dolor sit amet, aliqua consectetur adipiscing elit
                ut.
              </p>
              <div className="w-[40px] mt-[10px] border border-[#27363B]"></div>

              <div className="flex gap-[81.34px] items-center mt-[11px]">
                <p className="text-[18px]  text-[#27363B]">By Souha . H</p>
                <img
                  src={arrow}
                  className="w-[20px] h-[20px] text-textSecondary"
                />
              </div>
            </div>
          </div>
        ))}
      </Sliders> */}

      <Sliders slidesToShow={2.2}>
        {[1, 2, 3, 4].map((_, index) => (
          <div key={index} className="!flex flex-col lg:flex-row xl:flex-row  mt-[2px] mb-[2px]">
            <div className="w-full sm:w-[280px] md:w-[310px] lg:w-[400px] h-[250px] lg:h-[361px]   overflow-hidden">
              <img
                src={image_10}
                alt="blog"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full sm:w-[280px] md:w-[310px] lg:w-[400px] h-auto lg:h-[361px] py-[27px] px-[32.35px] shadow-[0_0_30px_rgba(0,0,0,0.07)]">
              <p className="text-[18px] text-textSecondary">Blog</p>
              <p className="mt-[18px] text-[20px] w-full font-bold text-[#27363B]">
                Discover new way to decorate your home.
              </p>
              <p className="text-[18px] w-full mt-[18px] text-textSecondary">
                Lorem ipsum dolor sit amet, aliqua consectetur adipiscing elit ut.
              </p>
              <div className="w-[40px] mt-[10px] border border-[#27363B]"></div>

              <div className="flex justify-between items-center mt-[11px]">
                <p className="text-[18px] text-[#27363B]">By Souha . H</p>
                <img
                  src={arrow}
                  className="w-[20px] h-[20px] text-textSecondary"
                />
              </div>
            </div>
          </div>
        ))}
      </Sliders>


      <div className="flex justify-center">

        <Button
          className="w-[172px] text-[20px] mt-[50px]"
          variant="lightOutline"
        >
          View all
        </Button>
      </div>
    </div>

    // <div className="w-full mt-20 px-4 sm:px-6 md:px-8 lg:px-[50px]">
    //   <p className="text-2xl sm:text-3xl md:text-[36px] font-bold text-textPrimary mb-6">
    //     Featured Blogs
    //   </p>

    //   <Sliders
    //     slidesToShow={
    //       window.innerWidth < 640
    //         ? 1
    //         : window.innerWidth < 1024
    //           ? 1.2
    //           : window.innerWidth < 1280
    //             ? 2
    //             : 2.2
    //     }
    //   >
    //     {[1, 2, 3, 4].map((_, index) => (
    //       <div key={index} className="flex  sm:flex-row gap-4 sm:gap-0 mb-4">
    //         <div className="w-full sm:w-[300px] md:w-[400px] lg:w-[461px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[361px] rounded-tl-[10px] rounded-bl-[10px] overflow-hidden">
    //           <img
    //             src={image_10}
    //             alt="blog"
    //             className="w-full h-full object-cover"
    //           />
    //         </div>

    //         <div className="w-full sm:w-[260px] md:w-[300px] lg:w-[293px] h-auto sm:h-[250px] md:h-[300px] lg:h-[361px] p-4 sm:py-[27px] sm:px-[32.35px] rounded-tr-[10px] rounded-br-[10px] shadow-md">
    //           <p className="text-sm sm:text-[16px] md:text-[18px] text-textSecondary">
    //             Blog
    //           </p>
    //           <p className="mt-4 text-base sm:text-lg md:text-[20px] font-bold text-[#27363B]">
    //             Discover new way to decorate your home.
    //           </p>
    //           <p className="text-sm sm:text-[16px] md:text-[18px] mt-4 text-textSecondary">
    //             Lorem ipsum dolor sit amet, aliqua consectetur adipiscing elit ut.
    //           </p>
    //           <div className="w-[40px] mt-2 border border-[#27363B]"></div>

    //           <div className="flex justify-between items-center mt-4">
    //             <p className="text-sm sm:text-[16px] md:text-[18px] text-[#27363B]">
    //               By Souha . H
    //             </p>
    //             <img
    //               src={arrow}
    //               className="w-[20px] h-[20px] text-textSecondary"
    //               alt="arrow"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </Sliders>

    //   <div className="flex justify-center">
    //     <Button
    //       className="w-[140px] sm:w-[160px] md:w-[172px] text-base md:text-[20px] mt-[30px] sm:mt-[40px] md:mt-[50px]"
    //       variant="lightOutline"
    //     >
    //       View all
    //     </Button>
    //   </div>
    // </div>

  );
};

export default Blog;
