import React, { useEffect, useState } from "react";
import image_11 from "../assets/images/Rectangle 375.jpg";
import heart_icon from "../assets/icons/heart_icon.svg";
import red_heart_icon from "../assets/icons/red_heart_icon.png";
import ProductCard from "../components/ProductCard";
import Rating from "../components/Rating";
import Specifications from "../components/Specifications";
import image_12 from "../assets/images/Rectangle 20.jpg";
import black_star_icon from "../assets/icons/black_star_icon.svg";
import right_arrow_icon from "../assets/icons/right_blue_icon.svg";
import Layout from "../layout/Index";
import Slider from "react-slick";
import Sliders from "../components/Sliders";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import ScrollToTop from "../components/ScrollToTop";
import { addToWishlist } from "../services/wishlistServices";
import {
  addProductToWishlist,
  deleteProductToWishlist,
  fetchWishlistProduct,
} from "../redux/wishlistSlice";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeToCart,
} from "../redux/cartSlice";
import { fetchProductData } from "../redux/productSlice";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const [tabList, setTabList] = useState("details");
  const [isWishlist, setIsWishlist] = useState(false);
  const products = useSelector((state) => state.product.items);
  const { loading, error } = useSelector((state) => state.product);
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  const handleTabClick = (role) => {
    setTabList(role);
  };

  const handleAddToWishlist = (id) => {
    dispatch(addProductToWishlist(id));
    setIsWishlist(!isWishlist);
  };

  const handleDeleteToWishlist = (id) => {
    dispatch(deleteProductToWishlist(id));
    setIsWishlist(!isWishlist);
  };

  const handleAddToCart = (id) => {
    dispatch(addToCart(id));
  };

  const handleRemoveToCart = (id) => {
    dispatch(removeToCart(id));
  };

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

  const { items } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  return (
    <Layout>
      {loading && <p className="text-center mt-3 text-xl">Loading...</p>}
      <div className="mt-[26px] flex gap-24">
        <div className="flex gap-[22px] ml-[49px]">
          <div>
            <img
              className="w-[180px] h-[180px] bg-slate-50 rounded-[10px] mb-[15px] object-cover cursor-pointer"
              src={product?.images[0]}
              alt=""
            />
            {[1, 2, 3, 4].map((_, i) => {
              return (
                <img
                  className="w-[165px] h-[165px] bg-slate-50 rounded-[10px] mb-[15px] object-cover mx-auto cursor-pointer"
                  src={product?.images[i + 1]}
                  alt=""
                />
              );
            })}
          </div>

          <img
            className="w-[837px] h-[900px] rounded-[10px] object-cover cursor-pointer"
            src={product?.images[3]}
            alt=""
          />
        </div>

        <div className="">
          <h1 className="text-[36px] text-textPrimary font-bold">
            {product?.title}
          </h1>
          <h2 className="text-[24px] text-textPrimary font-normal mt-[21px]">
            {product?.brand?.name}
          </h2>
          <p className="text-[18px] text-textPrimary mt-[22px]">
            Sold By: <span>Seller Name</span>
          </p>

          <div className="flex items-center mt-[25px]">
            {[1, 2, 3, 4, 5].map(() => (
              <img src={black_star_icon} className="mx-[1px]" />
            ))}
            <div className="text-[18px] text-textPrimary flex items-center mt-[2px]">
              <p className="ml-[11px]">4.4</p>
              <p className="ml-[19px]">36 Review</p>
            </div>
          </div>
          <p className="text-[24px] text-textPrimary font-bold mt-[28px]">
            {product?.price}
            <span className="text-[18px] text-[#646464] font-normal ml-[15px] line-through">
              {product?.discountPrice}
            </span>
            <span className="text-[24px] text-success font-normal ml-[15px]">
              ({product?.discountPercentage}% off)
            </span>
          </p>
          <h3 className="text-[24px] text-textPrimary font-bold mt-[30px]">
            Select Size
          </h3>
          <p className="mt-[23px] text-lg text-linkPrimary flex items-center">
            Size Chart
            <img
              src={right_arrow_icon}
              className="w-[22px] h-[22px]"
              size={17}
            />
          </p>

          <div className="flex gap-[19px] mt-[21px]">
            {product?.sizes?.map((size) => (
              <div
                key={size.id}
                className="w-[55px] h-[55px] text-textPrimary border border-[#BABABA] rounded-full flex items-center justify-center cursor-pointer"
              >
                {size?.name}
              </div>
            ))}
          </div>

          <h4 className="text-[24px] text-textPrimary font-bold mt-[20px]">
            Select Color
          </h4>
          <div className="mt-[22px] flex gap-[18px]">
            {[1, 2, 3].map(() => (
              <img
                className="w-[74px] h-[74px] rounded-[5px] object-cover cursor-pointer"
                src={image_11}
                alt=""
              />
            ))}
          </div>
          <h5 className="text-[24px] text-textPrimary font-bold mt-5">
            Best Offer
          </h5>
          <p className="mt-3 text-[18px] text-textPrimary font-bold">
            Special offer get <span className="font-normal">25% off</span>
            <button className="text-lg ml-[15px] text-linkPrimary">T&C</button>
          </p>
          <p className="text-[18px] font-bold mt-[15px] text-textPrimary">
            Bank offer get
            <span className="font-normal">
              40% cashback via Paytm wallet on first transaction
            </span>
            <button className="text-lg ml-[15px] text-linkPrimary">T&C</button>
          </p>
          <p className="text-[18px] font-bold mt-[15px] text-textPrimary">
            Wallet offer get
            <span className="font-normal">
              40% cashback via Paytm wallet on first transaction
            </span>
            <button className="text-lg ml-[15px] text-linkPrimary">T&C</button>
          </p>
          <p className="text-[18px] font-bold mt-[15px] text-textPrimary">
            Special offer get <span className="font-normal">25% off</span>
            <button className="text-lg ml-[15px] text-linkPrimary">T&C</button>
          </p>

          {/* <div className="flex items-center rounded-md overflow-hidden w-max h-9 mt-[20px] ">
            <button
              onClick={handleDecrement}
              className="px-2 text-xl hover:bg-gray-300 w-7 rounded-md bg-gray-200 "
            >
              −
            </button>
            <span className="text-center pt-[8px] text-black text-sm w-9 h-9 rounded-full bg-gray-200 mx-3">
              {cart.find((item) => item.productId === product.id)?.quantity ||
                1}
            </span>
            <button
              onClick={handleIncrement}
              className="px-2 text-xl hover:bg-gray-300 w-7 rounded-md bg-gray-200"
            >
              +
            </button>
          </div> */}

          <div className="flex items-center gap-[22px] mt-[28px]">
            <Button
              onClick={(e) => handleAddToCart(product.id)}
              variant="primary"
              className="w-[168px] text-lg"
            >
              Add to Cart
            </Button>

            <button
              onClick={() => handleRemoveToCart(product.id)}
              className="text-lg bg-yellow-400 rounded-mg py-3 px-4 text-white rounded-[10px]"
            >
              Remove to cart
            </button>
            {!isWishlist ? (
              <img
                onClick={()=>handleAddToWishlist(id)}
                src={heart_icon}
                size={40}
                className="w-[25.38] h-[22.31px] cursor-pointer"
              />
            ) : (
              <img
                onClick={()=>handleDeleteToWishlist(id)}
                src={red_heart_icon}
                size={40}
                className="w-[25.38] h-[22.31px] cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>

      <div className="text-[#848484] text-[18px] flex items-center justify-center gap-[291px] mt-[80px] pb-[28px] ">
        <p
          onClick={() => handleTabClick("details")}
          className={`cursor-pointer ${
            tabList === "details" &&
            "text-[#002482] border-b-[3px] border-[#002482]"
          }`}
        >
          Product Details
        </p>
        <p
          onClick={() => handleTabClick("spec")}
          className={`cursor-pointer ${
            tabList === "spec" &&
            "text-[#002482] border-b-[3px] border-[#002482]"
          }`}
        >
          Specification
        </p>
        <p
          onClick={() => handleTabClick("rating")}
          className={`cursor-pointer ${
            tabList === "rating" &&
            "text-[#002482] border-b-[3px] border-[#002482]"
          }`}
        >
          Rating & Reviews
        </p>
      </div>

      <div className="border-t border-textSecondary mx-[203px] ">
        {tabList === "details" && (
          <ul>
            <li className="text-textPrimary text-[24px] font-bold mt-[27px]">
              Product Details
            </li>
            <li className="text-[18px] text-textPrimary mt-[12px]">
              {product?.description}
            </li>

            <li className="text-textPrimary text-[24px] font-bold mt-[27px]">
              Size & Fit
            </li>
            <li className="text-[18px] text-textPrimary mt-[12px]">
              The model (height 5'8") is wearing a size{" "}
              {product?.sizes[2]?.name}
            </li>

            <li className="text-textPrimary text-[24px] font-bold mt-[27px]">
              Material & care
            </li>
            <li className="text-[18px] text-textPrimary mt-[12px]">
              100% cotton Machine Wash
            </li>
          </ul>
        )}

        {tabList === "spec" && <Specifications product={products} />}

        {tabList === "rating" && <Rating productId={id} />}
      </div>

      <div className="ml-[50px] mt-[80px]">
        <p className="text-[36px] font-bold text-textPrimary ">
          Similar Products
        </p>

        <div className="mt-[27px] pb-1">
          <Sliders slidesToShow={4}>
            {items.map((product, index) => (
              <div
                key={index}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onClick={(e) => handleProductDetailsNavigate(e, product.id)}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </Sliders>
        </div>
      </div>

      <div className="mt-[80px] ml-[50px] mb-[80px]">
        <p className="text-[36px] text-textPrimary font-bold">
          Customer Also Like
        </p>

        <div className="mt-[27px] pb-1">
          <Sliders slidesToShow={4}>
            {items.map((product, index) => (
              <div
                key={index}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onClick={(e) => handleProductDetailsNavigate(e, product.id)}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </Sliders>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
