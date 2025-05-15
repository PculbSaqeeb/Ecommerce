import React, { useEffect } from "react";
import "../style/style.css";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router";
import Sliders from "../components/Sliders";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../redux/productSlice";

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

  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  return (
    // <div className=" mt-[79px]">
    //   <p className="text-textPrimary text-[36px] font-bold ml-[50px]">Trending Now</p>
    //   <div className="mt-[27px]">
    //     <Sliders slidesToShow={4}>
    //       {loading && <p className="text-center mt-3 text-xl">Loading...</p>}
    //       {/* {error && <p>Error: {error}</p>} */}
    //       {items &&
    //         items.map((product, index) => (
    //           <div
    //             onMouseDown={handleMouseDown}
    //             onMouseUp={handleMouseUp}
    //             onClick={(e) => handleProductDetailsNavigate(e, product.id)}
    //             key={index}
    //           >
    //             <ProductCard product={product} />
    //           </div>
    //         ))}
    //     </Sliders>
    //   </div>
    // </div>


    <div className="px-4 md:px-[50px] mt-8 md:mt-[79px]">
      <p className="text-textPrimary text-2xl sm:text-3xl md:text-[36px] font-bold">
        Trending Now
      </p>

      <div className="mt-6 md:mt-[27px]">
        <Sliders 
          // responsive={[
          //   {
          //     breakpoint: 1280,
          //     settings: { slidesToShow: 3.5, slidesToScroll: 4, },
          //   },
          // ]}
        >
          {loading && (
            <p className="text-center mt-3 text-base sm:text-lg md:text-xl ">
              Loading...
            </p>
          )}

          {items &&
            items.map((product, index) => (
              <div
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onClick={(e) => handleProductDetailsNavigate(e, product.id)}
                key={index}
              >
                <ProductCard product={product} />
              </div>
            ))}
        </Sliders>
      </div>
    </div>

  );
};

export default TrendingProduct;
