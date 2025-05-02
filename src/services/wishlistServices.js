import axiosInstance from "../utils/interceptor";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getAllWishlistItem = () => {
  return axiosInstance.get(`${BASE_URL}/whishlist`);
  // return axiosInstance.get(`http://192.168.1.9:5000/whishlist`);
};

export const addToWishlist = (productId) => {
  return axiosInstance.post(`${BASE_URL}/whishlist`, {
    productId: productId,
  });
};


export const deleteToWishlist = (productID) => {
   axiosInstance.delete(`${BASE_URL}/whishlist`, {
    productId: String(productID),
  });
};