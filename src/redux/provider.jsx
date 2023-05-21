"use client";
import { store } from "./store";
import { Provider } from "react-redux";
export function Providers(_a) {
    var children = _a.children;
    return <Provider store={store}>{children}</Provider>;
}
