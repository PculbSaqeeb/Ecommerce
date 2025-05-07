import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const showAllProduct = () => {
 return axios.get(`${BASE_URL}product/get-products`);
// return axios.get('http://182.77.63.150:8900/product/get-products')
};

