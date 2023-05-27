import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "../../types/user/userTypes";
import { USER } from "../action-types/action-types";

const initialState: UserState = {
  userData: null,
  loading: false,
  error: null,
};

const UserSlice = createSlice({
  name: USER.USER_DATA,
  initialState,
  reducers: {

    
    getUsersStart: (state) => {
      (state.loading = true), (state.error = null);
    },

    getUsersSuccess: (state, action: PayloadAction<User>) => {
      (state.loading = false), (state.userData = action.payload);
    },

    getUsersFailure: (state, action: PayloadAction<string>) => {
      (state.loading = false), (state.error = action.payload);
    },
  },


});

export const { getUsersStart, getUsersSuccess, getUsersFailure } =
  UserSlice.actions;

export default UserSlice.reducer;

