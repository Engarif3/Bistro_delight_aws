import axios from "axios";

const api = axios.create({
  //**** for local development use https and for docker use http***
  //baseURL: "https://localhost:8000/api",
  // baseURL: "https://localhost:8000/api",
  // baseURL: "http://44.202.128.16:8000/api",
  baseURL: "http://3.87.186.39/api",

  // baseURL: process.env.BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
