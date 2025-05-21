

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
      {/* <div className="ml-[330px] font flex-grow">
        <h1 className="text-4xl font-bold mt-[76px] text-textPrimary">
          My <span className="text-[#002482]">Order</span>
        </h1>

        {order?.items?.map((item) => (
          <div
            key={item?.id} 
            className="my-[32px] w-[1260px] shadow-[0_0_10px_rgba(0,0,0,0.1)] mb-[89px] rounded-[5px]"
          >
            <div className="flex justify-between p-[24px]">
              <div className="flex gap-[39px]">
                <img
                  className="w-[223px] h-[248px] bg-slate-100 rounded-[5px]"
                  src={item?.productImage}
                  alt={item?.productName}
                />
                <div className="text-textPrimary">
                  <h2 className="text-[24px] font-bold mt-[3px]">
                    {item?.productName}
                  </h2>
                  <h3 className="text-lg mt-[11px]">Brand name</h3>
                  <h4 className="mt-3 text-2xl">${item?.price}</h4>
                  <h5 className="mt-[10px] text-lg">
                    Order Placed on: <span className="text-lg font-normal text-textSecondary font-lato"> 
                       {order.address}
                    </span>
                  </h5>
                  <h6 className="mt-1 text-lg">
                    Ship To:
                    <span className="text-lg font-normal text-textSecondary font-lato">
                      {item?.address || "N/A"}
                    </span>
                  </h6>

                  <div className="mt-[15px]">
                    <Button
                      onClick={() => dispatch(addToCart(item?.productId))}
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

              <div className="font-lato text-lg">
                <p className=" text-textPrimary">
                  Order Number: <span className="text-textSecondary">
                    #{order?.id || "N/A"}
                  </span>
                </p>
                <p className="mt-[14px] text-linkPrimary">
                  View Order Details
                </p>
              </div>
            </div>
          </div>
        ))}
      </div> */}

      <div className="ml-0 md:mx-[10px] font flex-grow px-4 sm:px-6 md:px-10 lg:px-[80px] 2xl:mx-[240px]">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-[40px] md:mt-[76px] text-textPrimary">
          My <span className="text-[#002482]">Order</span>
        </h1>

        {order?.items?.map((item) => (
        <div
          key={item?.id}
          className="my-[32px] w-full max-w-[1260px] shadow-[0_0_10px_rgba(0,0,0,0.1)] mb-[89px] rounded-[5px] mx-auto"
        >
          <div className="flex flex-col md:flex-row justify-between p-4 sm:p-6 gap-4">

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-[39px]">
              <img
                className="w-full h-[200px] sm:w-[220px] sm:h-[210px] md:w-[260px] md:h-[240px] lg:w-[223px] lg:h-[248px] object-cover bg-slate-100"
              src={item?.productImage}
              alt={item?.productName}
              />

              <div className="text-textPrimary">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-[3px]">
                  {item?.productName}
                  sdcsdc
                </h2>

                <h3 className="text-sm sm:text-base md:text-lg mt-[11px]">Brand name</h3>

                <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl mt-3">
                  ${item?.price}
                </h4>

                <h5 className="mt-[10px] text-sm sm:text-base md:text-lg">
                  Order Placed on:
                  <span className="text-sm sm:text-base font-normal text-textSecondary font-lato">
                    {item.placeOn}
                  </span>
                </h5>

                <h6 className="mt-1 text-sm sm:text-base md:text-lg">
                  Ship To:
                  <span className="text-sm sm:text-base font-normal text-textSecondary font-lato">
                    {item?.address || "N/A"}
                  </span>
                </h6>

                <div className="mt-[27px] flex items-center flex-wrap gap-4">
                  <Button
                    onClick={() => dispatch(addToCart(item?.productId))}
                    variant="cartBlue"
                    size="sm"
                    className="text-base sm:text-lg"
                  >
                    Add to Cart
                  </Button>

                  <Button variant="textOnly" className="ml-0 sm:ml-[27px]">
                    Cancel
                  </Button>
                </div>
              </div>
            </div>

            <div className="font-lato mt-4 md:mt-0 md:text-left">
              <p className="text-sm sm:text-base md:text-lg text-textPrimary">
                Order Number:
                <span className="text-textSecondary">
                  #{item?.orderNumber || "N/A"}
                </span>
              </p>

              <p className="mt-[14px] text-linkPrimary">
                Transaction ID: {item?.transactionId}
              </p>
            </div>
          </div>
        </div>
        ))}
      </div>
    </OrderLayout>
  );
};

export default Order;

