import { useNavigate } from "react-router";
import Button from "./Button";
import Slider from "react-slick";

const Banner2 = ({ carousel }) => {

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
  }
  return (


    <div className="mt-20 bg-red-100 dark:text-white">
      <Slider {...settings}>
        {carousel &&
          carousel.map((item, index) => {
            return (
              <div
                key={index}>
                <div
                  className="w-full h-[500px] sm:h-[200px] md:h-[650px] flex items-center justify-center bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${item?.image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="flex flex-col items-center justify-center px-4 text-center">
                    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold  tracking-[2px] sm:tracking-[5px] lg:tracking-[10px]">
                      {item.brand.toUpperCase()}
                    </p>

                    <p className="font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl mt-6 sm:mt-8">
                      Big Fashion Festival
                    </p>

                    <p className="font-bold text-lg sm:text-2xl md:text-3xl lg:text-[48px]  mt-4 sm:mt-6">
                      {item.offer}
                    </p>

                    <Button
                      onClick={handleProductNavigate}
                      variant="lightOutline"
                      className="mt-6 sm:mt-8 lg:mt-[75px] px-6 sm:px-8 md:px-[37px] text-sm sm:text-lg md:text-xl lg:text-[24px] "
                    >
                      Explore
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
      </Slider>
    </div>

  );
};

export default Banner2;


