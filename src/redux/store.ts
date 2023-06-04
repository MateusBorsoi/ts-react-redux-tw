import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./slices/AuthSlice";
import UserReducer from "./slices/UserSlice";
import CartReducer from "./slices/CartSlice";


export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    user: UserReducer,
    cart: CartReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
