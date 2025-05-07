import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSubCategoryByName } from "../services/catogeryServices";
import Layout from "../layout/Index";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";

const SubCategoryPage = () => {
  const { categoryName,subCategory } = useParams();
  const navigate=useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await getSubCategoryByName(categoryName,subCategory);
      setProducts(response.data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setProducts([]);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [subCategory]);

  return (
    <Layout>
      <div className="mx-[50px] mt-[30px] mb-[80px]">
        <h1 className="text-3xl text-textPrimary font-bold mb-6 capitalize">
          {subCategory} Products
        </h1>

        {!loading && <p className="text-center py-10">Loading products...</p>}

        {error && <p className="text-center text-red-500 py-10">{error}</p>}

        {!loading && !error && products.length === 0 && (
          <p className="text-center py-10">
            No products found in this category.
          </p>
        )}

       <div  className="flex flex-wrap gap-[50px] ">
       {products.map((product) => (
        <div onClick={()=>navigate(`product-detail/${product.id}`)}>
            <ProductCard  key={product.id} product={product} />
        </div>
          ))}
       </div>
      </div>
    </Layout>
  );
};

export default SubCategoryPage;
