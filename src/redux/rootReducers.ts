"use client";

import { combineReducers } from "@reduxjs/toolkit";
import AuthReducer from "./slices/AuthSlice";
import UserReducer from "./slices/UserSlice";
import CartReducer from "./slices/CartSlice";
import ProductReducer from "./slices/ProductSlice";
import timerSlice from "./slices/timerSlice";
import DrawerSlice from "./slices/DrawerSlice";

const rootReducer = combineReducers({
  auth: AuthReducer,
  user: UserReducer,
  cart: CartReducer,
  product: ProductReducer,
  timer: timerSlice,
  drawer: DrawerSlice,
});

export default rootReducer;
