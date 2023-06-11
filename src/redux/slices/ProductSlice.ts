import { Product, ProductState } from "@/types/product/ProductTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ProductState = {
    produtos: [],
    loading: false,
    error: null
}

const ProducSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {

    
    getProducIniciall: (state) => {
      (state.loading = true), (state.error = null);
    },

    getProducts: (state, action: PayloadAction<Product[]>) => {
      (state.loading = false), (state.produtos = action.payload);
    },

    getProductsFailuce: (state, action: PayloadAction<string>) => {
      (state.loading = false), (state.error = action.payload);
    },
  },


});

export const { getProducIniciall, getProducts, getProductsFailuce } =
ProducSlice.actions;

export default ProducSlice.reducer;

