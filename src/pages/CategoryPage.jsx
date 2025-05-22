import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../layout/Index";
import CategoryCard from "../components/CategoryCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryProductData } from "../redux/categorySlice";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const { filteredItems, loading, error } = useSelector((state) => state.category);

  console.log(filteredItems);

  useEffect(() => {
    if (!filteredItems || filteredItems.length === 0)
      dispatch(fetchCategoryProductData(categoryName));
  }, [dispatch, categoryName]);

  return (
    <Layout>
      <div className="mx-[50px] mt-[30px] mb-[80px]">
        <h1 className="text-3xl text-textPrimary font-bold mb-6 capitalize">
          {categoryName} Products
        </h1>

        {loading && <p className="text-center py-10">Loading products...</p>}

        {error && <p className="text-center text-red-500 py-10">{error}</p>}

        {!loading && !error && filteredItems?.length === 0 && (
          <p className="flex items-center justify-center text-red-500 text-[25px] mt-[73px]">
            No category found.
          </p>
         )} 

        {/* <div className="flex flex-wrap gap-[50px]">
          {products.map((product) => (
            <CategoryCard
            
              key={product._  id || product.id}
              product={product}
            />
          ))}
        </div> */}

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {!loading && !error && filteredItems?.map((product) => (
            <CategoryCard
              key={product?._id || product?.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;
