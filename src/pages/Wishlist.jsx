import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import OrderLayout from "../layout/OrderLayout";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToWishlist,
  fetchWishlistProduct,
} from "../redux/wishlistSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  const { wishlist, loading, error } = useSelector((state) => state.wishlist);
  console.log(wishlist);

  useEffect(() => {
    dispatch(fetchWishlistProduct());
  }, []);

  return (
    <OrderLayout>
      <div className="ml-[50px]">
        <p className="mt-[56px] text-[36px] font-bold font">
          My <span className="text-[#002482]">Wishlist</span>
        </p>
        <div className="flex flex-wrap gap-[60px] mt-[38px]">
          {/* {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="flex-shrink-0">
              <ProductCard />
            </div>
          ))} */}
          {/* {error && <p>Error: {error}</p>} */}
          {wishlist.length===0 && <p>Wishlist is empty!</p>}
          {wishlist && wishlist.map((item,index) => (
            <div key={index} className="flex-shrink-0">
              <ProductCard product={item}/>
            </div>
          ))}
        </div>
      </div>
    </OrderLayout>
  );
};

export default Wishlist;
