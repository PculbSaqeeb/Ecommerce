import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import OrderLayout from "../layout/OrderLayout";
import red_heart_icon from "../assets/icons/red_heart_icon.png";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProductToWishlist,
  fetchWishlistProduct,
} from "../redux/wishlistSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { wishlist, loading } = useSelector((state) => state.wishlist);

  useEffect(() => {
    dispatch(fetchWishlistProduct());
  }, [dispatch]);

  const handleDeleteToWishlist = (e, id) => {
    e.stopPropagation();
    dispatch(deleteProductToWishlist(id));
  };

  const showProductDetails = (id) => {
    navigate(`/product-detail/${id}`);
  };

  return (
    <OrderLayout>
      <div className="mx-[50px] flex-grow">
        <p className="mt-[56px] text-[36px] font-bold font">
          My <span className="text-[#002482]">Wishlist</span>
        </p>
        {/* <div className="flex flex-wrap gap-[60px] mt-[38px]">
          {!loading && wishlist?.length === 0 && <p className="text-red-500 text-lg ">Wishlist is empty!</p>}
          {loading && <p>loading...</p>}
          {!loading && wishlist?.length > 0 &&
            wishlist?.map((item, index) => (
              <div  key={index} onClick={(e)=>{showProductDetails(item.id,e)}} className="flex-shrink-0 relative">
                <ProductCard product={item} />

                <img
                  onClick={(e) => handleDeleteToWishlist(e,item.id)}
                  src={red_heart_icon}
                  className="w-[30.38px] h-[27.31px] cursor-pointer absolute top-3 right-3"
                />
              </div>
            ))}
        </div> */}

          {!loading && wishlist?.length === 0 && <p className="text-red-500 text-lg mt-[16px]">Wishlist is empty!</p>}
 
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[60px] mt-[26px] "
        >
          {loading ? (
            <p>Loading products...</p>
          ) : (
            wishlist?.map((product, index) => (
              <div
                key={index}
                className="flex-shrink-0 relative"
                onClick={() => showProductDetails(product?.id)}
              >
                <ProductCard product={product} />

                 <img
                  onClick={(e) => handleDeleteToWishlist(e,product?.id)}
                  src={red_heart_icon}
                  alt="Remove from wishlist"
                  className="w-[30px] h-[27px] cursor-pointer absolute top-3 right-6 md:right-5 lg:right-3 xl:right-2"
                />
              </div>
            ))
          )}
        </div>

      </div>

    </OrderLayout>
  );
};

export default Wishlist;
