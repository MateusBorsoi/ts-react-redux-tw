import axios from "axios";

const API = axios.create({
    baseURL: 'http://localhost:5000/',
    headers: { 
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
})

export default API


