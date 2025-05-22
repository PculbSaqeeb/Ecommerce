import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchProduct, showAllProduct } from "../services/productServices"
import { applyFilters } from '../services/filterServices'

export const fetchProductData = createAsyncThunk("product/fetch", async () => {
  const response = await showAllProduct();
  return response?.data;
});

export const fetchFilteredProducts = createAsyncThunk(
  "product/fetchFiltered",
  async (filters,{rejectWithValue}) => {

    try {
      const response = await applyFilters(filters);
      console.log(response.data.products)
      return response.data.products;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || "Remove failed");
    }
  }
);

export const fetchSearchProducts = createAsyncThunk(
  "product/fetchsearchProduct",
  async ({ search, category },rejectWithValue) => {
    try {
      const response = await searchProduct(search, category);
      return response.data
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || "Remove failed");
    }
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
    clearFilters: (state) => {
      state.filteredItems = state.items;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchProductData.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.filteredItems = action.payload;
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
        state.filteredItems = action.payload;
      })

      .addCase(fetchFilteredProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(fetchSearchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchSearchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.filteredItems = action.payload;
      })

      .addCase(fetchSearchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearFilters } = productSlice.actions;

export default productSlice.reducer;
