import React, { useEffect } from "react";
import OrderLayout from "../layout/OrderLayout";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  getAllCartItems,
  incrementQuantity,
  quantityDecrement,
  removeToCart,
} from "../redux/cartSlice";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, totalPrice, totalQuantity, breakdown } = useSelector(
    (state) => state.cart
  );

  console.log(cart);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(dispatch(getAllCartItems()));
  }, [dispatch]);

  const handleRemoveToCart = (id) => {
    dispatch(removeToCart(id));
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shippingPrice = subtotal > 0 ? 40 : 0;
  const gstAmount = subtotal * 0.18;
  const totalPayable = subtotal + shippingPrice + gstAmount;

  return (
    <div>
      <OrderLayout>
        <h3 className="text-2xl font-bold mb-6  text-center mt-[20px]">
          Your Shopping Cart
        </h3>
        {cart.length === 0 && (
          <p className="mt-[20px] text-center text-red-500">Cart is Empty!</p>
        )}
        {cart.length > 0 && (
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
                <tbody className="">
                  {cart.map((item) => {
                    return (
                      <tr
                        key={item.productId}
                        className=" hover:bg-gray-50 border-b"
                      >
                        <td className="px-6 py-4 flex items-center gap-5">
                          <div className="w-20 h-20 flex items-center justify-center text-white rounded-md shadow-[0px_0px_1px_rgba(0,0,0,0.7)]">
                            <img
                              className="w-full h-full"
                              src={item.productImage}
                              alt=""
                            />
                          </div>
                          <h2 className="text-lg font-medium">
                            {item.productName}
                          </h2>
                        </td>
                        <td className="pl-36 py-4 text-lg font-medium">
                          ${item.price.toFixed()}
                        </td>
                        <td className="pl-16 py-4 align-middle">
                          <div className="flex items-center rounded-md overflow-hidden w-max h-9">
                            <button
                              onClick={() =>
                                dispatch(quantityDecrement(item.productId))
                              }
                              className="px-2 text-xl hover:bg-gray-300 w-7 rounded-md "
                            >
                              −
                            </button>
                            <span className="text-center pt-[4px] text-black text-sm w-7 h-7 rounded-full bg-gray-200 mx-3">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                dispatch(addToCart(item.productId))
                              }
                              className="px-2 text-xl hover:bg-gray-300 w-7 rounded-md"
                            >
                              +
                            </button>

                            {/* <button
                              onClick={() =>
                                dispatch(decrementQuantity(item.productId))
                              }
                              className="px-2 text-xl hover:bg-gray-300 w-7 rounded-md"
                            >
                              −
                            </button>
                            <span className="text-center pt-[4px] text-black text-sm w-7 h-7 rounded-full bg-gray-200 mx-3">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                dispatch(incrementQuantity(item.productId))
                              }
                              className="px-2 text-xl hover:bg-gray-300 w-7 rounded-md"
                            >
                              +
                            </button> */}
                          </div>
                        </td>

                        <td className="pl-16 py-4 text-lg pr-10 ">
                          <div className="flex items-center gap-3 ">
                            <span>
                              ${(item.price * item.quantity).toFixed(2)}
                              {/* {breakdown.subtotal.toFixed()} */}
                            </span>
                            <RiDeleteBin5Line
                              onClick={() => handleRemoveToCart(item.productId)}
                              className="cursor-pointer text-red-500 text-xl"
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })}

                  <tr className="border px-10"></tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-md p-6 h-max relative  shadow-[1px_1px_3px_rgba(0,0,0,0.1)]">
              <h1 className="text-xl font-bold">Order Summary</h1>
              <div className="space-y-6">
                <table className="w-80 text-sm">
                  <tbody>
                    <tr>
                      <td className="py-3 font-medium text-gray-600">
                        Sub total
                      </td>
                      <td className="py-3 text-right font-semibold text-gray-800">
                        ${subtotal.toFixed(2)}
                      </td>
                    </tr>

                    <tr>
                      <td className="py-3 font-medium text-gray-600">
                        Shipping Charges
                      </td>
                      <td className="py-3 text-right font-semibold text-gray-800">
                        ${shippingPrice.toFixed(2)}
                      </td>
                    </tr>

                    <tr>
                      <td className="py-3 font-medium text-gray-600">
                        GST (18%)
                      </td>
                      <td className="py-3 text-right font-semibold text-gray-800">
                        ${gstAmount.toFixed(2)}
                      </td>
                    </tr>

                    <tr>
                      <td className="py-3 font-medium text-gray-600">
                        Coupon Code
                      </td>
                      <td className="py-3 text-right font-semibold text-green-600 uppercase">
                        ascsdvas
                      </td>
                    </tr>

                    <tr className="border-t border-gray-300">
                      <td className="py-4 font-bold text-lg text-gray-800">
                        Total amount to Pay
                      </td>
                      <td className="py-4 text-right font-extrabold text-lg text-blue-600">
                        ${Math.round(totalPayable)}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <button
                  onClick={() => navigate("/checkout")}
                  className="py-3 px-6 rounded-md bg-blue-600 text-white w-full max-w-80"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </OrderLayout>
    </div>
  );
};

export default Cart;
