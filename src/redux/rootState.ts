import { ProductState } from "@/types/product/ProductTypes";
import { AuthState } from "../types/user/AuthTypes";
import { UserState } from "../types/user/UserTypes";
import { CartState } from "@/types/cart/CartTypes";

export interface RootState {
    auth: AuthState
    user: UserState,
    product: ProductState,
    cart: CartState

}