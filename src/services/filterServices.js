import axiosInstance from "../utils/interceptor";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const filterEndpoint = (filters) => {
  return axiosInstance.get("http://192.168.1.58:5000/filter", {
    params: {
      brands: filters.brands,
      colors: filters.colors,
      discounts: filters.discounts,
      minPrice: filters.priceRange[0],
      maxPrice: filters.priceRange[1],
    },
  });
};
