import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { showAllProduct } from "../services/productServices";
import { filterEndpoint } from "../services/filterServices";

export const fetchProductData = createAsyncThunk("product/fetch", async () => {
  try {
    const response = await showAllProduct();
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
});


export const fetchFilteredProducts = createAsyncThunk(
  "products/fetchFiltered",
  async (filters) => {
    const response = await filterEndpoint(filters);
    return response.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
    filteredItems: [],
    loading: false,
    error: null,
  },
  reducers: {
    applyFilters: (state, action) => {
      const { brands, colors, priceRange, discounts } = action.payload;
      let filtered = [...state.allItems];

      if (brands.length > 0) {
        filtered = filtered.filter((item) => brands.includes(item.brand));
      }

      if (colors.length > 0) {
        filtered = filtered.filter((item) => colors.includes(item.color));
      }

      filtered = filtered.filter(
        (item) =>
          item.price >= priceRange[0] && item.price <= priceRange[1]
      );

      if (discounts.length > 0) {
        filtered = filtered.filter((item) =>
          discounts.some((d) => item.discount >= d)
        );
      }

      state.filteredItems = filtered;
    },

    clearFilters: (state) => {
      state.filteredItems = state.allItems;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductData.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProductData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(fetchFilteredProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFilteredProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchFilteredProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { applyFilters, clearFilters } = productSlice.actions;

export default productSlice.reducer;
