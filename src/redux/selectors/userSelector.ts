import { RootState } from "../rootState";
import { User } from "../../types/user/userTypes";
import { createSelector } from "@reduxjs/toolkit";

const getUsers = (state: RootState): User | null => state.user.userData;

export const getUsersData = createSelector(getUsers, (usersData) => usersData);
