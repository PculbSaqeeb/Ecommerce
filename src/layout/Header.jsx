import React, { useEffect, useState } from "react";
import image_1 from "../assets/images/Vector (1).png";
import search_icon from "../assets/icons/search_icon.svg";
import heart_icon from "../assets/icons/heart_icon.svg";
import cart_icon from "../assets/icons/cart_icon.svg";
import order_icon from "../assets/icons/order_icon.svg";
import image_2 from "../assets/images/Ellipse 1.png";
import { NavLink, useNavigate } from "react-router";
import Button from "../components/Button";
import { getAllCategory } from "../services/catogeryServices";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../redux/productSlice";

const Header = () => {
  const navigate = useNavigate();
  // const dispatch=useDispatch();
  const cart = useSelector((state) => state.cart.cart || []);
  const { wishlist } = useSelector((state) => state.wishlist);
  

  const handleLoginNavigate = () => {
    navigate("/login");
  };

  const handleCartNavigate = () => {
    navigate("/cart");
  };

  const handleOrderNavigate = () => {
    navigate("/order");
  };

  const handleWishlistNavigate = () => {
    navigate("/wishlist");
  };

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const [category, setCategory] = useState([]);

  const fetchCategory = async () => {
    try {
      const response = await getAllCategory();
      setCategory(response.data);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div className="sticky top-0 z-50 h-20 bg-white text-[18px]">
      <header className="h-20 w-full shadow-[0_0_15px_rgba(0,0,0,0.07)]">
        <nav className="flex items-center h-20 ">
          <img
          onClick={()=>navigate('/')}
            className="w-[57px] h-[48px] ml-[50px] cursor-pointer"
            src={image_1}
            alt="image_1"
          />

          <div>
            <ul className="flex items-center text-[18px]  ml-[80px] gap-10 text-textPrimary cursor-pointer">
             
              <li onClick={()=>navigate('/products')}>All</li>

              {category.map((item) => (
                <NavLink
                  key={item.name}
                  to={`/categories/${item.name.toLowerCase()}`}
                  className={({ isActive }) =>
                    `  ${
                      isActive
                        ? "text-red-400 font-semibold underline"
                        : "text-gray-700 hover:text-blue-600"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </ul>
          </div>

          <div className="flex ml-[100px] relative">
            <input
              className="w-[534px] h-[52px] pl-8 text-textPrimary outline-none placeholder-textPlaceholder bg-inputBackground rounded-lg text-[18px]"
              type="text"
              placeholder="Search here"
            />
            <img
              className="absolute text-textPrimary right-6 top-[14px] cursor-pointer "
              src={search_icon}
              alt=""
            />
          </div>

          <div className="flex items-center gap-8 ml-[60px]">
            <div className="flex items-start relative">
              <img
                onClick={handleWishlistNavigate}
                className="w-[29px] h-[29px] text-textPrimary cursor-pointer"
                src={heart_icon}
                alt=""
              />
              <p className="absolute -top-2 -right-3 bg-yellow-400 rounded-full w-5 h-5 text-sm text-center pt-[1px]">
                {wishlist?.length || 0} 
              </p>
            </div>
            <div className="flex items-start relative">
              <img
                onClick={handleCartNavigate}
                className="w-[29px] h-[29px] text-textPrimary cursor-pointer"
                src={cart_icon}
                alt=""
              />
              <p className="absolute -top-2 -right-3 bg-yellow-400 rounded-full w-5 h-5 text-sm text-center pt-[1px]">
                {cart?.length}
              </p>
            </div>
            <img
              onClick={handleOrderNavigate}
              className="w-[25px] h-[25px] text-textPrimary cursor-pointer"
              src={order_icon}
              alt=""
            />
          </div>

          <div className="ml-[40px]">
            {token ? (
              <Button
                onClick={handleLogout}
                variant="outlineDark"
                size="md"
                className="w-[132px]"
              >
                Logout
              </Button>
            ) : (
              <Button
                onClick={handleLoginNavigate}
                variant="outlineDark"
                size="md"
                className="w-[132px]"
              >
                Login
              </Button>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
