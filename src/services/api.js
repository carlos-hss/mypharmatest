import axios from "axios";

const api = axios.create({
    baseURL: "https://dbmypharmatest.herokuapp.com",
});

export default api;
