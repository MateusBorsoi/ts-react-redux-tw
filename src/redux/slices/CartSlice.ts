import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CART_DATA } from "../action-types/CartActionTypes";
import { CartItem, CartState } from "@/types/cart/CartTypes";

const initialState: CartState = {
    itens: [],
    total: 0,
}

const cartSlice = createSlice({
    name: CART_DATA.CART,
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const newItem = action.payload
            const existingItem = state.itens.find(item => item.produto.id === newItem.produto.id)

            if (existingItem) {
                existingItem.quantidade += newItem.quantidade
            } else {
                state.itens.push(newItem)
            }

            state.total += newItem.produto.preco * newItem.quantidade

        },

        removeItem: (state, action: PayloadAction<number>) => {
            const itemID = action.payload
            const itemIndex = state.itens.findIndex(item => item.produto.id === itemID)

            if (itemIndex !==-1) {
                const item = state.itens[itemIndex]
                state.total -= item.produto.preco * item.quantidade
                state.itens.splice(itemIndex, 1)
            }
        },

        clearCart: state => {
            state.itens = [],
            state.total = 0
        }
    }

})

export const {addItem, removeItem, clearCart} = cartSlice.actions
export default cartSlice.reducer