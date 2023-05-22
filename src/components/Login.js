"use client"

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { login } from "../redux/slices/AuthSlice";
import { getAuthData } from "../redux/selectors/authSelector";
const Login = () => {
    const [email, setEmail] = useState("");
    const getAuth = useSelector(getAuthData);
    const dispatch = useDispatch();
    const handleLogin = () => {
        if (email) {
            const authData = { email: email };
            dispatch(login(authData));
        }
    };
    const handleChange = (event) => {
        setEmail(event.target.value);
    };
    // useEffect(() => {
    //   dispatch(getUsersData())
    // })
    return (_jsxs("div", { children: [_jsx("input", { className: "bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal", type: "email", placeholder: "Escreva algo", onChange: handleChange, value: email }), _jsx("button", { className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded", onClick: handleLogin, children: "Enviar" }), getAuth && getAuth.email] }));
};
export default Login;
