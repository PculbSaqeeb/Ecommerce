import React, { useEffect } from "react";
import "../style/style.css";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router";
import Sliders from "../components/Sliders";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../redux/productSlice";

const TrendingProduct = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
  };

  const navigate = useNavigate();

  const handleProductDetailsNavigate = (e, id) => {
    e.stopPropagation(); 
    navigate(`/product-detail/${id}`);
  };

  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.product);
  console.log(items);

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  console.log(items);

  return (
    <div className="ml-[50px] mt-[79px]">
      <p className="text-textPrimary text-[36px] font-bold">Trending Now</p>
      <div className="mt-[27px]">
        <Sliders slidesToShow={4}>
          {loading && <p className="text-center mt-3 text-xl">Loading...</p>}
          {error && <p>Error: {error}</p>}
          {items &&
            items.map((product, index) => (
              <div
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
