// import React, { useEffect, useState } from "react";
// import image_12 from "../assets/images/Rectangle 52.jpg";
// import OrderLayout from "../layout/OrderLayout";
// import Button from "../components/Button";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, getAllCartItems, removeToCart } from "../redux/cartSlice";
// import axiosInstance from "../utils/interceptor";
// import { getAllOrderItems } from "../redux/orderSlice";


// const Order = () => {
//   const dispatch=useDispatch();
//   const  order  = useSelector((state) => state.order.order);
//   console.log(order);

//   useEffect(()=>{
//     dispatch(getAllOrderItems());
//   },[dispatch])

//   return (
//     <OrderLayout>
//       <div className="ml-[330px] font">
//         <h1 className="text-4xl font-bold mt-[76px] text-textPrimary">
//           My <span className="text-[#002482]">Order</span>
//         </h1>

//         {order.map((item) => {
//           return (
//             <div className="my-[32px] w-[1260px]  shadow-[0_0_10px_rgba(0,0,0,0.1)] mb-[89px] rounded-[5px]">
//               <div className="flex justify-between p-6">
//                 <div className="flex gap-[39px]">
//                   <img
//                     className="w-[223px] h-[248px] bg-slate-100"
//                     src={item.productImage}
//                     // alt={item?.productName}
//                   />
//                   <div className="text-textPrimary">
//                     <h2 className="text-4xl font-bold mt-[3px]">
//                       {item?.productName}
//                       {/* zbdfb */}
//                     </h2>
//                     <h3 className="text-lg mt-[11px]">Brand name</h3>
//                     <h4 className="mt-3 text-2xl">${item.price}</h4>
//                     <h5 className="mt-[10px] text-lg">
//                       Order Placed on:
//                       <span className="text-lg font-normal text-textSecondary  font-lato">
//                         3 October 2020
//                       </span>
//                     </h5>
//                     <h6 className="mt-1 text-lg">
//                       Ship To:
//                       <span className="text-lg font-normal text-textSecondary font-lato">
//                         Anna Katiya
//                       </span>
//                     </h6>

//                     <div className="mt-[27px]">
//                       <Button
//                         onClick={() => dispatch(addToCart(item.productId))}
//                         variant="cartBlue"
//                         size="sm"
//                         className="text-lg"
//                       >
//                         Add to Cart
//                       </Button>

//                       <Button variant="textOnly" className="ml-[27px]">
//                         Cancel
//                       </Button>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="font-lato">
//                   <p className="text-lg text-textPrimary">
//                     Order Number:{" "}
//                     <span className="text-textSecondary">#123-3444-4444</span>
//                   </p>
//                   <Button variant="textOnly" className="mt-[14px] ">
//                     View Order Details
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </OrderLayout>
//   );
// };

// export default Order;

import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import { addToCart } from "../redux/cartSlice";
import { getAllOrderItems } from "../redux/orderSlice";
import { useEffect } from "react";
import OrderLayout from "../layout/OrderLayout";



const Order = () => {
  const dispatch = useDispatch();
  const { order, loading, error } = useSelector((state) => state.order);
  console.log(order);

  useEffect(() => {
    dispatch(getAllOrderItems());
  }, [dispatch]);

  return (
    <OrderLayout>
      <div className="ml-[330px] font">
        <h1 className="text-4xl font-bold mt-[76px] text-textPrimary">
          My <span className="text-[#002482]">Order</span>
        </h1>

        {order.items.map((item) => (
          <div
            key={item.id} 
            className="my-[32px] w-[1260px] shadow-[0_0_10px_rgba(0,0,0,0.1)] mb-[89px] rounded-[5px]"
          >
            <div className="flex justify-between p-6">
              <div className="flex gap-[39px]">
                <img
                  className="w-[223px] h-[248px] bg-slate-100"
                  src={item.productImage}
                  alt={item.productName}
                />
                <div className="text-textPrimary">
                  <h2 className="text-4xl font-bold mt-[3px]">
                    {item.productName}
                  </h2>
                  <h3 className="text-lg mt-[11px]">Brand name</h3>
                  <h4 className="mt-3 text-2xl">${item.price}</h4>
                  <h5 className="mt-[10px] text-lg">
                    Order Placed on:
                    <span className="text-lg font-normal text-textSecondary font-lato">
                      {/* {item.placeOn} */}
                    </span>
                  </h5>
                  <h6 className="mt-1 text-lg">
                    Ship To:
                    <span className="text-lg font-normal text-textSecondary font-lato">
                      {item.address || "N/A"}
                    </span>
                  </h6>

                  <div className="mt-[27px]">
                    <Button
                      onClick={() => dispatch(addToCart(item.productId))}
                      variant="cartBlue"
                      size="sm"
                      className="text-lg"
                    >
                      Add to Cart
                    </Button>

                    <Button variant="textOnly" className="ml-[27px]">
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>

              <div className="font-lato">
                <p className="text-lg text-textPrimary">
                  Order Number:{" "}
                  <span className="text-textSecondary">
                    #{item.orderNumber || "N/A"}
                  </span>
                </p>
                <Button variant="textOnly" className="mt-[14px]">
                  View Order Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </OrderLayout>
  );
};

export default Order;

