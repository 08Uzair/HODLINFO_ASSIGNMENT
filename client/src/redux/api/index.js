import axios from "axios";

const API = axios.create({
  baseURL: "https://hodlinfo-server.onrender.com/api/v1",
});

export const fetchData = () => API.get("/data/");
