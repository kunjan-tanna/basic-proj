import axios from "axios";
require("dotenv").config();

const axiosInstance = axios.create({
   baseURL:
      process.env.API_URL || "https://immense-mesa-71524.herokuapp.com/api/",
});

export default axiosInstance;
