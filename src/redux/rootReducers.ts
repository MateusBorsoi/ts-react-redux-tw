import { combineReducers } from "@reduxjs/toolkit";
import AuthReducer from "./slices/AuthSlice";
import UserReducer from "./slices/UserSlice";
import CartReducer from "./slices/CartSlice";
import ProductReducer from "./slices/ProductSlice";


const rootReducer = combineReducers({
    auth: AuthReducer,
    user: UserReducer,
    cart: CartReducer,
    product: ProductReducer

})

export default rootReducer