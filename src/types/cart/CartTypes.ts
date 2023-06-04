import { Product } from "../product/ProductTypes";

export interface CartItem {
    produto: Product,
    quantidade: number,
}

export interface Cart {
    itens: CartItem[],
    total: number
}

export interface CartState {
    itens: CartItem[],
    total: number
}