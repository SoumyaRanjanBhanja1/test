import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000/api/auth", // change in production
});

export default instance;
