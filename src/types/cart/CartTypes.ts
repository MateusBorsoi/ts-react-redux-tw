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
    carrinho: Cart | null,
    loading: boolean,
    erro: string | null
}