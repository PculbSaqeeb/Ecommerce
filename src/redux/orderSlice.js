import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllOrderItem } from "../services/orderServices";

// Thunk to fetch all order items
export const getAllOrderItems = createAsyncThunk(
  "order/getAllOrderItems",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllOrderItem();
      console.log(response)
      return response.data.orderDetails; 
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || "Failed to fetch order items"
      );
    }
  }
);


const orderSlice = createSlice({
    name: "order",
    initialState: {
        order: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
    builder
      .addCase(getAllOrderItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllOrderItems.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload; 
      })
      .addCase(getAllOrderItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default orderSlice.reducer;
