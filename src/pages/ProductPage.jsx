import React, { useEffect, useState } from "react";
import filter_icon from "../assets/icons/filter_icon.svg";
import down_arrow_icon from "../assets/icons/down_arrow_icon.svg";
import ProductCard from "../components/ProductCard";
import SortBy from "../components/SortBy";
import Filter from "../components/Filter";
import Layout from "../layout/Index";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../redux/productSlice";

const ProductPage = () => {
  const navigate = useNavigate();
  const [sortVisible, setSortVisible] = useState(false);
  const [filterVisible, setFilterVisible] = useState(true);
  const dispatch = useDispatch();
  const { items, loading, error, filteredItems } = useSelector(
    (state) => state.product
  );  
  const handleShowSorting = () => {
    setSortVisible(!sortVisible);
  };

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  const handleShowFilter = () => {
    setFilterVisible(!filterVisible);
  };

  const showProductDetails = (id, e) => {
    e.stopPropagation();
    navigate(`/product-detail/${id}`);
  };

  const [sortOption, setSortOption] = useState("");

const handleSortChange = (option) => {
  setSortOption(option);
};

const sortProducts = (products) => {
  const sorted = [...products]; 

  switch (sortOption) {
    case "lowToHigh":
      return sorted.sort((a, b) => a.price - b.price);
    case "highToLow":
      return sorted.sort((a, b) => b.price - a.price);
    case "newest":
      return sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    default:
      return products;
  }
};

  return (
    <Layout>
      <div className="flex">
        <Filter filterVisible={filterVisible} />
        <div className="mb-[80px]">
          <div className="flex gap-[44px] justify-end items-center mr-[50px] mt-[56px]">
            <div className="flex items-center gap-[10px]">
              <p
                onClick={handleShowFilter}
                className="text-[24px] text-textSecondary font-bold cursor-pointer"
              >
                Filters
              </p>
              <img
                onClick={handleShowFilter}
                className="w-[30px] h-[30px] cursor-pointer"
                src={filter_icon}
                alt=""
              />
            </div>

            <div className="flex items-center gap-[17.5px] ">
              <p
                onClick={handleShowSorting}
                className="text-[24px] text-textPrimary font-bold cursor-pointer"
              >
                Sort By
              </p>
              <img
                onClick={handleShowSorting}
                className="w-[15px] h-[7.5px] cursor-pointer"
                src={down_arrow_icon}
                alt=""
              />
            </div>
          </div>
          {sortVisible && <SortBy  onSortChange={handleSortChange} />}
          <div
            className={`grid grid-cols-3 ${
              !filterVisible ? "grid-cols-3" : "grid-cols-4"
            } gap-[60px] mt-[38px] ml-[50px] mr-[52px]`}
          >
            {loading ? (
              <p>Loading products...</p>
            ) 
          : (
              (filteredItems?.length > 0 ? sortProducts(filteredItems) : sortProducts(items))?.map(
                (product, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0"
                    onClick={(e) => showProductDetails(product.id, e)}
                  >
                    <ProductCard product={product} />
                  </div>
                )
              )
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
