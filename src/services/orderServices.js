import axiosInstance from "../utils/interceptor";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const paymentEndpoint = (data) => {
  return axiosInstance.post(`${BASE_URL}order/razorpay`, data);
  // return axiosInstance.post("http://192.168.1.58:5000/order/razorpay", data);
};

export const getAllOrderItem = () => {
  return axiosInstance.get(`${BASE_URL}order`);
};
