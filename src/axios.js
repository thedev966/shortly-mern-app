import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URI,
  withCredentials: true,
  credentials: "include",
});

export default instance;
