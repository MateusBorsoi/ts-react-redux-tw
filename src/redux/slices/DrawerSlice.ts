"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DrawerOptions, DrawerState } from "@/types/components/DrawerType";

const initialState: DrawerState = {
  drawer: {
    open: false,
    origem: "",
  },
};

const DrawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    drawer: (state, action: PayloadAction<DrawerOptions>) => {
      const { open, origem } = action.payload;
      state.drawer.open = open;
      state.drawer.origem = origem;
    },
  },
});

export const { drawer } = DrawerSlice.actions;
export default DrawerSlice.reducer;
