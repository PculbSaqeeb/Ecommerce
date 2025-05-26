import "../style/style.css";
import { useNavigate } from "react-router";
import {  useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard1 from "./ProductCard1";

const TrendingProduct = () => {

  const navigate = useNavigate();
  let startX = 0;
  let endX = 0;

  const handleMouseDown = (e) => {
    startX = e.clientX || e.touches?.[0]?.clientX || 0;
  };

  const handleMouseUp = (e) => {
    endX = e.clientX || e.changedTouches?.[0]?.clientX || 0;
  };

  const handleProductDetailsNavigate = (e, id) => {
    e.stopPropagation();
    if (Math.abs(endX - startX) < 5) {
      navigate(`/product-detail/${id}`);
    }
  };

  const { items, loading } = useSelector((state) => state.product);
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1450,
        settings:{
          slidesToShow:3
        }
      },
       {
        breakpoint:1380,
        settings:{
          slidesToShow:2.6
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 986, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 868, 
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
        }
      },
      // {
      //   breakpoint: 768, 
      //   settings: {
      //     slidesToShow: 1.7,
      //     slidesToScroll: 1,
      //   }
      // },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 640, 
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 1,
        }
      },
        {
        breakpoint: 534, 
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 450, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };



  return (


    <div className="mx-10 sm:mx-[20px] md:mx-[50px] mt-14 md:mt-[79px]">
      <p className="text-textPrimary text-2xl sm:text-3xl md:text-[36px] font-bold">
        Trending Now
      </p>


      <div className="mt-6 md:mt-[27px]">
        <Slider {...settings}>
          {loading && (
            <p className="text-center mt-3 text-base sm:text-lg md:text-xl ">
              Loading...
            </p>
          )}

          {items &&
            items?.map((product, index) => (
              <div
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onClick={(e) => handleProductDetailsNavigate(e, product?.id)}
                key={index}
              >
                <ProductCard1 product={product} />
              </div>
            ))}
        </Slider>
      </div>
    </div>

  );
};

export default TrendingProduct;
