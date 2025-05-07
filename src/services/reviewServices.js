import axiosInstance from "../utils/interceptor";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const reviewEndpoint = (productId,rating,comment,images) => {
    // console.log(productId);
    // console.log(rating);
    // console.log(comment);
    // console.log(images);
    // console.log(typeof productId);
    // console.log(typeof rating);
    // console.log(typeof comment);
    // console.log(typeof images);
    return axiosInstance.post(`${BASE_URL}review/${productId}`, {
        rating:rating,
        comment:comment,
        images:images,
    });
  };