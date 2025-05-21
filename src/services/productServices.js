import axios from "axios";
import axiosInstance from "../utils/interceptor";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const showAllProduct = () => {
 return axios.get(`${BASE_URL}product/get-products`);
// return axios.get('http://192.168.1.58:5000/product/get-products')
};

export const searchProduct = (q="",catName) => {
 return axios.get(`${BASE_URL}product/search`,{
    params:{q,catName}
 });

//  return axios.get(`http://192.168.1.58:5000/product/search`,{
//     params: {q,catName}
//  });
};


