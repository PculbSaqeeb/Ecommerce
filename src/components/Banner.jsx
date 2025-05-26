import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/style.css";
import { useNavigate } from "react-router";
import Button from "./Button";


const Banner = ({carousel}) => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    customPaging: function (i) {
      return (
        <div
          style={{
            backgroundColor: "#C4C4C4",
            borderRadius: "50%",
            width: "12px",
            height: "12px",
            transition: "background-color 0.3s",
            marginTop: "17px",
          }}
        />
      );
    },
    appendDots: (dots) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {dots}
      </div>
    ),
  };


  const handleProductNavigate = () => {
    navigate("/products");
  };
  
  return (
    // <div className="w-full">
    //   <Slider {...settings}>
    //     {carousel.data && carousel.data.map((item) => {
    //       return (
    //         <div className="!flex w-full">
    //           <img className="w-[1028px] h-[793px] object-cover" src={item.image} alt={item.brand} />
    //           <div className="bg-image1 w-[892px] h-[797px] flex items-center justify-center">
    //             <div className=" ">
    //               {/* <img className="w-[533px] h-[83px] " src={image_6} alt="" /> */}
    //               <p className="text-7xl font-bold text-center tracking-widest">{item.brand.toUpperCase()}</p>
    //               <p className="bold text-5xl text-textMuted bg-transparent mt-[66px] text-center">
    //                 Big Fashion Festival
    //               </p>

    //               <p className="bold text-[42px] text-textMuted mt-[22px] text-center">
    //                 {item.offer}
    //               </p>
    //               <div className="flex justify-center">

    //                 <Button
    //                   onClick={handleProductNavigate}
    //                   variant="lightOutline"
    //                   size="md"
    //                   className="w-[172px] mt-[34px] text-[24px]"
    //                 >
    //                   Explore
    //                 </Button>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </Slider>
    // </div>

    // <div className="w-full">
    //   <Slider {...settings}>
    //     {carousel && carousel.map((item, index) => (
    //       <div
    //         key={index}
    //         className="!flex w-full flex-col lg:flex-row  lg:h-[600px] xl:h-[797px]"
    //       >
    //         {/* Left Side Image */}
    //         <div className="w-full sm:h-[365px] lg:w-1/2 lg:h-full h-[330px]">
    //           <img
    //             className="w-full h-full object-cover"
    //             src={item.image}
    //             alt={item.brand}
    //           />
    //         </div>

    //         {/* Right Side Content */}
    //         <div className="bg-image1 w-full sm:h-[365px] lg:w-1/2 lg:h-full h-[330px] flex items-center justify-center">
    //           <div className="text-center">
    //             {/* Brand Name */}
    //             <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-widest">
    //               {item.brand.toUpperCase()}
    //             </p>

    //             {/* Festival Text */}
    //             <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl text-textMuted bg-transparent mt-6 lg:mt-[66px]">
    //               Big Fashion Festival
    //             </p>

    //             {/* Offer Text */}
    //             <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] text-textMuted mt-4 lg:mt-[22px] xl:mt-[22px]">
    //               {item.offer}
    //             </p>

    //             {/* Explore Button */}
    //             <div className="flex justify-center">
    //               <Button
    //                 onClick={handleProductNavigate}
    //                 variant="lightOutline"
    //                 size="md"
    //                 className="mt-6 lg:mt-[30px] xl:mt-[43px] text-sm sm:text-base md:text-lg lg:text-[24px] xl:text-[24px] w-[140px] md:w-[172px]"
    //               >
    //                 Explore
    //               </Button>
    //             </div>
    //           </div>

    //         </div>
    //       </div>
    //     ))}
    //   </Slider>
    // </div>

      <div className="w-full">
      <Slider {...settings}>
        {carousel && carousel.map((item, index) => (
          <div
            key={index}
            className="!flex w-full flex-col lg:flex-row lg:h-[550px] xl:h-[697px] "
          >
            {/* Left Side Image */}
            <div className="w-full sm:h-[365px] lg:w-1/2 lg:h-full h-[330px]">
              <img
                className="w-full h-full object-cover"
                src={item.image}
                alt={item.brand}
              />
            </div>

            {/* Right Side Content */}
            <div className="bg-image1 w-full sm:h-[365px] lg:w-1/2 lg:h-full h-[330px] flex items-center justify-center">
              <div className="text-center">
                {/* Brand Name */}
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-widest">
                  {item.brand.toUpperCase()}
                </p>

                {/* Festival Text */}
                <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl text-textMuted bg-transparent mt-6 lg:mt-[66px]">
                  Big Fashion Festival
                </p>

                {/* Offer Text */}
                <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] text-textMuted mt-4 lg:mt-[22px] xl:mt-[22px]">
                  {item.offer}
                </p>

                {/* Explore Button */}
                <div className="flex justify-center">
                  <Button
                    onClick={handleProductNavigate}
                    variant="lightOutline"
                    size="md"
                    className="mt-6 lg:mt-[30px] xl:mt-[43px] text-sm sm:text-base md:text-lg lg:text-[24px] xl:text-[24px] w-[140px] md:w-[172px]"
                  >
                    Explore
                  </Button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </Slider>
    </div>


  );
};

export default Banner;
