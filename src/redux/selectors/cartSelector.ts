'use client'

import { RootState } from "../store";

export const selectCartItens = (state: RootState) => state.cart.itens
export const selectCartTotal = (state: RootState) => state.cart.total