import Wishlist from "../pages/Wishlist";
import axiosInstance from "../utils/interceptor";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getAllWishlistItem = () => {
  return axiosInstance.get(`${BASE_URL}wishlist/get-wishlist`);
  // return axiosInstance.get(`http://192.168.1.58:5000/wishlist/get-wishlist`);
};

export const addToWishlist = (productId) => {
  return axiosInstance.post(`${BASE_URL}wishlist/create`, {
    productId: productId,
  });

  console.log(Wishlist);

  // return axiosInstance.post(`http://192.168.1.58:5000/wishlist/create`, {
  //   productId: productId,
  // });
};

export const deleteToWishlist = (productId) => {
   axiosInstance.delete(`${BASE_URL}wishlist`, {
    data: { productId: productId }
  });

  // return axiosInstance.delete("http://192.168.1.58:5000/wishlist", {
  //   data: { productId: productId },
  // });
};
