// import React, { useEffect, useState } from "react";
// import OrderLayout from "../layout/OrderLayout";
// import { RiDeleteBin5Line } from "react-icons/ri";
// import { useNavigate } from "react-router";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addToCart,
//   applyPromoCode,
//   decrementQuantity,
//   getAllCartItems,
//   incrementQuantity,
//   quantityDecrement,
//   removeToCart,
//   removeCouponCode,
// } from "../redux/cartSlice";
// import { getPromoCode, promoCode } from "../services/cartServices";

// const Cart = () => {
//   const navigate = useNavigate();
//   const [showCouponCode, setShowCouponCode] = useState(false);
//   const [couponCode, setCoupon] = useState([]);
//   const [selectedCoupon, setSelectedCoupon] = useState(null);
//   const [removeCoupon,setRemoveCoupon]=useState(false);
//   const { cart,discount,coupon } = useSelector(
//     (state) => state.cart
//   );

//   console.log(discount);
//   console.log(coupon.coupon);


//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getAllCartItems());
//   }, [dispatch]);

//   const handleRemoveToCart = (id) => {
//     dispatch(removeToCart(id));
//   };

//   const subtotal = cart.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );
//   const shippingPrice = subtotal > 0 ? 40 : 0;
//   const gstAmount = subtotal * 0.18;
//   const totalPayable = subtotal + shippingPrice + gstAmount;

//   const fetchCouponCode = async () => {
//     try {
//       const response = await getPromoCode();
//       setCoupon(response.data);
//     } catch (error) {
//       console.error('Error fetching coupon code:', error);
//     }
//   };

//   const handleCouponClick = (couponCode) => {
//     setSelectedCoupon(couponCode);
//   };

//   const handleDiscount = async (couponCode) => {
//     dispatch(applyPromoCode(couponCode));
//     setShowCouponCode(null);
//   };

//   const handleCoupon = () => {
//     setShowCouponCode(!showCouponCode)
//     fetchCouponCode()
//   }

//   const handleRemoveCoupon = () => {
//     dispatch(removeCouponCode(null)); 
//     setRemoveCoupon(false);
//     setSelectedCoupon(null);
//     setShowCouponCode(false);
//   };

//   return (
//     <div>
//       <OrderLayout>
//         <h3 className="text-2xl font-bold mb-6  text-center mt-[20px]">
//           Your Shopping Cart
//         </h3>
//         {cart.length === 0 && (
//           <p className="mt-[20px] text-center text-red-500">Cart is Empty!</p>
//         )}
//         {cart.length > 0 && (
//           <div className="flex flex-wrap gap-8 p-8 justify-center">
//             <div>
//               <table className="text-left rounded-lg overflow-hidden w-full shadow-[1px_1px_3px_rgba(0,0,0,0.1)]">
//                 <thead className="bg-gray-100 ">
//                   <tr>
//                     <th className="pl-6 py-4">Product</th>
//                     <th className="pl-36 py-4 ">Price</th>
//                     <th className="pl-16 py-4 text-center">Quantity</th>
//                     <th className="pl-16 py-4 pr-6">Total</th>
//                   </tr>
//                 </thead>
//                 <tbody className="">
//                   {cart.map((item) => {
//                     return (
//                       <tr
//                         key={item.productId}
//                         className=" hover:bg-gray-50 border-b"
//                       >
//                         <td className="px-6 py-4 flex items-center gap-5">
//                           <div className="w-20 h-20 flex items-center justify-center text-white rounded-md shadow-[0px_0px_1px_rgba(0,0,0,0.7)]">
//                             <img
//                               className="w-full h-full"
//                               src={item.productImage}
//                               alt=""
//                             />
//                           </div>
//                           <h2 className="text-lg font-medium">
//                             {item.productName}
//                           </h2>
//                         </td>
//                         <td className="pl-36 py-4 text-lg font-medium">
//                           ${item.price.toFixed()}
//                         </td>
//                         <td className="pl-16 py-4 align-middle">
//                           <div className="flex items-center rounded-md overflow-hidden w-max h-9">
//                             <button
//                               onClick={() =>
//                                 dispatch(quantityDecrement(item.productId))
//                               }
//                               className="px-2 text-xl hover:bg-gray-300 w-7 rounded-md "
//                             >
//                               −
//                             </button>
//                             <span className="text-center pt-[4px] text-black text-sm w-7 h-7 rounded-full bg-gray-200 mx-3">
//                               {item.quantity}
//                             </span>
//                             <button
//                               onClick={() =>
//                                 dispatch(addToCart(item.productId))
//                               }
//                               className="px-2 text-xl hover:bg-gray-300 w-7 rounded-md"
//                             >
//                               +
//                             </button>
//                           </div>
//                         </td>

//                         <td className="pl-16 py-4 text-lg pr-10 ">
//                           <div className="flex items-center gap-3 ">
//                             <span>
//                               ${(item.price * item.quantity).toFixed(2)}
//                               {/* {breakdown.subtotal.toFixed()} */}
//                             </span>
//                             <RiDeleteBin5Line
//                               onClick={() => handleRemoveToCart(item.productId)}
//                               className="cursor-pointer text-red-500 text-xl"
//                             />
//                           </div>
//                         </td>
//                       </tr>
//                     );
//                   })}

//                   {/* <tr className="border px-10"></tr> */}
//                 </tbody>
//               </table>
//             </div>

//             {showCouponCode ? (
//               <div className="rounded-md p-6 h-max max-w-[300px] relative shadow-[1px_1px_3px_rgba(0,0,0,0.1)]">
//                 <p>All Coupon Code</p>
//                 {couponCode.map((couponCode, index) => (
//                   <button
//                     key={index}
//                     onClick={() => handleCouponClick(couponCode)}
//                     className={`px-3 py-2 text-sm m-2 mt-[15px] rounded ${selectedCoupon === couponCode ? 'bg-red-500 text-white' : 'bg-red-100 text-gray-300'}`}
//                   >
//                     {couponCode}
//                   </button>
//                 ))}

//                 <button
//                   onClick={() => handleDiscount(selectedCoupon)}
//                   className="px-3 py-2 bg-linkPrimary text-white rounded-[5px] mt-[10px]"
//                 >
//                   Apply
//                 </button>
//               </div>
//             ) : (
//               <div className="rounded-md p-6 h-max relative shadow-[1px_1px_3px_rgba(0,0,0,0.1)]">
//                 <h1 className="text-xl font-bold">Order Summary</h1>
//                 <div className="space-y-6">
//                   <table className="w-80 text-sm">
//                     <tbody>
//                       <tr>
//                         <td className="py-3 font-medium text-gray-600">
//                           Sub total
//                         </td>
//                         <td className="py-3 text-right font-semibold text-gray-800">
//                           ${subtotal.toFixed(2)}
//                         </td>
//                       </tr>

//                       <tr>
//                         <td className="py-3 font-medium text-gray-600">
//                           Shipping Charges
//                         </td>
//                         <td className="py-3 text-right font-semibold text-gray-800">
//                           ${shippingPrice.toFixed(2)}
//                         </td>
//                       </tr>

//                       <tr>
//                         <td className="py-3 font-medium text-gray-600">
//                           GST (18%)
//                         </td>
//                         <td className="py-3 text-right font-semibold text-gray-800">
//                           ${gstAmount.toFixed(2)}
//                         </td>
//                       </tr>

//                       <tr>
//                         <td className="font-medium text-gray-600">
//                           Coupon Code
//                         </td>
//                         <td className="text-right font-semibold">
//                           {/* {discount > 0 ? (
//                             <div className="mt-4 text-green-600 font-medium ">
//                               {  <div>
//                                 <span className="font-bold text-sm ">{coupon.coupon}</span>
//                               </div>}
//                             </div>
//                           ) : (
//                             <button onClick={handleCoupon} className="px-2 border text-xs py-2 rounded">All Coupon</button>
//                           )} */}
//                           {coupon ? (
//                             <div className="mt-4 text-green-600 font-medium">
//                               <div className="flex items-center justify-end">
//                                 <span className="font-bold text-sm">{coupon.coupon}</span>
//                                 <button 
//                                   onClick={handleRemoveCoupon} 
//                                   className="ml-2 text-[10px] cursor-pointer text-red-500 hover:text-red-700"
//                                 >
//                                   Remove
//                                 </button>
//                               </div>
//                             </div>
//                           ) : (
//                             <button 
//                               onClick={handleCoupon} 
//                               className="px-2 border text-xs py-2 rounded hover:bg-gray-50"
//                             >
//                               All Coupons
//                             </button>
//                           )}
//                         </td>

//                       </tr>

//                       <tr>
//                         <td className="text-gray-600 py-4 font-medium">
//                           Discount
//                         </td>
//                         <td className="py-3 text-right font-semibold text-gray-800">
//                           -${discount.toFixed(2)}
//                         </td>
//                       </tr>

//                       <tr className="border-t border-gray-300">
//                         <td className="py-4 font-bold text-lg text-gray-800">
//                           Total amount to Pay
//                         </td>
//                         <td className="py-4 text-right font-extrabold text-lg text-blue-600">
//                           ${Math.round(totalPayable - discount)}
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>

//                   <button
//                     onClick={() => navigate("/checkout")}
//                     className="py-3 px-6 rounded-md bg-blue-600 text-white w-full max-w-80"
//                   >
//                     Proceed to Checkout
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//       </OrderLayout>
//     </div>
//   );
// };

// export default Cart;


import React, { useEffect, useState } from "react";
import OrderLayout from "../layout/OrderLayout";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  applyPromoCode,
  getAllCartItems,
  quantityDecrement,
  removeToCart,
  removeCouponCode,
} from "../redux/cartSlice";
import { getPromoCode } from "../services/cartServices";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showCouponCode, setShowCouponCode] = useState(false);
  const [couponCode, setCoupon] = useState([]);
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [removeCoupon, setRemoveCoupon] = useState(false);

  useEffect(() => {
    dispatch(getAllCartItems());
  }, [dispatch]);

  const { cart, coupon, discount} = useSelector(
    (state) => state.cart
  );



  const handleRemoveToCart = (id) => {
    dispatch(removeToCart(id));
  };

  const subtotal = cart?.reduce(
    (acc, item) => acc + item?.price * item?.quantity,
    0
  );

  const shippingPrice = subtotal > 0 ? 40 : 0;
  const gstAmount = subtotal * 0.18;
  const totalPayable = subtotal + shippingPrice + gstAmount;

  const fetchCouponCode = async () => {
    try {
      const response = await getPromoCode();
      setCoupon(response?.data);
    } catch (error) {
      console.error('Error fetching coupon code:', error);
    }
  };

  const handleCouponClick = (couponCode) => {
    setSelectedCoupon(couponCode);
  };

  const handleDiscount = async (couponCode) => {
    if (!couponCode) return;
    dispatch(applyPromoCode(couponCode));
    setShowCouponCode(false);
  };

  const handleCoupon = () => {
    setShowCouponCode(!showCouponCode);
    fetchCouponCode();
  }

  const handleRemoveCoupon = () => {
    dispatch(removeCouponCode());
    setRemoveCoupon(false);
    setSelectedCoupon(null);
    setShowCouponCode(false);
  };

  return (
    <OrderLayout>
      {/* <div className="flex-grow">
        <p className="mt-[56px] text-[36px] font-bold font mx-[50px]">
          My <span className="text-[#002482]">Cart</span>
        </p>
        {cart?.length === 0 && (
          <p className="text-lg text-red-500 mx-[50px] mt-[20px]">Cart is Empty!</p>
        )}
        {cart?.length > 0 && (
          <div className="flex flex-wrap gap-8 p-8 justify-center">
            <div>
              <table className="text-left rounded-lg overflow-hidden w-full shadow-[1px_1px_3px_rgba(0,0,0,0.1)]">
                <thead className="bg-gray-100 ">
                  <tr>
                    <th className="pl-6 py-4">Product</th>
                    <th className="pl-36 py-4 ">Price</th>
                    <th className="pl-16 py-4 text-center">Quantity</th>
                    <th className="pl-16 py-4 pr-6">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cart?.map((item) => {
                    return (
                      <tr
                        key={item?.productId}
                        className=" hover:bg-gray-50 border-b"
                      >
                        <td className="px-6 py-4 flex items-center gap-5">
                          <div className="w-20 h-20 flex items-center justify-center text-white rounded-md shadow-[0px_0px_1px_rgba(0,0,0,0.7)]">
                            <img
                              className="w-full h-full object-cover"
                              src={item?.productImage || "/placeholder.svg"}
                              alt={item?.productName}
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'https://via.placeholder.com/80?text=No+Image';
                              }}
                            />
                          </div>
                          <div>
                            
                          </div>

                        </td>
                        <td className="pl-36 py-4 text-lg font-medium">
                           &#x20B9; {item?.price?.toFixed(2)}
                        </td>
                        <td className="pl-16 py-4 align-middle">
                          <div className="flex items-center rounded-md overflow-hidden w-max h-9">
                            <button
                              onClick={() =>
                                dispatch(quantityDecrement(item?.productId))
                              }
                              className="px-2 text-xl hover:bg-gray-300 w-7 rounded-md "
                            >
                              −
                            </button>
                            <span className="text-center pt-[4px] text-black text-sm w-7 h-7 rounded-full bg-gray-200 mx-3">
                              {item?.quantity}
                            </span>
                            <button
                              onClick={() =>
                                dispatch(addToCart({
                                  productId: item?.productId,
                                  productColorId: item?.productColorId,
                                  productSizeId: item?.productSizeId
                                })) 
                              }
                              className="px-2 text-xl hover:bg-gray-300 w-7 rounded-md"
                            >
                              +
                            </button>
                          </div>
                        </td>

                        <td className="pl-16 py-4 text-lg pr-10 ">
                          <div className="flex items-center gap-3 ">
                            <span>
                               &#x20B9; {(item?.price * item?.quantity)?.toFixed(2)}
                            </span>
                            <RiDeleteBin5Line
                              onClick={() => handleRemoveToCart(item?.productId)}
                              className="cursor-pointer text-red-500 text-xl"
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {showCouponCode ? (
              <div className="rounded-md p-6 h-max max-w-[300px] relative shadow-[1px_1px_3px_rgba(0,0,0,0.1)]">
                <p className="font-medium mb-2">All Coupon Codes</p>
                {couponCode?.length === 0 ? (
                  <p className="text-sm text-gray-500">Loading coupons...</p>
                ) : (
                  <div className="flex flex-wrap">
                    {couponCode?.map((code, index) => (
                      <button
                        key={index}
                        onClick={() => handleCouponClick(code)}
                        className={`px-3 py-2 text-sm m-2 mt-[15px] rounded transition-colors ${selectedCoupon === code
                          ? 'bg-red-500 text-white'
                          : 'bg-red-100 text-gray-700 hover:bg-red-200'
                          }`}
                      >
                        {code}
                      </button>
                    ))}
                  </div>
                )}

                <div className="mt-4 flex justify-between">
                  <button
                    onClick={() => setShowCouponCode(false)}
                    className="px-3 py-2 bg-gray-200 text-gray-700 rounded-[5px]"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleDiscount(selectedCoupon)}
                    disabled={!selectedCoupon}
                    className={`px-3 py-2 rounded-[5px] ${!selectedCoupon
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-linkPrimary text-white hover:bg-blue-700'
                      }`}
                  >
                    Apply
                  </button>
                </div>
              </div>
            ) : (
              <div className="rounded-md p-6 h-max relative shadow-[1px_1px_3px_rgba(0,0,0,0.1)]">
                <h1 className="text-xl font-bold">Order Summary</h1>
                <div className="space-y-6">
                  <table className="w-80 text-sm">
                    <tbody>
                      <tr>
                        <td className="py-3 font-medium text-gray-600">
                          Sub total
                        </td>
                        <td className="py-3 text-right font-semibold text-gray-800">
                           &#x20B9; {subtotal?.toFixed(2)}
                        </td>
                      </tr>

                      <tr>
                        <td className="py-3 font-medium text-gray-600">
                          Shipping Charges
                        </td>
                        <td className="py-3 text-right font-semibold text-gray-800">
                           &#x20B9; {shippingPrice?.toFixed(2)}
                        </td>
                      </tr>

                      <tr>
                        <td className="py-3 font-medium text-gray-600">
                          GST (18%)
                        </td>
                        <td className="py-3 text-right font-semibold text-gray-800">
                           &#x20B9; {gstAmount?.toFixed(2)}
                        </td>
                      </tr>

                      <tr>
                        <td className="font-medium text-gray-600">
                          Coupon Code
                        </td>
                        <td className="text-right font-semibold">
                          {coupon ? (
                            <div className="mt-4 text-green-600 font-medium">
                              <div className="">
                                <span className="font-bold text-sm">{coupon}</span>
                                <p
                                  onClick={handleRemoveCoupon}
                                  className="ml-2 text-[10px] cursor-pointer text-red-500 hover:text-red-700"
                                >
                                  Remove
                                </p>
                              </div>
                            </div>
                          ) : (
                            <button
                              onClick={handleCoupon}
                              className="px-2 border text-xs py-2 rounded hover:bg-gray-50"
                            >
                              All Coupons
                            </button>
                          )}
                        </td>
                      </tr>

                      <tr>
                        <td className="text-gray-600 py-4 font-medium">
                          Discount
                        </td>
                        <td className="py-3 text-right font-semibold text-gray-800">
                          - &#x20B9; {discount?.toFixed(2)}
                        </td>
                      </tr>

                      <tr className="border-t border-gray-300">
                        <td className="py-4 font-bold text-lg text-gray-800">
                          Total amount to Pay
                        </td>
                        <td className="py-4 text-right font-extrabold text-lg text-blue-600">
                          &#x20B9; {Math.round(totalPayable - discount)}
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <button
                    onClick={() => navigate("/checkout")}
                    className="py-3 px-6 rounded-md bg-blue-600 text-white w-full max-w-80 hover:bg-blue-700 transition-colors"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div> */}

      <div className="flex-grow md:mx-[50px]">
        <p className="mt-6 md:mt-[56px] text-2xl md:text-[36px] font-bold mx-4">
          My <span className="text-[#002482]">Cart</span>
        </p>
        {cart?.length === 0 && (
          <p className="text-lg text-red-500 mx-4 mt-4 md:mt-[20px]">Cart is Empty!</p>
        )}
        {cart?.length > 0 && (
          <div className="flex flex-col lg:flex-row flex-wrap gap-4 md:gap-8 p-4 mt-[20px]">
            <div className="max-w-[1100px] lg:flex-1">
              <div className="hidden md:block">
                <table className="text-left rounded-lg overflow-hidden w-full shadow-[1px_1px_3px_rgba(0,0,0,0.1)]">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="pl-4 md:pl-6 py-4">Product</th>
                      <th className="pl-8 md:pl-16 lg:pl-36 py-4">Price</th>
                      <th className="pl-4 md:pl-16 py-4 text-center">Quantity</th>
                      <th className="pl-4 md:pl-16 py-4 pr-4 md:pr-6">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart?.map((item) => {
                      return (
                        <tr
                          key={item?.productId}
                          className="hover:bg-gray-50 border-b"
                        >
                          <td className="px-4 md:px-6 py-4 flex items-center gap-3 md:gap-5">
                            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-white rounded-md shadow-[0px_0px_1px_rgba(0,0,0,0.7)]">
                              <img
                                className="w-full h-full object-cover"
                                src={item?.productImage[0] || "/placeholder.svg"}
                                alt={item?.productName}
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src = 'https://via.placeholder.com/80?text=No+Image';
                                }}
                              />
                            </div>
                            <div className="text-sm md:text-base font-bold">
                              {item?.productName}
                              <div className="leading-5 mt-[3px] font-normal">
                                <p className="text-[12px]">Size: {item?.productSize}</p>
                                <p className="text-[12px]">Color: {item?.productColor}</p>
                              </div>
                            </div>
                          </td>
                          <td className="pl-8 md:pl-16 lg:pl-36 py-4 text-sm md:text-lg font-medium">
                            &#x20B9; {item?.price?.toFixed(2)}
                          </td>
                          <td className="pl-4 md:pl-16 py-4 align-middle">
                            <div className="flex items-center rounded-md overflow-hidden w-max h-9 mx-auto">
                              <button
                                onClick={() =>
                                  dispatch(quantityDecrement(item?.productId))
                                }
                                className="px-2 text-xl hover:bg-gray-300 w-7 rounded-md"
                              >
                                −
                              </button>
                              <span className="text-center pt-[4px] text-black text-sm w-7 h-7 rounded-full bg-gray-200 mx-3">
                                {item?.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  dispatch(addToCart({
                                    productId: item?.productId,
                                    productColorId: item?.productColorId,
                                    productSizeId: item?.productSizeId
                                  }))
                                }
                                className="px-2 text-xl hover:bg-gray-300 w-7 rounded-md"
                              >
                                +
                              </button>
                            </div>
                          </td>

                          <td className="pl-4 md:pl-16 py-4 text-sm md:text-lg pr-4 md:pr-10">
                            <div className="flex items-center gap-3">
                              <span>
                                &#x20B9; {(item?.price * item?.quantity)?.toFixed(2)}
                              </span>
                              <RiDeleteBin5Line
                                onClick={() => handleRemoveToCart(item?.productId)}
                                className="cursor-pointer text-red-500 text-xl"
                              />
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="md:hidden">
                {cart?.map((item) => (
                  <div
                    key={item?.productId}
                    className="mb-4 p-4 rounded-lg border shadow-sm"
                  >
                    <div className="flex gap-4 mb-3">
                      <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden shadow-sm">
                        <img
                          className="w-full h-full object-cover"
                          src={item?.productImage[0] || "/placeholder.svg"}
                          alt={item?.productName}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://via.placeholder.com/80?text=No+Image';
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-800 mb-1">{item?.productName}</h3>
                        <p className="text-gray-600">&#x20B9; {item?.price?.toFixed(2)}</p>
                      </div>
                      <div>
                        <RiDeleteBin5Line
                          onClick={() => handleRemoveToCart(item?.productId)}
                          className="cursor-pointer text-red-500 text-xl"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center rounded-md overflow-hidden w-max h-9 -ml-2">
                        <button
                          onClick={() => dispatch(quantityDecrement(item?.productId))}
                          className="px-2 text-xl hover:bg-gray-300 w-7 rounded-md"
                        >
                          −
                        </button>
                        <span className="text-center pt-[4px] text-black text-sm w-7 h-7 rounded-full bg-gray-200 mx-3">
                          {item?.quantity}
                        </span>
                        <button
                          onClick={() =>
                            dispatch(addToCart({
                              productId: item?.productId,
                              productColorId: item?.productColorId,
                              productSizeId: item?.productSizeId
                            }))
                          }
                          className="px-2 text-xl hover:bg-gray-300 w-7 rounded-md"
                        >
                          +
                        </button>
                      </div>
                      <div className="font-medium">
                        Total: &#x20B9; {(item?.price * item?.quantity)?.toFixed(2)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-[800px]">
              {showCouponCode ? (
                <div className="rounded-md p-4 md:p-6 h-max max-w-full md:max-w-[300px] relative shadow-[1px_1px_3px_rgba(0,0,0,0.1)]">
                  <p className="font-medium mb-2">All Coupon Codes</p>
                  {couponCode?.length === 0 ? (
                    <p className="text-sm text-gray-500">Loading coupons...</p>
                  ) : (
                    <div className="flex flex-wrap">
                      {couponCode?.map((code, index) => (
                        <button
                          key={index}
                          onClick={() => handleCouponClick(code)}
                          className={`px-3 py-2 text-sm m-2 mt-[15px] rounded transition-colors ${selectedCoupon === code
                            ? 'bg-red-500 text-white'
                            : 'bg-red-100 text-gray-700 hover:bg-red-200'
                            }`}
                        >
                          {code}
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="mt-4 flex justify-between">
                    <button
                      onClick={() => setShowCouponCode(false)}
                      className="px-3 py-2 bg-gray-200 text-gray-700 rounded-[5px]"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleDiscount(selectedCoupon)}
                      disabled={!selectedCoupon}
                      className={`px-3 py-2 rounded-[5px] ${!selectedCoupon
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-linkPrimary text-white hover:bg-blue-700'
                        }`}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              ) : (
                // <div className="rounded-md p-4  md:max-w-[500px] md:p-6 h-max relative shadow-[1px_1px_3px_rgba(0,0,0,0.1)]">
                //   <h1 className="text-xl font-bold">Order Summary</h1>
                //   <div className="space-y-4 md:space-y-6">
                //     <table className="max-w-full text-sm">
                //       <tbody>
                //         <tr>
                //           <td className="py-2 md:py-3 font-medium text-gray-600">
                //             Sub total
                //           </td>
                //           <td className="py-2 md:py-3 text-right font-semibold text-gray-800">
                //             &#x20B9; {subtotal?.toFixed(2)}
                //           </td>
                //         </tr>

                //         <tr>
                //           <td className="py-2 md:py-3 font-medium text-gray-600">
                //             Shipping Charges
                //           </td>
                //           <td className="py-2 md:py-3 text-right font-semibold text-gray-800">
                //             &#x20B9; {shippingPrice?.toFixed(2)}
                //           </td>
                //         </tr>

                //         <tr>
                //           <td className="py-2 md:py-3 font-medium text-gray-600">
                //             GST (18%)
                //           </td>
                //           <td className="py-2 md:py-3 text-right font-semibold text-gray-800">
                //             &#x20B9; {gstAmount?.toFixed(2)}
                //           </td>
                //         </tr>

                //         <tr>
                //           <td className="font-medium text-gray-600">
                //             Coupon Code
                //           </td>
                //           <td className="text-right font-semibold">
                //             {coupon ? (
                //               <div className="mt-2 md:mt-4 text-green-600 font-medium">
                //                 <div className="flex items-center justify-end">
                //                   <span className="font-bold text-sm">{coupon}</span>
                //                   <p
                //                     onClick={handleRemoveCoupon}
                //                     className="ml-2 text-[10px] cursor-pointer text-red-500 hover:text-red-700"
                //                   >
                //                     Remove
                //                   </p>
                //                 </div>
                //               </div>
                //             ) : (
                //               <button
                //                 onClick={handleCoupon}
                //                 className="px-2 border text-xs py-2 rounded hover:bg-gray-50"
                //               >
                //                 All Coupons
                //               </button>
                //             )}
                //           </td>
                //         </tr>

                //         <tr>
                //           <td className="text-gray-600 py-2 md:py-4 font-medium">
                //             Discount
                //           </td>
                //           <td className="py-2 md:py-3 text-right font-semibold text-gray-800">
                //             - &#x20B9; {discount?.toFixed(2)}
                //           </td>
                //         </tr>

                //         <tr className="border-t border-gray-300">
                //           <td className="py-3 md:py-4 font-bold text-base md:text-lg text-gray-800">
                //             Total amount to Pay
                //           </td>
                //           <td className="py-3 md:py-4 text-right font-extrabold text-base md:text-lg text-blue-600">
                //             &#x20B9; {Math.round(totalPayable - discount)}
                //           </td>
                //         </tr>
                //       </tbody>
                //     </table>

                //     <button
                //       onClick={() => navigate("/checkout")}
                //       className="py-3 px-6 rounded-md bg-blue-600 text-white w-full hover:bg-blue-700 transition-colors"
                //     >
                //       Proceed to Checkout
                //     </button>
                //   </div>
                // </div>    

                <div className="rounded-md p-4 md:p-6 h-max relative shadow-[1px_1px_3px_rgba(0,0,0,0.1)]">
                  <h1 className="text-xl font-bold">Order Summary</h1>
                  <div className="space-y-4 md:space-y-6">
                    {/* For larger screens - Normal table layout */}
                    <div className="hidden sm:block">
                      <table className="w-full text-sm">
                        <tbody>
                          <tr>
                            <td className="py-2 font-medium text-gray-600">
                              Sub total
                            </td>
                            <td className="py-2 text-right font-semibold text-gray-800">
                              &#x20B9; {subtotal?.toFixed(2)}
                            </td>
                          </tr>

                          <tr>
                            <td className="py-2 font-medium text-gray-600">
                              Shipping Charges
                            </td>
                            <td className="py-2 text-right font-semibold text-gray-800">
                              &#x20B9; {shippingPrice?.toFixed(2)}
                            </td>
                          </tr>

                          <tr>
                            <td className="py-2 font-medium text-gray-600">
                              GST (18%)
                            </td>
                            <td className="py-2 text-right font-semibold text-gray-800">
                              &#x20B9; {gstAmount?.toFixed(2)}
                            </td>
                          </tr>

                          <tr>
                            <td className="font-medium text-gray-600">
                              Coupon Code
                            </td>
                            <td className="text-right font-semibold">
                              {coupon ? (
                                <div className="mt-2 text-green-600 font-medium flex flex-col">
                                  <div className="">
                                    <p className="font-bold text-sm">{coupon}</p>
                                    <p
                                      onClick={handleRemoveCoupon}
                                      className="ml-2 text-[10px] cursor-pointer text-red-500 hover:text-red-700"
                                    >
                                      Remove
                                    </p>
                                  </div>
                                </div>
                              ) : (
                                <button
                                  onClick={handleCoupon}
                                  className="px-2 border text-xs py-2 rounded hover:bg-gray-50"
                                >
                                  All Coupons
                                </button>
                              )}
                            </td>
                          </tr>

                          <tr>
                            <td className="text-gray-600 py-2 md:py-4 font-medium">
                              Discount
                            </td>
                            <td className="py-2 text-right font-semibold text-gray-800">
                              - &#x20B9; {discount?.toFixed(2)}
                            </td>
                          </tr>

                          <tr className="border-t border-gray-300">
                            <td className="py-3 font-bold text-base md:text-lg text-gray-800">
                              Total amount to Pay
                            </td>
                            <td className="py-3 text-right font-extrabold text-base md:text-lg text-blue-600">
                              &#x20B9; {Math.round(totalPayable - discount)}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* For mobile screens - Flex layout with labels on left, values on right */}
                    <div className="sm:hidden space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-600">Sub total</span>
                        <span className="font-semibold text-gray-800">&#x20B9; {subtotal?.toFixed(2)}</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-600">Shipping Charges</span>
                        <span className="font-semibold text-gray-800">&#x20B9; {shippingPrice?.toFixed(2)}</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-600">GST (18%)</span>
                        <span className="font-semibold text-gray-800">&#x20B9; {gstAmount?.toFixed(2)}</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-600">Coupon Code</span>
                        <div>
                          {coupon ? (
                            <div className="text-green-600 font-medium">
                              <div className="flex items-center justify-end">
                                <span className="font-bold text-sm">{coupon}</span>
                                <p
                                  onClick={handleRemoveCoupon}
                                  className="ml-2 text-[10px] cursor-pointer text-red-500 hover:text-red-700"
                                >
                                  Remove
                                </p>
                              </div>
                            </div>
                          ) : (
                            <button
                              onClick={handleCoupon}
                              className="px-2 border text-xs py-2 rounded hover:bg-gray-50"
                            >
                              All Coupons
                            </button>
                          )}
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-600">Discount</span>
                        <span className="font-semibold text-gray-800">- &#x20B9; {discount?.toFixed(2)}</span>
                      </div>

                      <div className="flex justify-between items-center pt-3 border-t border-gray-300">
                        <span className="font-bold text-base text-gray-800">Total amount to Pay</span>
                        <span className="font-extrabold text-base text-blue-600">&#x20B9; {Math.round(totalPayable - discount)}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => navigate("/checkout")}
                      className="py-3 px-6 rounded-md bg-blue-600 text-white w-full hover:bg-blue-700 transition-colors"
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </OrderLayout>
  );
};

export default Cart;

