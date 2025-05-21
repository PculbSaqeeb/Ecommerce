import { configureStore } from '@reduxjs/toolkit';
import productReducer from "../redux/productSlice";
import wishlistReducer from '../redux/wishlistSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';
import cartReducer from '../redux/cartSlice';
import orderReducer from '../redux/orderSlice'
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import categoryReducer from '../redux/categorySlice';
import crousoleReducer from '../redux/carouselSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  product: productReducer,
  category:categoryReducer,
  cart:cartReducer,
  wishlist:wishlistReducer,
  order: orderReducer,
  crousole:crousoleReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);