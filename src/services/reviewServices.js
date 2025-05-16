import axios from "axios";
import axiosInstance from "../utils/interceptor";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const reviewEndpoint = (productId,rating,comment,images) => {
    
    return axiosInstance.post(`${BASE_URL}review/${productId}`, {
        rating:rating,
        comment:comment,
        images:images,
    });
  };    


export const reviewImageEndpoint=(formData)=>{
    return axiosInstance.post('http://192.168.1.58:5000/user/upload',formData)
}