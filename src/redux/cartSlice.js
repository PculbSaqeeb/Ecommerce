// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import {
//   addToCartEndPoint,
//   getCartItems,
//   promoCode,
//   quantityDecrementEndPoint,
//   removeToCartEndPoint,
// } from "../services/cartServices";
// import { toast } from "react-toastify";
// import { paymentEndpoint } from "../services/orderServices";

// export const getAllCartItems = createAsyncThunk(
//   "cart/getCartItems",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await getCartItems();
//       console.log(response.data);
      
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error?.response?.data?.message || "Failed to fetch cart items");
//     }
//   }
// );


// export const addToCart = createAsyncThunk(
//   "cart/addToCart",
//   async ({ productId, productColorId, productSizeId }, { rejectWithValue }) => {
//     console.log( productColorId, productSizeId);

//     try {
//       const response = await addToCartEndPoint({
//         productId,
//         productColorId,
//         productSizeId,
//       });

//       toast.success(response.data.message);
//       return response.data;
//     } catch (error) {
//       toast.error(error?.response?.data?.message);
//       return rejectWithValue(error?.response?.data?.message || "Add to cart failed");
//     }
//   }
// );


// export const quantityDecrement = createAsyncThunk(
//   "cart/quantityDecrement",
//   async (productId, { rejectWithValue }) => {
//     try {
//       const response = await quantityDecrementEndPoint(productId);
//       return response.data;
//     } catch (error) {
//       toast.error(error?.response?.data?.message);
//       return rejectWithValue(error?.response?.data?.message || "Decrement failed");
//     }
//   }
// );

// export const removeToCart = createAsyncThunk(
//   "cart/removeToCart",
//   async (productId, { rejectWithValue }) => {
//     try {
//       const response = await removeToCartEndPoint(productId);
//       toast.success(response.data.message);
//       return productId;
//     } catch (error) {
//       toast.error(error?.response?.data?.message);
//       return rejectWithValue(error?.response?.data?.message || "Remove failed");
//     }
//   }
// );

// export const payment = createAsyncThunk(
//   "cart/payment",
//   async (data, { rejectWithValue }) => {
//     try {
//       const response = await paymentEndpoint(data);
//       window.location.href = response.data.paymentLink;
//       return response.data.paymentLink;
//     } catch (error) {
//       toast.error(error?.response?.data?.message);
//       return rejectWithValue(error?.response?.data?.message || "Remove failed");
//     }
//   }
// );


// export const applyPromoCode = createAsyncThunk(
//   "cart/applyPromoCode",
//   async (couponCode, { rejectWithValue }) => {
//     try {
//       const res = await promoCode(couponCode);
//       return {
//         discount: res.data.discount,
//         coupon: couponCode,
//       };
//     } catch (error) {
//       return rejectWithValue(error?.response?.data?.message || "Invalid Promo code");
//     }
//   }
// );

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     cart: [],
//     totalPrice: 0,
//     totalQuantity: 0,
//     breakdown: {},
//     loading: false,
//     error: null,
//     paymentLink: null,
//     discount: 0,
//     coupon: null,
//   },
//   reducers: {
    

//     setCoupon: (state, action) => {
//       state.selectedCoupon = action.payload;
//     },

//     setDiscount: (state, action) => {
//       state.discount = action.payload;
//     },

//     removeCouponCode: (state) => {
//       state.coupon = null;
//       state.discount = 0;
//     },

//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(applyPromoCode.fulfilled, (state, action) => {
//         state.discount = action.payload.discount;
//         state.coupon = action.payload.coupon;
//       })

//       .addCase(getAllCartItems.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })

//       .addCase(getAllCartItems.fulfilled, (state, action) => {
//         const { cartDetails, breakdown } = action.payload || {};
//         state.loading = false;
//         state.cart = cartDetails?.items?.map((item) => ({
//           ...item,
//           quantity: item.quantity || 1,
//         })) || [];
//         state.totalPrice = cartDetails?.totalPrice || 0;
//         state.totalQuantity = cartDetails?.totalQuantity || 0;
//         state.breakdown = breakdown || {};
//       })

//       .addCase(getAllCartItems.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       .addCase(addToCart.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })

//       .addCase(addToCart.fulfilled, (state, action) => {
//         state.loading = false;
//         const { filteredCart, breakdown } = action.payload || {};

//         if (filteredCart && filteredCart.items) {
//           state.cart = filteredCart.items.map((item) => ({
//             ...item,
//             quantity: item.quantity || 1,
//           }));
//           state.totalPrice = filteredCart.totalPrice || 0;
//           state.totalQuantity = filteredCart.totalQuantity || 0;
          
//           state.breakdown = breakdown || {};
//         } else {
//           state.cart = [];
//           state.totalPrice = 0;
//           state.totalQuantity = 0;
//           state.breakdown = {};
//         }
//       })

//       .addCase(addToCart.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       .addCase(quantityDecrement.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })

//       .addCase(quantityDecrement.fulfilled, (state, action) => {
//         state.loading = false;
//         const { cart } = action.payload;
//         const { cartDetails, breakdown } = action.payload;

//         state.cart = cartDetails.items.map((item) => ({
//           ...item,
//           quantity: item.quantity || 1,
//         }));
//         state.totalPrice = cartDetails.breakdown.totalPrice;
//         state.totalQuantity = cartDetails.breakdown.totalQuantity;
//         state.breakdown = cartDetails.breakdown || {};
//       })

//       .addCase(quantityDecrement.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       .addCase(removeToCart.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })

//       .addCase(removeToCart.fulfilled, (state, action) => {
//         state.loading = false;
//         const removedId = action.meta.arg;
//         state.cart = state.cart.filter((item) => item.productId !== removedId);


//         if (state.cart.length === 0) {
//           state.totalPrice = 0;
//           state.totalQuantity = 0;
//           state.breakdown = {};
//         } else {
//           state.totalPrice = state.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
//           state.totalQuantity = state.cart.reduce((acc, item) => acc + item.quantity, 0);
//         }
//       })

//       .addCase(removeToCart.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       .addCase(payment.pending, (state) => {
//         state.loading = true;
//       })

//       .addCase(payment.fulfilled, (state, action) => {
//         state.loading = false;
//         state.paymentLink = action.payload;
//       })

//       .addCase(payment.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//   },
// });

// export const { setCoupon, setDiscount, paymentLink, removeCouponCode } = cartSlice.actions;
// export default cartSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addToCartEndPoint,
  getCartItems,
  promoCode,
  quantityDecrementEndPoint,
  removeToCartEndPoint,
} from "../services/cartServices";
import { toast } from "react-toastify";
import { paymentEndpoint } from "../services/orderServices";

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
  async ({ productId, productColorId, productSizeId }, { rejectWithValue }) => {
    try {
      const response = await addToCartEndPoint({ productId, productColorId, productSizeId });
      console.log(response.data);
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
      toast.success(response.data.message)
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
      toast.error(response.data.message);
      return productId;
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
      window.location.href = response.data.paymentLink;
      return response.data.paymentLink;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data?.message || "Remove failed");
    }
  }
);


export const applyPromoCode = createAsyncThunk(
  "cart/applyPromoCode",
  async (couponCode, { rejectWithValue }) => {
    try {
      const res = await promoCode(couponCode);
      return {
        discount: res.data.discount,
        coupon: couponCode,
      };
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || "Invalid Promo code");
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
    paymentLink: null,
    discount: 0,
    coupon: null,
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

    setCoupon: (state, action) => {
      state.selectedCoupon = action.payload;
    },

    setDiscount: (state, action) => {
      state.discount = action.payload;
    },

    removeCouponCode: (state) => {
      state.coupon = null;
      state.discount = 0;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(applyPromoCode.fulfilled, (state, action) => {
        state.discount = action.payload.discount;
        state.coupon = action.payload.coupon;
      })

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
        // const { cart } = action.payload;
        const { cartDetails } = action.payload;

        state.cart = cartDetails.items.map((item) => ({
          ...item,
          quantity: item.quantity || 1,
        }));
        state.totalPrice = cartDetails.breakdown.totalPrice;
        state.totalQuantity = cartDetails.breakdown.totalQuantity;
        state.breakdown = cartDetails.breakdown || {};

        if (state.cart.length === 0) {
    state.coupon = null;
    state.discount = 0;
  }
      })

      .addCase(quantityDecrement.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(removeToCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(removeToCart.fulfilled, (state, action) => {
        state.loading = false;
        const removedId = action.meta.arg;
        state.cart = state.cart.filter((item) => item.productId !== removedId);


        if (state.cart.length === 0) {
          state.totalPrice = 0;
          state.totalQuantity = 0;
          state.breakdown = {};
          state.coupon=null;
          state.discount=0;
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
        state.loading = true;
      })

      .addCase(payment.fulfilled, (state, action) => {
        state.loading = false;
        state.paymentLink = action.payload;
      })

      .addCase(payment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export const { setCoupon, setDiscount , removeCouponCode } = cartSlice.actions;
export default cartSlice.reducer;


// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import {
//   addToCartEndPoint,
//   getCartItems,
//   promoCode,
//   quantityDecrementEndPoint,
//   removeToCartEndPoint,
// } from "../services/cartServices";
// import { paymentEndpoint } from "../services/orderServices";
// import { toast } from "react-toastify";

// // Get Cart Items
// export const getAllCartItems = createAsyncThunk(
//   "cart/getAllCartItems",
//   async (_, { rejectWithValue }) => {
//     try {
//       const res = await getCartItems();
//       return res.data;
//     } catch (err) {
//       return rejectWithValue(err?.response?.data?.message || "Failed to fetch cart items");
//     }
//   }
// );

// // Add to Cart
// export const addToCart = createAsyncThunk(
//   "cart/addToCart",
//   async ({ productId, productColorId, productSizeId }, { rejectWithValue }) => {
//     try {
//       if (!productColorId || !productSizeId) {
//         toast.error("Please select both color and size");
//         return rejectWithValue("Missing color or size");
//       }
//       const res = await addToCartEndPoint({ productId, productColorId, productSizeId });
//       toast.success(res.data.message);
//       return res.data.cartDetails;
//     } catch (err) {
//       toast.error(err?.response?.data?.message || "Add to cart failed");
//       return rejectWithValue(err?.response?.data?.message || "Add to cart failed");
//     }
//   }
// );

// // Decrement Quantity
// export const quantityDecrement = createAsyncThunk(
//   "cart/quantityDecrement",
//   async (productId, { rejectWithValue }) => {
//     try {
//       const res = await quantityDecrementEndPoint(productId);
//       return res.data;
//     } catch (err) {
//       toast.error(err?.response?.data?.message || "Decrement failed");
//       return rejectWithValue(err?.response?.data?.message || "Decrement failed");
//     }
//   }
// );

// // Remove From Cart
// export const removeToCart = createAsyncThunk(
//   "cart/removeToCart",
//   async (productId, { rejectWithValue }) => {
//     try {
//       const res = await removeToCartEndPoint(productId);
//       toast.success(res.data.message);
//       return { productId, cartDetails: res.data.cartDetails };
//     } catch (err) {
//       toast.error(err?.response?.data?.message || "Remove failed");
//       return rejectWithValue(err?.response?.data?.message || "Remove failed");
//     }
//   }
// );

// // Payment
// export const payment = createAsyncThunk(
//   "cart/payment",
//   async (data, { rejectWithValue }) => {
//     try {
//       const res = await paymentEndpoint(data);
//       window.location.href = res.data.paymentLink;
//       return res.data.paymentLink;
//     } catch (err) {
//       toast.error(err?.response?.data?.message || "Payment failed");
//       return rejectWithValue(err?.response?.data?.message || "Payment failed");
//     }
//   }
// );

// // Apply Promo Code
// export const applyPromoCode = createAsyncThunk(
//   "cart/applyPromoCode",
//   async (couponCode, { rejectWithValue }) => {
//     try {
//       const res = await promoCode(couponCode);
//       return { discount: res.data.discount, coupon: couponCode };
//     } catch (err) {
//       return rejectWithValue(err?.response?.data?.message || "Invalid Promo Code");
//     }
//   }
// );

// // Slice
// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     cart: [],
//     totalPrice: 0,
//     totalQuantity: 0,
//     breakdown: {},
//     loading: false,
//     error: null,
//     paymentLink: null,
//     discount: 0,
//     coupon: null,
//   },
//   reducers: {
//     setDiscount: (state, action) => {
//       state.discount = action.payload;
//     },
//     removeCouponCode: (state) => {
//       state.coupon = null;
//       state.discount = 0;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getAllCartItems.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })

//       .addCase(getAllCartItems.fulfilled, (state, action) => {
//         // const { cartDetails, breakdown } = action.payload;
//         // state.cart = cartDetails?.items?.map((item) => ({
//         //   ...item,
//         //   quantity: item.quantity || 1,
//         // })) || [];
//         // state.totalPrice = cartDetails?.totalPrice || 0;
//         // state.totalQuantity = cartDetails?.totalQuantity || 0;
//         // state.breakdown = breakdown || {};
//         // state.loading = false;
//         state.cart=action.payload
//       })

//       .addCase(getAllCartItems.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       .addCase(addToCart.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })

//       .addCase(addToCart.fulfilled, (state, action) => {
//         const cartDetails = action.payload;
//         state.cart = cartDetails?.items?.map((item) => ({
//           ...item,
//           quantity: item.quantity || 1,
//         })) || [];
//         state.totalPrice = cartDetails?.totalPrice || 0;
//         state.totalQuantity = cartDetails?.totalQuantity || 0;
//         state.breakdown = cartDetails?.breakdown || {};
//         state.loading = false;
//       })

//       .addCase(addToCart.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       .addCase(quantityDecrement.fulfilled, (state, action) => {
//         const { cartDetails } = action.payload;
//         state.cart = cartDetails.items.map((item) => ({
//           ...item,
//           quantity: item.quantity || 1,
//         }));
//         state.totalPrice = cartDetails.totalPrice;
//         state.totalQuantity = cartDetails.totalQuantity;
//         state.breakdown = cartDetails.breakdown || {};
//       })

//       .addCase(removeToCart.fulfilled, (state, action) => {
//         const { productId, cartDetails } = action.payload;
//         state.cart = cartDetails?.items?.map((item) => ({
//           ...item,
//           quantity: item.quantity || 1,
//         })) || [];
//         state.totalPrice = cartDetails?.totalPrice || 0;
//         state.totalQuantity = cartDetails?.totalQuantity || 0;
//         state.breakdown = cartDetails?.breakdown || {};
//       })

//       .addCase(payment.fulfilled, (state, action) => {
//         state.paymentLink = action.payload;
//       })

//       .addCase(applyPromoCode.fulfilled, (state, action) => {
//         state.discount = action.payload.discount;
//         state.coupon = action.payload.coupon;
//       })

//       // .addMatcher(
//       //   (action) => action.type.startsWith("cart/") && action.type.endsWith("/rejected"),
//       //   (state, action) => {
//       //     state.loading = false;
//       //     state.error = action.payload;
//       //   }
//       // );
//   },
// });

// export const { setDiscount, removeCouponCode } = cartSlice.actions;
// export default cartSlice.reducer;



// incrementQuantity: (state, action) => {
//       const item = state.cart.filteredCart.items.find((i) => i.productId === action.payload);
//       if (item) {
//         item.quantity += 1;
//       }
//     },
    
//     decrementQuantity: (state, action) => {
//       const item = state.cart.find((i) => i.productId === action.payload);
//       if (item && item.quantity > 1) {
//         item.quantity -= 1;
//       }
//     },

//     quantityDecrement: (state, action) => {
//       const itemIndex = state.cart.findIndex(
//         (item) => item.productId === action.payload
//       );

//       if (itemIndex !== -1) {
//         if (state.cart[itemIndex].quantity > 1) {
//           state.cart[itemIndex].quantity -= 1;
//         } else {
//           state.cart.splice(itemIndex, 1);
//         }
//       }
//     },

//     setQuantity: (state, action) => {
//       const { productId, quantity } = action.payload;
//       const item = state.cart.filteredCart.items.find((i) => i.productId === productId);
//       if (item) {
//         item.quantity = quantity;
//       }
//     },