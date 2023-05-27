import axios from "axios";
var API = axios.create({
    baseURL: 'http://localhost:5000',
});
export default API;
