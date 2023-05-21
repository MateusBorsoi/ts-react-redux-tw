var _a;
import { createSlice } from "@reduxjs/toolkit";
import { USER } from "../action-types/action-types";
var initialState = {
    userData: null,
    loading: false,
    error: null,
};
var UserSlice = createSlice({
    name: USER.USER_DATA,
    initialState: initialState,
    reducers: {
        getUsersStart: function (state) {
            (state.loading = true), (state.error = null);
        },
        getUsersSuccess: function (state, action) {
            (state.loading = false), (state.userData = action.payload);
        },
        getUsersFailure: function (state, action) {
            (state.loading = false), (state.error = action.payload);
        },
    },
});
export var getUsersStart = (_a = UserSlice.actions, _a.getUsersStart), getUsersSuccess = _a.getUsersSuccess, getUsersFailure = _a.getUsersFailure;
export default UserSlice.reducer;
