import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getCarouselData = async () => {
  try {
    const response=await axios.get(`${BASE_URL}product/get-carousel`);
    return response.data;
  } catch (error) {
    console.error("Error fetching carousel data:", error);
    throw error;
  }
};