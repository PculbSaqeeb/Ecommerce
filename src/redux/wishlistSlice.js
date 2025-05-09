import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addToWishlist,
  deleteToWishlist,
  getAllWishlistItem,
} from "../services/wishlistServices";

export const fetchWishlistProduct = createAsyncThunk(
  "wishlist/fetch",
  async () => {
    try {
      const response = await getAllWishlistItem();
      console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const addProductToWishlist = createAsyncThunk(
  "wishlist/addToWishlist",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await addToWishlist(productId);
      return response.data.data.items;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const deleteProductToWishlist = createAsyncThunk(
  "wishlist/deleteToWishlist",
  async (productId,{ rejectWithValue }) => {
    try {
      const response = await deleteToWishlist(productId);
      return productId
      // return response.data.data.items;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);


const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [],
    loading: false,
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchWishlistProduct.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchWishlistProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.wishlist = action.payload;
      })

      .addCase(fetchWishlistProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(addProductToWishlist.pending, (state) => {
        state.loading = true;
      })

      .addCase(addProductToWishlist.fulfilled, (state, action) => {
        state.loading = false;
        state.wishlist = action.payload;
      })

      .addCase(addProductToWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(deleteProductToWishlist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // .addCase(deleteProductToWishlist.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.wishlist = action.payload;
      // })
      // state.cart = state.cart.filter((item) => item.productId !== removedId);
      .addCase(deleteProductToWishlist.fulfilled, (state, action) => {
        state.loading = false;
        const deletedProductId = action.meta.arg;
        state.wishlist = state.wishlist.filter((item) => item.productId !== deletedProductId);
      })
      
      .addCase(deleteProductToWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default wishlistSlice.reducer;
