import React, { useEffect, useRef, useState } from "react";
import image_1 from "../assets/images/Vector (1).png";
import search_icon from "../assets/icons/search_icon.svg";
import heart_icon from "../assets/icons/heart_icon.svg";
import cart_icon from "../assets/icons/cart_icon.svg";
import order_icon from "../assets/icons/order_icon.svg";
import { NavLink, useLocation, useNavigate, useParams } from "react-router";
import Button from "../components/Button";
import white_logo from '../assets/icons/white_logo_icon.png'
import { useDispatch, useSelector } from "react-redux";
import {  CgProfile } from "react-icons/cg";
import { fetchProductData, fetchSearchProducts } from "../redux/productSlice";
import useDebounce from "../hooks/useDebounce";
import { fetchCategories, fetchCategoryProductData, fetchSearchByCategory } from "../redux/categorySlice";


const Header = () => {
  const { categoryName } = useParams();
  const location = useLocation();

  // console.log(location.search);
  // localStorage.setItem("token", location.search)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart || []);
  const { wishlist } = useSelector((state) => state.wishlist);
  const categoryList = useSelector((state) => state.category.categoryList);
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedQuery = useDebounce(searchQuery, 500);
  const hasFetchedCategory = useRef(false);

  // const fetchCategory = async () => {
  //   try {
  //     const response = await getAllCategory();
  //     setCategory(response?.data);
  //   } catch (error) {
  //     throw new Error(error.message);
  //   }
  // };

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

  const access_token = localStorage.getItem("access_token");

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    if (debouncedQuery.trim() !== '') {
      if (location.pathname !== '/products' && categoryName) {
        dispatch(fetchSearchByCategory({ search: debouncedQuery, category: categoryName }));
      } else if (location.pathname === '/products') {
        dispatch(fetchSearchProducts({ search: debouncedQuery, category: categoryName }));
      }
    } else {
      if (location.pathname !== '/products' && categoryName) {
        dispatch(fetchCategoryProductData(categoryName));
      } else if (location.pathname === '/products') {
        dispatch(fetchProductData());
      }
    }
  }, [debouncedQuery, categoryName, dispatch,location.pathname]);


  useEffect(() => {
    if (!hasFetchedCategory.current && (categoryList?.length === 0 || !categoryList)) {
      dispatch(fetchCategories());
      hasFetchedCategory.current = true;
    }
  }, [dispatch,categoryList]);

  return (
    // <div className="sticky top-0 z-10 h-20 bg-white text-[18px] ">
    //   <header className="h-20 w-full shadow-[0_0_15px_rgba(0,0,0,0.07)] px-[50px]">
    //     <nav className="flex items-center h-20">

    //     <div className="md:hidden">
    //         <button onClick={() => setMenuOpen(!menuOpen)}>
    //           <svg
    //             className="w-8 h-8 text-gray-700"
    //             fill="none"
    //             stroke="currentColor"
    //             viewBox="0 0 24 24"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth={2}
    //               d="M4 6h16M4 12h16M4 18h16"
    //             />
    //           </svg>
    //         </button>
    //       </div>

    //       <img
    //       onClick={()=>navigate('/')}
    //         className="w-[57px] h-[48px]  cursor-pointer"
    //         src={image_1}
    //         alt="image_1"
    //       />

    //       <div>
    //         <ul className="flex items-center text-[18px] ml-[80px] gap-10 text-textPrimary cursor-pointer">

    //           <li className="hover:text-blue-600" onClick={()=>navigate('/products')}>All</li>

    //           {category.map((item) => (
    //             <NavLink
    //               key={item.name}
    //               to={`/categories/${item.name.toLowerCase()}`}
    //               className={({ isActive }) =>
    //                 `  ${
    //                   isActive
    //                     ? "text-red-400 font-semibold underline"
    //                     : "text-gray-700 hover:text-blue-600"
    //                 }`
    //               }
    //             >
    //               {item.name}
    //             </NavLink>
    //           ))}
    //         </ul>
    //       </div>

    //       <div className="flex ml-[80px] relative">
    //         <input
    //           className="w-[534px] h-[52px] pl-8 text-textPrimary outline-none placeholder-textPlaceholder bg-inputBackground rounded-lg text-[18px]"
    //           type="text"
    //           placeholder="Search here"
    //         />
    //         <img
    //           className="absolute text-textPrimary right-6 top-[14px] cursor-pointer "
    //           src={search_icon}
    //           alt=""
    //         />
    //       </div>

    //       <div className="flex items-center gap-8 ml-[60px]">
    //         <div className="flex items-start relative">
    //           <img
    //             onClick={handleWishlistNavigate}
    //             className="w-[29px] h-[29px] text-textPrimary cursor-pointer"
    //             src={heart_icon}
    //             alt=""
    //           />
    //           <p className="absolute -top-2 -right-3 bg-yellow-400 rounded-full w-5 h-5 text-sm text-center pt-[1px]">
    //             {wishlist?.length || 0} 
    //           </p>
    //         </div>
    //         <div className="flex items-start relative">
    //           <img
    //             onClick={handleCartNavigate}
    //             className="w-[29px] h-[29px] text-textPrimary cursor-pointer"
    //             src={cart_icon}
    //             alt=""
    //           />
    //           <p className="absolute -top-2 -right-3 bg-yellow-400 rounded-full w-5 h-5 text-sm text-center pt-[1px]">
    //             {cart?.length}
    //           </p>
    //         </div>
    //         <img
    //           onClick={handleOrderNavigate}
    //           className="w-[25px] h-[25px] text-textPrimary cursor-pointer"
    //           src={order_icon}
    //           alt=""
    //         />
    //       </div>

    //       <div className="ml-[40px]">
    //         {token ? (
    //           <Button
    //             onClick={handleLogout}
    //             variant="outlineDark"
    //             size="md"
    //             className="w-[132px]"
    //           >
    //             Logout
    //           </Button>
    //         ) : (
    //           <Button
    //             onClick={handleLoginNavigate}
    //             variant="outlineDark"
    //             size="md"
    //             className="w-[132px]"
    //           >
    //             Login
    //           </Button>
    //         )}
    //       </div>
    //     </nav>
    //   </header>
    // </div>




    <div className="sticky 2xl:top-0 2xl:z-50 ">
      <div className=" bg-white text-[18px] shadow-sm overflow-visible">
        <header className="h-20 w-full px-4 md:px-[50px]">
          <nav className="flex items-center h-20 relative">
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(true)}>
                <svg
                  className="w-8 h-8 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            <img
              onClick={() => navigate("/")}
              className="w-[50px] h-[40px] cursor-pointer ml-[50px] md:mx-0"
              src={image_1}
              alt="logo"
            />


            <ul className="hidden lg:flex lg:text-[15px] xl:text-[18px] items-center ml-10 gap-10 text-textPrimary cursor-pointer text-[18px]">
              <li className={`hover:text-blue-600 ${location?.pathname === '/products' ? "text-red-400 font-semibold underline" : "text-textPrimary"}`} onClick={() => navigate("/products")}>All</li>
              {categoryList?.map((item) => (
                <NavLink
                  key={item?.name}
                  to={`/categories/${item?.name?.toLowerCase()}`}
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-400 font-semibold underline"
                      : "text-textPrimary hover:text-blue-600"
                  }
                >
                  {item?.name}
                </NavLink>
              ))}
            </ul>

            <div className="hidden ml-[50px] 2xl:flex relative 2xl:w-[350px] 3xl:w-[634px] w-full">
              <input
                value={searchQuery}
                onChange={(e) => handleSearch(e)}
                className="w-full h-[52px] pl-8 text-textPrimary outline-none placeholder-textPlaceholder bg-inputBackground rounded-lg placeholder:text-[18px]"
                type="text"
                placeholder="Search here"
              />
              <img
                className="absolute right-6 top-[14px] cursor-pointer"
                src={search_icon}
                alt="search"
              />
            </div>

            <div className="flex items-center gap-4 md:gap-8 ml-auto">
              <div onClick={handleWishlistNavigate} className="relative hidden md:block">
                <img
                  onClick={handleWishlistNavigate}
                  className="md:w-[29px] md:h-[29px] w-[25px] h-[25px] cursor-pointer"
                  src={heart_icon}
                  alt="wishlist"
                />
                {wishlist?.length > 0 && <p className="absolute -top-2 -right-2 bg-yellow-400 rounded-full w-5 h-5 text-sm text-center pt-[1px] cursor-pointer">
                  {wishlist?.length || 0}
                </p>}
              </div>


              <div onClick={handleCartNavigate} className="relative">
                <img
                  className="md:w-[29px] md:h-[29px] w-[25px] h-[25px] cursor-pointer"
                  src={cart_icon}
                  alt="cart"
                />
                {cart?.length > 0 && <p className="absolute -top-2 -right-2 bg-yellow-400 rounded-full w-5 h-5 text-sm text-center pt-[1px] cursor-pointer">
                  {cart?.length || 0}
                </p>}
              </div>

              <img
                onClick={handleOrderNavigate}
                className="w-[25px] h-[25px] cursor-pointer hidden md:block"
                src={order_icon}
                alt="order"
              />

              <div>
                {access_token ? (
                  <Button
                    onClick={handleLogout}
                    variant="outlineDark"
                    size="sm"
                    className="w-[100px] h-[40px]"
                  >
                    Logout
                  </Button>
                ) : (
                  <Button
                    onClick={handleLoginNavigate}
                    variant="outlineDark"
                    size="sm"
                    className="w-[100px] h-[40px]"
                  >
                    Login
                  </Button>
                )}
              </div>
            </div>
          </nav>
        </header>

        {/* <div className="xxl:hidden px-4 pb-3">
          <input
            value={searchQuery}
            onChange={(e) => handleSearch(e)}
            className="w-full h-[45px] pl-4 text-sm outline-none placeholder-textPlaceholder bg-inputBackground rounded-lg"
            type="text"
            placeholder="Search here"
          />
        </div> */}
      </div>

     
      {menuOpen && (
        <>
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"
            onClick={() => setMenuOpen(false)}
          />
          <div className="fixed top-0 left-0 w-[80%] sm:w-[60%] md:w-[40%] lg:w-[20%] h-screen bg-white z-20 shadow-lg transition-transform duration-300 text-textPrimary">
            <button
              onClick={() => setMenuOpen(false)}
              className="mb-4 text-xl absolute right-4 top-16"
            >
              ✕
            </button>
            <div className="h-14 bg-blue-500 flex gap-5 items-center px-3">
              <CgProfile size={24} className="text-white" />
              <p className="text-white text-[18px] font">Login & Signup</p>
              <img className="w-10 ml-[24px]" src={white_logo} alt="logo" />
            </div>
            <ul className="flex flex-col gap-4 text-[14px] mt-[16px] p-5">
              <li className="border-b pb-3" onClick={() => { navigate("/category"); setMenuOpen(false); }}>All Categories</li>
              <li onClick={() => navigate('/cart')} className="border-b pb-3">My Cart</li>
              <li onClick={() => navigate('/wishlist')} className="border-b pb-3">My Wishlist</li>
              <li onClick={() => navigate('/order')} className="border-b pb-3">My Order</li>
              <button
                className="py-2 rounded-[10px] text-white bg-orange-400"
                onClick={() => {
                  setMenuOpen(false);
                  access_token ? handleLogout() : handleLoginNavigate();
                }}
              >
                {access_token ? "Logout" : "Login"}
              </button>
            </ul>
          </div>
        </>
      )}

      <div>
        <div className="hidden md:flex lg:hidden px-4 py-2 gap-4 border-t border-gray-200 bg-white justify-center flex-wrap">

          <div className="flex flex-wrap gap-6 justify-center px-4 mt-3">

            {categoryList &&
              categoryList?.map((item, index) => (
                <div
                  onClick={() => navigate(`/categories/${item?.name?.toLowerCase()}`)}
                  key={index}
                  className="w-[120px] flex flex-col items-center bg-white rounded-lg  hover:shadow-md transition duration-200 p-2"
                >
                  <img
                    src={item?.image}
                    alt={item?.name}
                    className="w-[80px] h-[80px] object-cover rounded-full"
                  />
                  <p className="text-sm text-center mt-2 font-medium text-gray-700">
                    {item?.name}
                  </p>
                </div>
              ))}
          </div>
        </div>

      </div>

       <div className="xxl:hidden px-4 pb-3 mt-[25px]">
          <input
            value={searchQuery}
            onChange={(e) => handleSearch(e)}
            className="w-full h-[45px] pl-4 text-sm outline-none placeholder-textPlaceholder bg-inputBackground rounded-lg"
            type="text"
            placeholder="Search here"
          />
        </div>


      <div className="hidden lg:hidden px-4 pb-3">
        <input
          value={searchQuery}
          onChange={(e) => handleSearch(e)}
          className="w-full h-[45px] pl-4 text-sm outline-none placeholder-textPlaceholder bg-inputBackground rounded-lg"
          type="text"
          placeholder="Search here"
        />
      </div>
    </div>
  );
};

export default Header;



