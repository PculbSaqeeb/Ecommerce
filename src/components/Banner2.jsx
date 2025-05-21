
import { useNavigate } from "react-router";
import Button from "./Button";
import Slider from "react-slick";

const Banner2 = ({carousel}) => {
  // console.log(carousel);
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const navigate = useNavigate();
  
  const handleProductNavigate = () => {
    navigate("/products");
  };

  return (
    // <div className="mt-[93px] bg-red-100">
    //   <Slider {...settings}>
    //     {carousel.data &&
    //       carousel.data.map((item, index) => {
    //         return (
    //           <div
    //             key={index}
    //             className="w-full h-[892px] flex items-center justify-center bg-cover bg-center"
    //             style={{
    //               backgroundImage: `url(${item.image})`,
    //             }}
    //           >
    //             <div className="flex flex-col items-center justify-center mt-[217px]">
    //               <p className="text-7xl font-bold text-white tracking-[10px]">
    //                 {item.brand.toUpperCase()}
    //               </p>
    //               <p className="bold text-5xl text-white mt-[66px] text-center">
    //                 Big Fashion Festival
    //               </p>

    //               <p className="bold text-[48px] text-white mt-[22px]">
    //                 {item.offer}
    //               </p>

    //               <Button
    //                 onClick={handleProductNavigate}
    //                 variant="whiteOutline"
    //                 className="mt-[34px] text-white px-[37px] text-[24px]"
    //               >
    //                 Explore
    //               </Button>
    //             </div>
    //           </div>
    //         );
    //       })}
    //   </Slider>
    // </div>

    <div className="mt-20 bg-red-100">
      <Slider {...settings}>
        {carousel &&
          carousel.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full h-[500px] sm:h-[200px] md:h-[650px] lg:h-[892px] flex items-center justify-center bg-cover bg-center"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              >
                <div className="flex flex-col items-center justify-center mt-[150px] sm:mt-[180px] md:mt-[200px] lg:mt-[217px] px-4 text-center">
                  <p className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-[2px] sm:tracking-[5px] lg:tracking-[10px]">
                    {item.brand.toUpperCase()}
                  </p>

                  <p className="font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl text-white mt-6 sm:mt-8">
                    Big Fashion Festival
                  </p>

                  <p className="font-bold text-lg sm:text-2xl md:text-3xl lg:text-[48px] text-white mt-4 sm:mt-6">
                    {item.offer}
                  </p>

                  <Button
                    onClick={handleProductNavigate}
                    variant="whiteOutline"
                    className="mt-6 sm:mt-8 lg:mt-[75px] px-6 sm:px-8 md:px-[37px] text-sm sm:text-lg md:text-xl lg:text-[24px] text-white"
                  >
                    Explore
                  </Button>
                </div>
              </div>
            );
          })}
      </Slider>
    </div>

  );
};

export default Banner2;
