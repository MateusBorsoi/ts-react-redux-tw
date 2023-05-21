import { createSelector } from "@reduxjs/toolkit";
var getUserAuth = function (state) { return state.auth.logindata; };
export var getAuthData = createSelector(getUserAuth, function (authData) { return authData; });
