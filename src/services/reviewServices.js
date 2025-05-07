import axiosInstance from "../utils/interceptor";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const reviewEndpoint = (productId,rating,comment,images) => {
    return axiosInstance.post(`${BASE_URL}review/${productId}`, {
        rating:rating,
        comment:comment,
        images:images,
    });
  };