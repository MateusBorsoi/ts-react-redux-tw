'use client'

import { Product, ProductState } from "@/types/product/ProductTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ProductState = {
  produtos: [],
};

const ProducSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts: (state, action: PayloadAction<Product[]>) => {
      state.produtos = action.payload;
    },
  },
});

export const { getProducts } = ProducSlice.actions;

export default ProducSlice.reducer;
