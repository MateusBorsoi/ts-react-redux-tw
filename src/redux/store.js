import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./slices/AuthSlice";
import UserReducer from "./slices/UserSlice";
export var store = configureStore({
    reducer: {
        auth: AuthReducer,
        user: UserReducer,
    },
});
