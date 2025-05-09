import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import OrderLayout from "../layout/OrderLayout";
import red_heart_icon from "../assets/icons/red_heart_icon.png";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToWishlist,
  deleteProductToWishlist,
  fetchWishlistProduct,
} from "../redux/wishlistSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  const { wishlist, loading, error } = useSelector((state) => state.wishlist);
  console.log(wishlist);

  useEffect(() => {
    dispatch(fetchWishlistProduct());
  }, []);

  const handleDeleteToWishlist =  (id) => {
     dispatch(deleteProductToWishlist(id));
    dispatch(fetchWishlistProduct()); 
  };

  return (
    <OrderLayout>
      <div className="ml-[50px]">
        <p className="mt-[56px] text-[36px] font-bold font">
          My <span className="text-[#002482]">Wishlist</span>
        </p>
        <div className="flex flex-wrap gap-[60px] mt-[38px]">
          {wishlist?.length === 0 && <p>Wishlist is empty!</p>}
          {wishlist?.length > 0 &&
            wishlist?.map((item, index) => (
              <div key={index} className="flex-shrink-0 relative">
                <ProductCard product={item} />

                <img
                  onClick={() => handleDeleteToWishlist(item.id)}
                  src={red_heart_icon}
                  className="w-[30.38px] h-[27.31px] cursor-pointer absolute top-3 right-3"
                />
              </div>
            ))}
        </div>
      </div>

      {/* <div className="px-4 md:px-8 lg:px-[50px]">
  <p className="mt-10 text-2xl md:text-3xl lg:text-[36px] font-bold">
    My <span className="text-[#002482]">Wishlist</span>
  </p>

  <div className="flex flex-wrap gap-6 md:gap-5 mt-10">
    {wishlist?.length === 0 && <p className="text-gray-600">Wishlist is empty!</p>}

    {wishlist?.length > 0 &&
      wishlist.map((item, index) => (
        <div key={index} className="w-full sm:w-[48%] md:w-[31%] lg:w-[28%] relative">
          <ProductCard product={item} />

          <img
            onClick={() => handleDeleteToWishlist(item.id)}
            src={red_heart_icon}
            alt="Remove from wishlist"
            className="w-[30px] h-[27px] cursor-pointer absolute top-3 right-3"
          />
        </div>
      ))}
  </div>
</div> */}

    </OrderLayout>
  );
};

export default Wishlist;
