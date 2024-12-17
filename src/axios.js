import axios from "axios";

const api = axios.create({
  // Set your base URL here
  //**** for local development use https and for docker use http***
  //baseURL: "https://localhost:8000/api",
  // baseURL: "https://localhost:8000/api",
  baseURL: "http://44.202.128.16:8000/api",

  // baseURL: process.env.BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
