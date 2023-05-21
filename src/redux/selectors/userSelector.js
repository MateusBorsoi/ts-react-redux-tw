import { createSelector } from "@reduxjs/toolkit";
var getUsers = function (state) { return state.user.userData; };
export var getUsersData = createSelector(getUsers, function (usersData) { return usersData; });
