import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { showAllProduct  } from "../services/productServices"
import {applyFilters} from '../services/filterServices'

export const fetchProductData = createAsyncThunk("product/fetch", async () => {
  const response = await showAllProduct();
  return response.data;
});

export const fetchFilteredProducts = createAsyncThunk(
  "product/fetchFiltered",
  async (filters) => {
    const response = await applyFilters(filters);
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

      // handle filtered data
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
      });
  },
});

export const { clearFilters } = productSlice.actions;

export default productSlice.reducer;





// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { showAllProduct } from "../services/productServices";
// import { filterEndpoint } from "../services/filterServices";

// export const fetchProductData = createAsyncThunk("product/fetch", async () => {
//   try {
//     const response = await showAllProduct();
//     return response.data;
//   } catch (error) {
//     new Error(error.response.message);
//   }
// });


// export const fetchFilteredProducts = createAsyncThunk(
//   "products/fetchFiltered",
//   async (filters) => {
//     const response = await filterEndpoint(filters);
//     return response.data;
//   }
// );


// const productSlice = createSlice({
//   name: "product",
//   initialState: {
//     items: [],
//     filteredItems: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProductData.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchProductData.fulfilled, (state, action) => {
//         state.loading = false;
//         state.items = action.payload;
//       })
//       .addCase(fetchProductData.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })

//       .addCase(fetchFilteredProducts.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchFilteredProducts.fulfilled, (state, action) => {
//         state.loading = false;
//         state.items = action.payload;
//       })
//       .addCase(fetchFilteredProducts.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export const { applyFilters, clearFilters } = productSlice.actions;

// export default productSlice.reducer;