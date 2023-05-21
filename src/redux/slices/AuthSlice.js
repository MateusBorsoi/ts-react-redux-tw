var _a;
import { createSlice } from "@reduxjs/toolkit";
import { AUTH } from "../action-types/action-types";
var initialState = {
    isLogged: false,
    logindata: null
};
var AuthSlice = createSlice({
    name: AUTH.USER_AUTH,
    initialState: initialState,
    reducers: {
        login: function (state, action) {
            state.isLogged = true;
            state.logindata = action.payload;
        },
        logout: function (state) {
            state.isLogged = false;
            state.logindata = null;
        }
    }
});
export var login = (_a = AuthSlice.actions, _a.login), logout = _a.logout;
export default AuthSlice.reducer;
