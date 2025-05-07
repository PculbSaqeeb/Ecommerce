import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getAllCategory = () => {
  return axios.get(`${BASE_URL}categories/all-categories`);
};


// export const getAllCategory=()=>{
//   return axios.get('http://182.77.63.150:8900/categories/all-categories')
// }


export const getCategoryByName = (category) => {
    return axios.get(`${BASE_URL}categories/${category}`);
  };

// export const getCategoryByName=(category)=>{
//   return axios.get(`http://182.77.63.150:8900/categories/all-categories/${category}`)
// }


  export const getSubCategoryByName=(category,subCategory)=>{
    return axios.get(`${BASE_URL}categories/${category}/${subCategory}`)
  }

// http://192.168.1.9:5000/categories/women

// export const deleteToCartEndPoint = () => {
//   return axiosInstance.delete(`${BASE_URL}/cart`);
// };
