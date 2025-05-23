import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;


export const applyFilters = (filters) => {

  const params = new URLSearchParams();

  if (filters.brands?.length > 0) {
    filters?.brands?.forEach((brand) => params.append("brandIds", brand));
  }

  if (filters.colors?.length > 0) {
    filters?.colors?.forEach((color) => params.append("colorIds", color));
  }

  if (filters.discounts?.length > 0) {
    filters?.discounts?.forEach((discount) => {
      const numberDiscount = Number(discount);
      params.append("discountMin", numberDiscount)
    });
  }

  if (filters.priceRange?.length === 2) {
    params.append("priceMin", filters?.priceRange[0]);
    params.append("priceMax", filters?.priceRange[1]);
  }

  return axios.get(`${BASE_URL}product/filter`, {
    params,
  });


  // return axios.get('http://192.168.1.58:5000/product/filter', {
  //   params,
  // })


};

// export axios.get('');

export const brandName = () => {
  // return axios.get("http://192.168.1.58:5000/brand")

  return axios.get(`${BASE_URL}brand`);

}

export const colorName = () => {
  // return axios.get("http://192.168.1.58:5000/color")
  
  return axios.get(`${BASE_URL}color`);

}

// export const filterEndpoint = (filters) => {
//   return axios.get("http://192.168.1.58:5000/filter", {
//     params: {
//       minPrice: filters.priceRange[0],
//       maxPrice: filters.priceRange[1],
//     },
//   });
// };



