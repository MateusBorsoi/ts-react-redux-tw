import { RootState } from "../rootState";
import { AuthData } from "../../types/user/AuthTypes";
import { createSelector } from "@reduxjs/toolkit";

const getUserAuth = (state: RootState): AuthData | null => state.auth.logindata

export const getAuthData = createSelector(getUserAuth, (authData) => authData);

