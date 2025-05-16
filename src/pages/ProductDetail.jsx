import React, { useEffect, useState } from "react";
import image_11 from "../assets/images/Rectangle 375.jpg";
import heart_icon from "../assets/icons/heart_icon.svg";
import red_heart_icon from "../assets/icons/red_heart_icon.png";
import ProductCard from "../components/ProductCard";
import Rating from "../components/Rating";
import Specifications from "../components/Specifications";
import black_star_icon from "../assets/icons/black_star_icon.svg";
import right_arrow_icon from "../assets/icons/right_blue_icon.svg";
import empty_star from "../assets/icons/empty_star.svg";
import { FaStarHalfAlt } from "react-icons/fa";
import Layout from "../layout/Index";
import Sliders from "../components/Sliders";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import {
  addProductToWishlist,
  deleteProductToWishlist,
  fetchWishlistProduct,
} from "../redux/wishlistSlice";
import {
  addToCart,
  getAllCartItems,
  removeToCart,
} from "../redux/cartSlice";
import { fetchProductData } from "../redux/productSlice";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [tabList, setTabList] = useState("details");
  const products = useSelector((state) => state.product.items);
  const product = products.find((item) => item?.id === id);
  const { wishlist } = useSelector((state) => state.wishlist);
  const [showSizeChart, setShowSizeChart] = useState(true);
  const [selectSize, setSelectSize] = useState(product?.productSize[0]?.id);
  const [selectColor, setSelectColor] = useState(product?.productColor[0]?.id);
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);


  const isCart = cart?.some((item) => item?.productId === id || item?.id === id);
  console.log(isCart);
  
  
  useEffect(() => {
    dispatch(getAllCartItems());
  }, [dispatch]);
  
  useEffect(() => {
    dispatch(fetchWishlistProduct());
  }, [dispatch]);

  const isWishlist = wishlist.some(item => item?.productId === id || item?.id === id);

  useEffect(() => {
    if (products?.length === 0) {
      dispatch(fetchProductData());
    }
  }, [dispatch]);

  const handleTabClick = (role) => {
    setTabList(role);
  };

  const handleAddToWishlist = (id) => {
    dispatch(addProductToWishlist(id));
  };

  const handleDeleteToWishlist = (id) => {
    dispatch(deleteProductToWishlist(id));
  };
  // console.log(selectSize,slec);


  const handleAddToCart = (id, selectColorId, selectSizeId) => {
    dispatch(addToCart({
      productId: id,
      productColorId: selectColorId,
      productSizeId: selectSizeId
    }));
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

  const handleShowSizeChart = () => {
    setShowSizeChart(!showSizeChart);
  }

  const handleSelectSize = (sizeId) => {
    setSelectSize(sizeId)
  }

  const handleSelectColor = (colorId) => {
    setSelectColor(colorId);
  }



  const { items } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  return (
    <Layout>
      {/* {loading && <p className="text-center mt-3 text-xl">Loading...</p>} */}
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
                  key={i}
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

            {[1, 2, 3, 4, 5].map((_, i) => {
              const rating = product?.averageRating;
              if (rating >= i + 1) {
                return (
                  <img
                    key={i}
                    src={black_star_icon}
                    alt="full star"
                    className="w-[20px] h-[19px]"
                  />
                );
              } else if (rating >= i + 0.5) {
                return <FaStarHalfAlt key={i} size={22} />;
              } else {
                return (
                  <img
                    key={i}
                    src={empty_star}
                    alt="empty star"
                    className="w-[20px] h-[19px]"
                  />
                );
              }
            })}
            <div className="text-[18px] text-textPrimary flex items-center mt-[2px]">
              <p className="ml-[11px]">{product?.averageRating?.toFixed(1) || 0}</p>
              <p className="ml-[19px]">{product?.reviews?.length || 0} Review</p>
            </div>
          </div>

          <p className="text-[24px] text-textPrimary font-bold mt-[28px]">
            &#x20B9; {product?.price}
            <span className="text-[18px] text-[#646464] font-normal ml-[15px] line-through">
              &#x20B9; {product?.discountPrice}
            </span>
            <span className="text-[24px] text-success font-normal ml-[15px]">
              ({product?.discountPercentage}% off)
            </span>
          </p>
          <h3 className="text-[24px] text-textPrimary font-bold mt-[30px]">
            Select Size
          </h3>
          <p onClick={handleShowSizeChart} className="mt-[23px] text-lg text-linkPrimary flex items-center cursor-pointer">
            Size Chart
            <img
              src={right_arrow_icon}
              className="w-[22px] h-[22px]"
              size={17}
            />
          </p>

          {showSizeChart && (
            <div className="flex gap-[19px] mt-[21px]">
              {product?.productSize.map((size, i) => (
                <div
                  onClick={() => handleSelectSize(size.id)}
                  key={i}
                  className={`w-[55px] h-[55px] text-textPrimary border ${selectSize === size.id ? "border-[#002482]" : "border-[#BABABA]"} rounded-full flex items-center justify-center cursor-pointer`}
                >
                  {size?.name}
                </div>
              ))}
            </div>

          )}


          <h4 className="text-[24px] text-textPrimary font-bold mt-[20px]">
            Select Color
          </h4>
          <div className="flex gap-[19px] mt-[21px]">
            {product.productColor?.map((color, i) => (
              <div
                key={i}
                onClick={() => handleSelectColor(color.id)}
                style={selectColor === color.id ? { borderColor: color.hexCode, borderWidth: '1px' } : {}}
                className={`w-[55px] h-[55px] text-textPrimary rounded-full flex items-center justify-center cursor-pointer shadow-[0px_0px_8px_rgba(0,0,0,0.2)]`}
              >
                <span
                  className="w-[30px] h-[30px] rounded-full border"
                  style={{ backgroundColor: color.hexCode }}
                ></span>
              </div>
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

          

          <div className="flex items-center gap-[22px] mt-[28px]">
            {isCart ? (
              <button
                onClick={() => handleRemoveToCart(product?.id)}
                className="text-lg bg-yellow-400 rounded-mg py-3 px-4 text-white rounded-[10px]"
              >
                Remove to cart
              </button>

            ) : (
              <Button
                onClick={() =>
                  handleAddToCart(product?.id, selectColor, selectSize)}
                variant="primary"
                className="w-[168px] text-lg"
              >
                Add to Cart
              </Button>
            )}

            {!isWishlist ? (
              <img
                onClick={() => handleAddToWishlist(id)}
                src={heart_icon}
                alt="add to wishlist"
                className="w-[25px] h-[25px] cursor-pointer"
              />
            ) : (
              <img
                onClick={() => handleDeleteToWishlist(id)}
                src={red_heart_icon}
                alt="remove from wishlist"
                className="w-[25px] h-[25px] cursor-pointer"
              />
            )}

          </div>
        </div>
      </div>

      <div className="text-[#848484] text-[18px] flex items-center justify-center gap-[291px] mt-[80px] pb-[28px] ">
        <p
          onClick={() => handleTabClick("details")}
          className={`cursor-pointer ${tabList === "details" &&
            "text-[#002482] border-b-[3px] border-[#002482]"
            }`}
        >
          Product Details
        </p>
        <p
          onClick={() => handleTabClick("spec")}
          className={`cursor-pointer ${tabList === "spec" &&
            "text-[#002482] border-b-[3px] border-[#002482]"
            }`}
        >
          Specification
        </p>
        <p
          onClick={() => handleTabClick("rating")}
          className={`cursor-pointer ${tabList === "rating" &&
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
              The model (height 5'8") is wearing a size
              {/* {product?.sizes[2]?.name} */}
            </li>

            <li className="text-textPrimary text-[24px] font-bold mt-[27px]">
              Material & care
            </li>
            <li className="text-[18px] text-textPrimary mt-[12px]">
              100% cotton Machine Wash
            </li>
          </ul>
        )}

        {tabList === "spec" && <Specifications specification={product?.specifications} />}

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
                onClick={(e) => handleProductDetailsNavigate(e, product?.id)}
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
