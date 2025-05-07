import React from "react";
import OrderLayout from "../layout/OrderLayout";
import red_cross_icon from "../assets/icons/cross.png";
import { useDispatch, useSelector } from "react-redux";
import { payment, removeToCart } from "../redux/cartSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const checkoutSchema = z.object({
  address: z.string().min(5, "Address is required"),
  postalCode: z.string().min(1, "Postal Code is required"),
  city: z.string().min(5, "City is required"),
  country: z.string().min(5, "Country is required"),
});

const CheckoutPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(checkoutSchema),
  });

  const onSubmit = (data) => {
    dispatch(payment(data));
  };

  const { cart, loading, paymentLink, error } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  const handleRemoveToCart = (id) => {
    dispatch(removeToCart(id));
  };


  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 40 : 0;
  const gst = subtotal * 0.18;
  const totalPayable = subtotal + shipping + gst;

  return (
    <div>
      <OrderLayout>
        <div className="max-w-6xl mx-auto p-14 bg-white shadow-lg rounded-lg mt-10">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">Checkout</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Shipping Details
              </h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Street Address
                  </label>
                  <input
                    {...register("address")}
                    type="text"
                    placeholder="123 Main Street"
                    className="w-full px-4 py-2 focus:outline-gray-400 bg-gray-200 rounded-md"
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm">
                      {errors.address.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Postal Code
                    </label>
                    <input
                      {...register("postalCode")}
                      type="text" // Allowing string because postal code can have characters
                      placeholder="123456"
                      className="w-full px-4 py-2 focus:outline-gray-400 bg-gray-200 rounded-md"
                    />
                    {errors.postalCode && (
                      <p className="text-red-500 text-sm">
                        {errors.postalCode.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      {...register("city")}
                      type="text"
                      placeholder="Your City"
                      className="w-full px-4 py-2 focus:outline-gray-400 bg-gray-200 rounded-md"
                    />
                    {errors.city && (
                      <p className="text-red-500 text-sm">
                        {errors.city.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Country
                    </label>
                    <input
                      {...register("country")}
                      type="text"
                      placeholder="Your Country"
                      className="w-full px-4 py-2 focus:outline-gray-400 bg-gray-200 rounded-md "
                    />
                    {errors.country && (
                      <p className="text-red-500 text-sm">
                        {errors.country.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
                >
                  Proceed to Checkout
                </button> */}

                <button
                  className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Processing Payment..." : "Proceed to Checkout"}
                </button>
              </form>
            </div>

            <div className="bg-white border-l pl-10 ">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">
                Order Summary
              </h3>

              <div className="bg-white">
                {cart.map((item) => (
                  <div className="relative flex items-start gap-4 mb-6 border-b pb-6">
                    <img
                      onClick={() => handleRemoveToCart(item.productId)}
                      className="absolute top-0 right-0 w-[18px] cursor-pointer"
                      src={red_cross_icon}
                      alt="Remove"
                    />

                    <img
                      src={item.productImage}
                      alt={item.productName}
                      className="w-20 h-20 object-cover rounded-md bg-gray-100"
                    />

                    <div className="flex-1">
                      <p className="font-medium text-gray-800">
                        {item.productName}
                      </p>
                      <p className="text-sm text-gray-600 mt-[2px]">
                        ${item.price.toFixed()}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
                          -
                        </button>
                        <p className="text-gray-700 font-medium">
                          {item.quantity}
                        </p>
                        <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <table className="w-full text-sm text-left mb-6">
                <tbody>
                  <tr>
                    <td className="py-2 text-gray-600">Subtotal</td>
                    <td className="py-2 text-right font-semibold text-gray-800">
                      ${subtotal.toFixed(2)}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-600">Shipping Charges</td>
                    <td className="py-2 text-right font-semibold text-gray-800">
                      ${shipping.toFixed(2)}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-600">GST (18%)</td>
                    <td className="py-2 text-right font-semibold text-gray-800">
                      ${gst.toFixed(2)}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-600">Coupon Code</td>
                    <td className="py-2 text-right font-semibold text-green-600 uppercase">
                      ascsdvas
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-4 font-bold text-lg text-gray-800">
                      Total
                    </td>
                    <td className="py-4 text-right font-bold text-lg text-blue-600">
                      ${Math.round(totalPayable)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </OrderLayout>
    </div>
  );
};

export default CheckoutPage;
