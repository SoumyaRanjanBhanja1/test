import axios from "axios";

const instance = axios.create({
  baseURL: "https://server-test-8stv.onrender.com/api/auth", // change in production
});

export default instance;
