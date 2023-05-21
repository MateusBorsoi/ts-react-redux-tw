import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthData, AuthState } from "../../types/user/authTypes";
import { AUTH } from "../action-types/action-types";


const initialState: AuthState  = {
    isLogged: false,
    logindata: null
}

const AuthSlice = createSlice ({
    name: AUTH.USER_AUTH,
    initialState,
        reducers: {
            login: (state, action: PayloadAction<AuthData>) => {
                state.isLogged = true;
                state.logindata = action.payload;
            },
            logout: (state) => {
                state.isLogged = false;
                state.logindata = null;
            }

        }
})

export const {login , logout} = AuthSlice.actions
export default AuthSlice.reducer