"use client"

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { login, logout } from "../redux/slices/AuthSlice";
import { getAuthData } from "../redux/selectors/authSelector";


const Login = () => {
  const [email, setEmail] = useState("");
  const getAuth = useSelector(getAuthData);


  const dispatch = useDispatch();

  const handleLogin = () => {
    if (email) {
      const authData: any = { email: email };
      dispatch(login(authData));
    }
  };

  const handleChange = (event: any) => {
    setEmail(event.target.value);
  };


  return (
    <div>
      <input
        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        type="email"
        placeholder="Escreva algo"
        onChange={handleChange}
        value={email}
      ></input>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleLogin}
      >
        Enviar
      </button>
      {getAuth && getAuth.email}
    </div>
  );
};

export default Login;
