import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addToCartEndPoint,
  getCartItems,
  quantityDecrementEndPoint,
  removeToCartEndPoint,
} from "../services/cartServices";
import { toast } from "react-toastify";
import { paymentEndpoint } from "../services/orderServices";

// Async Thunks
export const getAllCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getCartItems();
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || "Failed to fetch cart items");
    }
  }
);

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await addToCartEndPoint(productId);
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data?.message || "Add to cart failed");
    }
  }
);

export const quantityDecrement = createAsyncThunk(
  "cart/quantityDecrement",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await quantityDecrementEndPoint(productId);
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data?.message || "Decrement failed");
    }
  }
);

export const removeToCart = createAsyncThunk(
  "cart/removeToCart",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await removeToCartEndPoint(productId);
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data?.message || "Remove failed");
    }
  }
);

export const payment = createAsyncThunk(
  "cart/payment",
  async (data, { rejectWithValue }) => {
    try {
      const response = await paymentEndpoint(data);
      window.location.href=response.data.paymentLink;
      return response.data.paymentLink;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data?.message || "Remove failed");
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalPrice: 0,
    totalQuantity: 0,
    breakdown: {},
    loading: false,
    error: null,
    paymentLink:null,
  },
  reducers: {
    incrementQuantity: (state, action) => {
      const item = state.cart.find((i) => i.productId === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((i) => i.productId === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    quantityDecrement: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.productId === action.payload
      );
    
      if (itemIndex !== -1) {
        if (state.cart[itemIndex].quantity > 1) {
          state.cart[itemIndex].quantity -= 1;
        } else {
          state.cart.splice(itemIndex, 1);
        }
      }
    },
    
    setQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const item = state.cart.find((i) => i.productId === productId);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCartItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllCartItems.fulfilled, (state, action) => {
        const { cartDetails, breakdown } = action.payload || {};
        state.loading = false;
        state.cart = cartDetails?.items?.map((item) => ({
          ...item,
          quantity: item.quantity || 1,
        })) || [];
        state.totalPrice = cartDetails?.totalPrice || 0;
        state.totalQuantity = cartDetails?.totalQuantity || 0;
        state.breakdown = breakdown || {};
      })
      .addCase(getAllCartItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

    
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // .addCase(addToCart.fulfilled, (state, action) => {
      //   const { cartDetails, breakdown } = action.payload;
      //   state.loading = false;
      //   state.cart = cartDetails.items.map((item) => ({
      //     ...item,
      //     quantity: item.quantity || 1,
      //   }));
      //   state.totalPrice = cartDetails.totalPrice;
      //   state.totalQuantity = cartDetails.totalQuantity;
      //   state.breakdown = breakdown;
      // })

      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        const { cartDetails, breakdown } = action.payload || {};
      
        if (cartDetails && cartDetails.items) {
          state.cart = cartDetails.items.map((item) => ({
            ...item,
            quantity: item.quantity || 1,
          }));
          state.totalPrice = cartDetails.totalPrice || 0;
          state.totalQuantity = cartDetails.totalQuantity || 0;
          state.breakdown = breakdown || {};
        } else {
          state.cart = [];
          state.totalPrice = 0;
          state.totalQuantity = 0;
          state.breakdown = {};
        }
      })

      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(quantityDecrement.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(quantityDecrement.fulfilled, (state, action) => {
        state.loading = false;
        const { cart } = action.payload;
        const { cartDetails, breakdown } = action.payload ;

        console.log(cartDetails.breakdown);
      
        state.cart = cartDetails.items.map((item) => ({
          ...item,
          quantity: item.quantity || 1,
        }));
        state.totalPrice = cartDetails.breakdown.totalPrice;
        state.totalQuantity = cartDetails.breakdown.totalQuantity;
        state.breakdown = cartDetails.breakdown || {};
      })

      .addCase(quantityDecrement.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(removeToCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // .addCase(removeToCart.fulfilled, (state, action) => {
      //   const { cartDetails, breakdown } = action.payload;
      //   state.loading = false;
      //   state.cart = state.cartDetails.items.map((item) => ({
      //     ...item,
      //     quantity: item.quantity || 1,
      //   }));
      //   state.totalPrice = cartDetails.totalPrice;
      //   state.totalQuantity = cartDetails.totalQuantity;
      //   state.breakdown = breakdown;
      // })
      .addCase(removeToCart.fulfilled, (state, action) => {
        state.loading = false;
        const removedId = action.meta.arg;
        state.cart = state.cart.filter((item) => item.productId !== removedId);
      
        if (state.cart.length === 0) {
          state.totalPrice = 0;
          state.totalQuantity = 0;
          state.breakdown = {};
        } else {
          state.totalPrice = state.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
          state.totalQuantity = state.cart.reduce((acc, item) => acc + item.quantity, 0);
        }
      })

      .addCase(removeToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })


      .addCase(payment.pending, (state) => {
        state.loading = true;  // Set loading to true when payment is in progress
      })
      .addCase(payment.fulfilled, (state, action) => {
        state.loading = false;  // Reset loading after success
        state.paymentLink = action.payload;  // Store the payment link
      })
      .addCase(payment.rejected, (state, action) => {
        state.loading = false;  // Reset loading if failed
        state.error = action.payload;
      })
  },
});

export const { incrementQuantity, decrementQuantity, setQuantity ,paymentLink} = cartSlice.actions;
export default cartSlice.reducer;


