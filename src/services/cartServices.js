import axiosInstance from "../utils/interceptor";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const addToCartEndPoint = (productId) => {
  return axiosInstance.post(`${BASE_URL}cart`, {
    productId:productId,
    quantity:1,
  });
};

export const getCartItems = () => {
  return axiosInstance.get(`${BASE_URL}cart`);
};

export const removeToCartEndPoint = (productId) => {
  return axiosInstance.delete(`${BASE_URL}cart/remove`, {
    data: { productId: productId }
  });
};

export const quantityDecrementEndPoint = (productId) => {
  return axiosInstance.delete(`${BASE_URL}cart/quantity`, {
    data: { productId: productId }
  });
};