"use client";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { login } from "../redux/slices/AuthSlice";
import { getAuthData } from "../redux/selectors/authSelector";
var Login = function () {
    var _a = useState(""), email = _a[0], setEmail = _a[1];
    var getAuth = useSelector(getAuthData);
    var dispatch = useDispatch();
    var handleLogin = function () {
        if (email) {
            var authData = { email: email };
            dispatch(login(authData));
        }
    };
    var handleChange = function (event) {
        setEmail(event.target.value);
    };
    return (<div>
      <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="email" placeholder="Escreva algo" onChange={handleChange} value={email}></input>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleLogin}>
        Enviar
      </button>
      {getAuth && getAuth.email}
    </div>);
};
export default Login;
