'use client'

import { RootState } from "../store";

export const selectUserData = (state: RootState) => state.user.userData
export const selectUserInfo = (state: RootState) => state.user
