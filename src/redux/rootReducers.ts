import { combineReducers } from "@reduxjs/toolkit";
import AuthReducer from "./slices/AuthSlice";
import UserReducer from "./slices/UserSlice";
import CartReducer from "./slices/CartSlice";


const rootReducer = combineReducers({
    auth: AuthReducer,
    user: UserReducer,
    cart: CartReducer
})

export default rootReducer